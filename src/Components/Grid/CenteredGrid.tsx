import { Grid, GridProps } from "@mui/material";
import { ReactNode } from "react";

interface CenteredGridProps extends GridProps {
  children: ReactNode;
}

const CenteredGrid: React.FC<CenteredGridProps> = ({ children, ...props }) => (
  <Grid
    item
    {...props}
    sx={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      ...props.sx,
    }}
  >
    {children}
  </Grid>
);

export default CenteredGrid;
