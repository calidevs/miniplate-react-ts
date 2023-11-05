import { Facebook, Twitter, Google, GitHub } from "@mui/icons-material";

import { SvgIconProps } from "@mui/material";

type SocialMediaIconProps = {
  type: string;
} & SvgIconProps;

const SocialMediaIcon = ({ type, ...props }: SocialMediaIconProps) => {
  switch (type) {
    case "facebook":
      return <Facebook {...props} sx={{ p: "8px", ...props.sx }} />;
    case "twitter":
      return <Twitter {...props} sx={{ p: "8px", ...props.sx }} />;
    case "google":
      return <Google {...props} sx={{ p: "8px", ...props.sx }} />;
    case "github":
      return <GitHub {...props} sx={{ p: "8px", ...props.sx }} />;
    default:
      return null;
  }
};

export default SocialMediaIcon;
