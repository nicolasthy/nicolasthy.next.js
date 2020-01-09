import Link from "next/link";
import { useRouter } from "next/router";
import { Sun, Moon } from "react-feather";

const Header = props => {
    const router = useRouter();

    const renderBackLink = () => {
        if (router.pathname != "/")
            return (
                <Link href="/">
                    <a>Back home</a>
                </Link>
            );
    };

    const renderDarkModeToggle = () => {
        const icon = props.isDark ? <Sun color="#F8B319" /> : <Moon color="#5C415D" />;

        return <div onClick={() => props.setIsDark(!props.isDark)}>{icon}</div>;
    };

    return (
        <header>
            {renderBackLink()}
            {renderDarkModeToggle()}
        </header>
    );
};

export default Header;
