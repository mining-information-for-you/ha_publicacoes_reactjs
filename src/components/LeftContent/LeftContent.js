import React, { Component } from "react";
import './leftcontent.scss'



class LeftContent extends Component {

      render(){

        return(
          <div className="left-content">
          <div class="global-links">
              <a href="javascript:void(0)">
                <img src="//i.imgur.com/5jInimY.jpg" /> First Last
                <span className="counter">1</span>
              </a>

              <div className="group-content">
                <h4>Group Content</h4>
                <a href="">
                  <img src="http://theieltscoach.com/wp-content/uploads/2015/03/IELTS-Speaking-Tips-Icon-2.png" /> Group name
                  <span className="counter">1</span>
                </a>
                <a href="">
                  <img src="http://theieltscoach.com/wp-content/uploads/2015/03/IELTS-Speaking-Tips-Icon-2.png" /> Group name
                  <span className="counter">1</span>
                </a>
                <a href="">
                  <img src="http://theieltscoach.com/wp-content/uploads/2015/03/IELTS-Speaking-Tips-Icon-2.png" /> Group name
                  <span className="counter">1</span>
                </a>
              </div>
          </div>
          </div>

        )
      }
}


export default LeftContent;
