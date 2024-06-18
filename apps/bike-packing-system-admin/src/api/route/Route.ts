import { Trip } from "../trip/Trip";

export type Route = {
  createdAt: Date;
  distance: number | null;
  duration: number | null;
  id: string;
  name: string | null;
  trips?: Array<Trip>;
  updatedAt: Date;
};
