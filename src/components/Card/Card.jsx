import { H1, MediumText, Paragraph } from "../TextComponents/TextComponents";
import {
  CardContainer,
  CardContent,
  CardFooter,
  CardHeader,
} from "./Card.styles";

const Card = () => {
  return (
    <CardContainer>
      <CardHeader>
        <H1>Francisco Miguel González Placencia</H1>
        <MediumText>Ingeniero Civil Informático </MediumText>
      </CardHeader>
      <CardContent>
        <Paragraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos deserunt
          magnam voluptatibus odit aliquid ab libero, iure reprehenderit
          debitis. Expedita non illum ut illo officia nihil culpa et accusamus
          totam.
        </Paragraph>
      </CardContent>
      <CardFooter>
        <Paragraph>Soy el Footer</Paragraph>
      </CardFooter>
    </CardContainer>
  );
};

export default Card;
