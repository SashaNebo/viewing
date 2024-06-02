import ContentLoader from "react-content-loader"

export const GalleryListLoading = () => {
  return [...Array(6)].map((_, i) => (
    <ContentLoader
      key={i}
      speed={2}
      width={640}
      height={480}
      style={{ width: "100%", height: "100%" }}
      viewBox="0 0 640 480"
      backgroundColor="#B0DDEB"
      foregroundColor="#bcbed2">
      <rect x="0" y="0" rx="20" ry="20" width="640" height="480" />
    </ContentLoader>
  ))
}
