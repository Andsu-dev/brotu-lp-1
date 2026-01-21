
export interface Feature {
  title: string;
  description: string;
  icon?: string;
}

export interface Plan {
  name: string;
  price: string;
  description: string;
  features: string[];
  badge?: string;
}

export interface Testimonial {
  quote: string;
  author: string;
}

export interface Stat {
  label: string;
  value: string;
}
