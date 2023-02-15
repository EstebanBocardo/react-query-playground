import React from "react";
import { useInfiniteQuery } from "react-query";
import { Link } from "react-router-dom";
import { fetchAllCharactersInfiniteScroll } from "../api";
import CharacterCard from "../components/CharacterCard";

export default function InfiniteQuery() {
  const {
    data,
    isLoading,
    isError,
    isFetching,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
  } = useInfiniteQuery(
    "fetchAllCharactersInfiniteQuery",
    fetchAllCharactersInfiniteScroll,
    {
      getNextPageParam: (lastPage, pages) => {
        const params = new URL(lastPage.info.next).searchParams;
        return params.get("page");
      },
    }
  );

  if (isLoading) return <p>Is Loading.....</p>;

  if (isError) return <p>Is Error.....</p>;

  return (
    <div>
      <h3>Infinite Query example</h3>
      <Link to={"/"}>Go Back</Link>
      <div style={{ margin: "20px 0px" }}>
        <button
          onClick={() => {
            fetchNextPage();
          }}
          disabled={!hasNextPage || isFetchingNextPage}
        >
          {isFetchingNextPage
            ? "Loading more..."
            : hasNextPage
            ? "Load More"
            : "Nothing more to load"}
        </button>
      </div>
      {isFetching && <h3>Fetching data</h3>}
      <pre style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}>
        {data?.pages.map((group, i) => (
          <React.Fragment key={i}>
            {group?.results.map((character: any, i: number) => (
              <CharacterCard character={character} key={i} />
            ))}
          </React.Fragment>
        ))}
      </pre>
    </div>
  );
}
