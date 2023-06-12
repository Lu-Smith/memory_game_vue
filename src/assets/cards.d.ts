declare module '*.svg' {
    const value: string;
    export default value;
  }
  
  declare const cards1: { id: number; src: string; alt: string, clicked: boolean }[];
  declare const cards2: { id: number; src: string; alt: string, clicked: boolean }[];
  declare const cards3: { id: number; src: string; alt: string, clicked: boolean }[];
  export default {cards1, cards2, cards3};