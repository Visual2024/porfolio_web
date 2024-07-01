export function Navbar(): JSX.Element {
  return (
    <header className="flex gap-2 relative pt-2 justify-center w-ful mt-5 ">
      <div className="w-96 h-16 bg-neutral-500 blur-2xl absolute"></div>
      <nav className="relative p-1 bg-gr inset-0 flex flex-row rounded-2xl w-96 justify-center">
        <ul className="flex gap-2 bg-transparent">
          <li className="flex gap-2 justify-between z-10">
            <a href="#inicio" className="flex m-2 text-white hover:bg-gray-600 items-center p-3 duration-300 rounded-md text-center">
              Inicio
            </a>
          </li>
          <li>
            <a href="#experiencia" className="flex m-2 text-white hover:bg-gray-600 items-center p-3 duration-300 rounded-md text-center">
              Experiencia
            </a>
          </li>
          <li>
            <a href="#proyecto" className="flex m-2 text-white hover:bg-gray-600 items-center p-3 duration-300 rounded-md text-center">
              Proyecto
            </a>
          </li>
          <li>
            <a href="#blog" className="flex m-2 text-white hover:bg-gray-600 items-center p-3 duration-300 rounded-md text-center">
              Blog
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
