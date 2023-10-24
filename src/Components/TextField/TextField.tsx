import {
  TextField as MuiTextField,
  TextFieldProps as MuiTextFieldProps,
} from "@mui/material";

type InputGroupProps = MuiTextFieldProps & {
  label?: string;
};

const TextField = ({ label, ...props }: InputGroupProps) => (
  <MuiTextField label={label} {...props} />
);

export default TextField;
