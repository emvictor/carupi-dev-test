export interface GameProps {
  id: number;
  name: string;
  released: string;
  description_raw?: string;
  developers: [];
  parent_platforms: [];
  background_image: string;
  platforms: [];
  genres: [];
  metacritic: number;
}
