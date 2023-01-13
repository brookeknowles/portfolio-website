import React from "react";
import timeline from "../data/timeline";
import TimelineItem from "./TimelineItem";
import Title from "./Title";

function Timeline(){
    return(
        <div className="flex flex-column md:flex-row justify-center my-20">
            <div className="w-full md:w-7/12">
                <Title>Experience</Title>
                {timeline.map(item => (
                    <TimelineItem 
                        date={item.date}
                        title={item.title}
                        company={item.company}
                        details={item.details}
                    />
                ))}
            </div>
        </div>
    )
}

export default Timeline;