import { useEffect, useState } from "react";
import "./BpWidgets.css";

const CHAT_URL =
  "https://hypobranchial-inez-nonmonogamous.ngrok-free.dev/webhook/f406671e-c954-4691-b39a-66c90aa2f103/chat";

const VOICE_URL =
  "https://hypobranchial-inez-nonmonogamous.ngrok-free.dev/webhook-test/c6e462b3-86c6-4812-a58c-bfd8fe4ef882";

export default function BpWidgets() {
  const [open, setOpen] = useState(false);
  const [min, setMin] = useState(false);

  // ESC schließt komplett
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        setMin(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const toggleChat = () => {
    setOpen((v) => {
      const next = !v;
      if (!next) setMin(false);
      return next;
    });
  };

  const minimizeChat = () => setMin((v) => !v);

  const closeChat = () => {
    setOpen(false);
    setMin(false);
  };

  const openVoice = () => {
    window.open(VOICE_URL, "_blank", "noopener,noreferrer"); // MDN empfiehlt noopener: https://developer.mozilla.org/en-US/docs/Web/API/Window/open
  };

  return (
    <>
      <div className="bp-fab-stack" aria-label="Blue Process Widgets">
        {/* Chat icon (oben) */}
        <button
          type="button"
          className="bp-fab bp-fab--float"
          aria-label={open ? "Chat schließen" : "Chat öffnen"}
          aria-expanded={open}
          onClick={toggleChat}
        >
          <span className="bp-tooltip">Unser Chatbot hilft Ihnen sofort weiter.</span>

          <svg className="bp-icon" viewBox="0 0 24 24" aria-hidden="true">
            <defs>
              <linearGradient id="bpChatGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#7dd3fc" />
                <stop offset="0.55" stopColor="#2563eb" />
                <stop offset="1" stopColor="#1d4ed8" />
              </linearGradient>
              <filter id="bpGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="2.4" result="blur" />
                <feColorMatrix
                  in="blur"
                  type="matrix"
                  values="
                    1 0 0 0 0
                    0 1 0 0 0
                    0 0 1 0 0
                    0 0 0 0.55 0"
                />
                <feMerge>
                  <feMergeNode />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            <path
              d="M20 2H4C2.9 2 2 2.9 2 4v12c0 1.1.9 2 2 2h3v4l5-4h8c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"
              fill="url(#bpChatGrad)"
              filter="url(#bpGlow)"
            />
          </svg>
        </button>

        {/* Phone icon (unten) */}
        <button
          type="button"
          className="bp-fab bp-fab--float2"
          aria-label="Voice Agent öffnen"
          onClick={openVoice}
        >
          <span className="bp-tooltip">
            Rufen Sie unseren KI-Assistenten an – schnell &amp; unkompliziert.
          </span>

          <svg className="bp-icon" viewBox="0 0 24 24" aria-hidden="true">
            <defs>
              <linearGradient id="bpPhoneGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#6ee7b7" />
                <stop offset="0.6" stopColor="#10b981" />
                <stop offset="1" stopColor="#059669" />
              </linearGradient>
              <filter id="bpGlow2" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="2.4" result="blur" />
                <feColorMatrix
                  in="blur"
                  type="matrix"
                  values="
                    1 0 0 0 0
                    0 1 0 0 0
                    0 0 1 0 0
                    0 0 0 0.55 0"
                />
                <feMerge>
                  <feMergeNode />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            <path
              d="M6.6 10.8c1.4 2.7 3.9 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.3
                 1.2.4 2.5.6 3.8.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C11.3 21 3 12.7 3 2
                 c0-.6.4-1 1-1h3.3c.6 0 1 .4 1 1 0 1.3.2 2.6.6 3.8.1.4 0 .8-.3 1.1l-2
                 1.9z"
              fill="url(#bpPhoneGrad)"
              filter="url(#bpGlow2)"
            />
          </svg>
        </button>
      </div>

      {open && (
        <div className={`bp-popup ${min ? "bp-popup--min" : ""}`} role="dialog" aria-label="Chat">
          <div
            className="bp-popup__header"
            onClick={min ? minimizeChat : undefined}
            style={{ cursor: min ? "pointer" : "default" }}
          >
            <div className="bp-popup__title">Blue Process Chat</div>

            <div className="bp-popup__controls">
              <button           
                type="button"
                className="bp-popup__btn"
                onClick={(e) => {
                  e.stopPropagation();
                  minimizeChat();
                }}
                aria-label={min ? "Chat maximieren" : "Chat minimieren"}
                title={min ? "Maximieren" : "Minimieren"}
              >
                {min ? "+" : "–"}
              </button>
      
              <button
                type="button"
                className="bp-popup__btn"
                onClick={(e) => {
                  e.stopPropagation();
                  closeChat();
                }}
                aria-label="Chat schließen"
                title="Schließen"
              >
                ×
              </button>
            </div>
          </div>

          <div className="bp-popup__body">
            <iframe src={CHAT_URL} title="Chat" />
          </div>
        </div>
      )}
    </>
  );
}
