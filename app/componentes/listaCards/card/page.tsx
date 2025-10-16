"use client";

import React, { useState } from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";

interface props {
    titulo: String,
    frase: String,
}

export default function CardCustomizado({ titulo, frase }: props) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      sx={{
        backgroundColor: "#222222",
        color: "#ffffff",
        borderRadius: 3,
        transition: "all 0.3s ease-in-out",
        border: "1px solid #333",
        position: "relative",
        overflow: "hidden",
        "&::after": {
          content: '""',
          position: "absolute",
          inset: 0,
          backgroundColor: isHovered ? "rgba(37, 99, 235, 0.15)" : "transparent",
          transition: "background-color 0.3s ease",
          pointerEvents: "none",
        },
      }}
    >
      <CardContent>
        <Typography variant="h6" sx={{ fontWeight: 600 }}>
          <Box component="span" sx={{ color: "#3b82f6" }}>
            {titulo}
          </Box>{" "}
          {frase}
        </Typography>
      </CardContent>
    </Card>
  );
}
