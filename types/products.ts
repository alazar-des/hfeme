export interface Product {
  id: number;
  name: string;
  category: string;
  description: string;
  image: string;
  type: string;
  features?: string[];
  specification?: Record<string, string | number | undefined>;
  featured?: boolean;
}
