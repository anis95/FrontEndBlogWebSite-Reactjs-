import React, { Component } from 'react';
import PageWrapper from './components/PageWrapper';
import {connect} from 'react-redux';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
// Pages
import Home from './components/pages/Home';
import About from './components/pages/About';
import Services from './components/Common/Services';
import Portfolio from './components/Common/Portfolio';
import Team from './components/Common/Team';
import Contact from './components/pages/Contact';
import Blog from './components/pages/Blog';
import Single from './components/pages/Single';
import Signup from './components/pages/Signup';

//Admin pages
import AdminWrapper from './components/AdminWrapper';
import Login from './components/pages/Login';
import Dashboard from './components/pages/Admin/Dashboard';
import LoginWrapper from './components/LoginWrapper';
import Users from './components/pages/Admin/Users';
import Posts from './components/pages/Admin/Posts';
import AddPost from './components/pages/Admin/AddPost';


class App extends Component {
render() {
  return (

<Router>

    <Route 
    path= "/admin/users"
    render= {props => {
        return (
         <div>
            {
            this.props.auth.token ? 
            <AdminWrapper>
            <Users/>
            </AdminWrapper>
            :
            <LoginWrapper>
                <Login />
            </LoginWrapper>
            
            }
         </div>
            
            
       
        )         
    }
    }
    
    />
    <Route 
        path="/admin/posts/:view/:id"
        exact={true}
        render = {props => {
            return(
                <div>
                    {
                this.props.auth.token ? 
                <AdminWrapper>
                <AddPost/>
                </AdminWrapper>
                :
                <LoginWrapper>
                    <Login />
                </LoginWrapper>
                
                }
                </div>
            )
        }
        

    }
    />
    <Route 
    path="/admin/posts/:view"
    exact={true}
    render = {props => {
        return(
            <div>
                 {
            this.props.auth.token ? 
            <AdminWrapper>
            <AddPost/>
            </AdminWrapper>
            :
            <LoginWrapper>
                <Login />
            </LoginWrapper>
            
            }
            </div>
        )
    }
    

}
    />

    <Route 
    path= "/admin/posts"
    exact={true}
    render= {props => {
        return (
         <div>
            {
            this.props.auth.token ? 
            <AdminWrapper>
            <Posts/>
            </AdminWrapper>
            :
            <LoginWrapper>
                <Login />
            </LoginWrapper>
            
            }
         </div>
            
            
       
        )         
    }
    }
    
    />

    <Route
          exact={true}
          path="/signup"
          render={props => {
            if(this.props.auth.token){
              return (
                <Redirect to="/" />
              )
            }else{
              return (
                <LoginWrapper>
                    <Signup />
                  </LoginWrapper>
              )
            }
          }} 
    />

    <Route
    exact={true}
    path="/admin"
    render= {props => {
        return (
         <div>
            {
            this.props.auth.token ? 
            <AdminWrapper>
            <Dashboard/>
            </AdminWrapper>
            :
            <LoginWrapper>
                <Login />
            </LoginWrapper>
            
            }
         </div>
            
            
       
        )         
    }
    }
    />

    <Route
    exact={true}
    path="/"
    render ={props =>(
        <PageWrapper>
            <Home {...props}/>
        </PageWrapper>
    )}
    /> 

     <Route
        path="/blog/:slug"
        exact={true}
        render ={props =>(
            <PageWrapper>
                <Single {...props}/>
            </PageWrapper>
        )}
        /> 

    <Route
        path="/blog"
        exact={true}
        render ={props =>(
            <PageWrapper>
                <Blog {...props}/>
            </PageWrapper>
        )}
        /> 
    <Route
        path="/about"
        render ={props =>(
            <PageWrapper>
                <About {...props}/>
            </PageWrapper>
        )}
        />
    <Route
        path="/services"
        render ={props =>(
            <PageWrapper>
                <Services {...props}/>
            </PageWrapper>
        )}
        />
        
    <Route
        path="/portfolio"
        render ={props =>(
            <PageWrapper>
                <Portfolio {...props}/>
            </PageWrapper>
        )}
        />

    <Route
        path="/team"
        component={Team}
        />
    <Route 
        path="/contact"
        render ={props =>(
            <PageWrapper>
                <Contact {...props}/>
            </PageWrapper>
        )}
    />

</Router>
  );
}
}
const mapStateToProps = state => {
    return {
        auth: state.auth
    }
}
const mapDispatchToProps = dispatch => {

}
export default connect(
mapStateToProps,
mapDispatchToProps
)(App);
