import React, { useState } from 'react'
/// React router dom
import {Switch, Route } from 'react-router-dom'
/// Css
import './index.css'
import './chart.css'
import './step.css'

/// Layout
import Nav from './layouts/nav'
import Footer from './layouts/Footer'


/// Home
import Home from "./components/Dashboard/Home";
import Event from "./components/Dashboard/Event";
import FAQs from "./components/Dashboard/FAQs";
import Project from "./components/Dashboard/Project";
import MarketInfo from "./components/Dashboard/MarketInfo";
import Dictionary from "./components/Dashboard/Dictionary";
import CardanoKnowledge from "./components/Dashboard/CardanoKnowledge";
import BlockchainKnowledge from "./components/Dashboard/BlockchainKnowledge";
import Community from "./components/Dashboard/Community";
/// App
import AppProfile from './components/AppsMenu/AppProfile/AppProfile'
import PostDetails from './components/AppsMenu/AppProfile/PostDetails'
import Compose from './components/AppsMenu/Email/Compose/Compose'
import Inbox from './components/AppsMenu/Email/Inbox/Inbox'
import Read from './components/AppsMenu/Email/Read/Read'
import Calendar from './components/AppsMenu/Calendar/Calendar'


/// Plugins
import Select2 from './components/PluginsMenu/Select2/Select2'
import Nestable from './components/PluginsMenu/Nestable/Nestable'
import MainNouiSlider from './components/PluginsMenu/Noui Slider/MainNouiSlider'
import MainSweetAlert from './components/PluginsMenu/Sweet Alert/SweetAlert'
import Toastr from './components/PluginsMenu/Toastr/Toastr'
import JqvMap from './components/PluginsMenu/Jqv Map/JqvMap'


/// Table
import DataTable from './components/table/DataTable'
import SortingTable from "./components/table/SortingTable/SortingTable";
import FilteringTable from "./components/table/FilteringTable/FilteringTable";


/// Form
import ReduxForm from "./components/Forms/ReduxForm/ReduxForm";
import WizardForm from "./components/Forms/ReduxWizard/Index";
import Wizard from './components/Forms/Wizard/Wizard'
import SummerNote from './components/Forms/Summernote/SummerNote'
import Pickers from './components/Forms/Pickers/Pickers'
import jQueryValidation from './components/Forms/jQueryValidation/jQueryValidation'

/// Pages
import Login from './pages/Login'
import LockScreen from './pages/LockScreen'
import Error400 from './pages/Error400'
import Error403 from './pages/Error403'
import Error404 from './pages/Error404'
import Error500 from './pages/Error500'
import Error503 from './pages/Error503'
import Todo from './pages/Todo';


/// Project
import ProjectDetail from './components/Dashboard/project/ProjectDetail'

/// Scroll To Top
import ScrollToTop from './layouts/ScrollToTop';


/// Administrator
// import ProjectAdmin from "./components/Administrator/Home";
import ProjectType from "./components/Administrator/ProjectType";
import ECOSystem from "./components/Administrator/ECOSystem";
import Question from "./components/Administrator/Question";
import UserManager from "./components/Administrator/UserManager";
import UserRole from "./components/Administrator/UserManagement/UserRole";
import Register from './pages/Register'

/// Cardano Knowledge - Detail
import CardanoDetail from "./components/Dashboard/library/Cardano/CardanoDetail";



const Markup = () => {
  let path = window.location.pathname
  path = path.split('/')
  path = path[path.length - 1]
  let pagePath = path.split('-').includes('page')
  const [activeEvent, setActiveEvent] = useState(!path)

  const routes = [
    /// Dashboard
    { url: '', component: Home },
    { url: 'event', component: Event },
    { url: 'faq', component: FAQs },
    { url: 'project', component: Project },
    { url: 'market-info', component: MarketInfo },
    { url: 'dictionary', component: Dictionary },
    { url: 'cardano-knowledge', component: CardanoKnowledge },
    { url: 'blockchain-knowledge', component: BlockchainKnowledge },
    { url: 'community', component: Community },

    
    /// Administrator
    { url: 'project-type', component: ProjectType },
    { url: 'ecosystem', component: ECOSystem },
    { url: 'question', component: Question },
    { url: 'user-list', component: UserManager },
    { url: 'user-role', component: UserRole },
    { url: 'page-register', component: Register },


    /// Apps
    { url: 'app-profile', component: AppProfile },
    { url: 'post-details', component: PostDetails },
    { url: 'email-compose', component: Compose },
    { url: 'email-inbox', component: Inbox },
    { url: 'email-read', component: Read },
    { url: 'app-calender', component: Calendar },
    

    /// Plugin
    { url: 'uc-select2', component: Select2 },
    { url: 'uc-nestable', component: Nestable },
    { url: 'uc-noui-slider', component: MainNouiSlider },
    { url: 'uc-sweetalert', component: MainSweetAlert },
    { url: 'uc-toastr', component: Toastr },
    { url: 'map-jqvmap', component: JqvMap },


    /// Form
    
    { url: 'form-redux', component: ReduxForm },
    { url: 'form-redux-wizard', component: WizardForm },
    { url: 'form-wizard', component: Wizard },
    { url: 'form-wizard', component: Wizard },
    { url: 'form-editor-summernote', component: SummerNote },
    { url: 'form-pickers', component: Pickers },
    { url: 'form-validation-jquery', component: jQueryValidation },

    /// table
    { url: 'table-datatable-basic', component: DataTable },
    { url: 'table-filtering', component: FilteringTable },
    { url: 'table-sorting', component: SortingTable },

    /// pages
    { url: 'page-lock-screen', component: LockScreen },
    { url: 'page-login', component: Login },
    { url: 'page-error-400', component: Error400 },
    { url: 'page-error-403', component: Error403 },
    { url: 'page-error-404', component: Error404 },
    { url: 'page-error-500', component: Error500 },
    { url: 'page-error-503', component: Error503 },
    { url: 'todo', component: Todo },

    { url: 'ecom-project-detail', component: ProjectDetail },

    /// Cardano Knowledge - Detail
    { url: 'cardano-knowledge/:name', component: CardanoDetail },

  ]

  return (
      <> 
          <div
            id={`${!pagePath ? 'main-wrapper' : ''}`}
            className={`${!pagePath ? 'show' : 'mh100vh'}`}
          >
            {!pagePath && (
              <Nav
                onClick={() => setActiveEvent(!activeEvent)}
                activeEvent={activeEvent}
                onClick2={() => setActiveEvent(false)}
                onClick3={() => setActiveEvent(true)}
              />
            )}
            <div
              className={` ${!path && activeEvent ? 'rightside-event' : ''} ${
                !pagePath ? 'content-body' : ''
              }`}
            >
              <div
                className={`${!pagePath ? 'container-fluid' : ''}`}
              >
                <Switch>
                  {routes.map((data, i) => (
                    <Route
                      key={i}
                      exact
                      path={`/${data.url}`}
                      component={data.component}
                    />
                  ))}
                </Switch>
              </div>
            </div>
            {!pagePath && <Footer />}
          </div>
        <ScrollToTop />
      </>
  )
}

export default Markup
