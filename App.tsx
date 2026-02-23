import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Integrations from './components/Integrations';
import Solutions from './components/Services';
import Security from './components/Security';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { FlippingCard } from './components/ui/flipping-card';
import { Modal } from './components/ui/Modal';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [modalContent, setModalContent] = useState<{ title: string; body: React.ReactNode } | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openModal = (type: string) => {
    const contentMap: Record<string, { title: string; body: React.ReactNode }> = {
      'AGB': {
        title: 'AGB',
        body: (
          <div className="space-y-6 text-sm">
            <div className="border-b border-slate-100 pb-4">
              <p className="text-lg font-bold">Allgemeine Geschäftsbedingungen (AGB)</p>
              <p className="font-medium text-slate-500">Amin Rafai | Blue Process</p>
            </div>
            
            <section>
              <h4 className="font-bold text-slate-900 mb-2">§ 1 Geltungsbereich</h4>
              <p>Diese AGB gelten für alle Verträge über KI-Dienstleistungen, Prozessautomatisierung und Beratung zwischen Amin Rafai | Blue Process (nachfolgend „Auftragnehmer“) und seinen Kunden. Abweichende Bedingungen des Kunden werden nicht anerkannt.</p>
            </section>

            <section>
              <h4 className="font-bold text-slate-900 mb-2">§ 2 Leistungsumfang und Abnahme</h4>
              <p>Der konkrete Leistungsumfang ergibt sich aus dem jeweiligen Angebot.</p>
              <p>Der Auftragnehmer schuldet die Einrichtung der Automatisierung nach bestem Wissen und Gewissen. Ein bestimmter wirtschaftlicher Erfolg wird nicht garantiert.</p>
              <p>Nach Fertigstellung der im Angebot beschriebenen Workflows ist der Kunde zur Abnahme verpflichtet. Die Abnahme gilt als erfolgt, wenn der Kunde nicht innerhalb von 7 Werktagen schriftlich Mängel rügt.</p>
            </section>

            <section>
              <h4 className="font-bold text-slate-900 mb-2">§ 3 Besondere Bedingungen für KI-Leistungen</h4>
              <p>Der Kunde ist sich bewusst, dass KI-Modelle (wie z.B. Large Language Models) statistische Ergebnisse liefern. Der Auftragnehmer übernimmt keine Gewähr für die inhaltliche Richtigkeit, Vollständigkeit oder Logik der durch die KI generierten Texte, Daten oder Entscheidungen.</p>
              <p>Der Kunde ist verpflichtet, die durch die Automatisierung erzeugten Ergebnisse vor einer weiteren Verwendung (insbesondere bei Veröffentlichung oder Kundenkontakt) auf Richtigkeit zu prüfen.</p>
              <p>Der Auftragnehmer haftet nicht für Schäden, die durch Fehlentscheidungen einer KI oder durch „Halluzinationen“ des Modells entstehen.</p>
            </section>

            <section>
              <h4 className="font-bold text-slate-900 mb-2">§ 4 Zahlungsbedingungen</h4>
              <p>Sofern im Angebot nicht anders vereinbart, sind Rechnungen sofort nach Erhalt ohne Abzug zahlbar.</p>
              <p>Der Auftragnehmer ist berechtigt, bei Projektstart eine Anzahlung in Höhe von 50 % der Angebotssumme zu verlangen. Die Arbeit beginnt erst nach Eingang der Anzahlung.</p>
            </section>

            <section>
              <h4 className="font-bold text-slate-900 mb-2">§ 5 Haftungsbeschränkung</h4>
              <p>Der Auftragnehmer haftet nur für Schäden, die auf vorsätzlicher oder grob fahrlässiger Pflichtverletzung beruhen.</p>
              <p>Für leichte Fahrlässigkeit haftet der Auftragnehmer nur bei Verletzung wesentlicher Vertragspflichten. In diesem Fall ist die Haftung auf den bei Vertragsschluss vorhersehbaren, vertragstypischen Schaden begrenzt.</p>
              <p>Die Haftung für entgangenen Gewinn oder indirekte Folgeschäden ist ausgeschlossen.</p>
            </section>

            <section>
              <h4 className="font-bold text-slate-900 mb-2">§ 6 Urheberrecht und Nutzungsrechte</h4>
              <p>An den erstellten KI-Agenten, Automatisierungs-Workflows und Skripten räumt der Auftragnehmer dem Kunden ein einfaches, zeitlich und räumlich unbegrenztes Nutzungsrecht für den eigenen Betrieb ein.</p>
              <p>Die Weitergabe, der Weiterverkauf oder die Unterlizenzierung der Workflows an Dritte ist ohne schriftliche Zustimmung des Auftragnehmers untersagt.</p>
            </section>
          </div>
        )
      },
      'Impressum': {
        title: 'Impressum',
        body: (
          <div className="space-y-4 text-sm">
            <p className="font-bold text-slate-900">nach § 5 TMG</p>
            <p>Amin Rafai | Blue Process<br />Annenstraße 29, 31134 Hildesheim, Deutschland</p>
            <p className="font-bold text-slate-900">Kontakt:</p>
            <p>Telefon: +49 176 4334 7838<br />E-Mail: herr.rafai@gmail.com</p>
            <p>Steuernummer: 43196274049</p>
            <p className="font-bold text-slate-900">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</p>
            <p>Amin Rafai (Anschrift s.o.)</p>
            <p className="text-xs text-slate-400 pt-6">Quelle Impressum: e-recht24.de</p>
          </div>
        )
      },
      'Datenschutz': {
        title: 'Datenschutz',
        body: (
          <div className="space-y-6 text-sm">
            <section>
              <h4 className="font-bold text-slate-900 mb-3">1. Datenschutz auf einen Blick</h4>
              <p className="font-bold mb-1">Allgemeine Hinweise</p>
              <p className="mb-3">Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen oder unsere Dienstleistungen im Bereich der KI-Automatisierung in Anspruch nehmen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.</p>
              <p className="font-bold mb-1">Datenerfassung auf dieser Website</p>
              <p className="mb-2">Wer ist verantwortlich für die Datenerfassung? Die Datenverarbeitung auf dieser Website und im Rahmen der angebotenen Dienstleistungen erfolgt durch den Websitebetreiber:</p>
              <p className="bg-slate-50 p-3 rounded-lg border border-slate-100 italic">
                Amin Rafai | Blue Process<br />
                Annenstraße 29, 31134 Hildesheim, Deutschland<br />
                E-Mail: herr.rafai@gmail.com<br />
                Telefon: +49 176 4334 7838
              </p>
              <p className="mt-3">Wie erfassen wir Ihre Daten? Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen (z. B. per E-Mail oder Kontaktformular). Andere Daten werden automatisch durch unsere IT-Systeme erfasst (technische Daten wie IP-Adresse, Browser, Uhrzeit).</p>
            </section>

            <section>
              <h4 className="font-bold text-slate-900 mb-2">2. Hosting und Infrastruktur</h4>
              <p>Wir hosten unsere Website, unsere Automatisierungs-Workflows sowie die dazugehörigen Datenbanken und Kundendaten bei folgendem Anbieter:</p>
              <p className="font-bold mt-2">Hetzner Online GmbH</p>
              <p>Industriestr. 25, 91710 Gunzenhausen, Deutschland.</p>
              <p className="mt-2">Serverstandort: Deutschland. Die Datenverarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Wir haben ein berechtigtes Interesse an einer sicheren und stabilen Bereitstellung unserer Dienste. Wir haben mit der Hetzner Online GmbH einen Vertrag über Auftragsverarbeitung (AVV) geschlossen, der garantiert, dass Ihre Daten streng weisungsgebunden und nach deutschem Datenschutzstandard verarbeitet werden.</p>
            </section>

            <section>
              <h4 className="font-bold text-slate-900 mb-2">3. Besonderheiten bei KI-Dienstleistungen</h4>
              <p>Im Rahmen unserer Automatisierungsprozesse setzen wir Künstliche Intelligenz ein. Die Verarbeitung erfolgt je nach individueller Vereinbarung (AVV) auf zwei Arten:</p>
              <div className="mt-3 space-y-3">
                <div className="p-3 bg-blue-50/50 rounded-lg border border-blue-100">
                  <p className="font-bold text-primary mb-1">A. Lokale KI-Modelle</p>
                  <p>Auf Wunsch werden Daten ausschließlich über lokale KI-Modelle verarbeitet, die auf unseren eigenen, in Deutschland gehosteten Servern (Hetzner) betrieben werden.</p>
                  <p className="text-xs mt-1">Vorteil: 100% Datensouveränität. Kein Byte verlässt den deutschen Rechtsraum.</p>
                </div>
                <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
                  <p className="font-bold text-slate-900 mb-1">B. Ausländische KI-Modelle</p>
                  <p>Sofern für die Aufgabe eine höhere Intelligenzleistung erforderlich ist und dies im AVV vereinbart wurde, werden spezialisierte ausländische KI-Modelle genutzt.</p>
                  <p className="text-xs mt-1">Schutzmaßnahmen: Die Übertragung erfolgt auf Grundlage von Standardvertragsklauseln der EU-Kommission. Wir konfigurieren diese Schnittstellen so „Zero Retention Policy“, dass Ihre Daten in der Regel nicht zum Training der Modelle verwendet werden.</p>
                </div>
              </div>
            </section>

            <section>
              <h4 className="font-bold text-slate-900 mb-2">4. Pflichtinformationen und Rechte der Betroffenen</h4>
              <p className="font-bold mb-1">Widerruf Ihrer Einwilligung</p>
              <p className="mb-2">Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen.</p>
              <p className="font-bold mb-1">Recht auf Auskunft, Löschung und Berichtigung</p>
              <p>Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung sowie ein Recht auf Berichtigung oder Löschung dieser Daten.</p>
            </section>

            <section>
              <h4 className="font-bold text-slate-900 mb-2">5. Automatisierungs-Workflows</h4>
              <p>Bei der Nutzung unserer Automatisierungslösungen werden Daten zwischen verschiedenen Anwendungen übertragen.</p>
              <p>Zweck: Erfüllung des mit Ihnen geschlossenen Vertrages (Art. 6 Abs. 1 lit. b DSGVO).</p>
              <p>Speicherung: Daten in Workflows werden nur so lange zwischengespeichert, wie es für die Ausführung der Automatisierung technisch notwendig ist.</p>
            </section>

            <section>
              <h4 className="font-bold text-slate-900 mb-2">6. Terminbuchung</h4>
              <p>Für die Online-Terminbuchung nutzen wir den Dienst Cal.eu (Cal.com, Inc., 155 11th Ave, New York, NY 10011, USA). Wenn Sie einen Termin über unsere Website buchen, werden die von Ihnen eingegebenen Daten (z. B. Name, E-Mail-Adresse, Grund des Termins) an Cal.eu übertragen. Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO oder Art. 6 Abs. 1 lit. b DSGVO. Wir haben mit Cal.eu die notwendigen datenschutzrechtlichen Vereinbarungen (DPA/SCCs) getroffen, um ein angemessenes Datenschutzniveau sicherzustellen.</p>
            </section>
          </div>
        )
      },
      'Kontakt': {
        title: 'Kontakt aufnehmen',
        body: (
          <div className="space-y-6">
            <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100">
              <span className="material-symbols-outlined text-primary">mail</span>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">E-Mail</p>
                <a href="mailto:herr.rafai@gmail.com" className="font-bold text-slate-900 hover:text-primary transition-colors">herr.rafai@gmail.com</a>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100">
              <span className="material-symbols-outlined text-primary">call</span>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Telefon</p>
                <a href="tel:+4917643347838" className="font-bold text-slate-900 hover:text-primary transition-colors">+49 176 4334 7838</a>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100">
              <span className="material-symbols-outlined text-primary">location_on</span>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Anschrift</p>
                <p className="font-bold text-slate-900">Annenstraße 29, 31134 Hildesheim</p>
              </div>
            </div>
            <div className="pt-4">
              <a href="#contact" onClick={() => setModalContent(null)} className="block w-full text-center bg-primary text-white py-4 rounded-xl font-bold shadow-lg shadow-primary/20 hover:bg-blue-600 transition-all">
                Direkt zum Buchungskalender
              </a>
            </div>
          </div>
        )
      },
      'Wissensdatenbanken': {
        title: 'KI-Wissensdatenbanken',
        body: (
          <div className="space-y-4">
            <p>Wir transformieren Ihre statischen Dokumente (PDF, Word, Wikis) in lebendige, abfragbare Wissensquellen.</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Instant-Antworten für Mitarbeiter und Kunden.</li>
              <li>Anbindung an bestehende ERP- und CRM-Systeme.</li>
              <li>Automatisches Indexieren neuer Dokumente.</li>
            </ul>
          </div>
        )
      },
      'Produktions-Assistenz': {
        title: 'Produktions-Assistenz',
        body: (
          <div className="space-y-4">
            <p>KI-Agenten direkt an der Maschine oder im Lager unterstützen Ihre Mitarbeiter in Echtzeit.</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Wartungsanleitungen per Voice-Command abrufen.</li>
              <li>Fehlercodes sofort interpretieren und Lösungen vorschlagen.</li>
              <li>Optimierung von Schichtplänen basierend auf Produktionsdaten.</li>
            </ul>
          </div>
        )
      },
      'Sensible Daten': {
        title: 'Umgang mit sensiblen Daten',
        body: (
          <div className="space-y-4">
            <p>Für Anwaltskanzleien, Kliniken oder Finanzdienstleister bieten wir spezialisierte Architekturen an.</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Automatisierte Anonymisierung von PII (Personally Identifiable Information).</li>
              <li>Verschlüsselte Daten-Silos pro Abteilung.</li>
              <li>Audit-Logs für jede KI-Interaktion.</li>
            </ul>
          </div>
        )
      },
      'Air-Gapped Betrieb': {
        title: 'Air-Gapped Betrieb',
        body: (
          <div className="space-y-4">
            <p>Das Maximum an Sicherheit: KI-Systeme ohne jegliche physische Verbindung zum öffentlichen Internet.</p>
            <p>Diese Lösung eignet sich ideal für hochkritische Infrastrukturen, bei denen Datensicherheit oberste Priorität hat. Die Hardware steht physisch gesichert in Ihren Räumlichkeiten.</p>
          </div>
        )
      },
      'DSGVO-Compliance': {
        title: 'DSGVO & Compliance',
        body: (
          <div className="space-y-4">
            <p>Unser "Privacy-First" Ansatz garantiert, dass alle Implementierungen zu 100% konform mit europäischen Standards sind.</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Hosting ausschließlich in zertifizierten deutschen Rechenzentren.</li>
              <li>Kein "Learning" der Public-Models mit Ihren Business-Daten.</li>
            </ul>
          </div>
        )
      },
      'Lokale Integration': {
        title: 'Lokale Integration',
        body: (
          <div className="space-y-4">
            <p>Wir bringen die KI dorthin, wo Ihre Daten liegen – hinter Ihre Firewall.</p>
            <p>Durch die Nutzung lokaler LLMs (Large Language Models) vermeiden wir Latenzzeiten und externe API-Kosten, während wir gleichzeitig die volle Souveränität über Ihre Daten gewährleisten.</p>
          </div>
        )
      }
    };

    if (contentMap[type]) {
      setModalContent(contentMap[type]);
    }
  };

  const processSteps = [
    { 
      step: '01', 
      title: 'Analyse', 
      desc: 'Identifikation der profitabelsten Use-Cases.',
      details: 'Wir untersuchen Ihre bestehenden Workflows und identifizieren Potenziale, bei denen KI-Agenten den größten ROI erzielen können.'
    },
    { 
      step: '02', 
      title: 'Architektur', 
      desc: 'Individuelle Konzeption der KI-Umgebung.',
      details: 'Wahl des passenden Modells (Cloud oder On-Premise) und Definition der Sicherheitsleitplanken für Ihren spezifischen Datensatz.'
    },
    { 
      step: '03', 
      title: 'Integration', 
      desc: 'Entwicklung und Anbindung an Ihre Systeme.',
      details: 'Nahtlose Verbindung der KI-Agenten mit Ihrem Software-Stack via API oder direkter Datenbank-Anbindung.'
    },
    { 
      step: '04', 
      title: 'Betrieb', 
      desc: 'Skalierung und fortlaufende Optimierung.',
      details: 'Monitoring der Performance und kontinuierliche Feinjustierung der Agenten für maximale Prozessgenauigkeit.'
    }
  ];

  const missionCards = [
    { label: 'Bottleneck-Eliminierung', desc: 'Identifikation und Beseitigung von Verzögerungen.' },
    { label: 'Volle Kontrolle', desc: '100% steuerbare Parameter für KI-Entscheidungen.' },
    { label: 'Fehlerfreie Skalierung', desc: 'Konstante Output-Qualität bei steigendem Volumen.' },
    { label: 'Echtzeit-Anpassung', desc: 'Agenten lernen und optimieren Workflows im Betrieb.' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header isScrolled={isScrolled} />
      
      <main>
        <Hero />
        
        {/* Mission Section */}
        <section className="py-24 bg-white px-6" id="mission">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-blue-50 text-primary mb-6 text-xs font-bold uppercase tracking-wider">Unser Ansatz</div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-8 leading-tight">
                Engpässe eliminieren durch gesteuerte Intelligenz.
              </h2>
              <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                Operative Flaschenhälse entstehen dort, wo manuelle Kapazitäten auf steigende Prozesskomplexität treffen. Wir lösen diese Engpässe systematisch auf – nicht mit starren Skripten, sondern durch 100% steuerbare KI-Agenten.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed">
                Unsere Agenten agieren innerhalb Ihrer individuellen Leitplanken vollkommen autonom. Sie erhalten ein System, das skalierbare Effizienz bietet und gleichzeitig sicherstellt, dass jeder Prozessschritt exakt Ihren Qualitätsvorgaben entspricht.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {missionCards.map((card, i) => (
                <div key={i} className="p-8 rounded-[2rem] border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-xl transition-all group">
                  <div className="size-12 rounded-2xl bg-white text-primary flex items-center justify-center mb-6 shadow-sm group-hover:bg-primary group-hover:text-white transition-all">
                    <span className="material-symbols-outlined !text-2xl">analytics</span>
                  </div>
                  <h4 className="font-bold text-slate-900 text-xl mb-3">{card.label}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Integrations />
        <Solutions />

        {/* Branchen / Sectors Section */}
        <section className="py-24 bg-slate-900 text-white px-6" id="sectors">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-extrabold mb-4 text-white">Branchenfokus</h2>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto">Expertise in regulierten Märkten und komplexen Lieferketten.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: 'Industrie & Produktion', desc: 'Wartungsprognosen und intelligente Dokumentenanalyse für Shop-Floor und Management.' },
                { title: 'Gesundheitswesen', desc: 'Patienten-Kommunikation und Workflow-Optimierung unter Berücksichtigung höchster Vertraulichkeit.' },
                { title: 'Öffentlicher Sektor', desc: 'Sichere Bürger-Assistenzsysteme mit lokaler Datenhaltung und Barrierefreiheit.' }
              ].map((sector, i) => (
                <div key={i} className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                  <h3 className="text-xl font-bold mb-4 text-white">{sector.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{sector.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Security />

        {/* Ablauf / Process Section */}
        <section className="py-24 bg-white px-6" id="process">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4">Methodik für Ihren Erfolg</h2>
              <p className="text-slate-500 text-lg">In vier Schritten von der Vision zur fertigen KI-Infrastruktur.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((item, i) => (
                <FlippingCard
                  key={i}
                  height={220}
                  frontContent={
                    <div className="flex flex-col h-full w-full p-8 relative overflow-hidden">
                      <span className="text-6xl font-black text-primary/10 absolute top-4 right-6 select-none leading-none">
                        {item.step}
                      </span>
                      <h3 className="text-2xl font-bold mb-3 text-slate-900 relative z-10">{item.title}</h3>
                      <p className="text-slate-600 text-sm leading-relaxed relative z-10">{item.desc}</p>
                      <div className="mt-auto flex items-center gap-1.5 text-[10px] font-bold text-primary uppercase tracking-widest">
                        Details ansehen <span className="material-symbols-outlined !text-[12px]">flip</span>
                      </div>
                    </div>
                  }
                  backContent={
                    <div className="flex flex-col h-full w-full p-8 bg-primary justify-center">
                      <p className="text-sm font-medium leading-relaxed text-white text-center">
                        {item.details}
                      </p>
                      <div className="mt-6 flex justify-center">
                        <div className="px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-widest text-white border border-white/10">
                          Phase {item.step}
                        </div>
                      </div>
                    </div>
                  }
                />
              ))}
            </div>
          </div>
        </section>

        <Contact />
      </main>

      <Footer onOpenModal={openModal} />

      <Modal 
        isOpen={!!modalContent} 
        onClose={() => setModalContent(null)} 
        title={modalContent?.title || ''}
      >
        {modalContent?.body}
      </Modal>
    </div>
  );
};

export default App;
