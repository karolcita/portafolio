import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";
import { projectsData } from "../data/projects";

const Projects = () => {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="py-5"
    >
      <h2 className="text-4xl font-bold mb-8 text-text">
        {t("projectsTitle")}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
