
import { Timeline_Example } from "./Timeline";

export function Experiencia(): JSX.Element {
  return (
    <section id="experiencia" className=" content-center justify-center items-center flex flex-col  h-[50vh]  mt-5 text-white ">
      <div className="flex w-full">
      <h2 className="font-bold text-4xl text-center  w-full mb-10">Experiencia </h2>
        
      </div>
      <div className="flex justify-start w-[80%] scale-110 " >
        <Timeline_Example />
      </div>
    </section>
  );
}
