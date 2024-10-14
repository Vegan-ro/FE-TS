export type DaysOfWeek = {
  [key: string]: string[];
};

export interface AddressSelectProps {
  roadAddress: string;
  lotAddress: string;
  coordinates: { lat: number; lng: number } | null;
}
