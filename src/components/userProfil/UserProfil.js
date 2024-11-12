import React from 'react'
import './user.css'
import UserCardsNotes from './UserCardsNotes'
const UserProfil = ({logout,userAcount}) => {
  return (
    <div><>
    <header className="side-header">
      <a href="#">
        <div className="logo">
          <img src="https://static1.squarespace.com/static/58da61243a0411e118c534d9/5ab7ed2e88251b198c3e5d48/5ab7ed2e03ce64c499d195db/1522003251202/Bear.png?format=500w" />
        </div>
      </a>
      <nav className="navbar-side">
        <ul>
          <li className="active">
            <a href="index.html">
              <div className="svg-space">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  version="1.1"
                  x="0px"
                  y="0px"
                  viewBox="0 0 64 80"
                  enableBackground="new 0 0 64 64"
                  xmlSpace="preserve"
                >
                  <g>
                    <g>
                      <path d="M33,56.5c-10.2,0-18.8-8.2-20-19c-0.4-3.9-0.3-4.9,0-7.2c0.1-0.8,1.3-3.6,2.6-3.6H16l0.3,0.3c0.2,0.2,0.3,0.4,0.3,0.9    c-0.1,6.7,2.9,10.8,4.6,12.3l-0.1-0.3c-2.9-7.1-5.7-13.7,0.6-23c4.6-6.8,10.6-9,10.9-9.1l1.6-0.6L34,9c0,0.1-2.1,12.8,6.2,15.3    c3.9,1.2,11.3,5.7,11.1,14C51,49,43.5,56.5,33,56.5z M14.9,31.1c-0.2,1.7-0.3,2.7,0.1,6.2c1.1,9.8,8.9,17.2,18,17.2    c9.3,0,16-6.7,16.3-16.3c0.2-7.1-6.2-10.9-9.7-12c-7.9-2.4-8.1-11.8-7.8-15.8c-2,1-5.5,3.4-8.4,7.6c-5.6,8.4-3.2,14.3-0.4,21.1    l0.5,1.1c0.3,0.8,0.3,1.4,0,1.9c-0.3,0.4-0.7,0.6-1.2,0.6c-1.1,0-2.3-1.1-3-1.7C18.4,40.1,15.7,36.8,14.9,31.1z" />
                    </g>
                    <g>
                      <path d="M35.3,50L35.3,50c-0.3,0-0.6,0-0.6,0c-3.7-0.3-5.7-1.6-5.8-1.7l-1.7-1.2l2-0.6c8.4-2.5,4.7-17.5,4.6-17.7l-0.3-1.3    l1.4,0.1c9,0.5,10,9.1,10,9.2c0.4,4.5-0.5,8-2.6,10.3C39.9,49.7,36.6,50,35.3,50z M32,47.5c0.8,0.2,1.7,0.4,2.9,0.5    c0,0,0.2,0,0.4,0l0,0c1,0,3.7-0.2,5.6-2.3c1.7-1.9,2.4-4.8,2.1-8.8c0-0.2-0.7-6.1-6.8-7.2C36.9,33.5,38.2,43.6,32,47.5z" />
                    </g>
                  </g>
                </svg>
              </div>{" "}
              Work user rani 
            </a>
          </li>
          <li>
            <a href="about.html">
              
              About
            </a>
          </li>
          <li>
            <a href="labs.html">
              <div className="svg-space">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  version="1.1"
                  x="0px"
                  y="0px"
                  viewBox="0 0 64 80"
                  enableBackground="new 0 0 64 64"
                  xmlSpace="preserve"
                >
                  <g>
                    <g>
                      <g>
                        <path d="M57,51H7V21h50V51z M9,49h46V23H9V49z" />
                      </g>
                      <g>
                        <path d="M29.7,23H7V13h19.7L29.7,23z M9,21h18.1l-1.8-6H9V21z" />
                      </g>
                    </g>
                  </g>
                </svg>
              </div>{" "}
              Labs
            </a>
          </li>
          <li>
            <a href="contact.html">
              <div className="svg-space">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  version="1.1"
                  x="0px"
                  y="0px"
                  viewBox="0 0 64 80"
                  enableBackground="new 0 0 64 64"
                  xmlSpace="preserve"
                >
                  <g>
                    <g>
                      <g>
                        <path d="M15.8,56.9H8.7c-0.6,0-1-0.4-1-1V24.6c0-0.6,0.4-1,1-1h7.1c0.6,0,1,0.4,1,1v31.4C16.8,56.5,16.4,56.9,15.8,56.9z      M9.7,54.9h5.1V25.6H9.7V54.9z" />
                      </g>
                      <g>
                        <path d="M44.8,57H26.9c-3.3,0-5.9-2.7-5.9-5.9V24.7c0-0.2,0.1-0.5,0.2-0.6L34,8.3c0.2-0.3,0.5-0.4,0.9-0.4C35,8,35,8,38.1,8.8     c2,0.5,3.3,2.5,2.9,4.6c-0.6,3.1-1.7,8-2.2,10.3l12,0c2.9,0,4.6,0.5,5.5,1.5c1,1.1,0.9,2.6,0.8,4c0,0.4-0.1,0.9-0.1,1.3v7.1     c0,0.2,0,0.3-0.1,0.5c-0.1,0.1-5.4,9.5-11.4,18.6C45.4,56.9,45.1,57,44.8,57z M23,25v26.1c0,2.2,1.8,3.9,3.9,3.9h17.3     c5.3-8.1,10.1-16.3,10.9-17.8v-6.8c0-0.5,0-1,0.1-1.4c0.1-1.2,0.1-2-0.3-2.5c-0.5-0.6-1.9-0.9-4.1-0.9l-0.4,0H37.6     c-0.3,0-0.6-0.1-0.8-0.4c-0.2-0.2-0.3-0.5-0.2-0.8c0-0.1,1.6-7.4,2.4-11.5c0.2-1-0.4-2-1.4-2.3c-0.9-0.2-1.9-0.5-2.5-0.6L23,25z" />
                      </g>
                    </g>
                  </g>
                </svg>
              </div>{" "}
              Contact
            </a>
          </li>
          <li className="bottom">
            <a href="#">
              <div className="svg-space">
              
              </div>{" "}
              Light / Dark
            </a>
          </li>
        </ul>
      </nav>
    </header>
    <main className="main-wrapper">
      <header className="top-navbar">
        <div className="page-title">Work</div>
        <form className="searchbar">
          <input type="search" name="" placeholder="Search..." />
          <a href="#" className="js-close-bar">
            
          </a>
        </form>
        <nav className="navbar-top">
          <ul>
            <li>
           
            </li>
            <li className="js-open-bar">
              <a href="#">
              
              </a>
            </li>
            <li className="menu-toggle">
              <a href="#">
                
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <section className="works smooth-in">
    
        <UserCardsNotes/>
        <UserCardsNotes/>
        <UserCardsNotes/>
        <UserCardsNotes/>
        <UserCardsNotes/>
        <UserCardsNotes/>
        <UserCardsNotes/>
        <UserCardsNotes/>
        <UserCardsNotes/>

      </section>
      <footer>
        <nav className="footer-nav">
          <ul>
            <li>
              <a href="#">
                <i className="fab fa-facebook-square" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-dribbble-square" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-codepen" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-github-square" />
              </a>
            </li>
            <li>
              <a href="#">colourjim@gmail.com</a>
            </li>
          </ul>
        </nav>
      </footer>
    </main>
  </>
  </div>
  )
}

export default UserProfil