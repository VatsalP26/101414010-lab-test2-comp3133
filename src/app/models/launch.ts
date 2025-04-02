export interface Launch {
  flight_number: number;
  name: string;
  date_utc: string;
  details: string | null;
  rocket: string;
  success: boolean;
  cores?: Array<{
    landing_success: boolean | null;
  }>;
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