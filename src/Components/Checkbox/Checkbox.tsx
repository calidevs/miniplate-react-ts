import {
  Checkbox as MuiCheckbox,
  CheckboxProps as MuiCheckboxProps,
} from "@mui/material";

type CustomCheckboxProps = MuiCheckboxProps;

const Checkbox = ({ ...props }: CustomCheckboxProps) => (
  <MuiCheckbox {...props} />
);

export default Checkbox;
