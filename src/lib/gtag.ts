// lib/gtag.ts
export const GA_MEASUREMENT_ID = 'G-86KYLWSQVC';

export const pageview = (url: string) => {
  if (typeof window.gtag !== 'function') return;
  window.gtag('config', GA_MEASUREMENT_ID, {
    page_path: url,
  });
};
