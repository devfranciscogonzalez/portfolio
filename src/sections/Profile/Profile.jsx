import { H3 } from "../../components";
import { PROFILE_TEXT } from "../../constants/profileText";
import { Section } from "../Section.styles";
import { ProfileCard, UserProfile, BadgeSkills } from "./components";
import { ProfileHeader } from "./Profile.styles";

const Profile = () => {
  const { title } = PROFILE_TEXT;

  return (
    <Section id="profile">
      <ProfileHeader>
        <H3>👨‍💻{title}</H3>
      </ProfileHeader>
      <ProfileCard>
        <UserProfile />
        <BadgeSkills />
      </ProfileCard>
    </Section>
  );
};

export default Profile;
