import { Link as MuiLink, LinkProps as MuiLinkProps } from "@mui/material";

type CustomLinkProps = MuiLinkProps;

const TextLink = ({ children, href = "#", ...props }: CustomLinkProps) => (
  <MuiLink href={href} {...props}>
    {children}
  </MuiLink>
);

export default TextLink;
