import React from 'react';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import ContactPage from './pages/contactPage/contactPage';
import AboutPage from './pages/aboutPage/aboutPage';
import TestPage from './pages/homePage/homePage';
import { SubjectPage } from './pages/homePage/subjectPage/theSubjectPage';

function App() {
  return (
    <Router>
      <Routes>

        <Route path="/" element={<TestPage></TestPage>}></Route>
        <Route path="/contact" element={<ContactPage></ContactPage>}></Route>
        <Route path="/about" element={<AboutPage></AboutPage>}></Route>
        <Route path="/:subject" element={<SubjectPage></SubjectPage> }></Route>
      </Routes>
    </Router>
  );
}

export default App;
