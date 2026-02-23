import React, { useState, useEffect } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  useEffect(() => {
    // Cal.com Initialisierungsskript
    (function (C, A, L) { 
      let p = function (a: any, ar: any) { a.q.push(ar); }; 
      let d = C.document; 
      // @ts-ignore
      C.Cal = C.Cal || function () { 
        // @ts-ignore
        let cal = C.Cal; 
        let ar = arguments; 
        if (!cal.loaded) { 
          cal.ns = {}; 
          cal.q = cal.q || []; 
          d.head.appendChild(d.createElement("script")).src = A; 
          cal.loaded = true; 
        } 
        if (ar[0] === L) { 
          const api = function () { p(api, arguments); }; 
          const namespace = ar[1]; 
          api.q = api.q || []; 
          if(typeof namespace === "string"){
            cal.ns[namespace] = cal.ns[namespace] || api;
            p(cal.ns[namespace], ar);
            p(cal, ["initNamespace", namespace]);
          } else p(cal, ar); 
          return;
        } 
        p(cal, ar); 
      }; 
    })(window, "https://app.cal.eu/embed/embed.js", "init");

    // @ts-ignore
    window.Cal("init", "30min", {origin:"https://app.cal.eu"});

    // @ts-ignore
    window.Cal.ns["30min"]("inline", {
      elementOrSelector:"#my-cal-inline-30min",
      config: {"layout":"month_view","useSlotsViewOnSmallScreen":"true","theme":"light"},
      calLink: "amin-rafai-rmrhre/30min",
    });

    // @ts-ignore
    window.Cal.ns["30min"]("ui", {"theme":"light","hideEventTypeDetails":false,"layout":"month_view"});
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('loading');

    try {
      const response = await fetch('https://hypobranchial-inez-nonmonogamous.ngrok-free.dev/webhook/a02a2d3c-7327-4845-a0ec-f649db17a272', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          source: 'Website Kontaktformular',
          submittedAt: new Date().toISOString()
        }),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Webhook Error:', error);
      setStatus('error');
    }

    setTimeout(() => setStatus(prev => prev === 'loading' ? prev : 'idle'), 5000);
  };

  return (
    <section className="py-20 px-6 bg-slate-50 border-t border-slate-100" id="contact">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-primary mb-4 text-xs font-bold uppercase tracking-widest">
            Kontakt & Buchung
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
            Lassen Sie uns Ihre <span className="text-primary">Prozesse</span> optimieren
          </h2>
          <p className="text-slate-600 text-lg max-w-3xl mx-auto">
            Wählen Sie direkt einen passenden Termin für eine 30-minütige Potenzialanalyse oder senden Sie uns eine Nachricht über das Kontaktformular.
          </p>
        </div>

        {/* Large Calendar Area - Optimized Spacing */}
        <div className="mb-12 bg-white rounded-[3rem] border border-slate-200 shadow-xl shadow-slate-200/50 overflow-hidden ring-1 ring-primary/5">
          <div className="p-6 border-b border-slate-100 bg-slate-50/50 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h4 className="text-xl font-bold text-slate-900">Terminbuchung</h4>
              <p className="text-sm text-slate-500 font-medium">Amin Rafai • 30 Min. Erstberatung</p>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-green-50 text-green-700 rounded-full text-xs font-bold uppercase tracking-wider">
              <span className="size-2 bg-green-500 rounded-full animate-pulse"></span>
              Live-Kalender aktiv
            </div>
          </div>
          
          <div className="w-full bg-white relative flex justify-center">
            {/* Cal inline embed code begins */}
            <div style={{ width: '100%', height: '700px', overflow: 'scroll' }} id="my-cal-inline-30min"></div>
            {/* Cal inline embed code ends */}
            
            <div className="absolute inset-0 -z-10 flex items-center justify-center text-slate-400 text-sm font-medium bg-white">
              <div className="flex flex-col items-center gap-4">
                <div className="size-10 border-4 border-primary/20 border-t-primary rounded-full animate-spin"></div>
                <div className="text-center">
                  <p className="font-bold text-slate-900">Kalender wird geladen...</p>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 border-t border-slate-100 bg-slate-50/30 text-center">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
              DSGVO-konforme Terminbuchung via Cal.eu
            </p>
          </div>
        </div>

        {/* Secondary Contact Info & Form */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="flex flex-col gap-10">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Weitere Kontaktmöglichkeiten</h3>
              <div className="space-y-8">
                <div className="flex items-start gap-5">
                  <div className="size-14 rounded-2xl bg-blue-50 text-primary flex items-center justify-center flex-shrink-0 shadow-sm">
                    <span className="material-symbols-outlined !text-3xl">mail</span>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-widest mb-1">E-Mail</p>
                    <a href="mailto:herr.rafai@gmail.com" className="text-xl font-bold text-slate-900 hover:text-primary transition-colors break-all">
                      herr.rafai@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="size-14 rounded-2xl bg-blue-50 text-primary flex items-center justify-center flex-shrink-0 shadow-sm">
                    <span className="material-symbols-outlined !text-3xl">call</span>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-widest mb-1">Telefon</p>
                    <a href="tel:+4917643347838" className="text-xl font-bold text-slate-900 hover:text-primary transition-colors">
                      +49 176 4334 7838
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="size-14 rounded-2xl bg-blue-50 text-primary flex items-center justify-center flex-shrink-0 shadow-sm">
                    <span className="material-symbols-outlined !text-3xl">location_on</span>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-widest mb-1">Anschrift</p>
                    <p className="text-xl font-bold text-slate-900 leading-snug">
                      Annenstraße 29, 31134 Hildesheim
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-[2.5rem] bg-slate-900 text-white relative overflow-hidden group">
              <div className="relative z-10">
                <h4 className="text-xl font-bold mb-4">Bereit für die Zukunft?</h4>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  Wir analysieren Ihre Prozesse und zeigen Ihnen, wo KI-Agenten den größten Hebel für Ihre Effizienz haben.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 text-xs font-medium text-slate-300">
                    <span className="material-symbols-outlined text-primary !text-sm">verified</span>
                    Kostenlos
                  </div>
                  <div className="flex items-center gap-2 text-xs font-medium text-slate-300">
                    <span className="material-symbols-outlined text-primary !text-sm">verified</span>
                    Unverbindlich
                  </div>
                </div>
              </div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-[60px] -mr-16 -mt-16 group-hover:bg-primary/30 transition-colors"></div>
            </div>
          </div>

          <div className="bg-white p-8 md:p-10 rounded-[3rem] shadow-2xl border border-slate-100">
            <h3 className="text-2xl font-bold text-slate-900 mb-8">Schreiben Sie uns</h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-3 px-1">Name</label>
                  <input 
                    type="text" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-5 py-4 rounded-2xl border border-slate-200 focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all outline-none text-slate-900 bg-slate-50/50" 
                    placeholder="Max Mustermann"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-3 px-1">E-Mail</label>
                  <input 
                    type="email" 
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-5 py-4 rounded-2xl border border-slate-200 focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all outline-none text-slate-900 bg-slate-50/50" 
                    placeholder="name@firma.de"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-3 px-1">Anliegen</label>
                <textarea 
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-5 py-4 rounded-2xl border border-slate-200 focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all outline-none text-slate-900 bg-slate-50/50 resize-none" 
                  placeholder="Wie können wir Ihnen helfen?"
                ></textarea>
              </div>
              
              <button 
                type="submit"
                disabled={status === 'loading'}
                className={`w-full text-white px-8 py-5 rounded-2xl font-bold text-lg transition-all shadow-xl flex items-center justify-center gap-3 ${
                  status === 'loading' ? 'bg-slate-400 cursor-not-allowed' : 
                  status === 'success' ? 'bg-green-500 shadow-green-200' :
                  status === 'error' ? 'bg-red-500 shadow-red-200' :
                  'bg-primary hover:bg-blue-600 shadow-primary/20'
                }`}
              >
                {status === 'loading' && <div className="size-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>}
                {status === 'idle' && 'Anfrage absenden'}
                {status === 'success' && 'Gesendet!'}
                {status === 'error' && 'Fehler beim Senden'}
                <span className="material-symbols-outlined">{status === 'success' ? 'check' : 'send'}</span>
              </button>
              
              {status === 'success' && (
                <p className="text-center text-xs font-bold text-green-600 uppercase tracking-widest animate-in fade-in slide-in-from-top-2">
                  Danke für Ihre Nachricht! Wir melden uns zeitnah.
                </p>
              )}
              {status === 'error' && (
                <p className="text-center text-xs font-bold text-red-600 uppercase tracking-widest animate-in fade-in slide-in-from-top-2">
                  Etwas ist schiefgelaufen. Bitte versuchen Sie es später erneut.
                </p>
              )}
              
              <p className="text-center text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                DSGVO Konform • 100% Sicher
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
