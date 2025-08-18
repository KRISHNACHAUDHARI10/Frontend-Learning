import Section from "./Section";
import { CircleUserRound, Linkedin } from 'lucide-react';
import { Github } from 'lucide-react';
import { Twitter } from "lucide-react";
import Socialmedia from "./SocialMedia";

const ContactSocialMedia = () => {
  const socialicons = [
    { icon: <Linkedin />, title: "LinkedIn", url: "https://in.linkedin.com" },
    { icon: <Github />, title: "Github", url: "https://github.com/" },
    { icon: <Twitter />, title: "Twitter", url: "https://twitter.com" }
  ];

  return (
    <Section icon={<CircleUserRound />} Sectiontitle="ContactSocialMedia">
      <p>Krishnachaudhari0340@gmail.com</p>
      <p className="mb-2">9512707825</p>
      {socialicons.map((social) => (
        <Socialmedia  icon={social.icon} title={social.title} url={social.url} />
      ))}
    </Section>
  );
};

export default ContactSocialMedia;
