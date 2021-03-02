import './SeasonDisplay.css'
import React from 'react';

const SeasonConfig = {
    summer: {
        text: 'Let\'s Hit The Beach',
        iconName: 'sun outline'
    },
    winter: {
        text: 'Burr It\'s Cold',
        iconName: 'snowflake outline'
    }
};

const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter';
    } else {
        return lat > 0 ? 'winter' : 'summer';
    }
}

const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth());
    const { text, iconName } = SeasonConfig[season];
    console.log(season);
    console.log(props.lat)
    return (
        <div className={`ui segment container season-display ${season}`}>
            {/* <i className={season === 'WINTER' ? "snowflake outline icon" : "sun outline icon"}></i> */}
            {/* {season === 'WINTER' ? 'Burr, its chilly' : 'Lets hit the beach'} */}
            {/* <i className={season === 'WINTER' ? "snowflake outline icon" : "sun outline icon"}></i> */}
            {/* <h1>SeasonDisplay</h1>
            <p>Latitude:{props.lat}</p>
            <p>SEASON: {season}</p> */}
            <i className={`${iconName} icon massive left-icon`}></i>
            <h1 className="text">{text}</h1>
            <i className={`${iconName} icon massive right-icon`}></i>
        </div >
    );
}

export default SeasonDisplay;