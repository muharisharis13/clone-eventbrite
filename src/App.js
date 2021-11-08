import { Fragment } from "react";
import { Navbar } from "./component/navbar/navbar";

import { Route, Switch } from 'react-router-dom'
import { Home } from "./pages/Home/Home";
import { Details } from "./pages/detail/details";


function App() {
  return (
    <Fragment>
      <section>
        <Navbar />
      </section>

      <section>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/details/:id" component={Details} />
        </Switch>
      </section>
    </Fragment>
  );
}

export default App;
