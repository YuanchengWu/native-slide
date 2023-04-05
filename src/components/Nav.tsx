import styled from "styled-components"

import history from "../svgs/history.svg"
import chevron from "../svgs/left-chevron.svg"

type Icon = "history" | "chevron"

interface NavProps {
  icon: Icon
  handleClick: () => void
  title?: string
  blur?: boolean
}

export function Nav({
  icon,
  handleClick,
  title,
  blur = false,
}: NavProps): JSX.Element {
  // TODO: abstract state using location
  return (
    <NavBar>
      <span>
        {icon === "chevron" && (
          <IconButton type="button" onClick={handleClick}>
            <img src={chevron} alt="chevron" />
          </IconButton>
        )}
      </span>
      <span>{title && <Title>{title}</Title>}</span>
      <span>
        {icon === "history" && (
          <IconButton type="button" onClick={handleClick}>
            <img src={history} alt="history" />
          </IconButton>
        )}
      </span>
    </NavBar>
  )
}

const NavBar = styled.nav`
  display: grid;
  grid-template-columns: 1.5rem 1fr 1.5rem;
  grid-template-rows: 1.5rem;
  align-items: center;
  align-content: center;
  padding: 1.5rem;
  backdrop-filter: saturate(180%) blur(20px);
  width: 100%;
  height: 2.75rem;
  box-sizing: border-box;
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
`
