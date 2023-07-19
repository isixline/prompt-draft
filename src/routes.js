import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PreDevelopment from './pages/llmDevelopment/PreDevelopment';
import InDevelopment from './pages/llmDevelopment/InDevelopment';
import AfterDevelopment from './pages/llmDevelopment/AfterDevelopment';
import Home from './pages/Home';

const RouteMap = () => (
  <Routes>
    <Route exact path="/" element={<Home />} />
    <Route exact path="/llm-development/pre-development" element={<PreDevelopment />} />
    <Route exact path="/llm-development/in-development" element={<InDevelopment />} />
    <Route exact path="/llm-development/after-development" element={<AfterDevelopment />} />
  </Routes>
);

export default RouteMap;
