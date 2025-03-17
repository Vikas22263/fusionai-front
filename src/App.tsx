import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Navbar from "@/components/organisms/Navbar";
import Intro from "./pages/Intro";
import GoogleCallback from "./components/auth/GoogleCallback";
import About from "./components/pages/about/About";
import Pullers from "./pages/Pullers";
import Privacypolicy from "./components/pages/privacy/privacypolicy";
import { WebSocketProvider } from "./context/socket";
import ProtectedRoute from "./components/auth/ProtectedRoute";


function App() {
  return (
    <>
      <div className="bg-[#121218]">
        <Navbar />
        <Routes>
          <Route path="/" element={<Intro />} />
          {/* <Route element={<ProtectedRoute />}> */}
            <Route
              path="/screener"
              element={
                <WebSocketProvider>
                  <Home />
                </WebSocketProvider>
              }
            />
            <Route path="/pullersdrager" element={<Pullers />} />
          {/* </Route> */}
          <Route path="/Privacy-Policy" element={<Privacypolicy />} />

          <Route path="/about" element={<About />} />
          <Route path="/auth/callback" element={<GoogleCallback />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
