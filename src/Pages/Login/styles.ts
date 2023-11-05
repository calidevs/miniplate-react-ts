import { SxProps } from "@mui/material";

type LoginStyles = {
  title: SxProps;
  welcomeText: SxProps;
  signinText: SxProps;
  loginContainer: SxProps;
};

// TODO: Temporary fix until theme is set
const primaryColor = "rgba(50, 71, 92, 0.87)";

const loginStyles: LoginStyles = {
  loginContainer: {
    maxWidth: 480,
    width: "100%",
    mx: "auto",
  },
  title: {
    ml: 1,
    color: primaryColor,
    textTransform: "lowercase",
  },
  welcomeText: {
    color: primaryColor,
  },
  signinText: { mb: 3, color: primaryColor },
};

export default loginStyles;
