import React from "react";
import ContentLoader from "react-content-loader";

export default function LoadingItem() {
  return (
    <ContentLoader
      speed={2}
      width={250}
      height={290}
      viewBox="-15 -3 220 290"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      style={{ marginTop: "30px" }}
    >
      <rect x="10" y="10" rx="8" ry="8" width="200" height="110" />
      <rect x="10" y="156" rx="0" ry="0" width="200" height="20" />
      <rect x="10" y="201" rx="0" ry="0" width="100" height="20" />
      <rect x="10" y="250" rx="9" ry="9" width="120" height="30" />
      <rect x="170" y="250" rx="4" ry="4" width="30" height="30" />
    </ContentLoader>
  );
}