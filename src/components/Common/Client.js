import React, {Component} from 'react';
import ClientItem from './ClientItem';
//image
import img1 from '../assets/img/logos/creative-market.jpg';
import img2 from '../assets/img/logos/designmodo.jpg';
import img3 from '../assets/img/logos/envato.jpg';
import img4 from '../assets/img/logos/themeforest.jpg';

const client = [
    {image: img1},
    {image: img2},
    {image: img3},
    {image: img4}
]

class Client extends Component {
    render(){
    return (
        <section className="py-5">
            <div className="container">
            <div className="row">
            {
                client.map((item,index) => 
                    <ClientItem {...item} key={index}/>
                
                )
            }
                
            </div>
            </div>
        </section>
        );
    }
}
export default Client;