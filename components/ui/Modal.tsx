
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm z-[110]"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-0 m-auto w-full max-w-2xl h-fit max-h-[80vh] bg-white rounded-[2.5rem] shadow-2xl z-[120] overflow-hidden flex flex-col border border-slate-200"
          >
            <div className="p-8 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
              <h3 className="text-2xl font-bold text-slate-900">{title}</h3>
              <button 
                onClick={onClose}
                className="size-10 rounded-full hover:bg-slate-200 transition-colors flex items-center justify-center text-slate-500"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            <div className="p-8 overflow-y-auto text-slate-600 leading-relaxed custom-scrollbar">
              {children}
            </div>
            <div className="p-6 border-t border-slate-100 bg-slate-50/50 flex justify-end">
              <button 
                onClick={onClose}
                className="px-6 py-2.5 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-all text-sm"
              >
                Schließen
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
