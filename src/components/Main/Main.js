import React, { Component } from "react";
import Navbar from "../Navbar/Navbar"
import LeftContent from "../LeftContent/LeftContent"
import FeedContent from "../FeedContent/FeedContent"
import ThirdcolContent from "../ThirdcolContent/ThirdcolContent"



class Main extends Component {

      render(){

        return(
          <div>


            <Navbar/>

            <LeftContent/>

            <FeedContent/>

            <ThirdcolContent/>

          </div>
        )
      }
}


export default Main;
