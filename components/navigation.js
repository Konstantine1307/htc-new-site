
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Container } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";

function Navigation() {
    return (
      <Navbar
        className="pb-0.5 px-5 md:px-40 bg-brand-gradient"
        collapseOnSelect
        expand="lg"
        variant="dark"
        sticky="top"
      >
        <Container>
          <Navbar.Brand>
            <Link href="/">
              <Nav.Link href="/" className=" md:pl-10">
                <Image
                  src="/htclogo1.svg"
                  alt="HTC Logo"
                  width={80}
                  height={80}
                  className="rounded-full"
                />
              </Nav.Link>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            className="p-2 rounded-full "
          />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto min-h-96 space-y-10 md:space-y-0">
              <Link href="/">
                <Nav.Link
                  href="/"
                  className="nav-link-brand"
                >
                  Home
                </Nav.Link>
              </Link>{" "}
              {/* <Link href="/about">
                <Nav.Link
                  href="/about"
                  className="font-mono tracking-wider px-3 font-bold text-white hover:bg-gray-700 active:text-pink-500 focus:bg-gray-800 focus:text-zinc-900 rounded-lg"
                >
                  About
                </Nav.Link>
              </Link> */}
              <NavDropdown
                title="About Us"
                id="collasible-nav-dropdown"
                className="nav-link-brand"
              >
                <NavDropdown.Item href="/about">
                  The Group
                </NavDropdown.Item>
                <NavDropdown.Item href="/about/#awards">
                  Awards</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/about/#mission">
                  Mission Statement
                </NavDropdown.Item>
                <NavDropdown.Item href="/about/#child-policy">
                  Child Policy
                </NavDropdown.Item>
              </NavDropdown>
              <Link href="/productions">
                <Nav.Link
                  href="/productions"
                  className="nav-link-brand"
                >
                  Productions
                </Nav.Link>
              </Link>
              <Link href="/gallery">
                <Nav.Link
                  href="/gallery"
                  className="nav-link-brand"
                >
                  Gallery
                </Nav.Link>
              </Link>
              <Link href="/contact">
                <Nav.Link
                  href="/contact"
                  className="nav-link-brand"
                >
                  Contact
                </Nav.Link>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}

export default Navigation