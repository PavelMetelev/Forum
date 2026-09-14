import { Shield } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Shield className="w-8 h-8 text-blue-500" />
            <span className="text-white font-bold text-xl tracking-tight">AdminScript AHK</span>
          </div>
          <div className="flex items-center space-x-4 md:space-x-8">
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-300 hover:text-white transition-colors">Функции</a>
              <a href="#instructions" className="text-gray-300 hover:text-white transition-colors">Инструкция</a>
              <a href="#install" className="text-gray-300 hover:text-white transition-colors">Установка</a>
            </div>
            <a 
              href="https://disk.yandex.ru/i/0BXSuGeoE7ErRQ" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-bold transition-all flex items-center gap-2 active:scale-95"
            >
              Скачать
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
