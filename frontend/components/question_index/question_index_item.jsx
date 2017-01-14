import React from 'react';
import { Link } from 'react-router';
import FontAwesome from 'react-fontawesome';

const thumbnailUrl = answer => {
  const publicKey = /.*\/(.*)/.exec(answer.image_url)[1];
  return `http://res.cloudinary.com/askagram/image/upload/w_400,h_400,c_fill/${publicKey}`;
};

class QuestionIndexItem extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      firstThumbnailIndex: 0
    };
    this.question = this.props.question;
    this.allAnswers = this.props.question.answers;
    // this.scrollRight = this.scrollRight.bind(this);
  }

  thumbnailUrl(answer) {
     const publicKey = /.*\/(.*)/.exec(answer.image_url)[1];
     return `http://res.cloudinary.com/askagram/image/upload/w_400,h_400,c_fill/${publicKey}`;
  }

  browseArrow(direction, callback) {
    let hidden = true;
    if(direction === "left" && this.state.firstThumbnailIndex > 0) {
      hidden = false;
    }
    if(direction === "right" &&
      this.allAnswers.length > this.state.firstThumbnailIndex + 3) {
        hidden = false;
      }
    if(!hidden) return (
      <FontAwesome name={`angle-${direction}`}
                   size="4x"
                   onClick={callback} />);
    return "";

  }

  // scrollRight(){
  //   let newIndex = this.state.firstThumbnailIndex + 3;
  //   if(newIndex < this.allAnswers.length) this.setState({
  //     firstThumbnailIndex: newIndex});
  // }


  render() {
      return <li className="question-index-item">
      <Link to={`/question/${this.props.question.id}`}>
        <h3>{this.question.title}</h3>
      </Link>
      <div className="answer-thumbnails">
        <div className="arrow-box">{ this.browseArrow("left") }</div>
        {this.allAnswers.slice(this.state.firstThumbnailIndex, 3).map(answer => (
        <Link key= {answer.id} to={`/question/${this.question.id}`}>
          <img src= {thumbnailUrl(answer)}
               className="answer-thumbnail" />
        </Link>
                                         )
                                       )}
      <div className="arrow-box">{ this.browseArrow("right") }</div>
     <button onClick={ this.props.openModal }>Add Answer</button>
      </div>

    </li>;
  }
}


export default QuestionIndexItem;
