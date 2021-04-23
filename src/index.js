import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";


import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import CadastroVideo from './pages/cadastro/video';


Sentry.init({
  dsn: "https://70275b728f1a4c2883e63c2a1eae4616@o577431.ingest.sentry.io/5732170",
  integrations: [new Integrations.BrowserTracing()],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

const Pagina404 = () => (
  <div>
    Página 404
  </div>
)

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/" component={Pagina404} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);