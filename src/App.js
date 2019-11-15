import React, {Component} from 'react';
import Projects from './Project';
import SocialProfile from './SocialProfile';
import './index.css';
import profile from './assets/zarif.jpg';

class App extends Component {
  state = {
    displayBio : false
  }

  toggleDisplayBio = () => {
    this.setState({ displayBio: !this.state.displayBio })
  }

  render() {
    let bio = (this.state.displayBio) ?  (
      <div>
        <p>I live in Chittagong, and i code every day.</p>
        <p>My favourite language is Javascript, 
           and I think React.js is awesome</p>
        <button onClick={this.toggleDisplayBio}>Show less</button>
      </div>
    ) : (
      <div>
        <button onClick={this.toggleDisplayBio}>Read more</button>
      </div>
    );
    

    return (
      <div>
        <img src={profile} alt="profile" className='profile'/>
        <h1>Hello!</h1>
        <p>My name is Zarif Shahriar. I am a software developer</p>
        
        {bio}
        <hr/>

        <Projects />
        <SocialProfile/>

      </div>
    )
  }
}

export default App;