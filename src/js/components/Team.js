import React, {
  Component
} from 'react';

class Team extends Component {
  render() {
    const {
      image, name, position, content
    } = this.props;
    return (
      <div className="team">
        <div className="team-image">
          <img src={image} alt="" />
        </div>
        <div className="name">
          {name}
        </div>
        <div className="position">
          {position}
        </div>
        <div className="content" dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    );
  }
}

Team.defaultProps = {
  image: '',
  name: '',
  position: '',
  content: ''
};

export default Team;
