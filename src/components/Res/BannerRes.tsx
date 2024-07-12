import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../css/toastify_custom.css";
import { Discord, Linkedin } from "../../assets/icons/Icons";
import { Email, GitHub } from "@mui/icons-material";

export const BannerRes = () => {
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
      <section className="flex flex-col items-center">
        <article className="flex flex-col items-center mt-5 ">
          <div className="items-center flex flex-col justify-center">
            <h1 className="
            text-4xl 
            text-[2.2rem] 
            text-center 
            font-bold 
            mb-3">
              Facundo Pettersson
            </h1>
            <h4 className="
            flex 
           
            m-4 ">
              <a
                href="#contacto"
                className="
                flex items-center 
                hover:bg-green-400/20 
                content-center 
                pt-1 
                pb-1 
                w-max text-green-500 
                animate-background-shine cursor-pointer justify-center 
                rounded-md border border-green-500 
                bg-[linear-gradient(110deg,#22c55e1a,50%,#22c55e66,55%,#22c55e1a)] 
                bg-[length:250%_100%] px-2.5 py-0.5 text-sm 
                "
              >
                Desarrollador Web
              </a>
            </h4>
          </div>

          <div className="
            flex 
          flex-col
          mt-4 
          items-center 
          justify-center 
          "
          >
            <span className="flex items-center justify-between rounded-md border border-yellow-500 bg-yellow-500/10 px-2.5 py-0.5 text-sm text-yellow-500">
              {email}
              <button
                onClick={handleCopy}
                className="ml-2 p-1 border-yellow-500 px-1.5 text-yellow-500 transition hover:scale-110 hover:bg-yellow-500/20"
              >
                <Email width={16} height={24} />
              </button>
            </span>

            <div className="flex flex-row mt-5 pt-5 ">
              <a
                href="https://www.linkedin.com/in/facundo-pettersson-ba219b22a/" 
                target="_blank"
                className="flex items-center space-x-2 bg-blue-900 transition-all hover:scale-105 hover:bg-white/10 cursor-pointer rounded-md border border-blue-900 text-sm px-2.5"
              >
                LinkedIn
                <Linkedin width={16} height={24} />
              </a>
              <a
                href="https://github.com/Visual2024"
                target="_blank"
                className="flex items-center space-x-2 bg-blue-900 transition-all hover:scale-105 hover:bg-white/10 cursor-pointer rounded-md border border-blue-900 text-sm px-2.5"
              >
                GitHub
                <GitHub width={16} height={24} />
              </a>
              <a
                href="#"
                target="_blank"
                className="flex items-center space-x-2 bg-blue-900 transition-all hover:scale-105 hover:bg-white/10 cursor-pointer rounded-md border border-blue-900 text-sm px-2.5"
              >
                Discord
                <Discord width={16} height={24} />
              </a>
            </div>

            <div className="hidden md:flex mt-4 space-x-2">
              <a
                href="#"
                className="flex items-center space-x-2 bg-blue-900 transition-all hover:scale-105 hover:bg-white/10 cursor-pointer rounded-md border border-blue-900 text-sm px-2.5"
              >
                LinkedIn
                <Linkedin width={16} height={24} />
              </a>
              <a
                href="#"
                className="flex items-center space-x-2 bg-blue-900 transition-all hover:scale-105 hover:bg-white/10 cursor-pointer rounded-md border border-blue-900 text-sm px-2.5"
              >
                GitHub
                <GitHub width={16} height={24} />
              </a>
              <a
                href="#"
                className="flex items-center space-x-2 bg-blue-900 transition-all hover:scale-105 hover:bg-white/10 cursor-pointer rounded-md border border-blue-900 text-sm px-2.5"
              >
                Discord
                <Discord width={16} height={24} />
              </a>
            </div>
          </div>
        </article>
      </section>
      <ToastContainer />
    </main>
  );
};

BannerRes.propTypes = {};
