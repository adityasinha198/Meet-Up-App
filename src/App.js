import { Route, Routes } from "react-router-dom";
// import { sw } from 'react-router-dom'
//  import   from "react-router-dom";
import AllMeetupsPage from "./pages/AllMeetups";
import FavoritesPage from "./pages/Favorites";
import NewMeetupPage from "./pages/NewMeetup";
// import MainNavigation from "./components/layouts/MainNavigation";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AllMeetupsPage />} />
      <Route path="/newmeetup" element={<NewMeetupPage />} />
      <Route path="/favorites" element={<FavoritesPage />} />
    </Routes>
  );
}

export default App;
