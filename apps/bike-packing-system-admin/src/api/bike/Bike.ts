import { Trip } from "../trip/Trip";

export type Bike = {
  brand: string | null;
  createdAt: Date;
  id: string;
  model: string | null;
  trips?: Array<Trip>;
  typeField: string | null;
  updatedAt: Date;
};
