interface Project {
    title: string;
    description: string;
    link: string;
    image: string;
    technologies: string[];
    codeLink: string;
  }
  
  const projects: Project[] = [
    {
      title: 'Easy Turnos',
      description: 'Sistema de gestión de turnos fácil de usar.',
      link: 'https://easy-turnos.vercel.app/',
      image: 'easy_turnos.png',
      technologies: ['Tailwind', 'React JS', 'TypeScript', 'Material UI'],
      codeLink: 'https://github.com/NoCountrySimulacion/EasyTurnos/tree/frontend',
    },
    {
      title: 'Gestión de RRHH en la nube',
      description: 'Esta aplicación web es del rubro HRTech, está diseñada para ayudar a las empresas a gestionar sus recursos humanos de manera simple y eficiente',
      link: 'https://gestion-de-recursos-humanos-en-la-nube-facundodevs-projects.vercel.app/',
      image: 'RHnexo.png',
      technologies: [ 'Tailwind', 'JavaScript', 'React JS', 'Material UI'],
      codeLink: 'https://github.com/No-Country/c17-67-t-python',
    },
    {
      title: 'Tienda Virtual',
      description: 'Descripción del Proyecto 3.',
      link: 'https://tienda-web.vercel.app/index.html',
      image: 'ecommerce.png',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      codeLink: 'https://github.com/Visual2024/PreEntrega3---Facundo-Pettersson',
    },
  ];
  
  const Projects: React.FC = () => {
    return (
      <div className="p-6 min-h-screen">
        <h1 className="text-4xl font-bold text-center text-white mb-8">Proyectos Recientes</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <img 
                src={project.image} 
                alt={`${project.title} preview`} 
                className="w-full h-48 object-cover rounded-t-lg mb-4"
              />
              <h2 className="text-2xl font-semibold text-white mb-2">{project.title}</h2>
              <div className="flex flex-wrap gap-2 mb-1">
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className="bg-gray-700 text-white px-2 py-1 rounded-full text-sm">{tech}</span>
                ))}
              </div>
              <div className="flex justify-between mt-10 ">
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="  bg-blue-500  text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
                >
                  Ver Proyecto
                </a>
                <a 
                  href={project.codeLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-300"
                >
                  Ver Código
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Projects;
  