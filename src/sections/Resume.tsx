

import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FiDownload } from 'react-icons/fi';
import GlassDownloadButton from '../components/GlassDownloadButton'; 
const Resume = () => {
  const { t, i18n } = useTranslation();

  
  const isSpanish = i18n.language.startsWith('es');
  const cvFile = isSpanish 
    ? '/CV_Karol_Gomez_ES.pdf' 
    : '/CV_Karol_Gomez_EN.pdf';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="py-5"
    >
      <h2 className="text-4xl font-bold mb-8 text-text">{t('resumeTitle')}</h2>

      {/* Download Buttons */}
      <div className="flex justify-start items-center  mb-8">
        <GlassDownloadButton
          href={cvFile}
          download
          label={t('downloadCV')}
        
          icon={<FiDownload size="100%" />} 
         
          color="purple"
        />
      </div>

      {/* Work Experience */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-text mb-4">{t('experienceTitle')}</h3>
        <div className="bg-[#232324 ] border border-gray-700 p-6 rounded-lg">
          <h4 className="text-xl font-semibold text-text">Desarrolladora de software</h4>
          <p className="text-primary mb-1">Marabunta Agencia Creativa | Enero 2025 – Septiembre 2025</p>
          <ul className="list-disc list-inside text-text-secondary space-y-2">
            <li>Desarrollo de sitios web con React, Next.js y Tailwind CSS.</li>
            <li>Implementación de interfaces responsivas y optimizadas para SEO.</li>
            <li>Integración de contenido multimedia y animaciones.</li>
            <li>Despliegue de sitios en Vercel y versionamiento con Git.</li>
          </ul>
        </div>
      </div>

      {/* Education & Certifications */}
      <div>
        <h3 className="text-2xl font-bold text-text mb-4">{t('educationTitle')}</h3>
        <div className="bg-[#232324 ] border border-gray-700 p-6 rounded-lg space-y-6"> {/* Añadimos space-y-6 para separar los bloques */}
          
          
          <div>
            <h4 className="text-xl font-semibold text-text">{t('senaTitle')}</h4>
            <p className="text-primary">{t('senaInstitution')}</p>
          </div>

        
          <div>
            <h4 className="text-xl font-semibold text-text">Técnico en Programación de Software</h4>
            <p className="text-primary mb-1">Politécnico Pio | 2024 – 2025 (Culminado)</p>
          </div>

        
          <div className="border-t border-gray-700"></div>

        
          <div>
            <h4 className="text-lg font-semibold text-text mb-3">{t('certsTitle')}</h4>
            <ul className="list-disc list-inside text-text-secondary space-y-2">
              <li>{t('certAgile')}</li>
              <li>{t('certFigma')}</li>
              <li>{t('certProgramming')}</li>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Resume;