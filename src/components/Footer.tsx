import { Shield } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <Shield className="w-6 h-6 text-blue-500" />
            <span className="text-white font-bold text-lg tracking-tight">AdminScript AHK</span>
          </div>
          
          <div className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Все права защищены. Разработано для администраторов.
          </div>
          
          <div className="flex gap-6">
            <a 
              href="https://vk.ru/howorld" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-blue-500 transition-colors font-medium flex items-center gap-2"
            >
              VK Group
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
