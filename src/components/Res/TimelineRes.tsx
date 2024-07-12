import  { useState } from "react";
import {
  List,
  ListItem,
  ListItemText,
  Typography,
  Collapse,
} from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

export function Timeline_Res(): JSX.Element {
  const [open, setOpen] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setOpen(open === index ? null : index);
  };

  const items = [
    {
      year: "2024",
      description:
        "Desarrollador Front-end React, encargado de la parte visual del sitio web, con mis compañeros de trabajo estamos desarrollando un Administrador de Recursos Humanos.",
    },
    {
      year: "2023",
      description:
        "Pasantía no remunerada en un equipo FullStack trainee con el objetivo de poder realizar un E-Commerce desde cero. Yo fui parte del equipo de Frontend y estoy muy agradecido de poder haber compartido esta experiencia con un equipo tan maravilloso y unido. El entorno de desarrollo fue creado en Vite.JS y además de HTML, CSS, JS y React también utilizamos tecnologías como Tailwind, React Router, FlowBite, MUI, Swiper y varias más! Dentro del equipo nos organizamos con Trello, GitHub y GitHub Projects para poder llevar adelante el proyecto para ARWEB. Y tuve la suerte de poder compartir con grandes mentores de este ámbito.",
    },
  ];

  return (
    <List>
      {items.map((item, index) => (
        <div key={index}>
          <ListItem button onClick={() => handleClick(index)}>
            <ListItemText
              primary={
                <Typography variant="h6" color="#fff">
                  {item.year}
                </Typography>
              }
            />
            {open === index ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={open === index} timeout="auto" unmountOnExit>
            <ListItemText
              secondary={
                <Typography variant="body2" color="#fff">
                  {item.description}
                </Typography>
              }
            />
          </Collapse>
        </div>
      ))}
    </List>
  );
}
