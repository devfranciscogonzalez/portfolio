import profile from "../../assets/images/profile.jpg";
import { PROFILE_TEXT } from "../../constants/portfolioText";
import Badge from "../Badge/Badge";
import { H3, Paragraph } from "../TextComponents/TextComponents";
import {
  CardContainer,
  CardContainerImage,
  CardContainerSkills,
  CardContent,
  CardContentLeft,
  CardContentRight,
  // CardFooter,
  CardHeader,
} from "./Card.styles";

const Card = () => {
  return (
    <CardContainer>
      <CardHeader>
        <H3>{PROFILE_TEXT.title}</H3>
      </CardHeader>
      <CardContent>
        <CardContentLeft>
          <Paragraph>{PROFILE_TEXT.description}</Paragraph>
          <CardContainerSkills>
            {PROFILE_TEXT.skills.map((skill) => (
              <Badge key={skill} text={skill} />
            ))}
          </CardContainerSkills>
        </CardContentLeft>
        <CardContentRight>
          <CardContainerImage>
            <img src={profile} alt="lorem" />
          </CardContainerImage>
        </CardContentRight>
      </CardContent>

      {/* <CardFooter>
        <Paragraph>Soy el Footer</Paragraph>
      </CardFooter> */}
    </CardContainer>
  );
};

export default Card;
