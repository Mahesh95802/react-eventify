import React from "react";
import { FilterProp } from "../../interfaces/filter";
import { faS, faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(faS, faChevronUp, faChevronDown);

import "./filter.css";

const Filter: React.FC<FilterProp> = (prop) => {
    
    const [isFilterOpen, setIsFilterOpen] = React.useState<boolean>(false);
    const [Filter, setFilter] = React.useState<string[]>(["All"])

    const filterEventHandler = (e: React.ChangeEvent<HTMLInputElement>) => {}


    return (
        <div className="filter basic-padding">
            <div className="filter-header">
                <div className="filter-Drop" onClick={() => setIsFilterOpen(!isFilterOpen)}>
                    Filter <FontAwesomeIcon icon={isFilterOpen ? ['fas', 'chevron-up'] : ['fas', 'chevron-down']} />
                </div>
                <div className="filter-search">
                    <input type="text" placeholder="Search" id="search" />
                </div>
            </div>
            {
                isFilterOpen &&
                    <div className="filter-body">
                        <input type="checkbox" name="all" id="all" value="All" /><label htmlFor="">All</label>
                        <input type="checkbox" name="Registered" id="Registered" value="Registered" /><label htmlFor="">Registered</label>
                        <input type="checkbox" name="Available" id="Available" value="Available" /><label htmlFor="">Available</label>
                        <input type="checkbox" name="Bookmarked" id="Bookmarked" value="Bookmarked" /><label htmlFor="">Bookmarked</label>
                    </div>
            }
        </div>
    )
};

export default Filter;
