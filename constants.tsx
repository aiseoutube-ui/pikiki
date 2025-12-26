
import { Recipe, Video, AppShowcase } from './types';

export const RECIPES: Recipe[] = [
  {
    id: '1',
    title: 'Risotto de Champiñones Tech',
    excerpt: 'Una receta clásica optimizada para cocineros con poco tiempo y mucha curiosidad.',
    image: 'https://picsum.photos/seed/risotto/800/600',
    tags: ['Gourmet', 'Vegano'],
    date: '2024-05-20',
    cookTime: '30 min'
  },
  {
    id: '2',
    title: 'Pasta al Pesto Algorítmico',
    excerpt: 'Dominando el equilibrio de albahaca y piñones con precisión matemática.',
    image: 'https://picsum.photos/seed/pasta/800/600',
    tags: ['Rápido', 'Pasta'],
    date: '2024-05-18',
    cookTime: '15 min'
  },
  {
    id: '3',
    title: 'Tarta de Manzana en la Nube',
    excerpt: 'Ligera como el aire, dulce como el éxito de un despliegue sin errores.',
    image: 'https://picsum.photos/seed/cake/800/600',
    tags: ['Postres', 'Dulce'],
    date: '2024-05-15',
    cookTime: '45 min'
  },
  {
    id: '4',
    title: 'Hamburguesa de Lentejas Pro',
    excerpt: 'Proteína vegetal para aguantar largas sesiones de coding.',
    image: 'https://picsum.photos/seed/burger/800/600',
    tags: ['Vegano', 'Proteína'],
    date: '2024-05-12',
    cookTime: '25 min'
  }
];

export const VIDEOS: Video[] = [
  {
    id: 'v1',
    title: 'Cocinando con IA: El Futuro',
    thumbnail: 'https://picsum.photos/seed/v1/400/225',
    url: '#',
    category: 'Tech'
  },
  {
    id: 'v2',
    title: 'Receta Express: Tacos Tech',
    thumbnail: 'https://picsum.photos/seed/v2/400/225',
    url: '#',
    category: 'Recetas'
  },
  {
    id: 'v3',
    title: 'Setup de Cocina Inteligente',
    thumbnail: 'https://picsum.photos/seed/v3/400/225',
    url: '#',
    category: 'Review'
  }
];

export const APPS: AppShowcase[] = [
  {
    id: 'app1',
    name: 'CusiCalc',
    description: 'Calculadora de porciones inteligente basada en macros y desperdicio cero.',
    icon: '🍳',
    tags: ['iOS', 'Android']
  },
  {
    id: 'app2',
    name: 'GastroFlow',
    description: 'Gestor de inventario de despensa con alertas de caducidad por visión artificial.',
    icon: '📦',
    tags: ['Web', 'PWA']
  },
  {
    id: 'app3',
    name: 'ChefPrompt',
    description: 'Generador de recetas creativas usando LLMs locales.',
    icon: '🤖',
    tags: ['Desktop']
  }
];
