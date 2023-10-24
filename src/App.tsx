import { Box, Divider } from "@mui/material";
import "./App.css";
import { SocialMediaIcon } from "Components/Icon";
import { Typography } from "Components/Typography";
import { TextField } from "Components/TextField";
import { CheckboxText } from "Components/CheckboxText";
import { TextLink } from "Components/TextLink";
import { Button } from "Components/Button";
import { SocialMediaButton } from "Components/Button";

function App() {
  return (
    <>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <SocialMediaIcon type="facebook" color="primary" />

        <Typography sx={{ ml: 1, fontWeight: "bold" }}>Sneat</Typography>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Typography sx={{ mr: 1, fontWeight: 400 }}>
          Welcome to Sneat!
        </Typography>
        <SocialMediaIcon type="twitter" color="primary" />
      </Box>
      <Typography>
        Please sign-in to your account and start the adventure
      </Typography>
      <TextField label="Email" variant="outlined" fullWidth />
      <TextField label="Password" variant="outlined" fullWidth />
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <CheckboxText label="Remember Me" />
        <TextLink children="Forgot Password?" />
      </Box>
      <Button variant="contained">Sign In</Button>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Typography sx={{ ml: 1 }} children="New on our platform?" />
        <TextLink children="Create an account" />
      </Box>
      <Divider>or</Divider>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <SocialMediaButton icon="facebook" color="primary" />
        <SocialMediaButton icon="twitter" color="secondary" />
        <SocialMediaButton icon="github" color="info" />
        <SocialMediaButton icon="google" color="warning" />
      </Box>
    </>
  );
}

export default App;
