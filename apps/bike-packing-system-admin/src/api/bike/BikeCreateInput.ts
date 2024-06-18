import { TripCreateNestedManyWithoutBikesInput } from "./TripCreateNestedManyWithoutBikesInput";

export type BikeCreateInput = {
  brand?: string | null;
  model?: string | null;
  trips?: TripCreateNestedManyWithoutBikesInput;
  typeField?: string | null;
};
