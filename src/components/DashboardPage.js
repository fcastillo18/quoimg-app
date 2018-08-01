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
            <div id="container">
                Dashboard page content
                <div id="image_container">
                    <Images />
                </div>

                <div id="quote_container">
                    <Quotes />
                </div>

                <div id="quoimg"> 
                    <QuoImg />
                </div> 

            </div>
        );
    }
}
export default DashboardPage;