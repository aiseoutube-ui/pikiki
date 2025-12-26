
import React from 'react';

const SEO: React.FC = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "name": "CusiCusa",
        "url": "https://cusicusa.com",
        "description": "Fusionando cocina y tecnología"
      },
      {
        "@type": "Recipe",
        "name": "Risotto de Champiñones Tech",
        "author": { "@type": "Person", "name": "CusiCusa Team" },
        "datePublished": "2024-05-20",
        "description": "Una receta optimizada para el rendimiento.",
        "cookTime": "PT30M",
        "recipeCategory": "Main Course",
        "recipeCuisine": "International"
      },
      {
        "@type": "SoftwareApplication",
        "name": "CusiCalc",
        "operatingSystem": "iOS, Android",
        "applicationCategory": "KitchenUtility"
      }
    ]
  };

  return (
    <script type="application/ld+json">
      {JSON.stringify(schemaData)}
    </script>
  );
};

export default SEO;
