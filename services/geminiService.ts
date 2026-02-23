
import { GoogleGenAI } from "@google/genai";

export const getGeminiResponse = async (userMessage: string): Promise<string> => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userMessage,
      config: {
        systemInstruction: `SYSTEM PRIORITÄT: Du bist der professionelle Berater der KI-Agentur 'Blue Process'.
        
        DEIN KONTEXT:
        - Blue Process ist eine spezialisierte Agentur für B2B-Prozessautomatisierung mit KI-Agenten.
        - Fokus: Web-Chatbots, Voice Agents, lokale/offline KI-Systeme.
        - Zielgruppe: Geschäftsführer, IT-Leiter, Innovationsmanager.
        
        DEINE REGELN:
        1. Antworte ruhig, souverän und technologisch kompetent.
        2. Vermeide aggressives Sales-Wording.
        3. Betone bei Sicherheitsfragen unsere Fähigkeit zur On-Premise/Offline-Implementierung.
        4. Wenn Nutzer Details zu Projekten wollen, schlage ein unverbindliches Erstgespräch vor.
        5. Antworte immer auf Deutsch.
        6. DSGVO-Konformität und Datensouveränität sind unsere Kernwerte.`,
        temperature: 0.4,
        safetySettings: [
          { category: 'HATE_SPEECH', threshold: 'BLOCK_LOW_AND_ABOVE' },
          { category: 'HARASSMENT', threshold: 'BLOCK_LOW_AND_ABOVE' },
          { category: 'SEXUALLY_EXPLICIT', threshold: 'BLOCK_LOW_AND_ABOVE' },
          { category: 'DANGEROUS_CONTENT', threshold: 'BLOCK_LOW_AND_ABOVE' }
        ]
      },
    });

    return response.text || "Ich konnte leider keine Antwort generieren. Bitte versuchen Sie es erneut.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Technischer Fehler in der Verbindung. Bitte versuchen Sie es später erneut.";
  }
};