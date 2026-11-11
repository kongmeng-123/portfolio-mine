import { type ReactNode } from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="py-12 px-6 border-t border-white/10 bg-background">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left space-y-2">
          <div className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            PORTFOLIO.
          </div>
          <p className="text-text-muted text-sm">
            © {new Date().getFullYear()} {t('footer.rights')}
          </p>
        </div>

        <div className="flex gap-6">
          <SocialLink icon={<FaGithub size={20} />} href="#" />
          <SocialLink icon={<FaFacebook size={20} />} href="https://www.facebook.com/kongmeng.thor.92" />
          <SocialLink icon={<Mail size={20} />} href="#" />
        </div>

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="p-3 glass rounded-full text-text-muted hover:text-primary transition-all hover:-translate-y-1"
        >
          <ArrowUp size={20} />
        </button>
      </div>
    </footer>
  );
};

const SocialLink = ({ icon, href }: { icon: ReactNode, href: string }) => (
  <a href={href} className="text-text-muted hover:text-primary transition-colors">
    {icon}
  </a>
);

export default Footer;
