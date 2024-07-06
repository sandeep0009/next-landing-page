import Banner from "@/components/Banner";
import Client from "@/components/Client";
import Hero from "@/components/Hero";
import Message from "@/components/Message";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (

    <div className="container">

      
            <Navbar/>
            <Hero/>
            <Client/>
            <Message/>

            <Banner/>

    </div>
  
  
    
  );
}
