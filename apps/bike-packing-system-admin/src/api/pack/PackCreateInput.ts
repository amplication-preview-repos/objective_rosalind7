import { TripCreateNestedManyWithoutPacksInput } from "./TripCreateNestedManyWithoutPacksInput";

export type PackCreateInput = {
  capacity?: number | null;
  name?: string | null;
  trips?: TripCreateNestedManyWithoutPacksInput;
  waterproof?: boolean | null;
};
