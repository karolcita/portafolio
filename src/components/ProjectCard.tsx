import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { useTranslation } from "react-i18next";
import type { Project } from "../data/projects";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const { i18n } = useTranslation();
  const title = i18n.language.startsWith("es")
    ? project.title_es
    : project.title_en;
  const description = i18n.language.startsWith("es")
    ? project.description_es
    : project.description_en;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-[#1c1c1d]  rounded-lg  border border-gray-600 hover:border-card transition-colors overflow-hidden"
    >
      <div className="aspect-video overflow-hidden">
        <img
          src={project.imageUrl}
          alt={`Screenshot of ${title}`}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-6 ">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-text">{title}</h3>
          <div className="flex items-center space-x-4 shrink-0 ml-4">
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Repository"
                className="text-text-secondary hover:text-primary transition-colors"
              >
                <FiGithub size={22} />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Live Demo"
                className="text-text-secondary hover:text-primary transition-colors"
              >
                <FiExternalLink size={22} />
              </a>
            )}
          </div>
        </div>
        <p className="text-text-secondary mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="bg-primary/10 text-primary text-sm font-medium px-3 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
