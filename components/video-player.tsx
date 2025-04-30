"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

interface VideoPlayerProps {
  videoId: string
  className?: string
}

export function VideoPlayer({ videoId, className = "w-full h-full" }: VideoPlayerProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Create a custom YouTube player with specific parameters
    const loadYouTubePlayer = () => {
      // Create a script element to load the YouTube IFrame API
      const tag = document.createElement("script")
      tag.src = "https://www.youtube.com/iframe_api"
      const firstScriptTag = document.getElementsByTagName("script")[0]
      firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag)

      // Define the onYouTubeIframeAPIReady function
      window.onYouTubeIframeAPIReady = () => {
        if (!containerRef.current) return

        // Clear any existing content
        containerRef.current.innerHTML = ""

        // Create a div for the player
        const playerDiv = document.createElement("div")
        playerDiv.id = `youtube-player-${videoId}`
        containerRef.current.appendChild(playerDiv)

        // Create the player
        new window.YT.Player(playerDiv.id, {
          videoId: videoId,
          playerVars: {
            autoplay: 1,
            mute: 1,
            loop: 1,
            controls: 0,
            showinfo: 0,
            modestbranding: 1,
            rel: 0,
            fs: 0,
            playsinline: 1,
            playlist: videoId,
            origin: window.location.origin,
          },
          events: {
            onReady: (event) => {
              event.target.playVideo()
              setIsLoaded(true)

              // Apply custom CSS to center the video content
              const iframe = event.target.getIframe()
              if (iframe) {
                iframe.style.position = "absolute"
                iframe.style.top = "0"
                iframe.style.left = "0"
                iframe.style.width = "100%"
                iframe.style.height = "100%"

                // Add a class to the iframe for additional styling
                iframe.classList.add("youtube-vertical-video")
              }
            },
            onStateChange: (event) => {
              // If the video ends, play it again (loop)
              if (event.data === window.YT.PlayerState.ENDED) {
                event.target.playVideo()
              }
            },
          },
        })
      }
    }

    loadYouTubePlayer()

    return () => {
      // Clean up
      window.onYouTubeIframeAPIReady = null
    }
  }, [videoId])

  return (
    <motion.div
      className={`${className} relative overflow-hidden rounded-lg aspect-[9/16]`}
      initial={{ opacity: 0 }}
      animate={{ opacity: isLoaded ? 1 : 0 }}
      transition={{ duration: 0.5 }}
    >
      <div ref={containerRef} className="absolute inset-0 w-full h-full youtube-container" />
    </motion.div>
  )
}
