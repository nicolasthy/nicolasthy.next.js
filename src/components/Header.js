/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { useTheme } from "emotion-theming";
import styled from "@emotion/styled";
import Link from "next/link";
import { useRouter } from "next/router";
import { Sun, Moon } from "react-feather";

const Header = props => {
    const theme = useTheme();
    const router = useRouter();

    const renderDarkModeToggle = () => {
        const icon = props.isDark ? (
            <Sun color="#F8B319" />
        ) : (
            <Moon color="#5C415D" />
        );

        return (
            <StyledDarkToggleIcon
                theme={theme}
                onClick={() => props.setIsDark(!props.isDark)}
            >
                {icon}
            </StyledDarkToggleIcon>
        );
    };

    const renderSiteName = () => {
        if(router.pathname === "/") return <h1 css={logoStyles}>Nicolasthy</h1>

        return <div css={logoStyles}>Nicolasthy</div>
    }

    return (
        <StyledHeader>
            <Link href="/">
                <a>{renderSiteName()}</a>
            </Link>
            {renderDarkModeToggle()}
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    display: flex;
    align-items: center;
`;

const logoStyles = css`
    margin: 15px 0;
    font-size: 2rem;
    font-weight: bold;
    font-family: "Poppins", sans-serif;
`

const StyledDarkToggleIcon = styled.div`
    margin: 0 0 0 auto;
    cursor: pointer;
`;

export default Header;
