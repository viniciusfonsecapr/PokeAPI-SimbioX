import styled from "styled-components";

export const Container = styled.div `
min-height: 100vh;
width: 100%;
background-image: url(https://lh3.googleusercontent.com/tlIBC-OoNcTiL7SXVcrCIG91xE_XVFzYyRKLouFq5NV7LYOznYyXI7ualBMV15H9L1eGWVGz5Co1GXqqgJYDZ-5sDY7QzPPeTID975gJ3PIpNMc=e365-w1259);
background-repeat: repeat;
background-size: cover;

.left-content {
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(450px, 0.1fr));
    grid-gap: 2rem;
}

.right-content {
    width: 50%;
    text-align: center;
    color: black;
    position: fixed;
    top: 130px;
    right: 4px;
}
.right-content img{
    margin: 2rem;
    height: 170px;
}
.right-content h1{
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 1px;
}
.abilities {
    width: 30%;
    margin: auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 5px;
    
}
.abilities .group {
    background-color: #b74555;
    color: white;
    padding: 0.5rem;
    font-size:12px;
    border-radius: 10px;
}
.base-stat {
   margin-top: 10px;
}

`

export const ContainerInputSearch = styled.div ` 
display: flex;
flex-direction: row;
justify-content: space-evenly;
width: 98.7vw;
height: 40px;
background-color: #1488FA;

input {
    margin-top: 5px;
    border-radius: 8px;
    border: none;
    width: 300px;
    height: 30px;
}

`

