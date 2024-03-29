import React from 'react';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Homepage from './pages/homepage/homepage';
import ContactPage from './pages/contactPage/contactPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage></Homepage>}></Route>
        <Route path="/contact" element={<ContactPage></ContactPage>}></Route>
      </Routes>
    </Router>
  );
}
// function App() {
//   return (
//     <div className="App">
//         <Homepage></Homepage>
//     </div>
//   );
// }

export default App;
