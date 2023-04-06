import styled from "styled-components"

export function Stars({ stars = 0 }: { stars?: 0 | 1 | 2 | 3 }): JSX.Element {
  return (
    <StarContainer>
      <Star lit={stars > 0} />
      <Star lit={stars > 1} />
      <Star lit={stars === 3} />
    </StarContainer>
  )
}

const StarContainer = styled.div`
  display: flex;
  gap: 2.2px;
  height: 1.313rem;
`

function Star({ lit }: { lit: boolean }) {
  return (
    <svg
      width="17"
      height="16"
      viewBox="0 0 17 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.95279 0.287483C8.13015 -0.0958272 8.66985 -0.0958282 8.84721 0.287482L10.9645 4.86334C11.0369 5.01986 11.1844 5.12736 11.3543 5.14744L16.3631 5.73945C16.7834 5.78912 16.951 6.31478 16.6385 6.60286L12.9442 10.0086C12.8162 10.1265 12.7589 10.3036 12.7931 10.4752L13.7751 15.4018C13.858 15.8182 13.4205 16.142 13.0524 15.9366L8.63872 13.4737C8.49016 13.3908 8.30984 13.3908 8.16128 13.4737L3.74759 15.9366C3.3795 16.142 2.94195 15.8182 3.02494 15.4018L4.00693 10.4752C4.04113 10.3036 3.98377 10.1265 3.85579 10.0086L0.161451 6.60286C-0.151045 6.31478 0.0166298 5.78912 0.436861 5.73945L5.44567 5.14744C5.61558 5.12736 5.76308 5.01986 5.83551 4.86334L7.95279 0.287483Z"
        fill={lit ? "#FFCA5C" : "#E9E9E9"}
      />
    </svg>
  )
}
