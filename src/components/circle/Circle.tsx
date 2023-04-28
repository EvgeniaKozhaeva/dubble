import React from "react";
import "./Circle.css"

export const Circle = () => (
    <svg className="base-circle-svg" viewBox="0 0 100 100" height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
        <g className="inner-circle">
            <circle className="outer-circle" cx="50" cy="50" r="45"/>
        </g>
    </svg>
)
