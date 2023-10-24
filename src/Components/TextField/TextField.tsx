import {
  TextField as MuiTextField,
  TextFieldProps as MuiTextFieldProps,
} from "@mui/material";

type TextFieldProps = MuiTextFieldProps;

const TextField = ({ ...props }: TextFieldProps) => <MuiTextField {...props} />;

export default TextField;
