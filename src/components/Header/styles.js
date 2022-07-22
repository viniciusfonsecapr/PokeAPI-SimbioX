import styled from 'styled-components'

export const Container = styled.div `
width: 100vw;
height: 72px;
background-color:#1449FA ;
display: flex;
align-items: center;
justify-content: left;


img {
    margin-left: 20px;
    height: 65px;
}
`

export const ContainerText = styled.div ` 
color: black;
display: flex;
justify-content: space-around;
flex-direction: row;
gap:80px;
text-decoration: none;

p {
    color: white;
    margin-left: 60px;
    text-decoration: none;
    cursor: pointer;
    height: 20px;
    border: none;
    border-radius: 3px;
    font-size: 16px ;

}

`

