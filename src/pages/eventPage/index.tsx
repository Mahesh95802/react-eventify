import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Event from "../../components/event";
import Footer from "../../components/footer";
import Header from "../../components/header";
import { GET_EVENT_BY_ID } from "../../constants/endpoints";
import { EventProp } from "../../interfaces/event";
import makeRequest from "../../utils/makeRequest";

import "./eventPage.css";

const EventPage: React.FC = () => {

    const [event, setEvent] = React.useState<EventProp | null>(null)
    const { id } = useParams<{ id: string }>();

    useEffect(() => {
        makeRequest(GET_EVENT_BY_ID(Number(id)).path, { method: GET_EVENT_BY_ID(Number(id)).method })
        .then(event => setEvent(event))
    }, [])

    return (
        event 
        &&  <>
                <Header />
                <div className="event-body basic-padding">
                    <Event { ...{ ...event, isRegisterable: true } as EventProp }/>
                </div>
                <Footer /> 
            </>
    )
};

export default EventPage;