import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchUser } from './store/userSlice';
import Header from './components/Header';
import Page1 from './pages/page1';
import Page2 from './pages/page2';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  return (
    <div>
      <Header />
      <div className="container mx-10 flex">
        <nav className="w-1/6">
          <ul className="flex flex-col space-y-4">
            <li>
              <NavLink 
                to="/" 
                className={({ isActive }) => isActive ? "text-blue-500 font-bold" : ""}
              >
                Page 1
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/page2" 
                className={({ isActive }) => isActive ? "text-blue-500 font-bold" : ""}
              >
                Page 2
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="w-3/4 p-4">
          <Routes>
            <Route path="/" element={<Page1 />} />
            <Route path="/page2" element={<Page2 />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
