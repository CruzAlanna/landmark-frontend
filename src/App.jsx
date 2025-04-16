import { Header } from "./Header";
import { LandmarksPage } from "./LandmarksPage";
import { Footer } from "./Footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div style={{ textAlign: 'center' }}>
      <Header />
      <main>
        {/* Outlet renders the matching child route component from main.jsx */}
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default App
