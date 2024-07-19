import * as Svg from "../../assets/icons/socialMedia";
import { SOCIAL_LINKS } from "../../constants/socialLinks";
import { SocialMediaButton } from "../Button/Button.styles";

const socialMediaLinks = [
  { href: SOCIAL_LINKS.github, svg: Svg.GitHubSvg, label: "GitHub" },
  { href: SOCIAL_LINKS.linkedin, svg: Svg.LinkedInSvg, label: "LinkedIn" },
  { href: SOCIAL_LINKS.twitter, svg: Svg.TwitterSvg, label: "Twitter" },
  { href: SOCIAL_LINKS.instagram, svg: Svg.InstagramSvg, label: "Instagram" },
  { href: SOCIAL_LINKS.discord, svg: Svg.DiscordSvg, label: "Discord" },
];

const SocialMedia = () => (
  <>
    {socialMediaLinks.map(({ href, svg: Svg, label }) => (
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
