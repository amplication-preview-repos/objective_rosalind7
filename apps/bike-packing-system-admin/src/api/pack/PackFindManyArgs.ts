import { PackWhereInput } from "./PackWhereInput";
import { PackOrderByInput } from "./PackOrderByInput";

export type PackFindManyArgs = {
  where?: PackWhereInput;
  orderBy?: Array<PackOrderByInput>;
  skip?: number;
  take?: number;
};
