import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { about } = portfolioData;
  const { t } = useTranslation();

  return (
    <section id="about" className="py-24 px-6 max-w-7xl mx-auto font-lao">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative z-10 rounded-2xl overflow-hidden border-2 border-white/10 shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop" 
              alt="Working" 
              className="w-full h-auto"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary/20 rounded-full blur-3xl -z-10" />
          <div className="absolute -top-6 -left-6 w-48 h-48 bg-secondary/20 rounded-full blur-3xl -z-10" />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <h2 className="text-4xl font-bold">{t('about.title_1')} <span className="text-primary">{t('about.title_2')}</span></h2>
            <p className="text-text-muted text-lg leading-relaxed">
              {t('about.bio')}
            </p>
            
          </div>

          <div className="grid grid-cols-2 gap-6">
            
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1 * 0.1 }}
                className="glass p-6 rounded-2xl text-center group hover:border-primary/50 transition-all"
              >
                <div className="text-3xl font-bold text-primary mb-1">{about.stats[0].value}</div>
                <div className="text-text-muted text-sm uppercase tracking-wider">{t("about.year_learning")}</div>
              </motion.div>
            
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1 * 0.1 }}
                className="glass p-6 rounded-2xl text-center group hover:border-primary/50 transition-all"
              >
                <div className="text-3xl font-bold text-primary mb-1">{about.stats[1].value}</div>
                <div className="text-text-muted text-sm uppercase tracking-wider">{t("about.project")}</div>
              </motion.div>
            
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1 * 0.1 }}
                className="glass p-6 rounded-2xl text-center group hover:border-primary/50 transition-all"
              >
                <div className="text-3xl font-bold text-primary mb-1">{about.stats[2].value}</div>
                <div className="text-text-muted text-sm uppercase tracking-wider">{t("about.technologies")}</div>
              </motion.div>
            
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold">{t('about.interests')}</h3>
            <div className="flex flex-wrap gap-3">
              {about.interests.map((interest) => (
                <span key={interest} className="px-4 py-2 glass rounded-full text-sm text-text-muted hover:text-primary transition-colors cursor-default">
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
