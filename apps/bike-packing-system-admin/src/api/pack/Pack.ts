import { Trip } from "../trip/Trip";

export type Pack = {
  capacity: number | null;
  createdAt: Date;
  id: string;
  name: string | null;
  trips?: Array<Trip>;
  updatedAt: Date;
  waterproof: boolean | null;
};
