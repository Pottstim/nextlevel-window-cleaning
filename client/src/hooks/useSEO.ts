// useSEO.ts — Next Level Window Cleaning
// Custom hook for dynamic per-route title + meta description injection.
// Ensures each page has unique, crawlable metadata even in a client-side SPA.
import { useEffect } from "react";

const useSEO = (title: string, description: string) => {
  useEffect(() => {
    // 1. Update document title
    document.title = title;

    // 2. Update or create the meta description tag
    let metaDesc = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", description);
    } else {
      metaDesc = document.createElement("meta");
      metaDesc.name = "description";
      metaDesc.content = description;
      document.head.appendChild(metaDesc);
    }

    // 3. Update Open Graph title + description for social sharing
    const ogTitle = document.querySelector<HTMLMetaElement>('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", title);

    const ogDesc = document.querySelector<HTMLMetaElement>('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute("content", description);
  }, [title, description]);
};

export default useSEO;
