import { Profile } from "../../view";
import { Section } from "./Section.styles";

const ProfileSection = () => {
  return (
    <Section $variant="center" id="profile" >
      <Profile />
    </Section>
  );
};

export default ProfileSection;
