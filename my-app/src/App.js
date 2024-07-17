import React from 'react';
import "./App.css";
import Layout from "./layout/Layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./views/DashBoard/DashBoard";
import { RouteName } from "./routes/Routes";

// import "./assests/styling/globals.css'"
// import './assets/styling/dark.css'
// import './assets/styling/leftSidebarDark.css'

function App() {

  const routes = [
    // {
    //   path: RouteName.currentCourse,
    //   component: Dashboard,
    // },
  ];

  return (
    <Router>
      <Routes>
        <Route index element={<Dashboard />} />
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={
              <Layout>
                <route.component />
              </Layout>
            }
          />
        ))}
        <Route path={RouteName.Dashboard} element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
