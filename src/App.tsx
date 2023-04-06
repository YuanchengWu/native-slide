import { UIEventHandler, useState } from "react"
import { animated, config, useSpring } from "@react-spring/web"
import { useDrag } from "@use-gesture/react"
import styled from "styled-components"

import { useWindowWidth } from "./hooks/useWindowWidth"
import { range } from "./utils"
import { Lesson } from "./routes/Lesson"
import { History } from "./routes/History"
import { Nav } from "./components/Nav"
import { ButtonBar } from "./components/ButtonBar"

function App() {
  const width = useWindowWidth()

  const [{ x }, api] = useSpring(() => ({ x: width }), [width])

  const open = ({ canceled }: { canceled: boolean }) => {
    // when cancel is true, it means that the user passed the upwards threshold
    // so we change the spring config to create a nice wobbly effect
    api.start({
      x: 0,
      immediate: false,
      config: canceled ? config.wobbly : config.stiff,
    })
  }

  const close = (velocity = 0) => {
    api.start({
      x: width,
      immediate: false,
      config: { ...config.stiff, velocity },
    })
  }

  const bind = useDrag(
    ({ last, velocity: [vx], direction: [dx], movement: [mx], canceled }) => {
      // when the user releases the sheet, we check whether it passed
      // the threshold for it to close, or if we reset it to its open position
      if (last) {
        mx > width * 0.5 || (vx > 0.5 && dx > 0)
          ? close(vx)
          : open({ canceled })
      }
      // when the user keeps dragging, we just move the sheet according to
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
          icon="history"
          handleClick={() => {}}
          title="I'm a title!"
          blur={blur}
        />
      </Header>
      <Page
        style={{
          transform: x.to((px) => `translateX(${(px - width) / 4}px)`),
          filter: x.to((px) => `brightness(${range(0, width, 0.7, 1, px)})`),
        }}
        onClick={() => open({ canceled: false })}
        onScroll={handleScroll}
      >
        <Lesson />
        <ButtonBar />
      </Page>
      <Page
        {...bind()}
        style={{
          display,
          right: `calc(-100vw + ${width}px)`,
          x,
        }}
        onClick={() => close(0)}
      >
        <History />
      </Page>
    </Container>
  )
}

export default App

const Container = styled.div``

const Page = styled(animated.div)`
  position: absolute;
  overflow-y: auto;
  width: 100%;
  height: 100%;
  padding: 4.25rem 1.5rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #f3f3f3;
  will-change: transform, opacity;
  touch-action: pan-y;
  gap: 1.5rem;
`

const Header = styled(animated.header)`
  position: fixed;
  top: 0;
  z-index: 1;
  width: 100%;
`
