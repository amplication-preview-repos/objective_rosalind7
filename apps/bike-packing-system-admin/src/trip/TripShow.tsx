import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import { BIKE_TITLE_FIELD } from "../bike/BikeTitle";
import { PACK_TITLE_FIELD } from "../pack/PackTitle";
import { ROUTE_TITLE_FIELD } from "../route/RouteTitle";

export const TripShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField label="Bike" source="bike.id" reference="Bike">
          <TextField source={BIKE_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="EndDate" source="endDate" />
        <TextField label="ID" source="id" />
        <ReferenceField label="Pack" source="pack.id" reference="Pack">
          <TextField source={PACK_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="Route" source="route.id" reference="Route">
          <TextField source={ROUTE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="StartDate" source="startDate" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
