import React from 'react'

const LoaderDisplay=(props)=>{
    return (
        <div className="container loader-display" id="LoaderDisplay">
            <div className="ui active dimmer">
                <div className="ui text loader">{props.message}</div>
            </div>
            <p></p>
        </div>
    );
}

LoaderDisplay.defaultProps={
    message:"loading..."
}

export default LoaderDisplay;