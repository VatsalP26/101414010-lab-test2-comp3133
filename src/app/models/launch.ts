// src/app/models/launch.ts
export interface Launch {
  flight_number: number;
  name: string; // Changed from mission_name to name (API v4 uses "name")
  date_utc: string; // Use date_utc to extract the launch year
  details: string | null;
  rocket: string; // In v4, rocket is an ID; we'll fetch the rocket name separately if needed
  links: {
    patch: {
      small: string | null;
    };
    article: string | null;
    wikipedia: string | null;
    youtube_id: string | null;
  };
  id: string;
}