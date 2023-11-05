import {
  TextField as MuiTextField,
  TextFieldProps as MuiTextFieldProps,
} from "@mui/material";

type TextFieldProps = MuiTextFieldProps & {
  fullwidth?: boolean;
};

const TextField = ({ label, fullWidth, ...props }: TextFieldProps) => {
  return (
    <MuiTextField
      variant="outlined"
      label={label}
      fullWidth={fullWidth}
      {...props}
      sx={{ mb: 2, ...props.sx }}
    />
  );
};

export default TextField;
