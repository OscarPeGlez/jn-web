import React, { FC } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import FileUpload from './components/file-upload';
import Menu from './components/menu-sidebar';
import FurnitureInventory from './screens/categories/furnitures';
import KitchenInventory from './screens/categories/kitchen';
import Others from './screens/categories/others';
import TableLineInventory from './screens/categories/tableLinen';
import Rents from './screens/rentas';

const App: FC = () => {
  return (
    <>
      <Menu />
      <div className="main-content">
        <div className=" padding-topbar-xs hidden-lg hidden-md" />
        <FileUpload />
        <BrowserRouter>
          <Switch>
            <Route exact path="/cocina">
              <KitchenInventory />
            </Route>
            <Route exact path="/mobiliario">
              <FurnitureInventory />
            </Route>
            <Route exact path="/manteleria">
              <TableLineInventory />
            </Route>
            <Route exact path="/otros">
              <Others />
            </Route>
            <Route exact path="/rentas">
              <Rents />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
