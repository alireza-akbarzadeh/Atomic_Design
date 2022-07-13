import React, {CSSProperties, useState} from 'react';

interface ImageStyle {
    thumbnail: CSSProperties;
    fullSize: CSSProperties;
}

interface ImageOnloadType {
    handleImageOnload: () => void;
    css: ImageStyle;
}

const useImageOnload = (): ImageOnloadType => {
    const [isLoaded, setIsLoaded] = useState<boolean>(false);
    const handleImageOnload = () => {
        setIsLoaded(true)
    }

    const css: ImageStyle = {
        // Thumbnail style
        thumbnail: {
            visibility: isLoaded ? "hidden" : "visible",
            filter: "blur(8px)",
            transition: 'visibility 0ms ease-out 500ms',
        },
        // Full Image Style
        fullSize: {
            opacity: isLoaded ? 1 : 0,
            transition: 'opacity 500ms ease-in 0ms',
        }
    }


    return {handleImageOnload, css}

};

export default useImageOnload;
