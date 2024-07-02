import { SecondaryButton } from "../Button/Button";
import { GitHubSvg, EmailSvg } from "../../assets/icon";
import { SOCIAL_LINKS } from "../../constants";

const SocialMedia = () => {
  return (
    <>
      <SecondaryButton
        href={SOCIAL_LINKS.GITHUB}
        target="_blank"
        rel="noopener noreferrer"
      >
        <GitHubSvg />
      </SecondaryButton>
      <SecondaryButton
        href={`mailto:${SOCIAL_LINKS.EMAIL}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <EmailSvg />
      </SecondaryButton>
    </>
  );
};

export default SocialMedia;
