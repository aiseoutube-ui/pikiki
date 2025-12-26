
export interface Recipe {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  tags: string[];
  date: string;
  cookTime: string;
}

export interface Video {
  id: string;
  title: string;
  thumbnail: string;
  url: string;
  category: string;
}

export interface AppShowcase {
  id: string;
  name: string;
  description: string;
  icon: string;
  tags: string[];
}
