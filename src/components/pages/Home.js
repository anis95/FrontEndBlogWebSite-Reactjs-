import React, {Component} from 'react';
import Header from '../Common/Header';
import image from '../assets/img/header-bg.jpg';

import Services from '../Common/Services';
import Portfolio from '../Common/Portfolio';
import About from './About';
import Team from '../Common/Team';
import Client from '../Common/Client';
import Contact from './Contact';
class Home extends Component {

    render(){
        return(
            <div>
              <Header 
               title="Welcome To Our Studio!"
               subtitle="It's Nice To Meet You"
               buttonText="Tell Me More"
               link="/services"
               showButton={true}
               image={image}

              />
              <Services />
              <Portfolio/>
              <About/>
              <Team/>
              <Client/>
              <Contact/>
          </div>
        );
    }
}

export default Home;