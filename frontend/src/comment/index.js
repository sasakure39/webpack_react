import React from 'react'
import { render } from 'react-dom'
import CommentBox from './CommentBox'

var data = [
  {author: 'Pete Hunt', text: 'This is one comment'},
  {author: 'Jordan Walke', text: 'This is *another* comment'}
];

// 変更点CommetnBoxをindex.jsでrenderするようにした
render(
  <CommentBox data={data} pollInterval={2000} />,
  document.getElementById('content')
)
