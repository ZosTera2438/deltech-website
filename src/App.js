import Main from "./components/main";
import About from "./components/about";
import Faqs from "./components/faqs";
import Sponsors from "./components/sponsors";
import Committees from "./components/committees";
import Gallery from "./components/gallery";
import Footer from "./components/footer";
import ScrollToTop from "react-scroll-to-top";
import NavBarnew from "./components/newnavbar";
import Council from "./components/council";
import RiseLoader from "react-spinners/RiseLoader";
import {useState,useEffect} from "react";
import Timer from "./components/timeer";
function App() {
  const [loading,setLoading]=useState(true);
  useEffect(()=>{
    
    setTimeout(()=>{
      setLoading(false);
    },3000);
  },[])
  return (
    <>
    {
      loading ? (<div className="bg-slate-900 w-full h-screen flex flex-col items-center justify-center">
        
          
        
    <h1 className="mt-5 mb-10 text-center py-5 md:text-7xl text-5xl text-white font-lato lh1 font-bold border-black">
            DELTECH MUN 2023
            </h1>
            <RiseLoader
            className="my-10"

      
      color={'#FFFFFF'}
      loading={loading}
      
      size={25}
      
    />
    <Timer></Timer>
        
    </div>):(
<div>

      <NavBarnew />
      <Main />
      <ScrollToTop
        smooth
        color="black"
        width="42px"
        height="42px"
        svgPath="M12.7,12.5C12.7,12.5,12.7,12.5,12.7,12.5c-0.4-0.4-1-0.4-1.4,0l-3,3c-0.4,0.4-0.4,1,0,1.4c0.4,0.4,1,0.4,1.4,0l2.3-2.3l2.3,2.3c0.2,0.2,0.4,0.3,0.7,0.3c0.3,0,0.5-0.1,0.7-0.3c0.4-0.4,0.4-1,0-1.4L12.7,12.5z M9.7,11.5L12,9.2l2.3,2.3c0.2,0.2,0.4,0.3,0.7,0.3c0.3,0,0.5-0.1,0.7-0.3c0.4-0.4,0.4-1,0-1.4l-3-3c0,0,0,0,0,0c-0.4-0.4-1-0.4-1.4,0l-3,3c-0.4,0.4-0.4,1,0,1.4C8.7,11.8,9.3,11.8,9.7,11.5z"
        viewBox="0 0 24 24"
        className="bg-white outline outline-black rounded-l-lg animate-bounce"
        />

      <About />
      <Committees />
      <Council />
      <Gallery />
      <Sponsors />
      <Faqs />
      <Footer />
    </div>
    )
    }

    </>
  );
}

export default App;
