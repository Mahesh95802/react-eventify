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
        // console.log(e.target.value);
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
            }
        </div>
    )
};

export default FilterBody;
