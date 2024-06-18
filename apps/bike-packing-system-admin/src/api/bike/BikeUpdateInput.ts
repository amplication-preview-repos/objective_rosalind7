import { TripUpdateManyWithoutBikesInput } from "./TripUpdateManyWithoutBikesInput";

export type BikeUpdateInput = {
  brand?: string | null;
  model?: string | null;
  trips?: TripUpdateManyWithoutBikesInput;
  typeField?: string | null;
};
