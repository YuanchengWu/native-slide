import { CardContent, CardList } from "../components/CardList"
import { HistoryItem } from "../components/HistoryItem"

const items: CardContent[] = [
  {
    id: "history-item-1",
    content: (
      <HistoryItem
        title="Calculating score"
        subtitle="Just now"
        progress={75}
      />
    ),
  },
  {
    id: "history-item-2",
    content: (
      <HistoryItem
        title="Hotel Check-in"
        subtitle="Today 1:07pm"
        grade="98%"
        stars={3}
      />
    ),
  },
  {
    id: "history-item-3",
    content: (
      <HistoryItem
        title="Hotel Check-in"
        subtitle="Yesterday 12:30pm"
        grade="72%"
        stars={2}
      />
    ),
  },
  {
    id: "history-item-4",
    content: (
      <HistoryItem
        title="Hotel Check-in"
        subtitle="Wednesday 11:43am"
        grade="58%"
        stars={1}
      />
    ),
  },
  {
    id: "history-item-5",
    content: (
      <HistoryItem
        title="Hotel Check-in"
        subtitle="Last week"
        grade="Incomplete"
        stars={0}
      />
    ),
  },
]

export function History(): JSX.Element {
  return <CardList cards={items} />
}
