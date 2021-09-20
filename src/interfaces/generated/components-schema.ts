export interface HeroStoryblok {
  image?: {
    alt?: string;
    copyright?: string;
    id: number;
    filename: string;
    name: string;
    title?: string;
  };
  text: string;
  _uid: string;
  component: "hero";
  [k: string]: any;
}

export interface PageStoryblok {
  hero: HeroStoryblok[];
  content?: any[];
  _uid: string;
  component: "page";
  uuid?: string;
  [k: string]: any;
}
