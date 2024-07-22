import { Section } from "../Section.styles";
import { ProfileCard, UserProfile, BadgeSkills } from "./components";

const Profile = () => {
  return (
    <Section $variant="center" id="profile">
      <ProfileCard>
        <UserProfile />
        <BadgeSkills />
      </ProfileCard>
    </Section>
  );
};

export default Profile;
