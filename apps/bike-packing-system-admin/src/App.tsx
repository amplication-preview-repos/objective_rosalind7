import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { TripList } from "./trip/TripList";
import { TripCreate } from "./trip/TripCreate";
import { TripEdit } from "./trip/TripEdit";
import { TripShow } from "./trip/TripShow";
import { PackList } from "./pack/PackList";
import { PackCreate } from "./pack/PackCreate";
import { PackEdit } from "./pack/PackEdit";
import { PackShow } from "./pack/PackShow";
import { BikeList } from "./bike/BikeList";
import { BikeCreate } from "./bike/BikeCreate";
import { BikeEdit } from "./bike/BikeEdit";
import { BikeShow } from "./bike/BikeShow";
import { RouteList } from "./route/RouteList";
import { RouteCreate } from "./route/RouteCreate";
import { RouteEdit } from "./route/RouteEdit";
import { RouteShow } from "./route/RouteShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"BikePackingSystem"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Trip"
          list={TripList}
          edit={TripEdit}
          create={TripCreate}
          show={TripShow}
        />
        <Resource
          name="Pack"
          list={PackList}
          edit={PackEdit}
          create={PackCreate}
          show={PackShow}
        />
        <Resource
          name="Bike"
          list={BikeList}
          edit={BikeEdit}
          create={BikeCreate}
          show={BikeShow}
        />
        <Resource
          name="Route"
          list={RouteList}
          edit={RouteEdit}
          create={RouteCreate}
          show={RouteShow}
        />
      </Admin>
    </div>
  );
};

export default App;
