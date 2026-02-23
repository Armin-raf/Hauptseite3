
export interface Message {
  role: 'bot' | 'user';
  text: string;
}

export interface FAQItem {
  q: string;
  a: string;
}

export interface ServiceItem {
  icon: string;
  title: string;
  desc: string;
}
