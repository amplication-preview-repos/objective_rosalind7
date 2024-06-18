import { TripCreateNestedManyWithoutRoutesInput } from "./TripCreateNestedManyWithoutRoutesInput";

export type RouteCreateInput = {
  distance?: number | null;
  duration?: number | null;
  name?: string | null;
  trips?: TripCreateNestedManyWithoutRoutesInput;
};
