export interface Category {
  id: number;
  name: string;
  description: string | null;
  image: string;
  slug: string;
  circle_icon?: string;
  disable_shipping: 1 | 0;
  children: Category[] | null;
}

export interface SelectOption {
  id: string;
  description: string;
}

export interface PropertyOption {
  id: number;
  name: string;
  slug?: string;
  parent?: number | null;
  child?: boolean;
}

export interface Property {
  id: number;
  name: string;
  description: string;
  slug: string;
  parent: number | null;
  list: boolean;
  type: null;
  value: string;
  other_value: string;
  options: PropertyOption[];
  children?: Property[];
}


export interface KeyVal {
  key: string;
  value: string;
}