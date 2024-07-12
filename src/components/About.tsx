export function About(): JSX.Element {
  return (
    <div className="gap-1 mt-6 flex flex-row w-[60%] ">
      <a href="#sobre"></a>
        <h1 className="font-bold text-2xl mb-2 mr-10 text-end w-[100%]">Sobre mi</h1>
      <div className="flex flex-col w-full items-end">
        <p className="mb-4 w-[100%] mr-10 text-end">
          Me enfoco en poder aportar valor al equipo y cretividad, para mi son
          dos partes fundamentales para el desarrollo de cualquier producto
          digital, mi enfoque es poder tener las mejores herramientas que el
          mercado necesita.
        </p>
      </div>
    </div>
  );
}
