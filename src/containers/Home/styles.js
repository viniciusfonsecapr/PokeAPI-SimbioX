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
    background-color: #D30A40;
    border-radius: 20px 5px;
    width: 320px;
    text-align: center;
    color: black;
    position: fixed;
    top: 135px;
    right: 110px;
}
.right-content img{
    margin: 1px 20px 0px 20px;
    height: 175px;
}
.right-content h1{
    margin-top: 10px;
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 1px;
}
.abilities {
    text-transform: capitalize;
    width: 80%;
    display: flex;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
    
}
.abilities .group {
    text-transform: capitalize;
    background-color: #b74555;
    color: white;
    padding: 10px;
    font-size:12px;
    border-radius: 6px;
}
.abilities .group {
    
}
.base-stat {
    color: white;
    text-transform: capitalize;
   margin-top: 10px;
   margin-bottom: 20px;
}

`

export const ContainerInputSearch = styled.div ` 
display: flex;
flex-direction: row;
width: 100%;
height: 40px;
background-color: #1488FA;

img {
    position: absolute;
    margin-top: 5px;
    margin-left: 30px;
}

input {
    margin-top: 5px;
    margin-left: 30px;
    outline: none;
    padding-left: 50px;
    border-radius: 8px;
    border: none;
    width: 600px;
    height: 30px;
}

`

