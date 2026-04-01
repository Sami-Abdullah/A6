import Banner from "./Components/Sections/Banner"
import Footer from "./Components/Sections/Footer";
import GettingStarted from "./Components/Sections/GettingStarted";
import Navbar from "./Components/Sections/Navbar"
import Pricing from "./Components/Sections/Pricing";
import Products from "./Components/Sections/Products";
import Stats from "./Components/Sections/Stats"
import Workflow from "./Components/Sections/Workflow";

  const data = () => {
    const promise = fetch('/public/data.json');
    return promise
  }

function App() {

const products= data()
  return (
    <>
      {/* navbar */}
      <Navbar></Navbar>
      {/* banner */}
      <Banner></Banner>
      {/* stats */}
      <Stats></Stats>
      {/* 
          products = (heading+buttons) + productshowing(card)

          here there is a product list section for toggling
      */}
      <Products products={data}></Products>

      {/* get started section can i reuse the card*/}
      <GettingStarted></GettingStarted>
      {/* {pricing section with card} */}
      <Pricing></Pricing>
      {/* bottombar */}
      <Workflow></Workflow>
      {/* footer */}
      <Footer></Footer>

    </>
  )
}

export default App
