import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import Header from "../components/Navigation";

const Home = () => {
  const { t } = useTranslation();

  return (
    <>
      <section
        id="home"
        className="min-h-screen border border-gray-400 mt-16 flex items-center justify-center text-center container mx-auto px-6"
      >
        <Header />
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-text">
            {t("homeTitle")}
          </h1>
          <p className="text-lg md:text-xl text-gray-600">
            {t("homeSubtitle")}
          </p>
        </motion.div>
      </section>
    </>
  );
};

export default Home;
