import Footer from "./components/footer/footer";
import Hero from "./components/hero/hero";
import Infos from "./components/infos/infos";
import Navbar from "./components/navbar/navbar";
import Story from "./components/story/story";

function App() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div style={{ marginBottom: "5vh", paddingTop: "5vh" }}>
        <Hero />
      </div>
      <div style={{ marginBottom: "5vh" }}>
        <Infos />
      </div>
      <div style={{ marginBottom: "10vh" }}>
        <Story />
      </div>
      <Footer />
    </>
  );
}

export default App;
