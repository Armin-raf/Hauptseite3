
import React from 'react';
import HighlightCard from './ui/highlight-card';
import { Repeat, MessageSquare, Mic, Server } from 'lucide-react';

const Solutions: React.FC = () => {
  const items = [
    {
      icon: <Repeat className="w-8 h-8 text-white" />,
      title: 'Prozess-Automatisierung',
      description: [
        'KI-gesteuerte Workflows,',
        'Automatisierung repetitiver Aufgaben,',
        'Optimierung für HR & Finanzen'
      ],
      link: 'https://armin-raf.github.io/Blue-Process1/'
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-white" />,
      title: 'KI-ChatBots',
      description: [
        'Spezialisierte digitale Assistenten,',
        'Nutzung Ihrer Knowledge-Base,',
        'Lead-Qualifizierung rund um die Uhr'
      ],
      link: 'https://armin-raf.github.io/Blue-ChatBot1/'
    },
    {
      icon: <Mic className="w-8 h-8 text-white" />,
      title: 'KI-Voice Agents',
      description: [
        'Natürlich klingende Telefonie,',
        'Inbound & Outbound Lösungen,',
        'Sofortige Anliegenklärung'
      ],
      link: 'https://armin-raf.github.io/Blue-AI-Voice-Agent1/'
    },
    {
      icon: <Server className="w-8 h-8 text-white" />,
      title: 'Lokale / Offline KI',
      description: [
        'Für kritische Infrastrukturen,',
        'Betrieb im eigenen RZ,',
        'Maximale Datensouveränität'
      ],
      link: 'https://armin-raf.github.io/Lokal-ChatBot1/'
    },
  ];

  return (
    <section className="py-24 bg-white px-6 border-y border-slate-100" id="solutions">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-blue-50 text-primary mb-6 text-xs font-bold uppercase tracking-wider">Leistungsspektrum</div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4">Maßgeschneiderte KI-Lösungen</h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">Vom Web-Bot bis zur hochspezialisierten On-Premise Infrastruktur.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, i) => (
            <HighlightCard 
              key={i}
              title={item.title}
              description={item.description}
              icon={item.icon}
              link={item.link}
            />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a href="#contact" className="inline-flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all uppercase tracking-widest text-sm">
            Jetzt unverbindlich buchen
            <span className="material-symbols-outlined">arrow_forward</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
