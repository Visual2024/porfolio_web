import { Banner } from "../components/Banner";
import { Experiencia } from "../components/Expriencia";
import Proyecto  from "../components/Proyect";


export function Home(): JSX.Element {
  return (
    <div>
      <Banner />
      <Experiencia />
      <Proyecto />
    </div>
  );
}
