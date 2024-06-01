const EP = {
  home: "home",
  abstract: "abstract",
  animals: "animals",
  cats: "cats",
  city: "city",
  fashion: "fashion",
  nature: "nature",
  sports: "sports",
} as const

type EP_KEYS = keyof typeof EP
type EP_VALUES = (typeof EP)[EP_KEYS]

const categories = Object.values(EP) as readonly EP_VALUES[]

export { categories }
export type { EP_VALUES }
