import React, { FC } from 'react';
import { Nav } from 'react-bootstrap';
import { BrowserRouter, NavLink, Route } from 'react-router-dom';
import Furniture from '../screens/categories/furnitures';
import Kitchen from '../screens/categories/kitchen';
import Others from '../screens/categories/others';
import TableLine from '../screens/categories/tableLinen';
import Rents from '../screens/rentas';

const Menu: FC<{}> = () => {
  return (
    <BrowserRouter>
      <Navegation />
      <Route path="/cocina" exact component={Kitchen} />
      <Route path="/mobiliario" component={Furniture} />
      <Route path="/otros" component={Others} />
      <Route path="/manteleria" component={TableLine} />
      <Route path="/rentas" component={Rents} />
    </BrowserRouter>
  );
};

const Navegation = (): JSX.Element => (
  <Nav>
    <NavLink to="/cocina" exact activeClassName="active">
      Cocina
    </NavLink>
    <NavLink to="/mobiliario" activeClassName="active">
      Mobiliario
    </NavLink>
    <NavLink to="/otros" activeClassName="active">
      Otros
    </NavLink>
    <NavLink to="/manteleria" activeClassName="active">
      Manteleria
    </NavLink>
    <NavLink to="/rentas" activeClassName="active">
      Rentas
    </NavLink>
  </Nav>
);

export default Menu;
