import React, { Component } from "react";
import './feedcontent.scss'

import RecentContainer from './RecentContainer/RecentContainer'



class FeedContent extends Component {

      render(){

        return(
          <div className="feed-content">

              <RecentContainer >

              </RecentContainer>

          </div>



        )
      }
}


export default FeedContent;
