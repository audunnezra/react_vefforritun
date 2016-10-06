import CommentBox from './CommentBox'
import React from 'react'


var App = React.createClass({
  render: function(){
    return <CommentBox url="/api/comments" />
  }
});


export default App;
