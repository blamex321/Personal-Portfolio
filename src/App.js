import { Helmet } from "react-helmet";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="min-h-screen gradient-bg-welcome">
      <Helmet>
        <title>Laxman's Portfolio</title>
      </Helmet>
      <div className="">
        <div className="fixed top-0 w-full bg-slate-900">
          <Navbar />
        </div>
        <Hero />
      </div>
      <div className="fixed bottom-0 w-full gradient-bg-footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
