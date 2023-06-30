import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Navbar, Nav } from 'shadcn';

const Header: React.FC = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">
        <Image
          src="/images/logo.png"
          alt="Untitled Ventures Logo"
          width={50}
          height={50}
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link href="/" passHref>
            <Nav.Link>Home</Nav.Link>
          </Link>
          <Link href="/portfolio" passHref>
            <Nav.Link>Portfolio</Nav.Link>
          </Link>
          <Link href="/contact" passHref>
            <Nav.Link>Contact</Nav.Link>
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;