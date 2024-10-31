import { useMemo } from "react";
import Doctor from "../assests/doctor.png";
import Lab from "../assests/Lab.png";
import Hospital from "../assests/hospital.png";
import Medical from "../assests/capsule.png";
import Ambulance from "../assests/ambulance.png";
import { Box, Typography, Grid, Container } from "@mui/material";
import IconCard from "./IconCard";

function HeroServices() {
  const Services = useMemo(
    () => [
      { img: Doctor, title: "Doctors" },
      { img: Lab, title: "Labs" },
      { img: Hospital, title: "Hospitals", active: true },
      { img: Medical, title: "Medical store" },
      { img: Ambulance, title: "Ambulance" },
    ],
    []
  );

  return (
    <Box>
      <Typography
        component="h4"
        fontSize={20}
        color="#102851"
        fontWeight={500}
        textAlign="center"
        mb={2}
      >
        You may be looking for
      </Typography>

      <Container>
        <Grid container columnSpacing={{ xs: 1, md: 2 }} justifyContent="center">
          {Services.map((service) => (
            <Grid item key={service.title} xs={4} md={2.4}>
              <IconCard
                img={service.img}
                title={service.title}
                active={service.active || false}
                bgColor="#FAFBFE"
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default HeroServices;
