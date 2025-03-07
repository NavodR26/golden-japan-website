import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const FooterContainer = styled.footer`
  background-color: var(--dark-secondary);
  padding: 3rem 2rem 2rem;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, var(--gold-dark), var(--gold-primary), var(--gold-light), var(--gold-primary), var(--gold-dark));
  }
`;

const FooterContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const FooterSection = styled.div`
  flex: 1;
  min-width: 250px;
`;

const FooterTitle = styled.h3`
  color: var(--gold-primary);
  margin-bottom: 1.5rem;
  font-size: 1.2rem;
  position: relative;
  
  &::after {
    content: "";
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 50px;
    height: 2px;
    background-color: var(--gold-primary);
  }
`;

const FooterText = styled.p`
  margin-bottom: 0.8rem;
  font-size: 0.9rem;
  color: #ccc;
`;

const FooterLink = styled(Link)`
  display: block;
  margin-bottom: 0.8rem;
  color: #ccc;
  transition: color 0.3s ease;
  
  &:hover {
    color: var(--gold-primary);
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const SocialIcon = styled(motion.a)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #333;
  color: #fff;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: var(--gold-primary);
  }
`;

const Copyright = styled.div`
  text-align: center;
  margin-top: 3rem;
  padding-top: 1.5rem;
  border-top: 1px solid #333;
  color: #888;
  font-size: 0.9rem;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <FooterTitle>About Us</FooterTitle>
          <FooterText>
            Golden Japan LLC specializes in exporting high-quality vehicles and offers premium services including real estate and restaurant operations.
          </FooterText>
        </FooterSection>
        
        <FooterSection>
          <FooterTitle>Quick Links</FooterTitle>
          <FooterLink to="/">Home</FooterLink>
          <FooterLink to="/services">Services</FooterLink>
          <FooterLink to="/contact">Contact</FooterLink>
        </FooterSection>
        
        <FooterSection>
          <FooterTitle>Contact Info</FooterTitle>
          <FooterText>📍 305sanhaitsu Akebono, Toyota, Aichi, Japan 471-0835</FooterText>
          <FooterText>📞 +81 90-1277-7733 (Hotline)</FooterText>
          <FooterText>☎️ +81 52-386-1932 (Land Phone)</FooterText>
          <SocialLinks>
            <SocialIcon 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              📱
            </SocialIcon>
            <SocialIcon 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              📧
            </SocialIcon>
            <SocialIcon 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              🌐
            </SocialIcon>
          </SocialLinks>
        </FooterSection>
      </FooterContent>
      
      <Copyright>
        © {new Date().getFullYear()} Golden Japan LLC. All Rights Reserved.
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;