import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';

import SearchBooks from './pages/SearchBooks'
import BookDisplay from './pages/BookDisplay'


function App() {
  return (
    <div className='w-auto h-full bg-gray-200 min-h-screen'>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index path="" element={<SearchBooks />} />
            <Route path="search" element={<SearchBooks />} />
            <Route path="book" element={<BookDisplay />} />
          </Route>
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Routes>
      </Router>
      <Outlet />
    </div>
  );
}

export default App;
