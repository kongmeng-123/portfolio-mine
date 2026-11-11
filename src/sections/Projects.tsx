import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { portfolioData } from '../data/portfolio';
import { DiGithub } from 'react-icons/di';
import { useTranslation } from 'react-i18next';

const Projects = () => {
  const { projects } = portfolioData;
  const { t } = useTranslation();

  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto font-lao">
      <div className="text-center mb-16 space-y-4">
        <h2 className="text-4xl font-bold">{t('projects.title_1')} <span className="text-primary">{t('projects.title_2')}</span></h2>
        <p className="text-text-muted max-w-2xl mx-auto">
          {t('projects.subtitle')}
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative glass rounded-3xl overflow-hidden hover:border-primary/50 transition-all"
          >
            <div className="relative h-64 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60" />
            </div>

            <div className="p-8 space-y-4">
              <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-text-muted leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map(techItem => (
                  <span key={techItem} className="px-3 py-1 bg-white/5 rounded-full text-xs font-medium text-text-muted border border-white/10">
                    {techItem}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 pt-4">
                <a href={project.link} className="flex items-center gap-2 text-sm font-bold text-primary hover:underline">
                  <ExternalLink size={16} /> {t('projects.live_demo')}
                </a>
                <a href={project.github} className="flex items-center gap-2 text-sm font-bold text-text-muted hover:text-primary hover:underline">
                  <DiGithub size={16} /> {t('projects.source_code')}
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
