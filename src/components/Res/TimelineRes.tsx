import { useState } from "react";
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
        "Desarrollador Frontend con más de un año de experiencia en la creación y mantenimiento de interfaces web. He trabajo en diversos proyectos colaborando con equipos multidisciplinarios. Soy una persona proactiva, en contaste aprendizaje y siempre buscando desafíos para mejorar mis habilidades",
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
