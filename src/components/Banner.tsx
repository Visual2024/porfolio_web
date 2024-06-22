import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../css/toastify_custom.css";

export const Banner = () => {
  const email = "petterssonfacundo@gmail.com";
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);

      toast.success("Correo copiado al portapapeles!", {
        className: "custom-toast custom-toast-success",
      });
    } catch (err) {
      toast.error("Error al copiar el correo.");
    }
  };

  return (
    <main className="">
      <section className="pointer-events-none absolute h-screen object-cover ">
        <img
          src="background.webp"
          alt=""
          className="fixed h-screen w-screen object-cover opacity-20 blur-3xl "
        />
      </section>
      <section className="flex flex-row ">
        <article className="flex flex-col items-center mt-32  ">
          <div className="flex flex-col mb-1 ">
            <h1 className="text-5xl font-bold mb-3">Facundo Pettersson</h1>
            <h4 className="font-semibold text-xl ">
              Desarrollador Web
              <a
                href=""
                className="ml-3 hover:scale-125 flex items-center hover:bg-green-400/20  content-center pt-1 pb-1  w-max sm:inline text-green-500 animate-background-shine cursor-pointer justify-center rounded-md border border-green-500 bg-[linear-gradient(110deg,#22c55e1a,50%,#22c55e66,55%,#22c55e1a)] bg-[length:250%_100%] px-2.5 py-0.5 text-sm"
              >
                Disponible para nuevos proyectos
              </a>
            </h4>
          </div>
          {/* Contacto */}
          <div className="flex flex-row mt-4 ml-[90px] items-center">
            <span className="flex items-center justify-between rounded-s-md  border rounded-md border-yellow-500 bg-yellow-500/10 ps-2.5   py-0.5 text-sm text-yellow-500">
              {email}
              <button
                onClick={handleCopy}
                className="flex justify-end  ml-2  p-1  border-yellow-500  px-1.5  text-yellow-500 transition  hover:scale-110 hover:bg-yellow-500/20 "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="tabler-icon tabler-icon-copy "
                >
                  <path d="M7 7m0 2.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667z"></path>
                  <path d="M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1"></path>
                </svg>
              </button>
              <ToastContainer />
            </span>
            <a
              href=""
              className="ml-2 flex items-center space-x-0 border-yello-400 bg-blue-900 transition-all hover:scale-105 hover:bg-white/10 sm:space-x-2 cursor-pointer rounded-md border text-sm px-2.5"
            >
              Linkendi
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="tabler-icon tabler-icon-brand-linkedin ml-1"
              >
                <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                <path d="M8 11l0 5"></path>
                <path d="M8 8l0 .01"></path>
                <path d="M12 16l0 -5"></path>
                <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
              </svg>
            </a>
            <a
              href=""
              className="ml-2 flex items-center space-x-0 border-white bg-blue-900 transition-all hover:scale-105 hover:bg-white/10 sm:space-x-2 cursor-pointer rounded-md border text-sm px-2.5"
            >
              GitHub
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="tabler-icon tabler-icon-brand-github ml-1"
              >
                <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
              </svg>
            </a>
            <a
              href=""
              className="ml-2 flex items-center space-x-0 border-white bg-blue-900 transition-all hover:scale-105 hover:bg-white/10 sm:space-x-2 cursor-pointer rounded-md border text-sm px-2.5"
            >
              Discord
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="tabler-icon tabler-icon-brand-discord ml-1 "
              >
                <path d="M8 12a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"></path>
                <path d="M14 12a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"></path>
                <path d="M15.5 17c0 1 1.5 3 2 3c1.5 0 2.833 -1.667 3.5 -3c.667 -1.667 .5 -5.833 -1.5 -11.5c-1.457 -1.015 -3 -1.34 -4.5 -1.5l-.972 1.923a11.913 11.913 0 0 0 -4.053 0l-.975 -1.923c-1.5 .16 -3.043 .485 -4.5 1.5c-2 5.667 -2.167 9.833 -1.5 11.5c.667 1.333 2 3 3.5 3c.5 0 2 -2 2 -3"></path>
                <path d="M7 16.5c3.5 1 6.5 1 10 0"></path>
              </svg>
            </a>
          </div>
        </article>
        <div className="ml-[11.5rem] mt-10">
          <img src="img-2.webp" alt="" width={525} />
        </div>
      </section>
    </main>
  );
};

Banner.propTypes = {};
