import styled from "styled-components"
import { Nav } from "../components/Nav"

export function Lesson(): JSX.Element {
  return (
    <>
      <Nav icon="history" handleClick={() => {}} />
      <TitleContainer>
        <Icon>🏫</Icon>
        <Title>Hotel Check-in</Title>
      </TitleContainer>
    </>
  )
}

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 100%;
`

const Icon = styled.span`
  font-size: 6rem;
  line-height: 1em;
`

const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0;
`
