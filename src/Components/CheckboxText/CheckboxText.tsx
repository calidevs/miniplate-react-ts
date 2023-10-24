import { Checkbox, CheckboxProps, FormControlLabel } from "@mui/material";

type CheckboxTextProps = {
  checked?: boolean;
  onChange?: CheckboxProps["onChange"];
  label?: string;
};

const CheckboxText = ({
  checked = false,
  onChange,
  label,
}: CheckboxTextProps) => (
  <FormControlLabel
    control={
      <Checkbox
        checked={checked}
        onChange={onChange}
        sx={{
          color: "rgba(50, 71, 92, 0.6)",
        }}
      />
    }
    label={label}
    sx={{
      "& .MuiFormControlLabel-label": {
        fontSize: "14px",
      },
      color: "rgba(50, 71, 92, 0.6)",
    }}
  />
);

export default CheckboxText;
