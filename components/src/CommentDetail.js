import React from 'react';
import Faker from 'faker';


//the argument dont have to be named as 'props' (we can choose any name of our choice)

const CommentDetail=(props)=>{
    console.log(props);
    return (
        <div className="comment">
                <a href="/" className="avatar"><img src={props.profileImg} alt="text" /></a>
                <div className="content">
                    <a href="/" className="author">{props.author}</a>
                    <div className="metadata">
                        <span className="date">{props.timeAgo}</span>
                    </div>
                    <div className="text">{props.textComment}</div>
                </div>
        </div>
    );
}

export default CommentDetail;