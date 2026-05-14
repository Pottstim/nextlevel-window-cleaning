import React from "react";

export function SchemaMarkup({ schema }: { schema: any }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ServiceSchema({ name, description, url }: { name: string; description: string; url: string }) {
  const schema = {
    "@context": "https://schema.org/",
    "@type": "Service",
    "serviceType": name,
    "description": description,
    "provider": {
      "@type": "LocalBusiness",
      "name": "Next Level Window Cleaning",
      "telephone": "+13234851020",
      "url": "https://nextlevelwindowsnc.com"
    },
    "areaServed": [
      { "@type": "City", "name": "Sanford" },
      { "@type": "City", "name": "Cameron" },
      { "@type": "City", "name": "Spring Lake" },
      { "@type": "City", "name": "Broadway" }
    ],
    "url": `https://nextlevelwindowsnc.com${url}`
  };
  return <SchemaMarkup schema={schema} />;
}

export function BreadcrumbSchema({ items }: { items: { name: string; url: string }[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `https://nextlevelwindowsnc.com${item.url}`
    }))
  };
  return <SchemaMarkup schema={schema} />;
}
