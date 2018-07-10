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
                <div>
                  <a href="" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
                      <img src="http://theieltscoach.com/wp-content/uploads/2015/03/IELTS-Speaking-Tips-Icon-2.png" /> HA Barretos 
                  </a>
                  <div class="dropdown-menu">
                    <span class="dropdown-item-text">Department of Physical Therapy, Barretos Cancer Hospital, Barretos, Sao Paulo</span>
                    <div class="dropdown-divider"></div>
                    <span class="dropdown-item-text">Barretos Children´s Cancer Hospital</span>
                    <div class="dropdown-divider"></div>
                    <span class="dropdown-item-text">Stem Cell Transplantation Center / Barretos Cancer Hospital</span>
                    <div class="dropdown-divider"></div>
                    <span class="dropdown-item-text">Barretos Cancer Hospital</span>
                    <div class="dropdown-divider"></div>
                  </div>


                </div>
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
