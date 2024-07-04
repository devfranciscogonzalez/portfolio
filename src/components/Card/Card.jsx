import { PROFILE_TEXT } from "../../constants/portfolioText";
import { H3, Paragraph } from "../TextComponents/TextComponents";
import {
  CardContainer,
  CardContainerSkills,
  CardContent,
  CardContentLeft,
  CardContentRight,
  // CardFooter,
  CardHeader,
} from "./Card.styles";
import { ProfileCard } from "./ProfileCard";

const Card = () => {
  return (
    <CardContainer>
      <CardHeader>
        <H3>{PROFILE_TEXT.title}</H3>
      </CardHeader>
      <CardContent>
        <CardContentLeft>
          <ProfileCard />
        </CardContentLeft>
        <CardContentRight>
          <Paragraph>{PROFILE_TEXT.description}</Paragraph>
          <CardContainerSkills></CardContainerSkills>
        </CardContentRight>
      </CardContent>

      {/* <CardFooter>
        <Paragraph>Soy el Footer</Paragraph>
      </CardFooter> */}
    </CardContainer>
  );
};

export default Card;
