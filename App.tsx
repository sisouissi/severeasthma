
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import AbbreviationsPage from './pages/AbbreviationsPage';
import MedicationsPage from './pages/MedicationsPage';
import DecisionTreeNavigator from './pages/DecisionTreeNavigator';
import { decisionTreeData } from './data/decisionTreeData';
import { SvgChevronRight, SvgInformationCircle, SvgBeaker, SvgDocumentText, SvgHome } from './components/Icons';


const App: React.FC = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/decision/:nodeId" element={<DecisionTreeNavigator treeData={decisionTreeData} />} />
        <Route path="/abbreviations" element={<AbbreviationsPage />} />
        <Route path="/medications" element={<MedicationsPage />} />
      </Routes>
    </Layout>
  );
};

export default App;
