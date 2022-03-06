import React, { FC } from "react";

import tripOneSrc from "assets/trips/trip-picture-1.jpg"
import tripTwoSrc from "assets/trips/trip-picture-2.jpg"
import tripThreeSrc from "assets/trips/trip-picture-3.jpg"
import tripFourSrc from "assets/trips/trip-picture-4.jpg"
import tripFiveSrc from "assets/trips/trip-picture-5.jpg"

import "./trip-image-list.scss";

const TripImagList: FC = () => <div className="trip-image-list">
    <img alt="снимка от пътуване" src={tripOneSrc} className="trip-image first-row"/>
    <img alt="снимка от пътуване" src={tripThreeSrc} className="trip-image first-row"/>
    <img alt="снимка от пътуване" src={tripFiveSrc} className="trip-image first-row"/>
    <img alt="снимка от пътуване" src={tripTwoSrc} className="trip-image second-row"/>
    <img alt="снимка от пътуване" src={tripFourSrc} className="trip-image second-row"/>
</div>;

export default TripImagList;
