import React from "react";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fab);

const header = () =>{
    return(
    <div className = "mainHeader">
        <h2><FontAwesomeIcon icon={faBars} className="meunBar" /></h2>
        <h2 >
            <FontAwesomeIcon icon={["fab", "youtube"]} color="red" />
            YouTTube
        </h2>
        <input type="text" className = "textbox"></input>

    </div>
    )
}

export default header