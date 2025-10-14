"use client";

import { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Typography,
  Box,
  ListItemButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";

export default function Appbar() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (state: boolean) => () => {
    setOpen(state);
  };

  const menuItems = [
    { text: "Sobre Mim", href: "#sobre-mim" },
    { text: "Projetos", href: "#projetos" },
    { text: "Contato", href: "#contato" },
    { text: "Meus Serviços", href: "https://www.scriptdesenvolvimento.com.br/"}
  ];

  return (
    <>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "#19183B", 
        }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            onClick={toggleDrawer(true)}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">Maisa Oliveira</Typography>
        </Toolbar>
      </AppBar>

      <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
        <Box
          sx={{
            width: 250,
            backgroundColor: "#19183B", // cor de fundo do menu
            height: "100%",
            color: "#fff", // cor do texto dentro do menu
          }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
  {menuItems.map((item, index) => {
    const isExternal = item.href.startsWith("http");

    return (
      <ListItem key={index} disablePadding>
        <ListItemButton
          component={Link}
          href={item.href}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
          sx={{
            "&:hover": {
              backgroundColor: "rgba(255,255,255,0.1)",
            },
          }}
        >
          <ListItemText primary={item.text} />
        </ListItemButton>
      </ListItem>
    );
  })}
</List>
        </Box>
      </Drawer>
    </>
  );
}