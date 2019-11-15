import React, {Component} from 'react';
import ICONS from './data/socialProfile';

class SocialContact extends Component {
  render() {
    const {id, title, link, image } = this.props.contacts;
    return (
      <span>
        <a href={link}>
          <img src={image} alt="contacts" style= {{width: 35, height: 35, margin: 10 }}/>
        </a>
      </span>
    )
  }
}

class SocialProfile extends Component {
  render() {
    return (
      <div>
        <hr/>
        <h2>Contact Me!</h2>
        <div>
          {
            ICONS.map(icon => {
              return (
                <SocialContact key={icon.id} contacts={icon} />
              )
            })
          }
        </div>
      </div>
    )
  }
} 

export default SocialProfile;