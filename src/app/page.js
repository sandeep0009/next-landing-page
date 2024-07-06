import Banner from "@/components/Banner";
import Card from "@/components/Card";
import Client from "@/components/Client";
import Hero from "@/components/Hero";
import Manage from "@/components/Manage";
import Message from "@/components/Message";
import Navbar from "@/components/Navbar";
import Testimonial from "@/components/Testimonial";

export default function Home() {
  return (

    <div className="container">

      
            <Navbar/>
            <Hero/>
            <Client/>
            <Message/>

            <Banner/>
            <Manage/>
            <Testimonial/>
            <Card/>

    </div>
  
  
    
  );
}
