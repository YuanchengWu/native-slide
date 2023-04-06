import styled, { css } from "styled-components"

export type CardContent = { id: string; content: JSX.Element }
type CardVariant = "start" | "middle" | "end" | "single"

interface CardListProps {
  cards: CardContent | CardContent[]
}

export function CardList({ cards }: CardListProps): JSX.Element {
  if (!Array.isArray(cards)) {
    return (
      <Card as="div" variant="single">
        {cards.content}
      </Card>
    )
  }

  return (
    <ul>
      {cards.map((card, i) => {
        const key = `${card.id}-${i}`

        switch (i) {
          case 0:
            return (
              <Card variant="start" key={key}>
                {card.content}
              </Card>
            )
          case cards.length - 1:
            return (
              <Card variant="end" key={key}>
                {card.content}
              </Card>
            )
          default:
            return (
              <Card variant="middle" key={key}>
                {card.content}
              </Card>
            )
        }
      })}
    </ul>
  )
}

const Card = styled.li<{ variant: CardVariant }>`
  background-color: #ffffff;
  padding: 1rem;

  ${({ variant }) =>
    variant === "start" &&
    css`
      border-radius: 0.75rem 0.75rem 0 0;
      border-bottom: 1px solid #e9e9e9;
    `}

  ${({ variant }) =>
    variant === "middle" &&
    css`
      border-bottom: 1px solid #e9e9e9;
    `}

  ${({ variant }) =>
    variant === "end" &&
    css`
      border-radius: 0 0 0.75rem 0.75rem;
    `}
    
  ${({ variant }) =>
    variant === "single" &&
    css`
      border-radius: 0.75rem;
    `}
`
