import { Box, Container, Stack } from "@mui/material";
import Navbar from "./Navbar";
import SearchHospital from "./SearchHospital";
import HeroSlider from "./HeroSlider";
import HeroServices from "./HeroServices";

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

      <Container maxWidth="xl">
        <HeroSlider />
        <Stack
          p={{ xs: 2.5, md: 8 }}
          mt={{ xs: -2, md: 0, lg: -6, xl: -10 }}
          position="relative"
          zIndex={99}
          bgcolor="#fff"
          borderRadius="15px"
          spacing={10}
          boxShadow="0 0 12px rgba(0, 0, 0, 0, 1)"
        >
          <SearchHospital />
          <HeroServices />
        </Stack>
      </Container>
    </Box>
  );
}

export default Home;
