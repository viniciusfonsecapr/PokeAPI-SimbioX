import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  padding: 20px 0px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-family: "Mulish";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  
  input {

  padding: 11px;
  border-radius: 2px;
  border: 1px solid white;
  border-radius: 10px;
  background-color: white;
  cursor: pointer;
  width: 400px;

  @media (max-width: 900px) {
     width: 200px;

    }
}

button {
  display: flex;
  background-color: #0e6f9f;
  border: none;
  border-radius:10px;
  height: 40px;
  color: white;
  padding: 10px 12px;
  margin-left:50px;
  cursor: pointer;

  @media (max-width: 900px) {
      width: 70px;
      margin-left: 20px;
    }
}
`