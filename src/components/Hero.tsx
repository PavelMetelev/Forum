import { Download, ChevronRight, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a]">
      {/* Background Image with overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-40 bg-cover bg-center"
        style={{ backgroundImage: 'url("/hero-bg.jpg")' }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0a]/80 to-[#0a0a0a] z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 px-4 py-1 rounded-full mb-6 text-sm font-medium">
            <Zap size={14} />
            <span>Версия 2.1 уже доступна</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight">
            Наказывай нарушителей <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
              молниеносно
            </span>
          </h1>
          
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10">
            Профессиональный AHK скрипт для модерации. Выдавай муты, кики и блокировки аккаунтов за доли секунды. 
            Твой главный инструмент в борьбе за порядок на сервере.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="https://disk.yandex.ru/i/0BXSuGeoE7ErRQ" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-2xl text-xl font-black transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(37,99,235,0.5)] z-20"
            >
              <Download size={24} />
              Скачать скрипт
            </a>
            <a 
              href="#instructions"
              className="flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white px-10 py-5 rounded-2xl text-xl font-bold border border-white/10 transition-all z-20"
            >
              Инструкция
              <ChevronRight size={24} />
            </a>
          </div>
          <p className="mt-4 text-gray-500 text-sm">
            * Нажатие перенаправит вас на Яндекс.Диск для безопасного скачивания
          </p>
          
          <div className="mt-12 flex items-center justify-center gap-8 text-gray-500 text-sm">
            <div className="flex flex-col">
              <span className="text-white font-bold text-lg">1000+</span>
              <span>Использований</span>
            </div>
            <div className="w-px h-8 bg-white/10"></div>
            <div className="flex flex-col">
              <span className="text-white font-bold text-lg">100%</span>
              <span>Безопасно</span>
            </div>
            <div className="w-px h-8 bg-white/10"></div>
            <div className="flex flex-col">
              <span className="text-white font-bold text-lg">0.1ms</span>
              <span>Отклик</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
