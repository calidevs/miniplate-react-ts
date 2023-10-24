import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
  SxProps,
  Theme,
} from "@mui/material";

type ButtonProps = MuiButtonProps & {
  sx?: SxProps<Theme>;
};

const Button = ({ children, sx, ...props }: ButtonProps) => (
  <MuiButton
    {...props}
    fullWidth
    sx={[{ borderRadius: "8px" }, ...(Array.isArray(sx) ? sx : [sx])]}
  >
    {children}
  </MuiButton>
);

export default Button;
