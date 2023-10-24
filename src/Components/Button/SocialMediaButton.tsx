import { Button, ButtonProps } from "@mui/material";
import { Icon } from "Components/Icon";

type SocialMediaButtonProps = ButtonProps & {
  icon?: string;
};

const SocialMediaButton = ({ icon, ...props }: SocialMediaButtonProps) => (
  <Button startIcon={icon ? <Icon type={icon} /> : undefined} {...props}>
    {props.children}
  </Button>
);

export default SocialMediaButton;
