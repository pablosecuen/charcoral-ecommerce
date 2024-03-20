"use client";
import Link from "next/link";
import UseAnimations from "react-useanimations";
import facebook from "react-useanimations/lib/facebook";
import instagram from "react-useanimations/lib/instagram";
import mail from "react-useanimations/lib/mail";

interface SocialMediaDisplayProps {
  size?: number;
  strokeColor?: string;
}

const SocialMediaDisplay: React.FC<SocialMediaDisplayProps> = ({ size, strokeColor }) => {
  return (
    <div className="flex z-50">
      <Link
        href="https://www.facebook.com/p/Carbon-Los-Le%C3%B1os-100063543433365/"
        target="_blank"
        rel="noreferrer noopener"
        className="cursor-pointer"
      >
        <UseAnimations animation={facebook} size={size} strokeColor={strokeColor} />
      </Link>
      <Link
        href="https://www.instagram.com/carbon.loslenos/?hl=es"
        target="_blank"
        rel="noreferrer noopener"
        className="cursor-pointer"
      >
        <UseAnimations animation={instagram} size={size} strokeColor={strokeColor} />
      </Link>
      <Link
        href="mailto:contacto@carbonlosleños.com.ar"
        target="_blank"
        rel="noreferrer noopener"
        className="cursor-pointer"
      >
        <UseAnimations animation={mail} size={size} strokeColor={strokeColor} />
      </Link>
    </div>
  );
};

export default SocialMediaDisplay;
