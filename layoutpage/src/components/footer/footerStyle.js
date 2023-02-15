import styled from "styled-components";

export const Container = styled.div`
width: 1920px;
display: flex;
height: 417px;
justify-content: center;
background-color: black;
`
export const Contents = styled.div`
width: 1140px;
height: 100%;
color: #888888;
`

export const Top = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
align-items: baseline;
margin: 54px 0px;
`
export const TopLeft = styled.div`
width: 260px;
display: flex;
flex-direction: column;
justify-content: flex-start;
height: 100%;
`
export const TopRight = styled.div`
width: 260px;
display: flex;
flex-direction: column;
justify-content: flex-start;

`
export const TopCenter = styled.div`
width: 360px;

`
export const Bot = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`
export const BotLeft = styled.div``
export const BotRight = styled.div``
export const Title = styled.p`
font-family: 'Montserrat';
font-size: 17px;
border-bottom: 1px solid;
padding-bottom: 30px;
margin-bottom: 22px;
`
export const Desc = styled.div`
margin-bottom: 15%;
& p {
    font-family: 'Open Sans';
    font-size: 14px;
}
`
export const Icon = styled.div``
export const List = styled.div`
display: flex;
justify-content: space-between;
`
export const ListItem = styled.ul`
list-style: none;
& li {
    margin-bottom: 10px
}
`






