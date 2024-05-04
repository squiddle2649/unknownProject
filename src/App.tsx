import React from 'react';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Homepage from './pages/homepage/homepage';
import ContactPage from './pages/contactPage/contactPage';
import AboutPage from './pages/aboutPage/aboutPage';
import TestPage from './pages/testPage/testPage';
import { SubjectPage } from './pages/testPage/subjectPage/theSubjectPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage></Homepage>}></Route>
        <Route path="/contact" element={<ContactPage></ContactPage>}></Route>
        <Route path="/about" element={<AboutPage></AboutPage>}></Route>
        <Route path="/test" element={<TestPage></TestPage>}></Route>
        <Route path="/:subject" element={<SubjectPage></SubjectPage> }></Route>
      </Routes>
    </Router>
  );
}

export default App;
