import React, { Component } from "react";
import './leftcontent.scss'



class LeftContent extends Component {

      render(){

        return(
          <div className="left-content">
          <div className="global-links">
              <a href="javascript:void(0)">
                <img src="https://avatars1.githubusercontent.com/u/108081?s=400&v=4" /> First Last
                <span className="counter">1</span>
              </a>

              <div className="group-content">
                <h4>Grupos</h4>
                <a href="">
                  <img src="http://theieltscoach.com/wp-content/uploads/2015/03/IELTS-Speaking-Tips-Icon-2.png" /> HA Barretos
                  <span className="counter">1</span>
                </a>
                <a href="">
                  <img src="http://theieltscoach.com/wp-content/uploads/2015/03/IELTS-Speaking-Tips-Icon-2.png" /> Pubmed
                  <span className="counter">1</span>
                </a>

              </div>
          </div>
          </div>

        )
      }
}


export default LeftContent;
