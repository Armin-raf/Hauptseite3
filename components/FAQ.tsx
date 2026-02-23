
import React from 'react';
import { FAQItem } from '../types';

const FAQ: React.FC = () => {
  const faqs: FAQItem[] = [
    {
      q: 'Wie sicher sind meine Daten?',
      a: 'Sicherheit hat bei uns höchste Priorität. Blue ChatBot ist vollständig DSGVO-konform. Alle Daten werden auf verschlüsselten Servern innerhalb Deutschlands (Standort Frankfurt) verarbeitet.',
    },
    {
      q: 'Brauche ich IT-Kenntnisse für die Einrichtung?',
      a: 'Nein, absolut nicht. Die Einrichtung ist so einfach gestaltet, dass sie jeder ohne Programmierkenntnisse vornehmen kann. Unser Team begleitet Sie zudem beim ersten Setup.',
    },
    {
      q: 'Funktioniert der Bot auch auf Mobilgeräten?',
      a: 'Ja, der Blue ChatBot ist "Mobile First" optimiert. Er passt sich automatisch an jede Bildschirmgröße an – egal ob Smartphone, Tablet oder Desktop.',
    },
    {
      q: 'Was kostet der Service?',
      a: 'Wir bieten flexible Preismodelle an, die speziell auf KMU zugeschnitten sind. Gerne erstellen wir Ihnen nach einem kurzen Erstgespräch ein unverbindliches Angebot.',
    },
  ];

  return (
    <section className="py-24 bg-white px-6" id="faq">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">Häufig gestellte Fragen</h2>
          <p className="text-slate-500 text-lg">Alles, was Sie über Blue ChatBot wissen müssen.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <details key={i} className="group bg-slate-50 rounded-2xl border border-slate-100 overflow-hidden" open={i === 0}>
              <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                <h3 className="text-lg font-bold text-slate-900">{faq.q}</h3>
                <span className="material-symbols-outlined text-primary transition-transform duration-300 group-open:rotate-180">expand_more</span>
              </summary>
              <div className="px-6 pb-6 text-slate-600 leading-relaxed">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
