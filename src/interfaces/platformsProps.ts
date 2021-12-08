export interface PlatformProps {
  id: number;
  name: string;
  requirements_en?: {
    minimum: string;
    recommended: string;
  };
}
