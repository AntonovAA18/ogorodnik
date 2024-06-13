import styled from "styled-components";
import {device} from "../../screenSizes";

export const Logo = styled.img `
  display: flex;
  justify-content: center;
  max-width: 70%;
  @media (max-width: 720px) {
    max-width: 100%;
  }
`
export const HeaderStyle = styled.div `
  display: grid;
  grid-template-columns: 75% 1fr;
  border-bottom: var(---color-grey) solid 1px;
  @media ${device.tablet} {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 15px;
  }
`
export const Contacts = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 15px;
`