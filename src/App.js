import './App.css';

import { Route, Routes } from 'react-router-dom';

import AllBooks from './pages/allbooks';
import BookDetails from './pages/BookDetails';
import Footer from './Components/footer';
import Header from './Components/header';
import Home from './pages/home'
import SampleBooks from './pages/SampleBooks';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/all-books" element={<AllBooks />} />
          <Route path="/book/:id" element={<BookDetails />} />
          <Route path="/sample-books" element={<SampleBooks />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;

