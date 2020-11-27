import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from '../pages/Main';
import Contact from '../pages/Contact';
import SobreNos from '../pages/Sobrenos'
import Noticias from '../pages/Noticias'

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/sobre-nos" exact component={SobreNos} />
      <Route path="/cursos" exact component={Noticias} />
      <Route path="/contact" exact component={Contact} />
    </Switch>
  );
}
