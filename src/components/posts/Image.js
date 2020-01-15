import { useRef, useEffect } from "react";
import { useTheme } from "emotion-theming";
import styled from "@emotion/styled";
import mediumZoom from "medium-zoom";

const Image = ({ alt, src }) => {
    const theme = useTheme();
    const imageRef = useRef();

    useEffect(() => {
        mediumZoom(imageRef.current);
    }, []);

    return (
        <StyledImage theme={theme} style={{ backgroundImage: `url(${src})` }}>
            <img ref={imageRef} alt={alt} src={src} />
        </StyledImage>
    );
};

const StyledImage = styled.span`
    max-width: 120%;
    margin: 40px -10% 60px;
    display: block;
    position: relative;

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
    }
`;

export default Image;
