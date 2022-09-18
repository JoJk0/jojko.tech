export interface SpotifyCurrentlyPlayingResponse {
  is_playing: boolean
  timestamp: number
  context: {
    external_urls: {
      spotify: string
    }
    href: string
    type: 'artist' | 'playlist' | 'album' | 'show'
    uri: string
  }
  progress_ms: number
  item: {
    album: {
      album_type: 'album' | 'single' | 'compilation'
      total_tracks: number
      artists: {
        external_urls: {
          spotify: string
        }
        href: string
        id: string
        name: string
        type: 'artist'
        uri: string
      }[]
      available_markets: string[]
      external_urls: {
        spotify: string
      }
      href: string
      id: string
      images: {
        height: number
        url: string
        width: number
      }[]
      name: string
      release_date: `${number}-${number}-${number}`
      release_date_precision: 'year' | 'month' | 'day'
      type: 'album'
      uri: string
    }
    artists: {
      external_urls: {
        spotify: string
      }
      href: string
      id: string
      name: string
      type: 'artist'
      uri: string
    }[]
    available_markets: string[]
    disc_number: number
    duration_ms: number
    explicit: boolean
    external_ids: {
      isrc: string
    }
    external_urls: {
      spotify: string
    }
    href: string
    id: string
    is_local: boolean
    name: string
    popularity: number
    preview_url: string
    track_number: number
    type: 'track'
    uri: string
  }
  currently_playing_type: 'track' | 'episode' | 'ad' | 'unknown'
  actions: {
    interrupting_playback?: boolean
    pausing?: boolean
    resuming?: boolean
    seeking?: boolean
    skipping_next?: boolean
    skipping_prev?: boolean
    toggling_repeat_context?: boolean
    toggling_shuffle?: boolean
    toggling_repeat_track?: boolean
    transferring_playback?: boolean
    disallows?: {
      resuming?: boolean
    }
  }
}

export const useSpotify = () => {
  const url = 'https://api.spotify.com/v1/me/player/currently-playing'

  const { data } = useFetch(url, {
    async beforeFetch({ url, options, cancel }) {
      const myToken = import.meta.env.VITE_SPOTIFY_TOKEN
      if (!myToken)
        cancel()

      options.headers = {
        ...options.headers,
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${myToken}`,
      }

      return {
        options,
      }
    },
    afterFetch(data) {
      return data
    },
    immediate: true,
  }).json<SpotifyCurrentlyPlayingResponse>()
  return { data }
}
