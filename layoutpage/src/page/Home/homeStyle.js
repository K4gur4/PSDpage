import styled from 'styled-components'
import { mobile } from "../../responsive";
export const Container = styled.div`
    width: 1920px;
    display: flex;
    flex-direction: column;
    align-items: center;
    ${mobile({
    width: "100%",
  })}
    ` 

export const Content = styled.div`
    max-width: 1140px;
    display: flex;
    align-items: center;
    flex-direction: column;
    ${mobile({
    width: "100%",
  })}
`
