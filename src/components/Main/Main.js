import React, { Component } from "react";
import Navbar from "../Navbar/Navbar"
import LeftContent from "../LeftContent/LeftContent"
import FeedContent from "../FeedContent/FeedContent"
import ThirdcolContent from "../ThirdcolContent/ThirdcolContent"



class Main extends Component {

      render(){

        return(
          <div>


          <Navbar></Navbar>
          <LeftContent></LeftContent>
          <FeedContent></FeedContent>
          <ThirdcolContent></ThirdcolContent>
          </div>
        )
      }
}


export default Main;
