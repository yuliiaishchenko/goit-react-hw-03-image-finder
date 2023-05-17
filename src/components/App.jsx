import React, {Component} from 'react';
import { Searchbar } from './Searchbar/Searchbar';

import ImageGallery from './ImageGallery/ImageGallery';
import { ToastContainer, Slide } from 'react-toastify';


export default class App extends Component {
  state = {
    textSearch: '',
  };

  handleSubmit = textSearch => {
    this.setState({ textSearch });
  };

  render() {
    const { textSearch } = this.state;

    return (
      <>
      <Searchbar onSubmit={this.handleSubmit}/>
      <>
      <ImageGallery value={textSearch}/></>
      <ToastContainer transition={Slide}/></>
    );
  }
}


// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };
