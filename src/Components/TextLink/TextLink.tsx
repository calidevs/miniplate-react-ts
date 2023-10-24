import { Link as MuiLink, LinkProps as MuiLinkProps } from "@mui/material";

type CustomLinkProps = MuiLinkProps;

const TextLink = ({ children, ...props }: CustomLinkProps) => (
  <MuiLink {...props}>{children}</MuiLink>
);

export default TextLink;
