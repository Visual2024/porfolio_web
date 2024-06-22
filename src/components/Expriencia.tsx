
import { Timeline_Example } from "./Timeline";

export function Experiencia(): JSX.Element {
  return (
    <section className="flex flex-col ml-[93px]  h-[50vh]  gap-2 mt-20 text-white ">
      <div className="flex w-full">
        <a>
          <h2 className="font-bold text-4xl"></h2>
        </a>
      </div>
      <div className="flex justify-start w-[80%] scale-110 " >
        <Timeline_Example />
      </div>
    </section>
  );
}
