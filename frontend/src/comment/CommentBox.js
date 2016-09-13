import React from 'react'
import ReactDOM from 'react-dom'
import CommentList from './CommentList'
import CommentForm from './CommentForm'
import $ from 'jquery'

export default React.createClass({
  loadCommentsFromServer: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: (data) => {
        this.setState({data: data})
      },
      error: (xhr, status, err) => {
        console.error(this.props.url, status, err.toString())
      }
    })
  },
  getInitialState: () => {
    return { data: [] }
  },
  componentDidMount: function() {
    this.loadCommentsFromServer()
    setInterval(this.loadCommentsFromServer, this.props.pollInterval)
  },
  handleCommentSubmit: function(comment) {
    let comments = this.state.data
    let newComments = comments.concat([comment])
    this.setState({data: newComments})
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      type: 'POST',
      data: comment,
      success: (data) => {
        this.setState({data: data})
      },
      error: (xhr, status, err) => {
        this.setState({data: comments})
        console.error(this.props.url, status, err.toString())
      }
    })
  },
  render() {
    return (
      <div className='commentBox'>
        <h1>Comments</h1>
        <CommentList data={this.state.data} />
        <CommentForm onCommentSubmit={this.handleCommentSubmit} />
      </div>
    )
  }
})
