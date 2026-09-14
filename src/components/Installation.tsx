import { CheckCircle2 } from 'lucide-react';

const Installation = () => {
  return (
    <section id="install" className="py-24 bg-[#0d0d0d] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Как начать пользоваться?
            </h2>
            <p className="text-gray-400 mb-8 text-lg">
              Установка и настройка займет не более 2-х минут. Следуйте простой инструкции ниже:
            </p>
            <div className="space-y-8">
              {/* Step 1 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-blue-500 font-bold">1</div>
                <div>
                  <h4 className="text-white font-bold mb-1">Подготовка к скачиванию</h4>
                  <p className="text-gray-500 text-sm">
                    Нажмите на кнопку скачать внизу страницы в пункте 
                    <span className="inline-block border border-red-600 px-1.5 py-0.5 rounded text-red-500 font-bold mx-1">3</span> 
                    и получите файл .ahk
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-blue-500 font-bold">2</div>
                <div>
                  <h4 className="text-white font-bold mb-1">Установите AutoHotkey</h4>
                  <p className="text-gray-500 text-sm mb-2">Если у вас еще не установлен AHK, скачайте его по ссылке ниже:</p>
                  <a 
                    href="https://www.autohotkey.com/download/ahk-v2.exe" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block font-black text-lg animate-shimmer-red uppercase tracking-wider hover:scale-105 transition-transform"
                  >
                    [ СКАЧАТЬ AHK V2 ]
                  </a>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-600/20 border border-red-600/50 flex items-center justify-center text-red-500 font-bold">3</div>
                <div>
                  <h4 className="text-white font-bold mb-1">Скачивание и запуск</h4>
                  <div className="mb-4 mt-2">
                    <a 
                      href="https://disk.yandex.ru/i/0BXSuGeoE7ErRQ" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-bold transition-all active:scale-95 shadow-lg"
                    >
                      Скачать скрипт (.ahk)
                    </a>
                  </div>
                  <p className="text-gray-500 text-sm mb-2">После скачивания запустите файл, и он появится в трее.</p>
                  <div className="p-2 bg-red-600/10 border border-red-600/20 rounded text-xs font-bold text-red-500 uppercase">
                    Примечание: запуск должен происходить строго от имени администратора!
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-blue-500 font-bold">4</div>
                <div>
                  <h4 className="text-white font-bold mb-1">Настройте под себя</h4>
                  <p className="text-gray-500 text-sm">Откройте файл через любой текстовый редактор, чтобы изменить горячие клавиши.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 w-full">
            <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl group">
               <img 
                 src="/security.jpg" 
                 alt="Security Check" 
                 className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
               />
               <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-6">
                  <div className="p-8 bg-black/60 backdrop-blur-xl rounded-xl border border-white/10 max-w-sm">
                    <div className="flex items-center gap-3 mb-4 text-green-500">
                        <CheckCircle2 />
                        <span className="font-bold text-lg">Скрипт проверен</span>
                    </div>
                    <p className="text-gray-300">
                        Файл прошел проверку на VirusTotal и абсолютно безопасен для вашего ПК.
                    </p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Installation;
