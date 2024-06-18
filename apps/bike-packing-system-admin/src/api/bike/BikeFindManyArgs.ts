import { BikeWhereInput } from "./BikeWhereInput";
import { BikeOrderByInput } from "./BikeOrderByInput";

export type BikeFindManyArgs = {
  where?: BikeWhereInput;
  orderBy?: Array<BikeOrderByInput>;
  skip?: number;
  take?: number;
};
