import { Stack } from "@mui/material"
import { useEffect, useRef, useState } from "react"
import { useDispatch } from "react-redux"
import { currentWindowSize } from "../../features/WindowSlice/ResizeWindowSlice"
import mediaPlayerIcon from '../../assets/mediaPlayer.webp'
import Header from "../Window/Header"
import VideosCollections from "./VideosCollections"

const styles = {
  root: {
    background:"#A4A29A",
    flexGrow: 1,
    borderRadius: 0,
    paddingTop: 0
  },
  footer: {
    boxSizing: "border-box",
    width: "100%",
    backgroundColor: '#e9e9e9',
    position: "absolute",
    bottom: 0,
    paddingTop: 0,
    paddingLeft: 1.5,
    paddingRight: 1.5,
    paddingBottom: 0
  },
  footerText: {
    color: "black",
    fontSize: 14,
    fontFamily: "Comic Neue"
  },
  headerContainer: {
    height: 34,
    background:
      "linear-gradient(180deg, #0997ff, #0053ee 8%, #0050ee 40%, #06f 88%, #06f 93%, #005bff 95%, #003dd7 96%, #003dd7)",
    cursor: "default",
    justifyContent: "center",
    fontWeight: 600,
    width: "100%",
  },
  
}
const DEFAULT_SIZE = { width: 800, height: 600 }

interface MediaPlayerProps {
  id: number
  containerRef: React.RefObject<HTMLDivElement | null>
  zIndex: number
  bringToFront: (id: number) => void
}
const MediaPlayerWindow =({ id, containerRef, zIndex, bringToFront }:MediaPlayerProps)=>{
    const boxRef = useRef<HTMLDivElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const dispatch = useDispatch();
  const isDragging = useRef(false)
  const dragOffset = useRef({ x: 0, y: 0 })

  const [isMaximized, setIsMaximized] = useState(false)

  const restoreState = useRef({
    width: DEFAULT_SIZE.width,
    height: DEFAULT_SIZE.height,
    x: 120 * id,
    y: 80 * id
  })

  const position = useRef({ x: 120 * id, y: 80 * id })
  const size = useRef({ width: DEFAULT_SIZE.width, height: DEFAULT_SIZE.height })

  const applyStyles = () => {
    const box = boxRef.current
    if (!box) return
    box.style.left = `${position.current.x}px`
    box.style.top = `${position.current.y}px`
    box.style.width = `${size.current.width}px`
    box.style.height = `${size.current.height}px`
    const currentWidth = size.current.width
    const currentHeight = size.current.height
    dispatch(currentWindowSize({ currentWidth, currentHeight }))
  }

  const maximize = () => {
    const container = containerRef.current
    if (!container || isMaximized) return

    restoreState.current = {
      width: size.current.width,
      height: size.current.height,
      x: position.current.x,
      y: position.current.y
    }

    size.current.width = container.clientWidth
    size.current.height = container.clientHeight - 31
    console.log(size.current.height)
    position.current.x = 0
    position.current.y = 0

    setIsMaximized(true)
    applyStyles()
  }

  const restore = () => {
    if (!isMaximized) return

    size.current.width = restoreState.current.width
    size.current.height = restoreState.current.height
    position.current.x = restoreState.current.x
    position.current.y = restoreState.current.y

    setIsMaximized(false)
    applyStyles()
  }

  const toggleResize = () => {
    bringToFront(id)
    isMaximized ? restore() : maximize()
  }

  useEffect(() => {
    applyStyles()

    const header = headerRef.current
    if (!header) return

    const onMouseDown = (e: MouseEvent) => {
      if (isMaximized) return
      bringToFront(id)
      isDragging.current = true
      dragOffset.current = { x: e.clientX, y: e.clientY }
    }

    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging.current) return
      position.current.x += e.clientX - dragOffset.current.x
      position.current.y += e.clientY - dragOffset.current.y
      dragOffset.current = { x: e.clientX, y: e.clientY }
      applyStyles()
    }

    const onMouseUp = () => {
      isDragging.current = false
    }

    header.addEventListener("mousedown", onMouseDown)
    window.addEventListener("mousemove", onMouseMove)
    window.addEventListener("mouseup", onMouseUp)

    return () => {
      header.removeEventListener("mousedown", onMouseDown)
      window.removeEventListener("mousemove", onMouseMove)
      window.removeEventListener("mouseup", onMouseUp)
    }
  }, [isMaximized])
    return(
        <Stack
      ref={boxRef}
      onClick={() => bringToFront(id)}
      sx={{
        position: "absolute",
        backgroundColor: "white",
        borderTopRightRadius: "6px",
        borderTopLeftRadius: "6px",
        boxShadow: 5,
        overflow: "hidden",
        userSelect: "none",
        zIndex,
      }}
    >
      <Stack
        ref={headerRef}
        sx={styles.headerContainer}
      >
        <Header onToggleResize={toggleResize} title={"My Projects"} icon={mediaPlayerIcon} />
      </Stack>
      <Stack sx={styles.root}>
        <VideosCollections />
      </Stack>
      </Stack>
    )
}
export default MediaPlayerWindow