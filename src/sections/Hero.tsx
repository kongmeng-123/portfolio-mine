import { useState, useEffect, type ReactNode } from 'react';
import { motion } from 'framer-motion';
import { FaFacebook, FaGithub} from 'react-icons/fa';
import { Mail, Download, Send } from 'lucide-react';
import { portfolioData } from '../data/portfolio';
import { LuShare2 } from 'react-icons/lu';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { role, description } = portfolioData;
  const { t } = useTranslation();

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 pt-20 font-lao">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] animate-pulse delay-700" />
      </div>

      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <div className="space-y-2">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-primary font-medium tracking-widest uppercase text-sm"
            >
              {t('hero.welcome')}
            </motion.p>
            <h1 className="text-5xl md:text-4xl lg:text-6xl font-bold text-text-main leading-snug">
              <span>
                 {t('hero.hello')} 
              </span> 
              <br />
              <span className="text-primary text-5xl md:text-5xl lg:text-7xl mt-100">{t('hero.my_name')}</span>
            </h1>
            <div className="h-8">
              <TypingEffect roles={role} />
            </div>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-text-muted text-lg max-w-xl leading-relaxed"
          >
            {t('hero.description')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <button className="px-8 py-3 bg-primary text-background font-bold rounded-full hover:bg-primary/90 transition-all flex items-center gap-2 group">
              <Download size={18} className="group-hover:translate-y-1 transition-transform" />
              {t('hero.download_cv')}
            </button>
            <button className="px-8 py-3 glass text-text-main font-bold rounded-full hover:bg-white/10 transition-all flex items-center gap-2 group">
              <Send size={18} className="group-hover:translate-x-1 transition-transform" />
              {t('hero.contact_me')}
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex gap-6 pt-4"
          >
            <SocialIcon icon={<FaGithub size={20} />} href="#" />
            <SocialIcon icon={<FaFacebook size={20} />} href="#" />
            <SocialIcon icon={<LuShare2 size={20} />} href="#" />
            <SocialIcon icon={<Mail size={20} />} href="#" />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-full blur-2xl opacity-30 animate-pulse" />
            <img
              src="src/assets/image-profile.png"
              alt="Profile"
              className="relative z-10 w-full h-full object-cover rounded-full border-4 border-white/10 shadow-2xl"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "https://via.placeholder.com/400";
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const TypingEffect = ({ roles }: { roles: string[] }) => {
  const [text, setText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(currentRole.substring(0, charIndex + 1));
        setCharIndex(prev => prev + 1);
        if (charIndex === currentRole.length - 1) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setText(currentRole.substring(0, charIndex - 1));
        setCharIndex(prev => prev - 1);
        if (charIndex === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 150);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex, roles]);

  return (
    <span className="text-3xl md:text-3xl lg:text-4xl font-bold text-text-muted">
      {text}
      <span className="text-primary animate-pulse">|</span>
    </span>
  );
};

const SocialIcon = ({ icon, href }: { icon: ReactNode, href: string }) => (
  <a
    href={href}
    className="p-3 glass rounded-full text-text-muted hover:text-primary hover:scale-110 transition-all"
  >
    {icon}
  </a>
);

export default Hero;
