import React from "react";
import { EventProp } from "../../interfaces/event";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faS, faCircleDot, faCircleCheck, faR, faBookmark, faL, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
library.add(faS, faR, faL, faCircleDot, faCircleCheck, faBookmark, faCircleXmark)
import { PATCH_EVENT_BY_ID } from "../../constants/endpoints";
import makeRequest from "../../utils/makeRequest";
import { useNavigate } from "react-router";

import "./event.css";

const Event: React.FC<EventProp> = (prop) => {
    const [isRegistered, setIsRegistered] = React.useState(prop.isRegistered);
    const [isBookmarked, setIsBookmarked] = React.useState(prop.isBookmarked);

    const nagivate = useNavigate();

    const registerEventHandler = () => {
        makeRequest(PATCH_EVENT_BY_ID(prop.id).path, { method: PATCH_EVENT_BY_ID(prop.id).method, body: JSON.stringify({ isRegistered: !isRegistered }) });
        isRegistered ? setIsRegistered(false) : ( prop.areSeatsAvailable ? setIsRegistered(true) : alert("No Seats Available"));
    };

    const bookmarkEventHandler = () => {
        makeRequest(PATCH_EVENT_BY_ID(prop.id).path, { method: PATCH_EVENT_BY_ID(prop.id).method, body: JSON.stringify({ isBookmarked: !isBookmarked }) });
        setIsBookmarked(!isBookmarked);
    };

    return (
        <div className="event bg-color">
            <div className="event-image">
                <img src={prop.imgUrl} alt="Event Image" />
            </div>
            <div className="event-info">
                <div className="event-name" onClick={() => nagivate(`${prop.id}`)}>{prop.name}</div>
                <div className="event-description">{prop.description}</div>
                <div className="event-venue">VENUE: {prop.venue}</div>
                <div className="event-date">{`DATE: ${String(new Date(prop.datetime)).split('+')[0]}`}</div>
                <div className="event-user-info">
                    <div className="is-registered">
                        <FontAwesomeIcon icon={isRegistered ? ["fas", "circle-check"] : (prop.areSeatsAvailable ? ["fas", "circle-dot"] : ["fas", "circle-xmark"])} />
                        {isRegistered ? "Registered" : (prop.areSeatsAvailable ? null : "No Seates Available")}
                    </div>
                    <div className="is-bookmarked" onClick={bookmarkEventHandler}>
                        <FontAwesomeIcon icon={isBookmarked ? ["fas", "bookmark"] : ["fas", "bookmark"]}/>
                    </div>
                </div>
                {
                    (prop.isRegisterable && prop.areSeatsAvailable) 
                    && <div>
                            <button className="event-register" onClick={registerEventHandler}>
                                {isRegistered ? "UNREGISTER" : (prop.areSeatsAvailable ? "REGISTER" : null)}
                            </button>
                        </div>
                }
            </div>            
        </div>
    )
};

export default Event;