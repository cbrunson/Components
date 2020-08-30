import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import ApprovalCard from './ApprovalCard';

import CommentDetail from "./CommentDetail";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail 
          image={faker.image.avatar()} 
          author="Samie" 
          timeAgo="Today at 6:00pm" 
          comment="Yo!"
        />
      </ApprovalCard>
      
      <ApprovalCard>
        <CommentDetail 
          image={faker.image.avatar()} 
          author="Alex" 
          timeAgo="Today at 6:00pm" 
          comment="yooo!"
        />
        </ApprovalCard>

      <ApprovalCard>
        <CommentDetail 
          image={faker.image.avatar()} 
          author="Jane" 
          timeAgo="Today at 6:00pm" 
          comment="hi" 
        />
        </ApprovalCard>
    </div>
  )
};

ReactDOM.render(<App />, document.querySelector('#root'));