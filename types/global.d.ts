// Extend Window interface to include gtag
interface Window {
  dataLayer: any[]
  gtag: (...args: any[]) => void
  YT: {
    Player: any
    PlayerState: {
      ENDED: number
      PLAYING: number
      PAUSED: number
      BUFFERING: number
      CUED: number
    }
  }
  onYouTubeIframeAPIReady: (() => void) | null
}
