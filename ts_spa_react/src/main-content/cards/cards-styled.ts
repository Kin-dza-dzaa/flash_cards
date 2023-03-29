import styled from "@emotion/styled"

export const DivCards = styled.div`
  margin: 2% 5% 2% 5%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(max(190px, 32vw) , 1fr));
  gap: 20px;
  place-items: center;
`
export const DivDescription = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  gap: 5px;
  place-items: left;
`