import { readdirSync } from 'node:fs'
import { resolve } from 'node:path'
import react from '@vitejs/plugin-react'
import { defineConfig, type Plugin } from 'vite'

const CAROUSEL_DIR = resolve(import.meta.dirname, 'public/school_carousel')
const VIRTUAL_ID = 'virtual:carousel-images'
const RESOLVED_ID = '\0' + VIRTUAL_ID

// Exposes the image file names in public/school_carousel as `virtual:carousel-images`,
// so new carousel slides only need to be dropped into that folder.
function carouselImages(): Plugin {
  const listImages = () =>
    readdirSync(CAROUSEL_DIR)
      .filter((file) => /\.(jpe?g|png|webp|gif|avif)$/i.test(file))
      .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))

  return {
    name: 'carousel-images',
    resolveId(id) {
      if (id === VIRTUAL_ID) return RESOLVED_ID
    },
    load(id) {
      if (id === RESOLVED_ID) return `export default ${JSON.stringify(listImages())}`
    },
    configureServer(server) {
      const reload = (file: string) => {
        if (!file.startsWith(CAROUSEL_DIR)) return
        const mod = server.moduleGraph.getModuleById(RESOLVED_ID)
        if (mod) server.moduleGraph.invalidateModule(mod)
        server.ws.send({ type: 'full-reload' })
      }
      server.watcher.on('add', reload)
      server.watcher.on('unlink', reload)
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), carouselImages()],
  base: '/GNRSCHOOL/',
})
