export type IAnime = {
  name: string
  description: string
  episodes: number
  rate: number
  tags: string[]
  seasonsAmount: number
  banners: string[]
}

export type IPersonalAnime = {
  name: string
  rate: number
  episode: number
  state: 'dropped' | 'plan to watch' | 'watching' | 'completed'
}
