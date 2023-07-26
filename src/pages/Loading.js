import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Loading = () => {
  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <p>
        <Skeleton height={900} duration="2" />
      </p>
    </SkeletonTheme>
  );
};

export default Loading;
