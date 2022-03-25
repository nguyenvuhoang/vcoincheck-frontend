/// Menu
import MetisMenu from "metismenujs";
import { Component } from "react";
/// Scroll
import PerfectScrollbar from "react-perfect-scrollbar";
import { connect } from "react-redux";
/// Link
import { Link } from "react-router-dom";
import { isAuthenticated } from "../../../store/selectors/AuthSelectors";

import Donate from "../../components/PluginsMenu/Donate/Donate"


class MM extends Component {
  componentDidMount() {
    this.$el = this.el;
    this.mm = new MetisMenu(this.$el);
  }
  componentWillUnmount() {
  }
    render() {
        return (
            <div className="mm-wrapper">
                <ul className="metismenu" ref={(el) => (this.el = el)}>
                    {this.props.children}
                </ul>
            </div>
        );
    }
}

class SideBar extends Component {

  /// Open menu
  componentDidMount() {
    // sidebar open/close
    var btn = document.querySelector(".nav-control");
    var aaa = document.querySelector("#main-wrapper");
    function toggleFunc() {
      return aaa.classList.toggle("menu-toggle");
    }
    btn.addEventListener("click", toggleFunc);
  }
  state = {
    loveEmoji: false,
  };
  render() {
    /// Path
    let path = window.location.pathname;

    path = path.split("/");

    path = path[path.length - 1];
    
    /// Active menu
    let projecttype = ["project-type"],
        ecosystem = ["ecosystem"],
        question = ["question"],
        userlist = ["user-list"],
        userrole = ["user-role"],
        Home = ["",],
        project = ["project"],
        market = ["market-info"],
        library = ["library"],
        community = ["community"],
        events = ["event"],
        faq = ["faq"]

    return (
      <div className="deznav">
        <PerfectScrollbar className="deznav-scroll">
          <MM className="metismenu" id="menu">
              <li className={`${Home.includes(path) ? "mm-active" : ""}`}>
                <Link className="ai-icon" to="" >
                  <i className="flaticon-381-networking"></i>
                  <span className="nav-text">Home</span>
                </Link>
          
              </li>
              <li className={`${project.includes(path) ? "mm-active" : ""}`}>
                <Link className="ai-icon has-arrow">
                  <i className="flaticon-381-television"></i>
                  <span className="nav-text">Project</span>
                </Link>
                  <ul>
                    <li className={`${projecttype.includes(path) ? "mm-active" : ""}`}>
                          <Link className={`${path === "project" ? "mm-active" : ""}`} onClick={() => this.props.onClick()} to="project">
                            Project List
                          </Link>
                    </li>
                    {this.props.isAuthenticated && 
                      <>
                        <li className={`${projecttype.includes(path) ? "mm-active" : ""}`}>
                          <Link className={`${path === "project-type" ? "mm-active" : ""}`} onClick={() => this.props.onClick()} to="project-type">
                            Project type
                          </Link>
                        </li>
                        <li className={`${ecosystem.includes(path) ? "mm-active" : ""}`}>
                          <Link className={`${path === "ecosystem" ? "mm-active" : ""}`} onClick={() => this.props.onClick()} to="ecosystem">
                            ECOSystem
                          </Link>
                        </li>
                      </>
                    }
                </ul>
                
              </li>
              <li className={`${market.includes(path) ? "mm-active" : ""}`}>
                <Link className="ai-icon" to="market-info" >
                  <i className="flaticon-381-controls-3"></i>
                  <span className="nav-text">Market info</span>
                </Link>
              </li>
              <li className={`${library.includes(path) ? "mm-active" : ""}`}>
                <Link className="ai-icon has-arrow">
                  <i className="flaticon-381-notepad"></i>
                  <span className="nav-text">Library</span>
                </Link>
                <ul>
                    <li className={`${projecttype.includes(path) ? "mm-active" : ""}`}>
                      <Link className={`${path === "dictionary" ? "mm-active" : ""}`} onClick={() => this.props.onClick()} to="dictionary">
                        Dictionary
                      </Link>
                    </li>
                  
                    <li className={`${projecttype.includes(path) ? "mm-active" : ""}`}>
                      <Link className={`${path === "cardano-knowledge" ? "mm-active" : ""}`} onClick={() => this.props.onClick()} to="cardano-knowledge">
                        Cardano knowledge
                      </Link>
                    </li>
                    <li className={`${ecosystem.includes(path) ? "mm-active" : ""}`}>
                      <Link className={`${path === "blockchain-knowledge" ? "mm-active" : ""}`} onClick={() => this.props.onClick()} to="blockchain-knowledge">
                        Blockchain knowledge
                      </Link>
                    </li>
                </ul>
              </li>
              
              <li className={`${community.includes(path) ? "mm-active" : ""}`}>
                <Link to="community" className="ai-icon" >
                  <i className="flaticon-381-settings-2"></i>
                  <span className="nav-text">Community</span>
                </Link>
              </li>
              <li className={`${events.includes(path) ? "mm-active" : ""}`}>
                <Link className="ai-icon" to="event" >
                  <i className="flaticon-381-network"></i>
                  <span className="nav-text">Events</span>
                </Link>
              </li>
              <li className={`${faq.includes(path) ? "mm-active" : ""}`}>
                  <Link className="ai-icon" to="faq" >
                      <i className="flaticon-381-layer-1"></i>
                      <span className="nav-text">FAQs</span>
                  </Link>
              </li>              
              
              {this.props.isAuthenticated && 
                <>
                  <li className={`${question.includes(path) ? "mm-active" : ""}`}>
                  <Link className="ai-icon" to="question">
                    <i className="flaticon-381-list"></i>
                    <span className="nav-text">Question</span>
                  </Link>
                  </li><li className={`${userlist.includes(path) ? "mm-active" : ""}`}>
                    <Link className="ai-icon has-arrow">
                      <i className="flaticon-381-user"></i>
                      <span className="nav-text">User Management</span>
                    </Link>
                  <ul>
                    <li className={`${userlist.includes(path) ? "mm-active" : ""}`}>
                        <Link className={`${path === "user-list" ? "mm-active" : ""}`} onClick={() => this.props.onClick()} to="user-list">
                          User List
                        </Link>
                    </li>
                    <li className={`${userrole.includes(path) ? "mm-active" : ""}`}>
                      <Link className={`${path === "user-role" ? "mm-active" : ""}`} onClick={() => this.props.onClick()} to="user-role">
                          User role
                      </Link>
                    </li>
                  </ul>
                  </li>
                </>
              }
          </MM>
          
      
      <div className="add-menu-sidebar">
          <Link to="#">
            <svg
                width={24}
                height={12}
                viewBox="0 0 24 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
              <path
                  d="M23.725 5.14889C23.7248 5.14861 23.7245 5.14828 23.7242 5.148L18.8256 0.272997C18.4586 -0.0922062 17.865 -0.0908471 17.4997 0.276184C17.1345 0.643169 17.1359 1.23675 17.5028 1.602L20.7918 4.875H0.9375C0.419719 4.875 0 5.29472 0 5.8125C0 6.33028 0.419719 6.75 0.9375 6.75H20.7917L17.5029 10.023C17.1359 10.3882 17.1345 10.9818 17.4998 11.3488C17.865 11.7159 18.4587 11.7172 18.8256 11.352L23.7242 6.477C23.7245 6.47672 23.7248 6.47639 23.7251 6.47611C24.0923 6.10964 24.0911 5.51414 23.725 5.14889Z"
                  fill="white"
              />
            </svg>
            <span>Submit project</span>
          </Link>
      </div>

			<div className="add-menu-sidebar">
          <Donate></Donate>
      </div>
			<div className="copyright">
				<p>© 2022 All Rights Reserved </p>
			</div>
			</PerfectScrollbar>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
    return {
      isAuthenticated: isAuthenticated(state),
    };
};
export default connect(mapStateToProps,null)(SideBar);
