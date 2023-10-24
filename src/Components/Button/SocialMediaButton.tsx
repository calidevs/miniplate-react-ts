import { Button, ButtonProps } from "@mui/material";
import { SocialMediaIcon } from "Components/SocialMediaIcon";

type SocialMediaButtonProps = ButtonProps & {
  icon?: string;
};

const SocialMediaButton = ({ icon, ...props }: SocialMediaButtonProps) => (
  <Button
    startIcon={icon ? <SocialMediaIcon type={icon} /> : undefined}
    {...props}
  >
    {props.children}
  </Button>
);

export default SocialMediaButton;
