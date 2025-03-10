import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: rgba(17, 17, 17, 0.95);
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 2px 10px rgba(212, 175, 55, 0.2);
  backdrop-filter: blur(10px);
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const LogoImage = styled.img`
  height: 50px;
  width: auto;
`;

const LogoText = styled.span`
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--gold-primary);
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  position: relative;
  color: #fff;
  font-weight: 500;
  transition: color 0.3s ease;
  
  &:hover {
    color: var(--gold-primary);
  }
  
  &.active {
    color: var(--gold-primary);
  }
  
  &.active::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: var(--gold-primary);
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: #fff;
  font-size: 1.5rem;
  cursor: pointer;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled(motion.div)`
  display: none;
  
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 80px;
    left: 0;
    right: 0;
    background-color: rgba(17, 17, 17, 0.95);
    padding: 1rem;
    gap: 1rem;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  }
`;

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);
  
  return (
    <NavContainer>
      <Logo to="/">
        <LogoImage src="/assets/GOLDENJAPAN_LOGO.png" alt="Golden Japan LLC" />
        <LogoText>Golden Japan</LogoText>
      </Logo>
      
      <NavLinks>
        <NavLink to="/" className={location.pathname === "/" ? "active" : ""}>
          Home
        </NavLink>
        <NavLink to="/services" className={location.pathname === "/services" ? "active" : ""}>
          Services
        </NavLink>
        <NavLink to="/gallery" className={location.pathname === "/gallery" ? "active" : ""}>
          Gallery
        </NavLink>
        <NavLink to="/contact" className={location.pathname === "/contact" ? "active" : ""}>
          Contact
        </NavLink>
      </NavLinks>
      
      <MobileMenuButton onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
        {mobileMenuOpen ? "✕" : "☰"}
      </MobileMenuButton>
      
      {mobileMenuOpen && (
        <MobileMenu
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <NavLink to="/">Home</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </MobileMenu>
      )}
    </NavContainer>
  );
};

export default Navbar;