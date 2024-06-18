import { SortOrder } from "../../util/SortOrder";

export type RouteOrderByInput = {
  createdAt?: SortOrder;
  distance?: SortOrder;
  duration?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
