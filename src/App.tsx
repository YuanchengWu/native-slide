import { UIEventHandler, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { animated, config, useSpring } from "@react-spring/web"
import { useDrag } from "@use-gesture/react"
import styled from "styled-components"

import { useWindowWidth } from "./hooks/useWindowWidth"
import { range } from "./utils"
import { Lesson } from "./routes/Lesson"
import { History } from "./routes/History"
import { Nav } from "./components/Nav"

function App() {
  const navigate = useNavigate()

  useEffect(() => {
    navigate("/lesson/friday-night")
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const width = useWindowWidth()
  const [{ x }, api] = useSpring(() => ({ x: width }), [width])

  const open = () => {
    api.start({
      x: 0,
      immediate: false,
      config: config.stiff,
    })
    navigate("/lesson/friday-night/history")
  }

  const close = (velocity = 0) => {
    api.start({
      x: width,
      immediate: false,
      config: { ...config.stiff, velocity },
    })
    navigate(-1)
  }

  const bind = useDrag(
    ({ last, velocity: [vx], direction: [dx], movement: [mx] }) => {
      // when the user releases the history page, we check whether it passed
      // the threshold for it to close, or if we reset it to its open position
      if (last) {
        mx > width * 0.5 || (vx > 0.5 && dx > 0) ? close(vx) : open()
      }
      // when the user keeps dragging, we just move the history page according to
      // the cursor position
      else api.start({ x: mx, immediate: true })
    },
    {
      from: () => [0, x.get()],
      filterTaps: true,
      bounds: { top: 0 },
      rubberband: true,
    }
  )

  const display = x.to((px) => (px < width ? "block" : "none"))

  const [blur, setBlur] = useState(false)
  const handleScroll: UIEventHandler<HTMLDivElement> = (event) => {
    if (event.currentTarget.scrollTop === 0) setBlur(false)
    else setBlur(true)
  }

  return (
    <Container>
      <Header>
        <Nav
          onOpen={open}
          onClose={() => close(0)}
          width={width}
          x={x}
          blur={blur}
          title="Lesson History"
        />
      </Header>
      <Page
        style={{
          transform: x.to((px) => `translateX(${(px - width) / 4}px)`),
          filter: x.to((px) => `brightness(${range(0, width, 0.7, 1, px)})`),
        }}
      >
        <ScrollLayer onScroll={handleScroll}>
          <Lesson />
        </ScrollLayer>
      </Page>
      <Page
        {...bind()}
        style={{
          display,
          right: `calc(-100vw + ${width}px)`,
          x,
        }}
      >
        <ScrollLayer
          onScroll={handleScroll}
          {...(navigator.userAgent.match(/chrome|chromium|crios/i) && {
            style: { pointerEvents: "none" },
          })}
        >
          <History />
        </ScrollLayer>
        <EE
          style={{
            transform: x.to((px) => `scale(${range(0, -width, 1, 2, px)})`),
            color: x.to(
              (px) => `hsl(${range(0, -width, 0, 360, px)}, 100%, 50%)`
            ),
          }}
        >
          Hire me! 🥚🐣
        </EE>
      </Page>
    </Container>
  )
}

export default App

const Container = styled.div`
  overflow: hidden;
`

const Page = styled(animated.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  background: #f3f3f3;
  will-change: transform, opacity;
  touch-action: none;
`

const ScrollLayer = styled.div`
  overflow: auto;
  padding: 4.25rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: center;
  height: calc(100% - 228px);
`

const Header = styled(animated.header)`
  position: fixed;
  top: 0;
  z-index: 1;
  width: 100%;
`

const EE = styled(animated.div)`
  position: absolute;
  left: 99vw;
  top: 0;
  font-size: 1rem;
  height: 100vh;
  width: 100%;
  background-color: #f3f3f3;
  transform-origin: left;
  padding: 1rem;
  display: flex;
  align-items: center;
`
