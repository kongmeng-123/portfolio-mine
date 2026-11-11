import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();

  return (
    <section id="contact" className="py-24 px-6 max-w-7xl mx-auto font-lao">
      <div className="text-center mb-16 space-y-4">
        <h2 className="text-4xl font-bold">{t('contact.title_1')} <span className="text-primary">{t('contact.title_2')}</span></h2>
        <p className="text-text-muted max-w-2xl mx-auto">
          {t('contact.subtitle')}
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div className="glass p-8 rounded-3xl space-y-6">
            <h3 className="text-2xl font-bold">{t('contact.info_title')}</h3>
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-text-muted">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs uppercase font-bold opacity-60">{t('contact.email_label')}</p>
                  <p className="text-text-main">kongmengthor660@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-text-muted">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-xs uppercase font-bold opacity-60">{t('contact.phone_label')}</p>
                  <p className="text-text-main">+85620 78928459</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-text-muted">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-xs uppercase font-bold opacity-60">{t('contact.location_label')}</p>
                  <p className="text-text-main">{t('contact.location')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <motion.form 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass p-8 rounded-3xl space-y-6"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-text-muted">{t('contact.form_name')}</label>
              <input 
                type="text" 
                placeholder={t('contact.form_name_placeholder')} 
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-text-main focus:outline-none focus:border-primary transition-colors"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-text-muted">{t('contact.form_email')}</label>
              <input 
                type="email" 
                placeholder={t('contact.form_email_placeholder')} 
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-text-main focus:outline-none focus:border-primary transition-colors"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-text-muted">{t('contact.form_message')}</label>
            <textarea 
              rows={5} 
              placeholder={t('contact.form_message_placeholder')} 
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-text-main focus:outline-none focus:border-primary transition-colors resize-none"
            />
          </div>
          <button className="w-full py-4 bg-primary text-background font-bold rounded-xl hover:bg-primary/90 transition-all flex items-center justify-center gap-2 group">
            {t('contact.send')} <Send size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
