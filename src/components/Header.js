import Link from "next/link";
import { useRouter } from "next/router";

const Header = () => {
    const router = useRouter();

    const renderBackLink = () => {
        if (router.pathname != "/")
            return (
                <Link href="/">
                    <a>Back home</a>
                </Link>
            );
    };

    return <header>{renderBackLink()}</header>;
};

export default Header;
