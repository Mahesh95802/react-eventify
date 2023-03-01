import React from 'react';
import { GET_EVENTS } from '../../constants/endpoints';
import { EventProp } from '../../interfaces/event';
import { FilterProp } from '../../interfaces/filter';
import makeRequest from '../../utils/makeRequest';
import Event from '../event';
import FilterBody from '../filterBody';

import './events.css'

const Events: React.FC  = () => {
    const [events, setEvents] = React.useState<EventProp[] | null>(null);
    const [totalEvents, setTotalEvents] = React.useState<EventProp[] | null>(null);
    const [filter, setFilter] = React.useState<FilterProp>({
        all: true,
    });

    React.useEffect(() => {
        makeRequest(GET_EVENTS.path, { method: GET_EVENTS.method } )
        .then((response) => {
            setEvents(response);
            setTotalEvents(response);
        })
    }, [])

    const handleFilterEvent = (filter: FilterProp) => {
        let total = structuredClone(totalEvents);
        console.log(filter)
        if(filter.name) total = total.filter((event: EventProp) => {
            if(filter.name) return event.name.toLowerCase().includes(filter.name.toLowerCase())
        });
        if(filter.areSeatsAvailable) total = total.filter((event: EventProp) => event.areSeatsAvailable);
        if(filter.bookmarked) total = total.filter((event: EventProp) => event.isBookmarked);
        if(filter.registered) total = total.filter((event: EventProp) => event.isRegistered);
        
        setEvents(total);
    }


    return (
        <div className="events">
            <FilterBody prop={filter} filterEventHandler={handleFilterEvent}/>
            <div className='event-list basic-padding'>
                {events && events.map((event) => (
                    <Event key={event.id} {...event} />
                ))}
            </div>
        </div>
    )
}

export default Events;