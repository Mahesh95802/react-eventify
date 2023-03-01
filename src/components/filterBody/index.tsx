import React from "react";
import { FilterProp } from "../../interfaces/filter";
import { faS, faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(faS, faChevronUp, faChevronDown);

import "./filterBody.css";
import Filter from "../filter";

const FilterBody: React.FC<{ prop: FilterProp, filterEventHandler: any }> = ({ prop, filterEventHandler }) => {
    
    const [isFilterOpen, setIsFilterOpen] = React.useState<boolean>(false);

    const filterChangeEventHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);
        filterEventHandler({ ...prop, name: e.target.value });
    }

    // const radioFilterHandler = (filter: FilterProp) => {
    //     // console.log(e.target.value);
    //     filterEventHandler();
    // }

    return (
        <div className="filter-body basic-padding">
            <div className="filter-header">
                <div className="filter-Drop" onClick={() => setIsFilterOpen(!isFilterOpen)}>
                    Filter <FontAwesomeIcon icon={isFilterOpen ? ['fas', 'chevron-up'] : ['fas', 'chevron-down']} />
                </div>
                <div className="filter-search">
                    <input type="text" placeholder="Search" id="search" onChange={filterChangeEventHandler}/>
                </div>
            </div>
            {
                isFilterOpen &&
                    <Filter prop={prop} filterEventHandler={filterEventHandler}/>
                    // <form className="filter-body">
                    //     <label htmlFor=""><input type="radio" name="all" id="all" value="all" checked={prop.all} onChange={filterChangeEventHandler}/>All</label>
                    //     <label htmlFor=""><input type="radio" name="Registered" id="Registered" value="registered" checked={prop.registered} onChange={filterChangeEventHandler}/>Registered</label>
                    //     <label htmlFor=""><input type="radio" name="Available" id="Available" value="areSeatsAvailable" checked={prop.areSeatsAvailable} onChange={filterChangeEventHandler}/>Available</label>
                    //     <label htmlFor=""><input type="radio" name="Bookmarked" id="Bookmarked" value="bookmarked" checked={prop.bookmarked} onChange={filterChangeEventHandler}/>Bookmarked</label>
                    // </form>
            }
        </div>
    )
};

export default FilterBody;
