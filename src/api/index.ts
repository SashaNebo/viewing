import { EP_VALUES } from "@/types"

const baseUrl = "https://loremflickr.com/640/480"

const requestGalleryImg = (id: EP_VALUES) => {
  return fetch(`${baseUrl}/${id}`).then((d) => d.url)
}

const requestGalleryImages = (id: EP_VALUES) => {
  console.log(1)
  return Promise.all([...Array(18)].map(() => requestGalleryImg(id)))
}

export { requestGalleryImages }
