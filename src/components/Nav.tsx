import styled from "styled-components"

import history from "../svgs/history.svg"
import chevron from "../svgs/left-chevron.svg"

type Icon = "history" | "chevron"

interface NavProps {
  icon: Icon
  handleClick: () => void
  title?: string
}

export function Nav({ icon, handleClick, title }: NavProps): JSX.Element {
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
  width: 100%;
`

const Title = styled.h1`
  font-size: 1.125rem;
  font-weight: 600;
  text-align: center;
  margin: 0;
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
