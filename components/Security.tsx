
import React from 'react';

const Security: React.FC = () => {
  return (
    <section className="py-24 bg-white px-6 border-y border-slate-100 overflow-hidden" id="security">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Linke Seite: Text */}
          <div className="flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-primary w-fit text-xs font-bold uppercase tracking-widest">
              Maximale Datensouveränität
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
              Sicherheit auf <br />
              <span className="text-primary">Enterprise-Niveau</span>
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              In Branchen mit extremen Anforderungen an den Datenschutz reichen Standard-Cloud-Lösungen oft nicht aus. Blue Process bietet Architektur-Optionen, die über das Übliche hinausgehen.
            </p>
            
            <div className="space-y-6 mt-4">
              {[
                { icon: 'shield_lock', title: '100% DSGVO-Compliance', desc: 'Sämtliche Datenverarbeitung erfolgt nach strikten europäischen Richtlinien.' },
                { icon: 'lan', title: 'On-Premise & Offline fähig', desc: 'Wir implementieren KI-Modelle direkt auf Ihrer Hardware – ohne Datenabfluss nach außen.' },
                { icon: 'lock_person', title: 'Kein Training mit Ihren Daten', desc: 'Ihre Geschäftsgeheimnisse bleiben Ihre Geheimnisse. Wir nutzen Ihre Daten nicht für das Modell-Training.' },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 group">
                  <div className="size-12 rounded-2xl bg-blue-50 flex items-center justify-center text-primary flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-300 shadow-sm">
                    <span className="material-symbols-outlined !text-2xl">{item.icon}</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                    <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Rechte Seite: Dunkle Box mit Text */}
          <div className="relative">
            <div className="absolute -inset-10 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="relative bg-slate-950 rounded-[2.5rem] p-10 shadow-2xl border border-slate-800 h-[500px] flex flex-col justify-between overflow-hidden group">
              {/* Konsolen-Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex gap-2">
                  <div className="size-3 rounded-full bg-red-500/50"></div>
                  <div className="size-3 rounded-full bg-amber-500/50"></div>
                  <div className="size-3 rounded-full bg-green-500/50"></div>
                </div>
                <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">System Monitor v4.0.1</div>
              </div>

              {/* Geschriebener Text (Terminal Look) */}
              <div className="flex-1 font-mono text-sm space-y-4">
                <div className="flex gap-3">
                  <span className="text-primary font-bold">&gt;&gt;</span>
                  <span className="text-slate-300">INITIALIZING SECURITY PROTOCOLS...</span>
                </div>
                <div className="flex gap-3">
                  <span className="text-green-400 font-bold">DONE</span>
                  <span className="text-slate-400">ENCRYPTION: AES-256 ACTIVE</span>
                </div>
                <div className="flex gap-3">
                  <span className="text-primary font-bold">&gt;&gt;</span>
                  <span className="text-slate-300">DATA SOVEREIGNTY CHECK...</span>
                </div>
                <div className="flex gap-3">
                  <span className="text-green-400 font-bold">PASS</span>
                  <span className="text-slate-400">LOCATION: GERMANY (FRA-1)</span>
                </div>
                <div className="flex gap-3">
                  <span className="text-green-400 font-bold">PASS</span>
                  <span className="text-slate-400">ISOLATED ENVIRONMENT DETECTED</span>
                </div>
                <div className="mt-8 pt-8 border-t border-slate-800">
                  <div className="text-xs text-slate-500 mb-2 uppercase tracking-widest">Active Safeguards:</div>
                  <div className="grid grid-cols-1 gap-2">
                    <div className="flex items-center gap-2 text-blue-400/80">
                      <span className="material-symbols-outlined !text-xs">check_circle</span>
                      <span>Zero-Trust Architecture</span>
                    </div>
                    <div className="flex items-center gap-2 text-blue-400/80">
                      <span className="material-symbols-outlined !text-xs">check_circle</span>
                      <span>End-to-End Encryption</span>
                    </div>
                    <div className="flex items-center gap-2 text-blue-400/80">
                      <span className="material-symbols-outlined !text-xs">check_circle</span>
                      <span>GDPR Data Anonymization</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer Badge */}
              <div className="mt-auto pt-6">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-4 rounded-2xl flex items-center gap-4">
                  <div className="size-10 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center">
                    <span className="material-symbols-outlined !text-xl">verified_user</span>
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase text-slate-500 tracking-widest">Sicherheits-Status</p>
                    <p className="text-sm font-bold text-white">Zertifizierte Infrastruktur</p>
                  </div>
                </div>
              </div>
              
              {/* Dekorativer Effekt */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] -mr-32 -mt-32"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Security;
