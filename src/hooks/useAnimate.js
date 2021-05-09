import React, { useEffect } from 'react'
import Aos from 'aos';
import "aos/dist/aos.css";

function useAnimate() {
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])
}

export default useAnimate
