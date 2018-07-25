import React from 'react';
import { connect } from 'react-redux';
import addImage from '../actions/images'

let urlImage = '';

export const getImage = (callback) => {
  // fetch('https://source.unsplash.com/random/225x225')
  fetch('https://picsum.photos/250/250/?random')
  //https://api.unsplash.com/photos/?client_id=5a7bcdef74eb41f5b201719af6aea2a6fd7a5d91b3660ad4403816405fbbb4a7&per_page=1&page=1
		// .then(res => res.json())
		.then((data) => {
      urlImage = data.url;
      callback();
      // return data;
		})
		.catch(err => {
			console.log('Error happened during fetching!', err);
    });
}

