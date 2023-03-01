import React, { useEffect } from "react";
import { FilterProp } from "../../interfaces/filter";

import "./filter.css";

const Filter: React.FC<{ prop: FilterProp, filterEventHandler: any }> = ({prop, filterEventHandler}) => {

    useEffect(() => {
        console.log(prop);
        return () => {
            filterEventHandler({ name: prop.name, all: true });
        }
    }, [])

    const filterChangeEventHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log({ name: prop.name, [e.target.value]: e.target.checked });
        filterEventHandler({ name: prop.name, [e.target.value]: e.target.checked });
    }

    return (
        <div className="filter-radios">
            <label><input type="radio" name="all" id="all" value="all" checked={prop.all} onChange={filterChangeEventHandler}/>All</label>
            <label><input type="radio" name="Registered" id="Registered" value="registered" onChange={filterChangeEventHandler}/>Registered</label>
            <label><input type="radio" name="Available" id="Available" value="areSeatsAvailable" onChange={filterChangeEventHandler}/>Available</label>
            <label><input type="radio" name="Bookmarked" id="Bookmarked" value="bookmarked" onChange={filterChangeEventHandler}/>Bookmarked</label>
        </div>
    )
}

export default Filter;
