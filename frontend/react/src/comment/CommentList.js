import React from 'react'
import ReactDOM from 'react-dom'
import Comment from './Comment'
import createFragment from 'react-addons-create-fragment'

// author passed to author in Comment tag. And child node that is text node passed to children in Comment tag.
export default React.createClass({
  render() {
    // ここでcreateFragmentを使用することでnode間で整合性が保たれる的な？
    const commentNodes = createFragment({
      commentNodes: this.props.data.map((comment) => {
        return (
          <Comment author={comment.author} key={comment.id}>
            {comment.text}
          </Comment>
        )
      })})
    return (
      <div className="commentList">
        {commentNodes}
      </div>
    )
  }
})

