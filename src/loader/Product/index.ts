import React, { useState } from "react";
import { useFetch } from "../../hooks/Fetch";
import { useParams } from "react-router-dom";

export const ProductLoader = () => {
  const { data, error, loading } = useFetch(
    "https://sheetdb.io/api/v1/7kytl3y2afe0p"
  );
  const { productID } = useParams();

  if (loading || error) {
    return [];
  }

  if (data) {
    return data.find(
      (item) => item["Random Code to link the product"] === productID
    );
  }
  return [];
};
