import React, { useState } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { fetchAllCharactersPaginated } from "../api";
import CharacterCard from "../components/CharacterCard";

export default function PaginatedQuery() {
  const [page, setPage] = useState(1);

  const { data, isLoading, isFetching, isError, ...otherProps } = useQuery({
    queryKey: ["fetchAllCharactersPaginated", page],
    queryFn: () => fetchAllCharactersPaginated(page),
    keepPreviousData: true,
  });

  if (isLoading) return <p>Is loading......</p>;
  if (isError) return <p>Is error......</p>;

  return (
    <div>
      <h3>Paginated Query example</h3>
      <Link to={"/"}>Go Back</Link>
      <div style={{ margin: "10px 0px" }}>Current page: {page}</div>
      <div style={{ margin: "10px 0px" }}>
        <button
          onClick={() => setPage((prev) => prev - 1)}
          disabled={page === 1}
        >
          Prev page
        </button>
        <button onClick={() => setPage((prev) => prev + 1)}>Next page</button>
      </div>
      {isFetching && <h3>Fetching data</h3>}
      <pre style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}>
        {data?.results?.map((character: any, index: number) => (
          <CharacterCard character={character} key={index} />
        ))}
      </pre>
    </div>
  );
}
