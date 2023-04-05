import styled from "styled-components"
import { PageSection } from "../components/PageSection"
import { CardList } from "../components/CardList"

export function Lesson(): JSX.Element {
  return (
    <>
      <TitleContainer>
        <Icon>🏫</Icon>
        <Title>Hotel Check-in</Title>
      </TitleContainer>
      <PageSection title="Scenario">
        <p style={{ margin: 0 }}>
          런던의 힐튼 호텔에 온라인으로 2박을 예약했습니다. 호텔 리셉션에 가서
          체크인을 해보세요.
        </p>
      </PageSection>
      <PageSection title="Goal">
        <CardList
          cards={{
            id: "goal-card",
            content: <p>친구랑 금요일 저녁에 같이 밥먹기로 하기</p>,
          }}
        />
      </PageSection>
      <PageSection title="Also Try"></PageSection>
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
