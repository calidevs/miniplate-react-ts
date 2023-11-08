import { Divider, Hidden } from "@mui/material";
import BoltIcon from "@mui/icons-material/Bolt";
import { Button } from "Components/Button";
import { CheckboxText } from "Components/CheckboxText";
import { SocialMediaIcon } from "Components/SocialMediaIcon";
import { TextLink } from "Components/TextLink";
import { Typography } from "Components/Typography";
import { Image } from "Components/Image";
import { CenteredGrid, Grid } from "Components/Grid";

import loginStyles from "./styles";
import { TextField } from "Components/TextField";
import { Box } from "Components/Box";

function Login() {
  return (
    <Box sx={{ overflow: "hidden", height: "100%" }}>
      <Grid container sx={{ height: "100%" }}>
        <Hidden lgDown>
          <Grid item md={8}>
            <Image
              src="https://demos.themeselection.com/sneat-mui-react-nextjs-admin-template/demo-1/images/pages/boy-with-rocket-light.png"
              alt="Boy with rocket"
            />
          </Grid>
        </Hidden>

        <CenteredGrid
          xs={12}
          lg={4}
          sx={{
            p: { xs: 2, md: 6 },
          }}
        >
          <Box sx={loginStyles.loginContainer}>
            <Box alignItems="center">
              <BoltIcon />
              <Typography variant="h4" sx={loginStyles.title}>
                Sneat
              </Typography>
            </Box>
            <Typography variant="h6" sx={loginStyles.welcomeText}>
              Welcome to Sneat! 👋🏻
            </Typography>
            <Typography variant="subtitle2" sx={loginStyles.signinText}>
              Please sign-in to your account and start the adventure
            </Typography>
            <TextField label="Email" fullWidth />
            <TextField label="Password" fullWidth />
            <Box justifyContent="space-between" alignItems="center">
              <CheckboxText label="Remember Me" />
              <TextLink>Forgot Password?</TextLink>
            </Box>
            <Button variant="contained" fullWidth>
              Sign In
            </Button>
            <Box justifyContent="center" alignItems="center">
              <Typography variant="subtitle2">New on our platform?</Typography>
              <TextLink>Create an account</TextLink>
            </Box>
            <Divider sx={{ my: "24px" }}>or</Divider>
            <Box justifyContent="center" alignItems="center">
              <SocialMediaIcon type="facebook" />
              <SocialMediaIcon type="twitter" />
              <SocialMediaIcon type="github" />
              <SocialMediaIcon type="google" />
            </Box>
          </Box>
        </CenteredGrid>
      </Grid>
    </Box>
  );
}

export default Login;
