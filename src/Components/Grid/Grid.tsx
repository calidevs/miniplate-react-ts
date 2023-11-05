import { Grid as MUIGrid, GridProps } from "@mui/material";

const Grid: React.FC<GridProps> = ({ children, ...props }) => (
  <MUIGrid
    {...props}
    sx={{
      ...props.sx,
    }}
  >
    {children}
  </MUIGrid>
);

export default Grid;
