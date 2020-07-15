import { useRef, useEffect, useState } from "react";
import { useTheme } from "emotion-theming";
import styled from "@emotion/styled";
import mediumZoom from "medium-zoom";

const PostImage = ({ alt, src }) => {
    const imagePreloader = src.replace(
        src.match(/(?:\.([^.]+))?$/)[0],
        `.min${src.match(/(?:\.([^.]+))?$/)[0]}`
    );

    const theme = useTheme();
    const imageRef = useRef();
    const [image, setImage] = useState(imagePreloader);

    useEffect(() => {
        mediumZoom(imageRef.current);

        const imageFull = new Image();
        imageFull.onload = () => {
            setImage(imageFull);
        }
        imageFull.src = src;

        return () => {
            imageFull.onload = null;
        }
    }, []);

    return (
        <>
            <StyledImage
                theme={theme}
                style={{ 
                    backgroundImage: `url(${image.src || image})`,
                    transition: '0.5s filter linear',
                    filter: `${image.src ? '' : 'blur(25px)'}`,
                }}
            >
                <img ref={imageRef} alt={alt} src={image.src || image} />
            </StyledImage>
            <StyledAlt>{alt}</StyledAlt>
        </>
    );
};

const StyledImage = styled.span`
    max-width: 120%;
    margin: 40px -10% 20px;
    display: block;
    position: relative;
    border-radius: 4px;

    img {
        opacity: 0;
        display: block;
        width: 100%;
        position: relative;
        z-index: 2;
    }

    &::before,
    &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: inherit;
        background-size: cover;
        background-position: center center;
    }

    &::before {
        top: 10px;
        filter: blur(25px);
        backface-visibility: visible;
        transform: scale(1.03) translate3d(0, 0, 0);
        z-index: 0;
        opacity: ${({ theme }) => theme.posts.imageShadowOpacity};
        transition: opacity 0.2 linear;
    }

    &::after {
        z-index: 1;
        border-radius: 4px;
    }
`;

const StyledAlt = styled.span`
    display: block;
    text-align: center;
    margin: 0 0 40px;
    font-size: 12px;
    opacity: 0.5;
    font-family: "Poppins", sans-serif;
`;

export default PostImage;
