import { useMediaQuery } from "react-responsive";
import { Banner } from "../components/Banner";
import { BannerRes } from "../components/Res/BannerRes";
import { Experiencia } from "../components/Expriencia";
import { ExperienciaRes } from "../components/Res/ExpienciaRes";

export function Home(): JSX.Element {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" }); // Puedes ajustar el tamaño máximo según tus necesidades

  return (<div>
      {isMobile ? <BannerRes /> : <Banner />}
      {isMobile ? <ExperienciaRes /> : <Experiencia />}
      
    
  </div>)
}
