import styled from "styled-components"

interface GoalProps {
  title: string
  subtitle: string
}

export function Goal({ title, subtitle }: GoalProps): JSX.Element {
  return (
    <TaskContainer>
      <BulletContainer>
        <Bullet />
      </BulletContainer>
      <div>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </div>
    </TaskContainer>
  )
}

const TaskContainer = styled.div`
  display: grid;
  grid-template-columns: 2rem 1fr;
`

const BulletContainer = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Bullet = styled.div`
  background: #29c195;
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
`

const Title = styled.p`
  font-weight: 600;
  font-size: 1.125rem;
  margin-bottom: 2px;
`

const Subtitle = styled.p`
  font-size: 0.875rem;
  color: #909090;
`
