import React from 'react';

// Every image/video placed under src/content is picked up automatically.
// Subfolders become sections, e.g. src/content/achievements/medal.jpg → "Achievements".
const mediaFiles = import.meta.glob<string>(
  '../content/**/*.{jpg,JPG,jpeg,JPEG,png,PNG,webp,WEBP,gif,GIF,mp4,MP4,webm,WEBM,mov,MOV}',
  { eager: true, query: '?url', import: 'default' }
);

const VIDEO_EXTENSIONS = ['mp4', 'webm', 'mov'];

interface MediaItem {
  url: string;
  name: string;
  isVideo: boolean;
}

const toTitle = (folder: string) =>
  folder.replace(/[-_]+/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());

const groupBySection = () => {
  const sections = new Map<string, MediaItem[]>();
  Object.entries(mediaFiles)
    .sort(([a], [b]) => a.localeCompare(b))
    .forEach(([path, url]) => {
      const parts = path.replace('../content/', '').split('/');
      const fileName = parts[parts.length - 1];
      const section = parts.length > 1 ? toTitle(parts[0]) : '';
      const extension = fileName.split('.').pop()!.toLowerCase();
      const item = {
        url,
        name: fileName.replace(/\.[^.]+$/, '').replace(/[-_]+/g, ' '),
        isVideo: VIDEO_EXTENSIONS.includes(extension),
      };
      sections.set(section, [...(sections.get(section) ?? []), item]);
    });
  return sections;
};

const Gallery: React.FC = () => {
  const sections = groupBySection();

  return (
    <section className="container" style={{ padding: '2rem 20px' }}>
      <h2>Gallery</h2>
      <p className="text-lead">
        Achievements, events, and everyday moments from our students and campuses.
      </p>

      {sections.size === 0 && <p className="text-lead">Photos and videos are coming soon.</p>}

      {[...sections].map(([section, items]) => (
        <div key={section || 'general'} className="gallery-section">
          {section && <h3>{section}</h3>}
          <div className="gallery-grid">
            {items.map((item) => (
              <figure key={item.url} className="gallery-item">
                {item.isVideo ? (
                  <video src={item.url} controls preload="metadata" />
                ) : (
                  <a href={item.url} target="_blank" rel="noreferrer">
                    <img src={item.url} alt={item.name} loading="lazy" />
                  </a>
                )}
              </figure>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Gallery;
