import { GitHub, Instagram, LinkedIn } from "../../assets/icons/socialMedia";
import { SOCIAL_LINKS } from "../../constants/socialLinks";
import { SocialMediaButton } from "./SocialMedia.styles";

const socialMediaLinks = [
  { href: SOCIAL_LINKS.github, svg: GitHub, label: "GitHub" },
  { href: SOCIAL_LINKS.linkedin, svg: LinkedIn, label: "LinkedIn" },
  { href: SOCIAL_LINKS.instagram, svg: Instagram, label: "Instagram" },
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
