export interface Category {
  id: string;
  name: string;
  emoji: string;
  parentId: string;
  imageCount: number;
}

export interface ParentSection {
  id: string;
  name: string;
  categories: Category[];
}

export interface ImageAsset {
  id: string;
  name: string;
  url: string;
  categoryId: string;
  tags: {
    zh_TW: string[];  // Traditional Chinese
    th: string[];      // Thai
  };
  createdAt: Date;
}

export interface GeneratedImage {
  id: string;
  url: string;
  prompt: string;
}

export type ResolutionOption = '200p' | '280p' | '1080p';

export type ViewMode = 'home' | 'category';
