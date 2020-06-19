import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
    return (
        <div className={'ui container comments'}>
            <ApprovalCard>
                <div>
                    <h4>Warning! </h4>
                    Are you sure you want to do this?
                </div>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Sam"
                               timeAgo="Today at 4:00PM"
                               avatar={faker.image.avatar()}
                               commentText="Lorem ipsum dolor."/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Alex"
                               timeAgo="Today at 2:00AM"
                               avatar={faker.image.avatar()}
                               commentText="Thursday! Whoo!!"/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Jane"
                               timeAgo="Yesterday at 4:50PM"
                               avatar={faker.image.avatar()}
                               commentText="Well my dog died today...left me quite alone."/>
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
);