import {React} from "react";
import {
  FormContainer,
  Header,
  LoginContainer,
  StyledButton,
  StyledForm,
  StyledImg,
  StyledInput,
} from "./LoginStyles";
import mealSvg from "../../assets/meal.svg";
import { useNavigate } from "react-router-dom";

const Login = ({ name, setName }) => {
  const navigate = useNavigate();
  const user = {
   username: name,
 }
  const handleSubmit = (event) => {
    event.preventDefault();
    sessionStorage.setItem("user", JSON.stringify(user));
  navigate("/")
  };
  const handleName = (event) => {
    setName(event.target.value);
console.log(name)
  }

  return (
    <LoginContainer>
      <FormContainer>
        <StyledImg src={mealSvg} />
        <Header>{name} Recipe</Header>

        <StyledForm onSubmit={handleSubmit}>
          <StyledInput type="text" placeholder="username" required  onChange={handleName}/>
          <StyledInput type="password" placeholder="password" required />
          <StyledButton type="submit">Login</StyledButton>
        </StyledForm>
      </FormContainer>
    </LoginContainer>
  );
};

export default Login;
