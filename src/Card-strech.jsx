import React, {useEffect, useRef} from "react";
import Card from "./card";
import Data from "./Data";

export default function CardStrech() {
    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current
        const scrollsSpeed = 1
        let animationFramed

        const scroll = () =>{
            container.scrollLeft += scrollsSpeed
            if(container.scrollLeft >= container.scrollwidth / 2){
                container.scrollLeft = 0
            }
            animationFramed = requestAnimationFrame(scroll)
        }
        animationFramed = requestAnimationFrame(scroll)

        return () => cancelAnimationFrame(animationFramed)
    }, [])




    return(
        <div className="Card-container" ref={containerRef}>
        {[...Data,...Data].map((item) => (
        <Card
            id = {item.id}
            role = {item.role}
            job = {item.job}
            name = {item.name}
            image = {item.image}
        />
    ))
}
    {/*use the .map method to map throuh the objects in Data */}

    
    </div>
    )
}