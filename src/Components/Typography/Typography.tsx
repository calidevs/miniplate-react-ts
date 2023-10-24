import {
  Typography as MuiTypography,
  TypographyProps as MuiTypographyProps,
} from "@mui/material";

type TypographyProps = MuiTypographyProps;

const Typography = ({ children, ...props }: TypographyProps) => (
  <MuiTypography {...props}>{children}</MuiTypography>
);

export default Typography;
