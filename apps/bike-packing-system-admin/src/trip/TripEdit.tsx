import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";
import { BikeTitle } from "../bike/BikeTitle";
import { PackTitle } from "../pack/PackTitle";
import { RouteTitle } from "../route/RouteTitle";

export const TripEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="bike.id" reference="Bike" label="Bike">
          <SelectInput optionText={BikeTitle} />
        </ReferenceInput>
        <DateTimeInput label="EndDate" source="endDate" />
        <ReferenceInput source="pack.id" reference="Pack" label="Pack">
          <SelectInput optionText={PackTitle} />
        </ReferenceInput>
        <ReferenceInput source="route.id" reference="Route" label="Route">
          <SelectInput optionText={RouteTitle} />
        </ReferenceInput>
        <DateTimeInput label="StartDate" source="startDate" />
      </SimpleForm>
    </Edit>
  );
};