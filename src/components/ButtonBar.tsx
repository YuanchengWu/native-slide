import styled from "styled-components"

export function ButtonBar(): JSX.Element {
  return (
    <Footer>
      <SecondaryButton>
        <svg
          width="22"
          height="17"
          viewBox="0 0 22 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ marginRight: "0.7rem" }}
        >
          <path
            d="M5.51538 0.401367C3.52026 0.401367 1.46362 1.3418 0.593506 2.82715C0.444092 3.08203 0.417725 3.24023 0.417725 3.6709V15.9668C0.417725 16.5645 0.769287 16.8984 1.37573 16.8984C1.70093 16.8984 1.92944 16.793 2.26343 16.5732C3.31812 15.7559 4.66284 15.334 5.99878 15.334C7.30835 15.334 8.54761 15.7734 9.49683 16.5645C9.61108 16.6699 9.75171 16.7139 9.86597 16.7139C10.0857 16.7139 10.2615 16.5557 10.2615 16.3096V3.04688C10.2615 2.80078 10.2351 2.71289 10.0593 2.44922C9.20679 1.18359 7.45776 0.401367 5.51538 0.401367ZM16.3259 0.401367C14.3835 0.401367 12.6345 1.18359 11.782 2.44922C11.6062 2.71289 11.5798 2.80078 11.5798 3.04688V16.3096C11.5798 16.5557 11.7556 16.7139 11.9753 16.7139C12.0896 16.7139 12.2302 16.6699 12.3445 16.5645C13.2937 15.7734 14.533 15.334 15.8425 15.334C17.1785 15.334 18.5232 15.7559 19.5779 16.5732C19.9119 16.793 20.1404 16.8984 20.4656 16.8984C21.0632 16.8984 21.4236 16.5645 21.4236 15.9668V3.6709C21.4236 3.24023 21.3884 3.07324 21.2478 2.82715C20.3777 1.3418 18.321 0.401367 16.3259 0.401367Z"
            fill="white"
          />
        </svg>
        View Phrasebook
      </SecondaryButton>
      <PrimaryButton>Start</PrimaryButton>
    </Footer>
  )
}

const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 9.875rem;
  background: linear-gradient(
    0deg,
    #f3f3f3 76.94%,
    rgba(243, 243, 243, 0) 108.65%
  );
  padding: 1.5rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

const PrimaryButton = styled.button`
  background-color: #1c49ff;
  color: #ffffff;
  font-size: 1.125rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  border: none;
  border-radius: 1.5rem;
  line-height: 2rem;
  width: 100%;
  padding: 0.5rem 0;
`

const SecondaryButton = styled(PrimaryButton)`
  background-color: #aab5c0;
`
