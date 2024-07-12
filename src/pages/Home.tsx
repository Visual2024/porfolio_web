import { useMediaQuery } from "react-responsive";
import { Banner } from "../components/Banner";
import { BannerRes } from "../components/Res/BannerRes";
import { Experiencia } from "../components/Expriencia";
import { ExperienciaRes } from "../components/Res/ExpienciaRes";
import  ProjectoRes  from "../components/Res/ProyectosRes";
import Projects from "../components/Proyect";



export function Home(): JSX.Element {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" }); 

  return (<div>
      {isMobile ? <BannerRes /> : <Banner />}
      {isMobile ? <ExperienciaRes /> : <Experiencia />}
      {isMobile ? <ProjectoRes /> : <Projects />}
  </div>)
}
