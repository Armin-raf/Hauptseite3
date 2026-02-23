
import React, { useState, useRef, useEffect } from 'react';
import { getGeminiResponse } from '../services/geminiService';
import { Message } from '../types';

const MAX_CHAR_LIMIT = 1000;
const COOLDOWN_TIME = 2000; // 2 Sekunden Schutz gegen Spam

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'bot', text: 'Guten Tag! Ich bin der Blue ChatBot Assistent. Wie kann ich Ihnen heute helfen?' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [lastSentTime, setLastSentTime] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async () => {
    const now = Date.now();
    if (!inputValue.trim() || isLoading) return;
    
    // DoS / Spam Protection
    if (now - lastSentTime < COOLDOWN_TIME) {
      return;
    }

    // Input Validation
    if (inputValue.length > MAX_CHAR_LIMIT) {
      setMessages(prev => [...prev, { role: 'bot', text: 'Fehler: Ihre Nachricht überschreitet das Limit von 1000 Zeichen.' }]);
      return;
    }

    const userMsg = inputValue.trim();
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setInputValue('');
    setIsLoading(true);
    setLastSentTime(now);

    const botMsg = await getGeminiResponse(userMsg);
    setMessages(prev => [...prev, { role: 'bot', text: botMsg }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] font-sans">
      {isOpen ? (
        <div className="bg-white w-[350px] h-[500px] rounded-3xl shadow-2xl flex flex-col border border-slate-200 overflow-hidden animate-in slide-in-from-bottom-4 fade-in duration-300">
          {/* Header */}
          <div className="bg-primary p-4 flex items-center justify-between text-white">
            <div className="flex items-center gap-3">
              <div className="size-10 bg-white/20 rounded-xl flex items-center justify-center">
                <span className="material-symbols-outlined !text-xl text-white">smart_toy</span>
              </div>
              <div>
                <p className="font-bold text-sm text-white">Blue ChatBot</p>
                <div className="flex items-center gap-1.5">
                  <span className="size-1.5 bg-green-400 rounded-full animate-pulse"></span>
                  <p className="text-[10px] uppercase opacity-70 tracking-widest font-bold text-white">Online • DSGVO Sicher</p>
                </div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:rotate-90 transition-transform text-white">
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>

          {/* Messages Area */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-2xl text-sm ${
                  msg.role === 'user' 
                    ? 'bg-primary text-white rounded-tr-none shadow-md' 
                    : 'bg-white text-slate-800 border border-slate-200 rounded-tl-none shadow-sm font-medium'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white p-3 rounded-2xl rounded-tl-none border border-slate-200 shadow-sm">
                  <div className="flex gap-1">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce"></div>
                    <div className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                    <div className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input Area */}
          <div className="p-3 border-t border-slate-200 bg-white">
            <div className="flex flex-col gap-1.5">
              <div className="flex items-center gap-2 bg-slate-100 rounded-xl p-1.5 border border-slate-200 focus-within:border-primary/50 transition-colors">
                <input 
                  type="text" 
                  value={inputValue}
                  maxLength={MAX_CHAR_LIMIT}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ihre Nachricht..."
                  className="flex-1 bg-transparent border-none focus:ring-0 text-sm px-2 text-slate-900 placeholder:text-slate-400"
                />
                <button 
                  onClick={handleSend}
                  disabled={isLoading || !inputValue.trim()}
                  className="bg-primary text-white size-8 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors disabled:opacity-30 shadow-sm"
                >
                  <span className="material-symbols-outlined !text-sm text-white">send</span>
                </button>
              </div>
              <div className="flex justify-between px-1">
                <p className="text-[10px] text-slate-400 font-medium">End-zu-End verschlüsselt</p>
                <p className={`text-[10px] font-bold ${inputValue.length > MAX_CHAR_LIMIT * 0.9 ? 'text-red-500' : 'text-slate-400'}`}>
                  {inputValue.length}/{MAX_CHAR_LIMIT}
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-primary size-16 rounded-2xl shadow-2xl flex items-center justify-center text-white hover:scale-110 transition-all hover:bg-blue-600 group"
        >
          <span className="material-symbols-outlined !text-3xl group-hover:rotate-12 transition-transform text-white">smart_toy</span>
          <div className="absolute -top-1 -right-1 size-4 bg-green-500 border-2 border-white rounded-full"></div>
        </button>
      )}
    </div>
  );
};

export default ChatWidget;
