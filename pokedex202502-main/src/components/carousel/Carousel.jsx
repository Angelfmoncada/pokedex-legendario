import {useState, useEffect, useRef, use} from 'react';
import Slide from "./Slide";

import "./Carousel.css";
const waitTime = 3000;
const Carousel = (
    {
        slides = [{}]
    }
)=>{
    const [currenSlide, setCurrentSlide] = useState(0);
    const [direction, setDirection] = useState(1);
    const [isMounted, setIsMounted] = useState(false);
    const track = useRef();
    const timerId = useRef(null);

    useEffect(()=>{
        if(track.current){
            track.current.style.transform = `translateX(${-1*currenSlide*100}vw)`;
            tick();
        }
    }
    , [currenSlide, track]);
    const changeSlide = ( slideIndex )=>{
        if (timerId.current){
            clearTimeout(timerId.current);
        }
        let nextSlide = slideIndex
        if (slideIndex < 0 ) {
            nextSlide = 1
            setDirection(1);
        }
        if (slideIndex > slides.length -1) {
            nextSlide = slides.length -2
            setDirection(-1)
        }
        setCurrentSlide(nextSlide);
    }
    const tick = ()=>{
        timerId.current = setTimeout( ()=>{
            changeSlide(currenSlide + direction);
        }, waitTime);
    }
    useEffect(
        ()=>{
            if(!isMounted) {
                setIsMounted(true);
                tick();
            }
        }

    ,[setIsMounted, isMounted]);

    return (
        <section className="carousel">
            <section className="track" ref={track}>
                {
                slides.map((slide)=>{
                    return <Slide
                            key={slide.id}
                            imgMobile={slide.imgMobile}
                            imgTablet={slide.imgTablet}
                            imgDesktop={slide.imgDesktop}
                        >
                        <h1>{slide.title}</h1>
                        <p>{slide.description}</p>
                    </Slide>
                })}
            </section>
        </section>
    )
}

export default Carousel;