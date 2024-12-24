import { useState, useEffect } from "react";

interface BlockData {
  [key: string]: string;
}

export function Google() {
  const [data, setData] = useState<BlockData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://script.google.com/macros/s/AKfycbwE-1Stl8t8_XrB5MuRPQ1hROKpo3mYynDPnI1vNX6U5vakITchmA6nfmzQt8sYpqFIjw/exec"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        setError("Failed to fetch data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
}
