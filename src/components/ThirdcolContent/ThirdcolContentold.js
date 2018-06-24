import React, { Component } from "react";
import './thirdcolcontent.scss'



class ThirdcolContent extends Component {

      render(){
        return(

          <div className="thirdcol-content">
            <div className="section-content">
              <h4>
                Your Pages

                <a href="">
                  <i className="fa fa-caret-up"></i>
                </a>
                <hr></hr>
              </h4>

              <a href="">
                <i className="fa fa-caret-down"></i>
              </a>
              <a href="">
                <img src="//i.imgur.com/k2t0gee.png" />
              </a>
              <p>
                <a href="">
                  <span>Your Page</span>
                </a>
                <a href="">
                  <i className="fa fa-comment"></i>
                  Messages
                </a>
                <a href="">
                  <i className="fa fa-globe"></i>
                  Notifications <span>1</span>
                </a>
                
              </p>
              <p>
                <a href="">
                  <i className="fa fa-pencil-square-o"></i>
                  Publish
                </a>
                <a href="">
                  <i className="fa fa-camera"></i>
                  Photo
                </a>
                <a href="">
                  <i className="fa fa-calendar"></i>
                  Event
                </a>
                <a href="">
                  <i className="fa fa-bell"></i>
                  Promote
                </a>
              </p>
            </div>
            <div className="section-content">
              <a href="">
                <i className="fa fa-calendar"></i>
                1 event invite
              </a>
            </div>
            <div className="section-content">
              <h4>
                Trending

                 // entertainment
                <a href="">
                  <i className="fa fa-video-camera"></i>
                </a>
                 // sports
                <a href="">
                  <i className="fa fa-futbol-o"></i>
                </a>
                 // science and technology -->
                <a href="">
                  <i className="fa fa-flask"></i>
                </a>
                //  politics -->
                <a href="">
                  <i className="fa fa-balance-scale"></i>
                </a>
                // top trends -->
                <a className="activetrend" href="">
                  <i className="fa fa-line-chart"></i>
                </a>
              </h4>
              <div className="trend-feed">
                <ul>
                  <li>
                    <a href="">Alex Honnold</a>
                    <span>'Free solo' climber conquers El Capitan without rope, safety gear ‑ <span>msn.com</span></span>
                  </li>
                  <li>
                    <a href="">Michael Bloomberg</a>
                    <span>Michael Bloomberg Pledges $15 Million For Paris Climate Pact ‑ <span>huffingtonpost.com</span></span>
                  </li>
                  <li>
                    <a href="">Theresa May</a>
                    <span>UK PM Mays lead cut to just 1 point over Labour - Survation poll ‑ <span>reuters.com</span></span>
                  </li>
                </ul>
                <div>
                  <a href="">
                    <i className="fa fa-caret-down"></i>
                    See More
                  </a>
                  <a href="">
                    <i className="fa fa-question"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="section-content">
              <h4>
                Sponsored
              </h4>

              <a href="">
                Create Ad
              </a>
              <div>
                <a href="">
                  <img src="//i.imgur.com/pZ2VCSf.png"/>
                  <div>
                    Play at Global Poker!
                    <div>
                      <small>GlobalPoker.com</small>
                    </div>
                  </div>
                  <div>
                    Real Poker Real Winnings Legally Cash Out via PayPal
                  </div>
                </a>
              </div>
              <div>
                <a href="">
                  <img src="//i.imgur.com/2miHaRa.png"/>
                  <div>
                    How To Start Your Own Social Media Marketing Agency and Get Small Businesses To Hire You
                  </div>
                  <div>
                    Tai Lopez went from broke & sleeping on his moms sofa to becoming a social media mogul an...
                  </div>
                </a>
              </div>
            </div>
            <div className="section-content">
              <a href="">English (US)</a> · <a href="">Español</a> · <a href="">Português (Brasil)</a> · <a href="">Français (France)</a> · <a href="">Deutsch</a>
            </div>

            <div>
              <a href="">Privacy</a> · <a href="">Terms</a> · <a href="">Advertising</a> · <a href="">Ad Choices</a> · <a href="">Cookies</a> · <a href="">More</a>
              <p>
                Facebook © 2017
              </p>
            </div>
          </div>


        )
      }
}


export default ThirdcolContent;
