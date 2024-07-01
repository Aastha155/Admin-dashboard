import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Tables from './pages/Tables';
import Charts from './pages/Charts';
import Calendar from './pages/Calendar';
import Kanban from './pages/Kanban';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/tables" element={<Tables />} />
          <Route path="/charts" element={<Charts />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/kanban" element={<Kanban />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
