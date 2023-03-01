import React from 'react';
import { GET_EVENTS } from '../../constants/endpoints';
import { EventProp } from '../../interfaces/event';
import { FilterProp } from '../../interfaces/filter';
import makeRequest from '../../utils/makeRequest';
import Event from '../event';
import Filter from '../filter';

import './events.css'

const Events: React.FC  = () => {
    const [events, setEvents] = React.useState<EventProp[] | null>(null);
    const [filter, setFilter] = React.useState<FilterProp>({
        name: '',
        all: true,
        registered: false,
        bookmarked: false,
        areSeatsAvailable: false,
    });

    React.useEffect(() => {
        makeRequest(GET_EVENTS.path, { method: GET_EVENTS.method } )
        .then((response) => {
            setEvents(response);
        })
    }, [])

    const filterEventHandler = (filter: FilterProp) => {}


    return (
        <div className="events">
            <Filter {...filter}/>
            <div className='event-list basic-padding'>
                {events && events.map((event) => (
                    <Event key={event.id} {...event} />
                ))}
            </div>
        </div>
    )
}

export default Events;