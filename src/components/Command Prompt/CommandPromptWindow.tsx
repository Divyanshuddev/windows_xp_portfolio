import { Stack } from "@mui/material"
import Header from "../Window/Header"
import { useEffect, useRef, useState } from "react"
import { currentWindowSize } from "../../features/WindowSlice/ResizeWindowSlice"
import { useDispatch, useSelector } from "react-redux"
import commandPromptIcon from '../../assets/cmd.webp'
import CommandPannel from "./CommandPannel"
import type { RootState } from "../../store/store"
const styles = {
  root: {
    background: "black",
    flexGrow: 1,
    borderRadius: 0,
    paddingTop: 0,
    boxSizing: "border-box",
    padding: 1
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
const DEFAULT_SIZE = { width: 700, height: 500 }
interface CommandPromptProps {
  id: number
  containerRef: React.RefObject<HTMLDivElement | null>
  zIndex: number
  bringToFront: (id: number) => void
  defaultPosition: { top: number; left: number };
}
const CommandPromptWindow = ({ id, containerRef, zIndex, bringToFront, defaultPosition }: CommandPromptProps) => {
  const boxRef = useRef<HTMLDivElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const dispatch = useDispatch();
  const isDragging = useRef(false)
  const dragOffset = useRef({ x: 0, y: 0 })
  const minimizeCommandPromptWindow = useSelector((state: RootState) => state.window.minimizeCommandPromptWindow)
  const [isMaximized, setIsMaximized] = useState(false)
  const restoreState = useRef({
    width: DEFAULT_SIZE.width,
    height: DEFAULT_SIZE.height,
    x: defaultPosition?.left ?? 150,
    y: Math.max(defaultPosition?.top ?? 100, 100),
  });
  const position = useRef({
    x: defaultPosition?.left ?? 150,
    y: Math.max(defaultPosition?.top ?? 100, 100),
  });
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
  return (
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
        display: minimizeCommandPromptWindow ? "none" : "block"
      }}
    >
      <Stack
        ref={headerRef}
        sx={styles.headerContainer}
      >
        <Header onToggleResize={toggleResize} title={"Command Prompt"} icon={commandPromptIcon} />
      </Stack>
      <Stack sx={styles.root}>
        <CommandPannel />
      </Stack>
    </Stack>
  )
}
export default CommandPromptWindow