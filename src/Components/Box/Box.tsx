import { Box as MuiBox, BoxProps as MuiBoxProps, SxProps } from "@mui/material";

type justifyContentValues = "space-between" | "center";
type alignItemsValues = "center";

type BoxProps = MuiBoxProps & {
  justifyContent?: justifyContentValues;
  alignItems?: alignItemsValues;
};

const Box = ({ children, justifyContent, alignItems, ...props }: BoxProps) => {
  console.log(justifyContent);
  return (
    <MuiBox
      sx={{ display: "flex", justifyContent, alignItems, ...props.sx }}
      {...props}
    >
      {children}
    </MuiBox>
  );
};

export default Box;
