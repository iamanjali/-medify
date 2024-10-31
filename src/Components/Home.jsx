import { Box, Container } from "@mui/material";
import Navbar from "./Navbar";

function Home() {
  return (
    <Box
      sx={{
        background:
          "liner-gradient(#E7F0FF, rgba(232, 241, 255, 0.47) 90%, #FFF 10%)",
      }}
      mb={4}
    >
        <Navbar />
        <Container maxWidth="xl"></Container>
    </Box>
  );
}

export default Home;
