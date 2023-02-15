import React from "react";

export default function CharacterCard({ character }: any) {
  return (
    <div style={{ padding: "0px 20px" }}>
      <p>Id: {character?.id}</p>
      <p>Name: {character?.name}</p>
      <p>Status: {character?.status}</p>
      <p>Gender: {character?.gender}</p>
      <hr />
    </div>
  );
}
