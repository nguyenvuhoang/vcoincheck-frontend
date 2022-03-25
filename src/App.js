import { Suspense } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import "./css/style.css";
import Index from './jsx/index';
import { isAuthenticated } from './store/selectors/AuthSelectors';
import "./vendor/bootstrap-select/dist/css/bootstrap-select.min.css";

function App () {
    return (
        <>
            <Suspense fallback={
                <div id="preloader">
                    <div className="sk-three-bounce">
                        <div className="sk-child sk-bounce1"></div>
                        <div className="sk-child sk-bounce2"></div>
                        <div className="sk-child sk-bounce3"></div>
                    </div>
                </div>  
            }
            >
                <Index />
            </Suspense>
        </>
    );
};

const mapStateToProps = (state) => {
    return {
        isAuthenticated: isAuthenticated(state),
    };
};

export default withRouter(connect(mapStateToProps)(App)); 
