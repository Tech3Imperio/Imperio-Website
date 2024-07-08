import { useEffect, useState } from "react";
import { ProductProps } from "../../types";

// Custom hook that fetches product data from a given link
export const useProduct = (link: string) => {
  // State to hold the fetched data
  const [data, setData] = useState<ProductProps[]>([]);
  // State to hold any error messages
  const [error, setError] = useState<string>("");
  // State to track the loading status
  const [loading, setLoading] = useState<boolean>(true);

  // useEffect to fetch data when the component mounts or the link changes
  useEffect(() => {
    // Set loading to true when the fetch starts
    setLoading(true);
    // Fetch data from the provided link
    fetch(link)
      .then((response) => {
        // Check if the response is not ok (status is not in the range 200-299)
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        // Parse the response as JSON
        return response.json();
      })
      .then((json) => {
        // Set the fetched data to the state
        setData(json);
        // Set loading to false after data is fetched
        setLoading(false);
      })
      .catch((err) => {
        // Set the error message to the state
        setError(err.message);
        // Set loading to false if there's an error
        setLoading(false);
      });
  }, [link]); // Dependency array to refetch data when link changes

  // Return the state values
  return { data, error, loading };
};
