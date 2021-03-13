import React, { useState } from 'react'

const Accordion = (props) => {
    const [activeIndex, setActiveIndex] = useState(null);
    const onTitleClick = (index) => {
        setActiveIndex(index);
    }

    const renderedItems = props.items.map((item, index) => {
        const active = index === activeIndex ? "active" : "";
        return (
            <React.Fragment key={index}>
                <div
                    className={"title " + active}
                    onClick={() => onTitleClick(index)}
                >
                    <i className="dropdown icon"></i>
                    {item.title}
                </div>
                <div className={"content " + active}>
                    <p>{item.description}</p>
                </div>
            </React.Fragment>
        )
    });

    return (
        <div id="Accordion" className="ui styled fluid accordion">{renderedItems}
        </div>

    );
}

export default Accordion;