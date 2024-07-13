import {
  DiscordSvg,
  GitHubSvg,
  InstagramSvg,
  LinkedInSvg,
  TwitterSvg,
} from "../../assets/icon";
import { SOCIAL_LINKS } from "../../constants/socialLinks";
import { SocialMediaButton } from "../Button/Button.styles";

const socialMediaLinks = [
  { href: SOCIAL_LINKS.github, Svg: GitHubSvg, label: "GitHub" },
  { href: SOCIAL_LINKS.linkedin, Svg: LinkedInSvg, label: "LinkedIn" },
  { href: SOCIAL_LINKS.twitter, Svg: TwitterSvg, label: "Twitter" },
  { href: SOCIAL_LINKS.instagram, Svg: InstagramSvg, label: "Instagram" },
  { href: SOCIAL_LINKS.discord, Svg: DiscordSvg, label: "Discord" },
];

const SocialMedia = () => (
  <>
    {socialMediaLinks.map(({ href, Svg, label }) => (
      <SocialMediaButton
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        key={href}
        aria-label={label}
      >
        <Svg />
      </SocialMediaButton>
    ))}
  </>
);

export default SocialMedia;
