import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const skillsData = {
  frontend: {
    titleKey: "frontendTitle",
    emoji: "💻",
    skills: [
      { name: "Figma", emoji: "🎨" },
      { name: "TypeScript", emoji: "🔷" },
      { name: "React", emoji: "⚛️" },
      { name: "Next.js", emoji: "⚫" },
      { name: "JavaScript", emoji: "🌐" },
      { name: "Tailwind CSS", emoji: "🌬️" },
      { name: "Vitest", emoji: "🧪" },
    ],
  },
  backend: {
    titleKey: "backendTitle",
    emoji: "⚙️",
    skills: [
      { name: "Python", emoji: "🐍" },
      { name: "Node.js", emoji: "🌐" },
      { name: "Express", emoji: "🌌" },
      { name: "GitHub", emoji: "🐙" },
    ],
  },
  database: {
    titleKey: "databaseTitle",
    emoji: "🗄️",
    skills: [
      { name: "MongoDB", emoji: "🌲" },

      { name: "MySQL", emoji: "🖼" },
      { name: "PostgreSQL", emoji: "🎇" },
    ],
  },
};

const SkillCard = ({
  title,
  emoji,
  skills,
}: {
  title: string;
  emoji: string;
  skills: { name: string; emoji: string }[];
}) => (
  <div className="bg-[#232324 ]   backdrop-blur-sm border border-gray-700 rounded-lg p-6">
    <h3 className="text-xl font-bold text-text mb-4">
      <span className="mr-3 text-2xl">{emoji}</span>
      {title}
    </h3>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <span
          key={skill.name}
          className="bg-[#262626]  border border-gray-700 text-white font-medium px-3 py-1 rounded-md text-sm"
        >
          <span className="mr-2">{skill.emoji}</span>
          {skill.name}
        </span>
      ))}
    </div>
  </div>
);

const About = () => {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="py-5"
    >
      <div>
        <h2 className="text-4xl font-bold mb-6  text-white">
          {" "}
          {/* Title with primary color and more bottom margin */}
          {t("aboutTitle")}
        </h2>
        <p className="text-lg text-text-secondary leading-relaxed">
          {t("aboutText")}
        </p>
      </div>

      <div className="mt-12 ">
        <h2 className="text-3xl font-bold mb-6 text-white">
          {t("skillsTitle")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.values(skillsData).map((category) => (
            <SkillCard
              key={category.titleKey}
              title={t(category.titleKey)}
              emoji={category.emoji}
              skills={category.skills}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default About;
