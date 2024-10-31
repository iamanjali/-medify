import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";

function IconCard({ img, title, active, bgcolor }) {
  return (
    <Card
      sx={{
        backgroundColor: bgcolor,
        padding: "16px",
        textAlign: "center",
        boxShadow: active ? "0 4px 10px rgba(0,0,0,0.2)" : "none",
      }}
    >
      <Box
        component="img"
        src={img}
        alt={title}
        sx={{ width: 48, height: 48, marginBottom: 2 }}
      />
      <CardContent>
        <Typography variant="h6">{title}</Typography>
      </CardContent>
    </Card>
  );
}

export default IconCard;
