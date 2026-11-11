import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Services = () => {
  // const { services } = portfolioData;
  const { t } = useTranslation();
  const services = t('services.list', { returnObjects: true })

  return (
    <section id="services" className="py-24 px-6 max-w-7xl mx-auto font-lao">
      <div className="text-center mb-16 space-y-4">
        <h2 className="text-4xl font-bold">{t('services.title_1')} <span className="text-primary">{t('services.title_2')}</span></h2>
        <p className="text-text-muted max-w-2xl mx-auto">
          {t('services.subtitle')}
        </p>
      </div>

      <div className="grid md:grid-cols-4 gap-6">
        {Array.isArray(services) && services.map((service, index) => {
          const Icon = (LucideIcons as any)[service.icon];
          return (
            <motion.div 
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass p-8 rounded-3xl text-center space-y-4 hover:border-primary/50 transition-all group"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto text-primary group-hover:scale-110 transition-transform duration-300">
                {Icon && <Icon size={32} />}
              </div>
              <h3 className="text-xl font-bold">{service.title}</h3>
              <p className="text-text-muted text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
