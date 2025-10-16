"use clinte"

import React, { useState } from "react";
import {
  Card,
  CardContent,
  Collapse,
  Typography,
  Box,
  Link,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface Props {
  link: string;
  tituloLink: string;
  titulo: string;
  subTitulo: string;
  textoInicial: string;   // texto visível sempre
  textoExpandido?: string; // texto mostrado ao expandir
}

export default function CardExpansivel({
  link,
  tituloLink,
  titulo,
  subTitulo,
  textoInicial,
  textoExpandido,
}: Props) {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => setExpanded(!expanded);

  return (
    <Card
      onClick={handleExpandClick}
      sx={{
        width: 320,
        borderRadius: 3,
        backgroundColor: "#1a1a1a",
        color: "#ffffff",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
        cursor: "pointer",
        transition: "all 0.3s ease-in-out",
        overflow: "hidden",
        "&:hover": {
          boxShadow: "0 8px 25px rgba(59, 130, 246, 0.3)", // sombra azulada
        },
      }}
    >
      {/* 🔹 Cabeçalho */}
      <Box
        sx={{
          backgroundColor: "#3b82f6",
          color: "#fff",
          textAlign: "center",
          py: 4,
          fontWeight: "bold",
          fontSize: "1.8rem",
          letterSpacing: 1,
        }}
      >
        {titulo}
      </Box>

      {/* 🔹 Corpo do card */}
      <CardContent sx={{ p: 3 }}>
        <Link
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          underline="none"
          sx={{
            color: "#3b82f6",
            fontWeight: 600,
            fontSize: "1.1rem",
            display: "inline-block",
            mb: 1,
            "&:hover": { textDecoration: "underline" },
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {tituloLink}
        </Link>

        <Typography
          variant="body2"
          sx={{ color: "#9ca3af", letterSpacing: 1, mb: 1 }}
        >
          {subTitulo}
        </Typography>

        {/* 🔹 Texto visível sempre */}
        <Typography variant="body2" sx={{ color: "#e5e7eb" }}>
          {textoInicial}
        </Typography>

        {/* 🔹 Texto que aparece ao expandir */}
        {textoExpandido && (
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <Box mt={1}>
              <Typography variant="body2" sx={{ color: "#d1d5db" }}>
                {textoExpandido}
              </Typography>
            </Box>
          </Collapse>
        )}

        {/* 🔹 Ícone de expansão */}
        {textoExpandido && (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              mt: 2,
              transition: "transform 0.3s ease",
              transform: expanded ? "rotate(180deg)" : "rotate(0deg)",
            }}
          >
            <ExpandMoreIcon sx={{ color: "#3b82f6" }} />
          </Box>
        )}
      </CardContent>
    </Card>
  );
}
