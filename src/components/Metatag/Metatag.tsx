// src/components/Metadata.tsx
import React, { useEffect } from "react";

interface MetadataProps {
  title: string;
  description: string;
  keywords: string;
}

const Metadata: React.FC<MetadataProps> = ({
  title,
  description,
  keywords,
}) => {
  useEffect(() => {
    document.title = title;

    const metaDescription = document.createElement("meta");
    metaDescription.name = "description";
    metaDescription.content = description;
    document.head.appendChild(metaDescription);

    const metaKeywords = document.createElement("meta");
    metaKeywords.name = "keywords";
    metaKeywords.content = keywords;
    document.head.appendChild(metaKeywords);

    return () => {
      document.head.removeChild(metaDescription);
      document.head.removeChild(metaKeywords);
    };
  }, [title, description, keywords]);

  return null;
};

export default Metadata;
