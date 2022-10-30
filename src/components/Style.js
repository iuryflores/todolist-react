import styled from "styled-components";

export const NavBar = styled.div`
  background-color: aquamarine;
  padding: 20px;
  font-weight: 500;
  color:cadetblue;

`
export const DeleteButton = styled.button`
background-color: cadetblue;
border-radius:50%;
border: none;
width:30px;
height: 30px;
font-size:1.5rem;
font-weight:bold;
color:white;
line-height:1.6rem;
&:hover{
    background-color:aquamarine;
    cursor:pointer;
}
`
export const TodoList = styled.div`
 padding: 10px 20px;
  margin: 5px 20px;
  border: 2px solid aquamarine;
  color: cadetblue;
  display: flex;
  justify-content:space-between;    
  align-items: center;
  &:hover {
    background-color: #f9f9f9
  }
`
