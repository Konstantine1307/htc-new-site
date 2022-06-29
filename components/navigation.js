
import { Nav, Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";

function Navigation() {
    return (
      <Navbar
        className="py-0.5 px-5 md:px-40 bg-brand-gradient"
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
                  width={60}
                  height={60}
                  className="rounded-full"
                />
              </Nav.Link>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" className="p-2 rounded-full "/>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <Link href="/">
                <Nav.Link
                  href="/"
                  className="font-mono tracking-wider px-3 font-bold text-zinc-200 hover:bg-gray-700 active:text-pink-500 focus:bg-gray-800 focus:text-zinc-900 rounded-lg"
                >
                  Home
                </Nav.Link>
              </Link>
              <Link href="/about">
                <Nav.Link
                  href="/about"
                  className="font-mono tracking-wider px-3 font-bold text-zinc-200 hover:bg-gray-700 active:text-pink-500 focus:bg-gray-800 focus:text-zinc-900 rounded-lg"
                >
                  About
                </Nav.Link>
              </Link>
              <Link href="/productions">
                <Nav.Link
                  href="/productions"
                  className="font-mono tracking-wider px-3 font-bold text-zinc-200 hover:bg-gray-700 active:text-pink-500 focus:bg-gray-800 focus:text-zinc-900 rounded-lg"
                >
                  Productions
                </Nav.Link>
              </Link>
              <Link href="/gallery">
                <Nav.Link
                  href="/gallery"
                  className="font-mono tracking-wider px-3 font-bold text-zinc-200 hover:bg-gray-700 active:text-pink-500 focus:bg-gray-800 focus:text-zinc-900 rounded-lg"
                >
                  Gallery
                </Nav.Link>
              </Link>
              <Link href="/contact">
                <Nav.Link
                  href="/contact"
                  className="font-mono tracking-wider px-3 font-bold text-zinc-200 hover:bg-gray-700 active:text-pink-500 focus:bg-gray-800 focus:text-zinc-900 rounded-lg"
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