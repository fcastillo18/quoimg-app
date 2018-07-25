import React from 'react';
import { connect } from 'react-redux';

const Images = (props) => {
  return (
    <div>
      {
        props.images.map((img, idx) => (<img key={idx} id="image_container--item" src={img}/>) )
      }
    </div>
  )
}

const mapStateToProps = (state) => ({
  images: [...state.images] 
});

export default connect(mapStateToProps)(Images);
//['https://picsum.photos/200/200?random', 'https://picsum.photos/200/200?random']
