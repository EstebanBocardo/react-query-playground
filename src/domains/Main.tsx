import React from "react";
import { Link } from "react-router-dom";

export default function Main() {
  return (
    <ul>
      <li>
        <Link to={"simpleQuery"}>Simple Query</Link>
      </li>
      <li>
        <Link to={"paginatedQuery"}>Paginated Query</Link>
      </li>
      <li>
        <Link to={"infiniteQuery"}>Infinite Query</Link>
      </li>
    </ul>
  );
}
