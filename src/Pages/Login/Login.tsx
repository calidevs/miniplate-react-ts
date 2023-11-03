import { Box, Divider, Grid, Hidden, TextField } from "@mui/material";
import BoltIcon from "@mui/icons-material/Bolt";
import { Button } from "Components/Button";
import { CheckboxText } from "Components/CheckboxText";
import { SocialMediaIcon } from "Components/SocialMediaIcon";
import { TextLink } from "Components/TextLink";
import { Typography } from "Components/Typography";

function Login() {
  return (
    <Box sx={{ overflow: "hidden", height: "100%" }}>
      <Grid container sx={{ height: "100%" }}>
        <Hidden lgDown>
          <Grid
            item
            md={8}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "rgb(245,245,249)",
            }}
          >
            <Box sx={{ p: 6 }}>
              <img
                src="https://demos.themeselection.com/sneat-mui-react-nextjs-admin-template/demo-1/images/pages/boy-with-rocket-light.png"
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
                alt="Boy with rocket"
              />
            </Box>
          </Grid>
        </Hidden>

        <Grid
          xs={12}
          lg={4}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            bgcolor: "white",
            p: { xs: 2, md: 6 },
          }}
        >
          <Box sx={{ maxWidth: 480, width: "100%", mx: "auto" }}>
            <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
              <BoltIcon />
              <Typography
                variant="h4"
                sx={{
                  ml: 1,
                  color: "rgba(50, 71, 92, 0.87)",
                  letterSpacing: "-0.45px",
                  textTransform: "lowercase",
                  fontSize: "28px",
                }}
              >
                Sneat
              </Typography>
            </Box>
            <Typography
              variant="h6"
              sx={{
                mb: 0.375,
                color: "rgba(50, 71, 92, 0.87)",
                fontSize: "20px",
              }}
            >
              Welcome to Sneat! 👋🏻
            </Typography>
            <Typography
              sx={{ mb: 3, color: "rgba(50, 71, 92, 0.6)", fontSize: "16px" }}
            >
              Please sign-in to your account and start the adventure
            </Typography>
            <TextField
              label="Email"
              variant="outlined"
              sx={{ mb: 2 }}
              fullWidth
            />
            <TextField
              label="Password"
              variant="outlined"
              sx={{ mb: 2 }}
              fullWidth
            />
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb: 2,
              }}
            >
              <CheckboxText label="Remember Me" />
              <TextLink sx={{ fontSize: "14px" }}>Forgot Password?</TextLink>
            </Box>
            <Button sx={{ mb: "16px" }} variant="contained" fullWidth>
              Sign In
            </Button>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  mr: 0.5,
                  color: "rgba(50, 71, 92, 0.6)",
                  fontSize: "14px",
                }}
              >
                New on our platform?
              </Typography>
              <TextLink>Create an account</TextLink>
            </Box>
            <Divider sx={{ my: "24px" }}>or</Divider>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <SocialMediaIcon
                type="facebook"
                color="primary"
                sx={{ p: "8px" }}
              />
              <SocialMediaIcon
                type="twitter"
                color="secondary"
                sx={{ p: "8px" }}
              />
              <SocialMediaIcon type="github" color="info" sx={{ p: "8px" }} />
              <SocialMediaIcon
                type="google"
                color="warning"
                sx={{ p: "8px" }}
              />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Login;
