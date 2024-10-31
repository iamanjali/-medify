import { Link, Stack, Container, Box, Typography, useMediaQuery } from "@mui/material";
import { useState } from "react";
import logo from "../assests/logo.png"

function Navbar() {
  const isMobile = useMediaQuery("(max-width: 900px)");
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header>
      <Box p={1} bgcolor="primary.main">
        <Typography fontSize={14} textAlign="center" color="#fff">
          The health and well-being of our patinets and their health care team
          will always be our priority, so we follow the best practices for
          cleanliness.
        </Typography>
      </Box>

      <Container mazWidth="xl">
        <Stack direction="row" spacing={2} alignItems="center" justifyContent="space-between" py={2}>
            <Link to="/"><img src={logo} alt="Logo" height={27}/></Link>
        </Stack>
      </Container>
    </header>
  );
}

export default Navbar;
