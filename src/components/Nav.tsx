import styled, { css } from "styled-components"
import { SpringValue, animated } from "@react-spring/web"

import history from "../svgs/history.svg"
import chevron from "../svgs/left-chevron.svg"
import { invlerp } from "../utils"

interface NavProps {
  onOpen: () => void
  onClose: () => void
  width: number
  x: SpringValue<number>
  title?: string
  blur?: boolean
}

export function Nav({
  onOpen,
  onClose,
  width,
  x,
  title,
  blur = false,
}: NavProps): JSX.Element {
  return (
    <NavBar blur={blur} width={width}>
      <animated.span
        style={{
          opacity: x.to((px) => invlerp(width, 0, px)),
          transform: x.to((px) => `translateX(${px / 64}px)`),
        }}
      >
        <IconButton type="button" onClick={onClose}>
          <img src={chevron} alt="chevron" />
        </IconButton>
      </animated.span>
      <animated.span
        style={{
          opacity: x.to((px) => invlerp(width, 0, px)),
          transform: x.to((px) => `translateX(${px / 4}px)`),
          pointerEvents: "none",
        }}
      >
        {title && <Title>{title}</Title>}
      </animated.span>
      <animated.span
        style={{
          opacity: x.to((px) => invlerp(0, width, px)),
        }}
      >
        <IconButton type="button" onClick={onOpen}>
          <img src={history} alt="history" />
        </IconButton>
      </animated.span>
    </NavBar>
  )
}

const NavBar = styled.nav<{ blur: boolean; width: number }>`
  display: grid;
  grid-template-columns: 1.5rem 1fr 1.5rem;
  grid-template-rows: 1.5rem;
  align-items: center;
  align-content: center;
  padding: 1.5rem;
  width: ${({ width }) => width}px;
  height: 2.75rem;
  box-sizing: border-box;

  ${({ blur }) =>
    blur &&
    css`
      backdrop-filter: saturate(180%) blur(20px) brightness(120%);
      border-bottom: 1px solid #ebe8ec;
    `}
`

const Title = styled.h1`
  font-size: 1.125rem;
  font-weight: 600;
  text-align: center;
`

const IconButton = styled.button`
  border: none;
  background-color: transparent;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  transition: opacity 200ms ease;

  :active {
    opacity: 0.5;
    background-color: transparent;
  }
`
