import styled from "styled-components";
export const Div = styled.div`
   display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
`;
export const Search = styled.div`
  display: flex;
  
  justify-content: start;
  
`;

export const Text = styled.p`
  margin-top: 3rem;
  align-items: center;
  font-size: 3rem;
  font-family: "Fredericka the Great", cursive;
  font-weight: bold;
`;

export const Input = styled.input.attrs((props) => ({
 
  type: "text",
 
  size: props.size || "1em"
}))`
  color: palevioletred;
  font-size: 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;


 
`;