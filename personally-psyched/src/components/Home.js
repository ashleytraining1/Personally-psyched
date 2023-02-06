import React from "react";
import Vision from "./Vision";
import HomeBanner from "./HomeBanner";
import Mission from "./Mission";
import Service from "./Service";
import HomeEvents from "./HomeEvents";

function Home () {
    return (
        <div>
            <HomeBanner/>
            <Vision/> 
            <Mission/>
            <Service/>
            <HomeEvents/> 
        </div>
        
    )
}

export default Home;