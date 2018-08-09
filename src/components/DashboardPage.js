import React, {Component} from 'react';
import Images from './images';
import Quotes from './Quotes';
import QuoImg from './QuoImg';

class DashboardPage extends Component{ 
    
    // componentDidMount(){
    //     let count = 1;
    //     console.log('mount');
    //     while (count <= 3 ){
    //        // getQuote(handleQuote);
    //         //getImage(handleImage);
    //         count++;
    //     }    
    // }

    render() {
        return  (
            <div className="row">
            
            
                <div className="body-container">
                    
                    <section className="section-one">
                        <Images />
                        <Quotes />
                    </section>

                    <section className="section-two">
                        <QuoImg />
                    </section>
                </div>
            </div>
        );
    }
}
export default DashboardPage;