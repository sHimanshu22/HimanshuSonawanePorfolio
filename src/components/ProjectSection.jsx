import { ArrowRight, ExternalLink, Github } from "lucide-react";
import WearxImage from "../../public/ProjectImages/WearX.png";
import WorldAtlas from "../../public/ProjectImages/WorldAtlas.png";
import URLShortner from "../../public/ProjectImages/URLShortner.png";
import ImageUploade from "../../public/ProjectImages/ImageUploderPlatform.png"
import AuthWithImage from "../../public/ProjectImages/AuthWithImage"

const projects = [
  {
    id: 1,
    title: "WearX - Ecommerce Shop",
    description:
      "Responsive ecommerce app with cart, payments, authentication, and admin panel.",
    image: WearxImage,
    tags: ["ReactJS", "TailwindCSS", "NodeJS", "MongoDB", "Redux"],
    demoUrl: "https://wearxstore.vercel.app/",
    githubUrl: "https://github.com/sHimanshu22/WearX",
  },
  {
    id: 2,
    title: "WorldAtlas - Explore Nations",
    description:
      "Multi-page React application with routing, filtering, and Axios API integration",
    image: WorldAtlas,
    tags: ["React 19", "HTML", "CSS", "JavaScript"],
    demoUrl: "https://world-atlas-zeta-three.vercel.app/",
    githubUrl: "https://github.com/sHimanshu22/AuthWithImage",
  },
  {
    id: 3,
    title: "URL Shortner Platform",
    description:
      "URL shortener generating short links and redirecting efficiently using Node.js, EJS and MongoDB for Storing links",
    image: URLShortner,
    tags: ["EJS", "Node.js", "MongoDB", "CSS"],
    demoUrl: "https://urlshortner-1xqn.onrender.com",
    githubUrl: "https://github.com/sHimanshu22/URLshortnerMain",
  },
  {
    id: 4,
    title: "Image Uploader",
    description:
      "Image Uploding platform Using Cloudinary for Storing Images with Backend In NodeJs",
    image: ImageUploade,
    tags: ["EJS", "Node.js", "MongoDB", "CSS", "Cloudinary"],
    demoUrl: "https://image-uploader-c2la.onrender.com",
    githubUrl: "https://github.com/sHimanshu22/ImageUploader",
  },
  {
    id: 4,
    title: "Auth With Image Upload",
    description:
      "Authentication with Image Uploding Using Cloudinary for Storing Images with Backend In NodeJs",
    image: AuthWithImage,
    tags: ["EJS", "Node.js", "MongoDB", "CSS", "Cloudinary"],
    demoUrl: "https://authwithimage.onrender.com/",
    githubUrl: "https://github.com/sHimanshu22/ImageUploader",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/machadop1407"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
