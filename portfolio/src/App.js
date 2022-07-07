import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Nav } from './Components/Nav';
import { Home } from './Components/Home';
import { useState } from 'react';

function App() {
  const [profileClicked, setProfileClicked] = useState(true);

  return (
    <div className="App">
      <Nav
        profileClicked={profileClicked}
        setProfileClicked={setProfileClicked}
      />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                profileClicked={profileClicked}
                setProfileClicked={setProfileClicked}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
