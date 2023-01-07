import React from "react";
import Home from "./Home";
import { useParams } from "react-router-dom";

export default function Search() {
  const { searchTerm } = useParams();
  return (
    <div>
      <Home searchTerm={searchTerm} />
    </div>
  );
}
