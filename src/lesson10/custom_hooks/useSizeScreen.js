import { useEffect, useState } from "react";

// hook - use
export const useSizeScreen = () => {

    const [isSmall, setIsSmall] = useState(window.innerWidth < 600)

    useEffect(() => {
        window.addEventListener('resize', setIsSmall(window.innerWidth < 600))
    },[])

    return isSmall;
}