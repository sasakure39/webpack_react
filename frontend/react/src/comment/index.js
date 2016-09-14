import React from 'react'
import ReactDOM from 'react-dom'
import CommentList from './CommentList'
import CommentForm from './CommentForm'
import $ from 'jquery'

var data = [
  {author: 'Pete Hunt', text: 'This is one comment'},
  {author: 'Jordan Walke', text: 'This is *another* comment'}
];

export default class CommentBox extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    };
  }

  render() {
    return(
      <div className='commentBox'>
        <h2>Comments</h2>
        <CommentList data={data} />
        <CommentForm />
      </div>
    );
  }
}
