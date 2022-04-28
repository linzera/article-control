import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, useLocation, useNavigate } from 'react-router-dom';
import { QueryParamProvider } from 'use-query-params';

import App from './app';

import reportWebVitals from './reportWebVitals';

/**
 * This is the main thing you need to use to adapt the react-router v6
 * API to what use-query-params expects.
 *
 * Pass this as the `ReactRouterRoute` prop to QueryParamProvider.
 */
const RouteAdapter = ({ children }: any) => {
  const navigate = useNavigate();
  const location = useLocation();

  const adaptedHistory = React.useMemo(
    () => ({
      replace(location: any) {
        navigate(location, { replace: true, state: location.state });
      },
      push(location: any) {
        navigate(location, { replace: false, state: location.state });
      },
    }),
    [navigate]
  );
  return children({ history: adaptedHistory, location });
};

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryParamProvider ReactRouterRoute={RouteAdapter}>
        <App />
      </QueryParamProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
