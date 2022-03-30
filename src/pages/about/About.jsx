import { Div, Header, StyledImg, Text, Link, Par } from "./AboutStyles";
import mealSvg from "../../assets/home.svg";
const About = () => {
  return (
    <Div>
      <StyledImg src={mealSvg} />
      <Header>About Software Devoloper Halil Karan </Header>
      <Text>
       
        <Par>I'm Halil</Par>
        <Par> I'm currently learning Full-Stack Devoloper Language.</Par>
        <Par> I have already known JS, React, SQL, Pyhthon.</Par>
        <Par>
          <Link href="mailto: halilkarancontact@gmail.com" target="_blank"> Send  E-Mail</Link>: halilkarancontact@gmail.com
        </Par>
      </Text>
    </Div>
  );
};

export default About;
