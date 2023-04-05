import styled from "styled-components"

import { PageSection } from "../components/PageSection"
import { CardContent, CardList } from "../components/CardList"
import { Goal } from "../components/Goal"

const goal: CardContent = {
  id: "goal-card",
  content: (
    <Goal
      title="친구랑 금요일 저녁에 같이 밥먹기로 하기"
      subtitle="Check into the hotel and make sure you know where your room is."
    />
  ),
}
const alsoTry: CardContent[] = [
  {
    id: "also-card-1",
    content: (
      <Goal
        title="친구에게 인사하고 오늘 밤에 놀고 싶은지 물어보세요"
        subtitle="Greet your friend and ask if he or she wants to hang out tonight"
      />
    ),
  },
  {
    id: "also-card-2",
    content: (
      <Goal
        title="친구가 좋아하는 음식이나 식당이 무엇인지 물어보세요"
        subtitle="Ask what kind of food or restaurant your friend is interested in"
      />
    ),
  },
  {
    id: "also-card-3",
    content: (
      <Goal
        title="친구에게 다른 친구를 초대하고 싶은지 물어보세요"
        subtitle="Ask if your friend wants to invite anyone else"
      />
    ),
  },
]

export function Lesson(): JSX.Element {
  return (
    <>
      <TitleContainer>
        <Icon>🏫</Icon>
        <Title>Hotel Check-in</Title>
      </TitleContainer>
      <PageSection title="Scenario">
        <p>
          런던의 힐튼 호텔에 온라인으로 2박을 예약했습니다. 호텔 리셉션에 가서
          체크인을 해보세요.
        </p>
      </PageSection>
      <PageSection title="Goal">
        <CardList cards={goal} />
      </PageSection>
      <PageSection title="Also Try">
        <CardList cards={alsoTry} />
      </PageSection>
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
`
