import { motion } from 'framer-motion';
import { Keyboard, Info, AlertCircle, ShieldAlert } from 'lucide-react';

const Instructions = () => {
  const commands = [
    {
      key: 'F1',
      action: 'Вход / Выход',
      description: 'Используйте для активации или деактивации режима администратора.'
    },
    {
      key: 'F2',
      action: 'Список правил',
      description: 'Открывает полный список правил сервера для быстрой навигации.'
    }
  ];

  const combinations = [
    {
      input: '[Ник] [Пункт]',
      trigger: 'R',
      example: 'Ivan_Ivanov 3.3 + R',
      description: 'Выдача наказания по конкретному пункту правил.'
    },
    {
      input: '[Ник] unm',
      trigger: 'R',
      example: 'Ivan_Ivanov unm + R',
      description: 'Снять блокировку чата (размут) с игрока.'
    },
    {
      input: '[Ник] unb',
      trigger: 'R',
      example: 'Ivan_Ivanov unb + R',
      description: 'Снять блокировку аккаунта (разбан) игрока.'
    }
  ];

  return (
    <section id="instructions" className="py-24 bg-[#0a0a0a] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Инструкция по использованию
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Управление скриптом осуществляется через горячие клавиши. Никаких лишних окон — только скорость и эффективность.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Быстрые клавиши */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white flex items-center gap-2 mb-8">
              <Keyboard className="text-blue-500" />
              Горячие клавиши
            </h3>
            {commands.map((cmd, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-6 p-6 bg-white/5 rounded-xl border border-white/10 hover:border-blue-500/30 transition-colors"
              >
                <div className="flex-shrink-0 w-16 h-12 bg-blue-600 rounded flex items-center justify-center font-bold text-xl shadow-[0_0_15px_rgba(37,99,235,0.4)]">
                  {cmd.key}
                </div>
                <div>
                  <div className="text-white font-bold">{cmd.action}</div>
                  <div className="text-gray-500 text-sm">{cmd.description}</div>
                </div>
              </motion.div>
            ))}
            
            <div className="mt-8 p-6 bg-blue-500/5 rounded-xl border border-blue-500/20 flex gap-4">
              <Info className="text-blue-500 flex-shrink-0" />
              <p className="text-sm text-blue-200/70">
                Все команды работают мгновенно. Убедитесь, что окно игры активно перед использованием горячих клавиш.
              </p>
            </div>
          </div>

          {/* Комбинации наказаний */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white flex items-center gap-2 mb-8">
              <AlertCircle className="text-red-500" />
              Система команд и наказаний
            </h3>
            <div className="space-y-4">
              {combinations.map((combo, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-6 bg-white/5 rounded-xl border border-white/10"
                >
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <code className="px-3 py-1 bg-white/10 rounded text-blue-400 font-mono text-sm">{combo.input}</code>
                    <span className="text-gray-600">+</span>
                    <span className="w-8 h-8 bg-red-600 rounded flex items-center justify-center font-bold shadow-[0_0_10px_rgba(220,38,38,0.4)]">
                      {combo.trigger}
                    </span>
                  </div>
                  <div className="text-gray-300 font-medium mb-1">Пример: <span className="text-gray-500 italic">{combo.example}</span></div>
                  <div className="text-gray-500 text-sm">{combo.description}</div>
                </motion.div>
              ))}
            </div>
            
            <div className="p-4 bg-red-600/10 border border-red-600/30 rounded-xl flex gap-3 items-start">
              <Info className="text-red-500 shrink-0 mt-1" size={18} />
              <p className="text-sm text-red-200/80 leading-relaxed">
                <span className="font-bold text-red-500">Важно:</span> После нажатия клавиши <span className="font-bold text-white">R</span> команда будет выполнена и <span className="text-white font-medium">отправлена в чат мгновенно</span>, а игрок, которого вы вписали как нарушителя, <span className="text-white underline underline-offset-4 decoration-red-500 font-bold">моментально получит наказание</span> по пункту указанного правила.
              </p>
            </div>
          </div>
        </div>

        {/* Строгое предупреждение */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 p-8 bg-red-950/30 border-2 border-red-600/50 rounded-2xl flex flex-col md:flex-row items-center gap-6"
        >
          <div className="bg-red-600 p-4 rounded-full shadow-[0_0_20px_rgba(220,38,38,0.5)]">
            <ShieldAlert size={32} className="text-white" />
          </div>
          <div>
            <h4 className="text-2xl font-black text-red-500 uppercase tracking-tighter mb-2">Внимание всем администраторам!</h4>
            <p className="text-red-100 text-lg leading-snug">
              За выдачу наказания <span className="font-bold underline">без наличия доказательств</span> вы будете получать дисциплинарные взыскания 
              <span className="font-bold text-white text-xl"> от выговора до увольнения </span> с занимаемой должности.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Instructions;
