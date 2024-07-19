import { Section } from "../Section.styles";
import { Card, UserProfile, BadgeSkills } from "./components";

const Profile = () => {
  return (
    <Section $variant="center" id="profile">
      <Card>
        <UserProfile />
        <BadgeSkills />
      </Card>
    </Section>
  );
};

export default Profile;
