import { Facebook, Twitter, Google, GitHub } from "@mui/icons-material";

import { SvgIconProps } from "@mui/material";

type SocialMediaIconProps = {
  type: string;
} & SvgIconProps;

const SocialMediaIcon = ({ type, ...props }: SocialMediaIconProps) => {
  switch (type) {
    case "facebook":
      return <Facebook {...props} />;
    case "twitter":
      return <Twitter {...props} />;
    case "google":
      return <Google {...props} />;
    case "github":
      return <GitHub {...props} />;
    default:
      return null;
  }
};

export default SocialMediaIcon;
