"use client";
import Link from "next/link";
import UseAnimations from "react-useanimations";
import facebook from "react-useanimations/lib/facebook";
import instagram from "react-useanimations/lib/instagram";
import mail from "react-useanimations/lib/mail";

interface SocialMediaDisplayProps {
  size?: number;
}

const SocialMediaDisplay: React.FC<SocialMediaDisplayProps> = ({ size }) => {
  return (
    <div className="flex">
      <Link
        href="https://www.facebook.com/p/Carbon-Los-Le%C3%B1os-100063543433365/"
        target="_blank"
        rel="noreferrer noopener"
      >
        <UseAnimations animation={facebook} size={size} />
      </Link>
      <Link
        href="https://www.instagram.com/carbon.loslenos/?hl=es"
        target="_blank"
        rel="noreferrer noopener"
      >
        <UseAnimations animation={instagram} size={size} />
      </Link>
      <Link href="mailto:contacto@carbonlosleños.com.ar" target="_blank" rel="noreferrer noopener">
        <UseAnimations animation={mail} size={size} />
      </Link>
    </div>
  );
};

export default SocialMediaDisplay;
