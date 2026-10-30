// Maps each page (tab id) to its URL path so the address bar reflects the page.
export const ROUTES: Record<string, string> = {
  home: '/',
  aboutus: '/about-us',
  admissions: '/admissions',
  campus: '/campus',
  contactus: '/contact-us',
  gallery: '/gallery',
  privacy: '/privacy-policy',
  terms: '/terms-and-conditions',
};

export const tabFromPath = (pathname: string): string => {
  const path = pathname.replace(/\/+$/, '') || '/';
  return Object.keys(ROUTES).find((tab) => ROUTES[tab] === path) ?? 'home';
};
