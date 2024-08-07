export function Navbar(): JSX.Element {
  return (
    <header className="flex gap-2 pt-2 justify-center w-full mt-5 relative ">
      <div className="w-96 h-14  bg-neutral-100 blur-2xl absolute"></div>
      <nav className="relative p-1 bg-gr inset-0 flex flex-row rounded-2xl w-full justify-center items-center">
        <ul className="flex gap-2 bg-transparent w-full justify-center">
          <li className="flex gap-2 justify-between z-10  ">
            <a href="#inicio" className="flex m-1 text-white hover:bg-gray-600 items-center p-3 duration-300 rounded-md text-center">
              Inicio
            </a>
          </li>
          <li>
            <a href="#sobre" className="flex m-1 text-white hover:bg-gray-600 items-center p-3 duration-300 rounded-md text-center">
              Sobre mi
            </a>
          </li>
          <li>
            <a href="#experiencia" className="flex m-1 text-white hover:bg-gray-600 items-center p-3 duration-300 rounded-md text-center">
              Experiencia
            </a>
          </li>
          <li>
            <a href="#proyecto" className="flex m-1 text-white hover:bg-gray-600 items-center p-3 duration-300 rounded-md text-center">
              Proyecto
            </a>
          </li>

        </ul>
      </nav>
    </header>
  );
}
