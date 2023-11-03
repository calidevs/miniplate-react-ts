import { Link as MuiLink, LinkProps as MuiLinkProps } from "@mui/material";

type CustomLinkProps = MuiLinkProps;

const TextLink = ({ children, href = "#", ...props }: CustomLinkProps) => (
  <MuiLink href={href} {...props} sx={{ fontSize: "14px" }} underline="none">
    {children}
  </MuiLink>
);

export default TextLink;
