import Banner from "./Components/Sections/Banner"
import GettingStarted from "./Components/Sections/GettingStarted";
import Navbar from "./Components/Sections/Navbar"
import Stats from "./Components/Sections/Stats"


// const data = ()=>{
//   const promise = fetch('/public/data.json');
//   return promise.json()
// }
function App() {


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
      
      {/* get started section can i reuse the card*/}
      <GettingStarted></GettingStarted>
      {/* {pricing section with card} */}
      {/* bottombar */}
      {/* footer */}

    </>
  )
}

export default App
