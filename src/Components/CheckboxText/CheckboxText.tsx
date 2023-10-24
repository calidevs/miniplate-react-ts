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
    control={<Checkbox checked={checked} onChange={onChange} />}
    label={label}
  />
);

export default CheckboxText;
