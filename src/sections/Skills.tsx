import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import { useTranslation } from 'react-i18next';

const Skills = () => {
  const { skills } = portfolioData;
  const { t } = useTranslation();

  const SkillCategory = ({ title, skillsList }: { title: string, skillsList: any[] }) => (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="glass p-8 rounded-3xl space-y-6 hover:border-primary/50 transition-all"
    >
      <h3 className="text-2xl font-bold mb-6">{title}</h3>
      <div className="space-y-6">
        {skillsList.map((skill) => (
          <div key={skill.name} className="space-y-2">
            <div className="flex justify-between text-sm font-medium">
              <span>{skill.name}</span>
              <span className="text-primary">{skill.percentage}%</span>
            </div>
            <div className="h-2 bg-white/10 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.percentage}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 }}
                className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
              />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );

  return (
    <section id="skills" className="py-24 px-6 max-w-7xl mx-auto font-lao">
      <div className="text-center mb-16 space-y-4">
        <h2 className="text-4xl font-bold">{t('skills.title_1')} <span className="text-primary">{t('skills.title_2')}</span></h2>
        <p className="text-text-muted max-w-2xl mx-auto">
          {t('skills.subtitle')}
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <SkillCategory title={t('skills.frontend')} skillsList={skills.frontend} />
        <SkillCategory title={t('skills.backend')} skillsList={skills.backend} />
        <SkillCategory title={t('skills.tools')} skillsList={skills.tools} />
      </div>
    </section>
  );
};

export default Skills;
