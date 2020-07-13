import Link from "next/link"
import { useRouter } from "next/router"

import { useTheme } from "emotion-theming"
import { Sun, Moon } from "react-feather"
import { Container, Logo, Menu, MenuItem, ToggleIcon } from "./styles"

const Header = (props) => {
  const theme = useTheme()
  const router = useRouter()

  const isPostsPathname = () => {
    return router.pathname === "/" || router.pathname.includes("/posts")
  }

  const renderDarkModeToggle = () => {
    const icon = props.isDark ? <Sun color="#F8B319" /> : <Moon color="#5C415D" />

    return (
      <ToggleIcon theme={theme} onClick={() => props.setIsDark(!props.isDark)}>
        {icon}
      </ToggleIcon>
    )
  }

  return (
    <Container>
      <Link href="/">
        <a>
          <Logo theme={theme}>nt</Logo>
        </a>
      </Link>
      <Menu>
        <MenuItem active={isPostsPathname()}>Stories</MenuItem>
        <MenuItem>About me</MenuItem>
      </Menu>
      {renderDarkModeToggle()}
    </Container>
  )
}

export { Header }
