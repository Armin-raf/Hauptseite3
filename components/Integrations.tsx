
import React from 'react';
import { ScrollVelocity } from './ui/scroll-velocity';

interface IntegrationLogo {
  name: string;
  slug: string;
  color: string;
}

const Integrations: React.FC = () => {
  // Same logos, updated context
  const row1: IntegrationLogo[] = [
    { name: 'Slack', slug: 'slack', color: '4A154B' },
    { name: 'Teams', slug: 'microsoftteams', color: '6264A7' },
    { name: 'Discord', slug: 'discord', color: '5865F2' },
    { name: 'WhatsApp', slug: 'whatsapp', color: '25D366' },
    { name: 'Outlook', slug: 'microsoftoutlook', color: '0078D4' },
    { name: 'Gmail', slug: 'gmail', color: 'EA4335' },
    { name: 'Twilio', slug: 'twilio', color: 'F22F46' },
    { name: 'Salesforce', slug: 'salesforce', color: '00A1E0' },
    { name: 'HubSpot', slug: 'hubspot', color: 'FF7A59' },
  ];

  const row2: IntegrationLogo[] = [
    { name: 'Sheets', slug: 'googlesheets', color: '34A853' },
    { name: 'Excel', slug: 'microsoftexcel', color: '217346' },
    { name: 'PostgreSQL', slug: 'postgresql', color: '4169E1' },
    { name: 'MySQL', slug: 'mysql', color: '4479A1' },
    { name: 'MongoDB', slug: 'mongodb', color: '47A248' },
    { name: 'Supabase', slug: 'supabase', color: '3FCF8E' },
    { name: 'OpenAI', slug: 'openai', color: '412991' },
    { name: 'Stripe', slug: 'stripe', color: '008CDD' },
    { name: 'n8n', slug: 'n8n', color: 'FF6D5A' },
  ];

  const renderLogos = (logos: IntegrationLogo[]) => (
    logos.map((logo) => (
      <div 
        key={logo.slug} 
        className="flex items-center gap-6 px-12 py-8 bg-white rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all hover:scale-105 group ring-1 ring-slate-100/50"
      >
        <div className="size-12 flex items-center justify-center">
          <img 
            src={`https://cdn.simpleicons.org/${logo.slug}/${logo.color}`} 
            alt={logo.name} 
            className="w-full h-full object-contain transition-transform group-hover:rotate-6"
            loading="lazy"
          />
        </div>
        <span className="text-xl font-extrabold text-slate-800 whitespace-nowrap">{logo.name}</span>
      </div>
    ))
  );

  return (
    <section className="py-32 bg-slate-50 overflow-hidden" id="integrations">
      <div className="max-w-7xl mx-auto mb-20 px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-blue-100 text-primary mb-6 text-xs font-bold uppercase tracking-widest">Konnektivität</div>
        <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-8 tracking-tight">
          Systemübergreifend Vernetzt
        </h2>
        <p className="text-slate-500 text-xl max-w-3xl mx-auto leading-relaxed">
          Blue Process agiert als Bindeglied zwischen Ihren KI-Agenten und Ihrem bestehenden Software-Stack. Wir bauen Brücken, wo andere isolierte Lösungen anbieten.
        </p>
      </div>
      
      <div className="flex flex-col space-y-12">
        <ScrollVelocity velocity={0.6} className="py-4">
          {renderLogos(row1)}
        </ScrollVelocity>
        
        <ScrollVelocity velocity={-0.6} className="py-4">
          {renderLogos(row2)}
        </ScrollVelocity>
      </div>
    </section>
  );
};

export default Integrations;