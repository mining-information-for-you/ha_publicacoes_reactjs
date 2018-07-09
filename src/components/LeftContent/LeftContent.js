import React, { Component } from "react";
import './leftcontent.scss'



class LeftContent extends Component {

      render(){

        return(
          <div className="left-content">
          <div className="global-links">
              <a href="" >
                <img src="https://avatars1.githubusercontent.com/u/108081?s=400&v=4" /> Rodrigo Faccioli
                <span className="counter">1</span>
              </a>

             
              <div className="group-content">
                <h4>Grupos</h4>
                <a href="" class="dropdown-toggle" data-toggle="dropdown" >
                     <ul class="dropdown-menu">
                        <li><a href="#">Citacao 01 <span class="glyphicon glyphicon-cog pull-right"></span></a></li>
                        <li class="divider"></li>
                        <li><a href="#">Citacao 02 <span class="glyphicon glyphicon-stats pull-right"></span></a></li>
                        <li class="divider"></li>
                     </ul>
                  <img src="http://theieltscoach.com/wp-content/uploads/2015/03/IELTS-Speaking-Tips-Icon-2.png" /> HA Barretos
                  
                </a>
                <a href="">
                  <img src="http://theieltscoach.com/wp-content/uploads/2015/03/IELTS-Speaking-Tips-Icon-2.png" /> Pubmed
                  
                </a>

              </div>
          </div>
          </div>

        )
      }
}


export default LeftContent;
