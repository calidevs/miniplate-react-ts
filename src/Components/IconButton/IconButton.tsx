import {
  IconButton as MuiIconButton,
  IconButtonProps as MuiIconButtonProps,
} from "@mui/material";

type CustomIconButtonProps = MuiIconButtonProps;

const IconButton = ({ children, ...props }: CustomIconButtonProps) => (
  <MuiIconButton {...props}>{children}</MuiIconButton>
);

export default IconButton;
