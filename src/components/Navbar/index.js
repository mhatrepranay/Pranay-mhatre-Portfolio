import React from 'react';
import { Nav, NavLink, NavbarContainer, NavLogo, NavItems, GitHubButton, ButtonContainer, MobileIcon, MobileMenu, MobileLink } from './NavbarStyledComponent';
import { FaBars } from 'react-icons/fa';
import { IoClose } from "react-icons/io5";
import { Bio } from '../../data/constants';
import { useTheme } from 'styled-components';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const theme = useTheme();

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to='/'>
          <a style={{ display: "flex", alignItems: "center", color: "white", cursor: 'pointer' }}>
            <span style={{ color: "violet", fontSize: "45px" }}>&lt; </span>
            <span style={{ color: "white" }}>Pranay </span>
            <span style={{ color: "violet", fontSize: "25px" }}>/ </span>
            <span style={{ color: "white" }}>Mhatre </span>
            <span style={{ color: "violet", fontSize: "45px" }}>&gt; </span>
          </a>
        </NavLogo>

        {/* Mobile Icon */}
        <MobileIcon onClick={toggleMenu}>
          {isOpen ? <IoClose size={30} /> : <FaBars />}
        </MobileIcon>

        {/* Desktop Navigation */}
        <NavItems>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#experience">Experience</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#education">Education</NavLink>
        </NavItems>

        <ButtonContainer>
          <GitHubButton href={Bio.github} target="_blank">Github Profile</GitHubButton>
        </ButtonContainer>

        {/* Mobile Menu */}
        <MobileMenu isOpen={isOpen}>
          <MobileLink href="#about" onClick={toggleMenu}>About</MobileLink>
          <MobileLink href="#skills" onClick={toggleMenu}>Skills</MobileLink>
          <MobileLink href="#experience" onClick={toggleMenu}>Experience</MobileLink>
          <MobileLink href="#projects" onClick={toggleMenu}>Projects</MobileLink>
          <MobileLink href="#education" onClick={toggleMenu}>Education</MobileLink>
          {/* <GitHubButton style={{ padding: '10px 16px', background: theme.primary, color: 'white' }} href={Bio.github} target="_blank">Github Profile</GitHubButton> */}
        </MobileMenu>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
