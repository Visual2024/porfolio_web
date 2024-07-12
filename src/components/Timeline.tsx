import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";

import Typography from "@mui/material/Typography";

export function Timeline_Example() {
  return (
    <Timeline position="alternate">
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          align="right"
          variant="body2"
          color="#fff"
        >
         Ago 2023 - 2024 Actualidad
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary">
            <LaptopMacIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography variant="h6" component="span">
            Desarrollador Front-end React JS
          </Typography>
          <Typography>
            Desarrollador Frontend con más de un año de experiencia en la creación y mantenimiento de interfaces web. He trabajo
            en diversos proyectos colaborando con equipos multidisciplinarios. Soy una persona proactiva, en contaste aprendizaje
            y siempre buscando desafíos para mejorar mis habilidades.
          </Typography>
        </TimelineContent>
      </TimelineItem>


     


    </Timeline>
  );
}
