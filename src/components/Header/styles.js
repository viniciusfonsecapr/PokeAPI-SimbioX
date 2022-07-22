import styled from 'styled-components'

export const Container = styled.div `
width: 99vw;
height: 72px;
background-color:#1449FA ;
display: flex;
align-items: center;
justify-content: center;


img {
    margin-left: 10px;
    height: 65px;
}
`

export const ContainerText = styled.div ` 
color: black;
display: flex;
justify-content: space-evenly;
flex-direction: row;
gap:80px;
text-decoration: none;

a {
    color: white;
    margin-left: 50px;
    text-decoration: none;
    cursor: pointer;
    height: 20px;
    border: none;
    border-radius: 3px;
    font-size: 16px ;

}

`

