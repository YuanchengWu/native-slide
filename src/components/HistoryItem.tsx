import styled from "styled-components"

import { ProgressRing } from "./ProgressRing"
import { Stars } from "./Stars"

interface HistoryItemProps {
  title: string
  subtitle: string
  progress?: number
  grade?: string
  stars?: 0 | 1 | 2 | 3
}

export function HistoryItem({
  title,
  subtitle,
  progress,
  grade,
  stars,
}: HistoryItemProps): JSX.Element {
  return (
    <Container>
      <Icon>🏫</Icon>
      <div>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </div>
      {progress !== undefined && <ProgressRing progress={progress} />}
      {grade !== undefined && (
        <Grade>
          <Stars stars={stars} />
          <Subtitle>{grade}</Subtitle>
        </Grade>
      )}
    </Container>
  )
}

const Container = styled.li`
  display: grid;
  grid-template-columns: 4rem 1fr min-content;
  grid-template-rows: 4rem;
  align-items: center;
  column-gap: 0.5rem;
`

const Icon = styled.div`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background-color: #f3f3f3;
  font-size: 3rem;
  line-height: 1em;
  text-align: center;
`

const Title = styled.p`
  font-size: 1.125rem;
  font-weight: 600;
  line-height: 1.313rem;
`

const Subtitle = styled.p`
  font-size: 0.875rem;
  color: #909090;
  line-height: 1.4em;
`

const Grade = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
`
