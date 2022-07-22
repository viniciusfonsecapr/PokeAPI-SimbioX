import styled from "styled-components";

export const Container = styled.div`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  flex:1;
  border-radius: 10px;
  background-color: #FFFFFF;

  button {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 20px 0px 20px 20px;
    justify-content:center ;
    background-color: #FFFFFF;
    padding: 5px 5px;
    border-color: black;
    border-radius: 10px;
    color: black;
    cursor: pointer;
  }

  div.image-pokemon {
    width: 100px;
    height: 100px;
    margin-top: 10px;
    margin-left: 20px;
    margin-right:15px;
  }
  div.card-top {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin-right:1rem;
  }
  div.card-top h3 {
    text-transform: capitalize;
  }
  div.pokemon-type-text {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: left;
    background-color: gray;
    margin-left: 20px;
    margin-top: 10px;
    width: 80px;
    border: none;
    border-radius: 10px;
    color: black;
    text-transform: capitalize;
  }
  div.card-botton {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content:center;
  }
`;