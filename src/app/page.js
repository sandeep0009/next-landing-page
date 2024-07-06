import Banner from "@/components/Banner";
import Banner2 from "@/components/Banner2";
import Card from "@/components/Card";
import Client from "@/components/Client";
import Footer from "@/components/Footer";
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
            <Banner2/>
            <Footer/>

    </div>
  
  
    
  );
}
