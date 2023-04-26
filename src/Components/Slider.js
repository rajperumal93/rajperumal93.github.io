import { useEffect, useState } from "react";
import axios from 'axios';
import './Slider.css';

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(1);
    const [sliderData, setSliderData] = useState([]);

    useEffect(() => {
        const fetcUser = async () => {
            const res = await axios.get("https://jsonplaceholder.typicode.com/users");
            setSliderData(res.data);
        }
        fetcUser();
    }, []);

    useEffect(() => {
        const lastIndex = sliderData.length;
        if (slideIndex < 0) {
            setSlideIndex(lastIndex);
        }
        if (slideIndex > lastIndex) {
            setSlideIndex(1);
        }
    }, [slideIndex]);

    useEffect(() => {
        let sliderInterval = setInterval(() => (
            setSlideIndex(slideIndex + 1)
        ), 6000);

        return () => {
            clearInterval(sliderInterval);
        }
    }, [slideIndex])

    const nextSlide = (index) => {
        setSlideIndex(index + 1);
    }

    const prevSlide = (index) => {
        setSlideIndex(index - 1)
    }

    const dotSlide = (crSlide) => {
        setSlideIndex(crSlide);
    }

    return (
        <div>
            <button onClick={() => { prevSlide(slideIndex) }}>Prev</button>

            <ul>
                {sliderData.map((slide, index) => {
                    const { name, username, email } = slide;
                    return <li key={index} className={`slide ${slideIndex === index + 1 ? 'active' : ''} `}>{name}</li>
                })}
            </ul>

            <div className="">
                {
                    sliderData.map((sd, index) => {
                        return <span key={index} onClick={() => { dotSlide(index + 1) }}>{index}</span>
                    })
                }
            </div>

            <button onClick={() => { nextSlide(slideIndex) }}>Next</button>

        </div>
    )
}

export default Slider;