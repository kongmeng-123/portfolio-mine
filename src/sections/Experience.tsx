import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Experience = () => {
  // const { experience } = portfolioData;
  const { t } = useTranslation();
  const experience = t('experience.list', { returnObjects: true })

  return (
    <section id="experience" className="py-24 px-6 max-w-4xl mx-auto font-lao">
      <div className="text-center mb-16 space-y-4">
        <h2 className="text-4xl font-bold">{t('experience.title_1')} <span className="text-primary">{t('experience.title_2')}</span></h2>
        <p className="text-text-muted">{t('experience.subtitle')}</p>
      </div>

      <div className="relative space-y-12 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-primary before:via-secondary before:to-transparent">
        {Array.isArray(experience) && experience.map((exp, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group`}
          >
            {/* Dot */}
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-primary bg-background absolute left-0 md:left-1/2 md:-translate-x-1/2 z-10 group-hover:bg-primary transition-colors duration-300">
              <div className="w-2 h-2 bg-primary rounded-full group-hover:bg-background" />
            </div>

            <div className={`w-5/6 pl-14 md:pl-0 md:w-1/2 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
              <div className="glass p-6 rounded-2xl hover:border-primary/50 transition-all">
                <span className="text-primary text-sm font-bold">{exp.year}</span>
                <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                <div className="text-text-muted text-sm font-medium mb-3">{exp.project}</div>
                <p className="text-text-muted text-sm leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
