import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import ApprovalCard from './ApprovalCard';
import CommentDetail from './CommentDetail';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail 
                    avatar={faker.image.avatar()}
                    author={faker.name.firstName()}
                    date={faker.date.weekday()}
                    text={faker.lorem.paragraph()}/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    avatar={faker.image.avatar()}
                    author={faker.name.firstName()}
                    date={faker.date.weekday()}
                    text={faker.lorem.paragraph()}/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    avatar={faker.image.avatar()}
                    author={faker.name.firstName()}
                    date={faker.date.weekday()}
                    text={faker.lorem.paragraph()}/>
            </ApprovalCard>
        </div>
    );
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);