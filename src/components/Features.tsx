import { 
  ShieldCheck, 
  Zap, 
  Settings, 
  MessageSquare 
} from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    title: 'Система наказаний',
    description: 'Моментальная выдача мутов, киков и банов одной кнопкой. Автоматическая форма подачи наказания.',
    icon: ShieldCheck,
    color: 'text-red-500',
    bg: 'bg-red-500/10'
  },
  {
    title: 'Блокировка чата',
    description: 'Быстрые команды для выдачи мута за мат, капс, флуд или оскорбления с авто-причиной.',
    icon: MessageSquare,
    color: 'text-yellow-500',
    bg: 'bg-yellow-500/10'
  },
  {
    title: 'Блокировка аккаунтов',
    description: 'Система быстрой выдачи краткосрочных и перманентных блокировок нарушителям через горячие клавиши.',
    icon: Zap,
    color: 'text-blue-500',
    bg: 'bg-blue-500/10'
  },
  {
    title: 'Умные бинды',
    description: 'Полная кастомизация клавиш под любые административные команды вашего сервера.',
    icon: Settings,
    color: 'text-emerald-500',
    bg: 'bg-emerald-500/10'
  }
];

const Features = () => {
  return (
    <section id="features" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Всё, что нужно администратору
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Наш скрипт разработан профессионалами для обеспечения максимального комфорта при администрировании серверов.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/50 transition-all hover:-translate-y-1 group"
            >
              <div className={`w-12 h-12 rounded-lg ${feature.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <feature.icon className={`w-6 h-6 ${feature.color}`} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
