import React from 'react';
import ReactDOM from 'react-dom';
import Faker from 'faker';
import CommentDetail from './CommentDetail'
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments cards">
            <ApprovalCard>            
                <CommentDetail 
                author="Poppy" 
                timeAgo="today at 5:45pm" 
                textComment="bammm!!!"
                profileImg={Faker.image.people()}
                />
            </ApprovalCard>
            
            <ApprovalCard>
                <CommentDetail 
                author="Lea" 
                timeAgo="yesterday at 2:14pm" 
                textComment="great content"
                profileImg={Faker.image.people()} 
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail 
                author="Clary" 
                timeAgo="today at 6:23pm" 
                textComment="loved it"
                profileImg={Faker.image.people()} 
                />
            </ApprovalCard>

            <ApprovalCard>
                Are you sure you want to continue....
            </ApprovalCard>
        </div>

    );
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);

//PROPS CAN BE USED TO SEND DATA FROM PARENTS TO CHILD ***NOT VICE VERSA