import { Bike } from "../bike/Bike";
import { Pack } from "../pack/Pack";
import { Route } from "../route/Route";

export type Trip = {
  bike?: Bike | null;
  createdAt: Date;
  endDate: Date | null;
  id: string;
  pack?: Pack | null;
  route?: Route | null;
  startDate: Date | null;
  updatedAt: Date;
};
