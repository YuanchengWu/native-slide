import styled from "styled-components"
import "@fontsource/inter"
import { ReactNode } from "react"

interface PageSectionProps {
  title: string
  children?: ReactNode
}

export function PageSection({
  title,
  children,
}: PageSectionProps): JSX.Element {
  return (
    <Section>
      <Title>{title}</Title>
      {children}
    </Section>
  )
}

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.188rem;
  width: 100%;
`

const Title = styled.h2`
  font-family: "Inter";
  font-size: 1rem;
  font-weight: 600;
  line-height: 140%;
  color: #909090; // Color contrast failure
`
