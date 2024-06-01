import React from "react"
import ContentLoader, { IContentLoaderProps } from "react-content-loader"

export const GalleryLoadingItem = (
  props: React.JSX.IntrinsicAttributes & IContentLoaderProps,
) => (
  <ContentLoader
    speed={2}
    width={640}
    height={480}
    style={{ width: "100%", height: "100%" }}
    viewBox="0 0 640 480"
    backgroundColor="#B0DDEB"
    foregroundColor="#bcbed2"
    {...props}>
    <rect x="0" y="0" rx="20" ry="20" width="640" height="480" />
  </ContentLoader>
)
