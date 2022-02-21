export type ImageData = {
  id: string;
  created_at: string;
  updated_at: string;
  color: string;
  description: string;
  alt_description: string;
  categories: string[];
  likes: number;
  url: string;
  user: {
    id: string;
    updated_at: string;
    username: string;
    name: string;
    first_name: string;
    last_name: string;
    bio: string;
    location: string;
    profile_image: string;
    total_collections: number;
    total_likes: number;
    total_photos: number;
  };
};

export type ImagesObject = {
  [id: string]: ImageData;
};

export type ViewVariant = 'images' | 'form';
