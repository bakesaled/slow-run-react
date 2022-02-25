import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//Styles
import { GlobalStyle } from './GlobalStyle';
import MainContent from './components/MainContent';
import { Provider } from 'react-redux';
import store, { persistor } from './store';
import { PersistGate } from 'redux-persist/integration/react';
import Logout from './pages/Logout';
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import NotFound from './components/NotFound';
import ProtectedRoutes from './components/ProtectedRoutes';
import Login from './pages/Login';

const App: React.FC = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor} loading={null}>
      <Router>
        <Routes>
          <Route path="/" element={<MainContent />}>
            <Route path="/" element={<ProtectedRoutes />}>
              <Route path="/" element={<Dashboard />} />
              <Route path="/activities" element={<Home />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/*" element={<NotFound />} />
          </Route>
          <Route path="/logout" element={<Logout />} />
        </Routes>
        <GlobalStyle />
      </Router>
    </PersistGate>
  </Provider>
);

export default App;
