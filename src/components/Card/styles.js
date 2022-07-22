import styled from 'styled-components'

export const Container = styled.div `
display: inline-flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-around;;
margin:10px 0 0 30px;
width: 300px;
height: 500px;
background-color: #8B082A;
border-radius: 20px 15px 15px 20px;
`
export const ContainerItems = styled.div `
display: inline-block;
margin-left: 10px;
border-radius: 20px 10px 2px 20px;
width: 290px;
height: 480px;
background-color: #D30A40;

h2{
    margin-left: 20px;
    color: white;
}
h3{
    text-transform: uppercase;
    margin-top: 5px;
    margin-left: 20px;
    color: white;
}
h4{
    text-transform: uppercase;
    margin-top: 5px;
    margin-left: 20px;
    color: white;
}

button {
    text-transform: capitalize;
    background-color: white;
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding-top: 6px;
    cursor: pointer;
    border: none;
    border-radius: 5px;
    margin-top: 50px;
    margin-left: 60px;
    width: 160px;
    height: 40px;
    font-size: 14px;
    font-weight: bold;
}
`
export const ContainerImage = styled.div`
margin: 20px;
width: 250px;
height: 200px;
border-radius: 20px;
border: none;
background-image: url(https://media.comicbook.com/2020/04/pokemon-anime-1216294.jpeg?auto=webp&width=252&height=201&crop=1200:560,smart);
background-repeat: no-repeat;


img {
margin-left: 30px;
 width:200px;
 height:200px;
}

`
