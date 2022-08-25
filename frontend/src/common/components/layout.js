import Nav from "./Navigation/nav"

const Layout = ({ children, categories, seo }) => (
  <>
    <Nav />
    {children}
  </>
)

export default Layout
