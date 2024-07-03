import { useEffect, useState } from "react";
import { ProductProps } from "../../types";

export const useProduct = (link: string) => {
  const [data, setData] = useState<ProductProps[]>([]);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true);
    fetch(link)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((json) => {
        setData(json);
        setLoading(false); // Set loading to false after data is fetched
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false); // Set loading to false if there's an error
      });
  }, [link]);

  return { data, error, loading };
};
