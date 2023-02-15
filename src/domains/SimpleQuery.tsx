import React from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { fetchAllCharacters } from "../api";
import CharacterCard from "../components/CharacterCard";

export default function SimpleQuery() {
  const { data, isLoading, isError } = useQuery(
    "fetchAllCharacters",
    fetchAllCharacters
  );

  if (isLoading) return <p>Is Loading.....</p>;

  if (isError) return <p>Is Error.....</p>;

  return (
    <div>
      <h3>Simple Query example</h3>
      <Link to={"/"}>Go Back</Link>
      <pre>
        {data?.results?.map((character: any, index: number) => (
          <CharacterCard character={character} key={index} />
        ))}
      </pre>
    </div>
  );
}
