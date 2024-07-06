import {
  // EmailSocialSvg,
  GitHubSvg,
  LinkedInSvg,
  TwitterSvg,
  InstagramSvg,
  DiscordSvg,
} from "../../assets/icon";
import SOCIAL_LINKS from "../../constants/socialLinks";
import { SocialMediaButton } from "../Button/Button.styles";

const SocialMedia = () => {
  return (
    <>
      <SocialMediaButton
        href={SOCIAL_LINKS.github}
        target="_blank"
        rel="noopener noreferrer"
      >
        <GitHubSvg />
      </SocialMediaButton>
      {/* <SocialMediaButton
        href={`mailto:${SOCIAL_LINKS.email}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <EmailSocialSvg />
      </SocialMediaButton> */}
      <SocialMediaButton
        href={SOCIAL_LINKS.linkedin}
        target="_blank"
        rel="noopener noreferrer"
      >
        <LinkedInSvg />
      </SocialMediaButton>
      <SocialMediaButton
        href={SOCIAL_LINKS.twitter}
        target="_blank"
        rel="noopener noreferrer"
      >
        <TwitterSvg />
      </SocialMediaButton>
      <SocialMediaButton
        href={SOCIAL_LINKS.instagram}
        target="_blank"
        rel="noopener noreferrer"
      >
        <InstagramSvg />
      </SocialMediaButton>
      <SocialMediaButton
        href={SOCIAL_LINKS.discord}
        target="_blank"
        rel="noopener noreferrer"
      >
        <DiscordSvg />
      </SocialMediaButton>
    </>
  );
};

export default SocialMedia;
