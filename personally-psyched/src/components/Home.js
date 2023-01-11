import React from "react";
import Enroll from "./Enroll";
import HomeBanner from "./HomeBanner";
import Newsletter from "./Newsletter";

function Home () {
    return (
        <div>
            <HomeBanner/>
            <Enroll/>
            <Newsletter/>
        </div>
        
    )
}

export default Home;