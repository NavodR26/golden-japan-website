import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const ContactWrapper = styled.div`
  padding: 4rem 0;
`;

const ContactHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const ContactTitle = styled.h1`
  font-size: 3rem;
  color: var(--gold-primary);
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const ContactSubtitle = styled.p`
  font-size: 1.2rem;
  color: #ccc;
  max-width: 700px;
  margin: 0 auto;
`;

const ContactContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

const ContactInfo = styled.div`
  @media (max-width: 1024px) {
    order: 2;
  }
`;

const InfoTitle = styled.h2`
  font-size: 1.8rem;
  color: #fff;
  margin-bottom: 2rem;
  position: relative;
  
  &::after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 60px;
    height: 3px;
    background-color: var(--gold-primary);
  }
`;

const InfoItem = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 1.5rem;
`;

const InfoIcon = styled.div`
  font-size: 1.5rem;
  margin-right: 1rem;
  color: var(--gold-primary);
`;

const InfoContent = styled.div``;

const InfoLabel = styled.h3`
  font-size: 1.2rem;
  color: #fff;
  margin-bottom: 0.3rem;
`;

const InfoText = styled.p`
  font-size: 1rem;
  color: #ccc;
`;

const Map = styled.div`
  margin-top: 3rem;
  height: 300px;
  background-color: #333;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  
  iframe {
    width: 100%;
    height: 100%;
    border: none;
  }
  
  &::before {
    content: "Map loading...";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #333;
    color: #ccc;
  }
`;

const ContactForm = styled.div`
  @media (max-width: 1024px) {
    order: 1;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-size: 1rem;
  color: #ccc;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  padding: 1rem;
  border-radius: 5px;
  border: 1px solid #333;
  background-color: #222;
  color: #fff;
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: var(--gold-primary);
  }
`;

const Textarea = styled.textarea`
  padding: 1rem;
  border-radius: 5px;
  border: 1px solid #333;
  background-color: #222;
  color: #fff;
  font-size: 1rem;
  height: 150px;
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: var(--gold-primary);
  }
`;

const SubmitButton = styled(motion.button)`
  background-color: var(--gold-primary);
  color: #111;
  border: none;
  padding: 1rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 0.5rem;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: var(--gold-light);
  }
  
  &:disabled {
    background-color: #555;
    cursor: not-allowed;
  }
`;

const SuccessMessage = styled(motion.div)`
  background-color: rgba(0, 128, 0, 0.2);
  border: 1px solid green;
  color: #fff;
  padding: 1rem;
  border-radius: 5px;
  margin-top: 1rem;
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    }, 1500);
  };
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <ContactWrapper>
        <ContactHeader>
          <ContactTitle>Contact Us</ContactTitle>
          <ContactSubtitle>
            Have questions or need more information? We're here to help. Get in touch with our team.
          </ContactSubtitle>
        </ContactHeader>
        
        <ContactContent>
          <ContactInfo>
            <InfoTitle>Contact Information</InfoTitle>
            
            <InfoItem>
              <InfoIcon>📍</InfoIcon>
              <InfoContent>
                <InfoLabel>Address</InfoLabel>
                <InfoText>305sanhaitsu Akebono, 5-74 Akebonochō, Toyota, Aichi, Japan, 471-0835</InfoText>
              </InfoContent>
            </InfoItem>
            
            <InfoItem>
              <InfoIcon>📞</InfoIcon>
              <InfoContent>
                <InfoLabel>Phone</InfoLabel>
                <InfoText>+81 90-1277-7733 (Hotline)</InfoText>
                <InfoText>+81 52-386-1932 (Land Phone)</InfoText>
              </InfoContent>
            </InfoItem>
            
            <InfoItem>
              <InfoIcon>✉️</InfoIcon>
              <InfoContent>
                <InfoLabel>Email</InfoLabel>
                <InfoText>info@goldenjapan.com</InfoText>
              </InfoContent>
            </InfoItem>
            
            <InfoItem>
              <InfoIcon>🕒</InfoIcon>
              <InfoContent>
                <InfoLabel>Business Hours</InfoLabel>
                <InfoText>Monday - Friday: 9:00 AM - 6:00 PM JST</InfoText>
                <InfoText>Saturday: 10:00 AM - 3:00 PM JST</InfoText>
                <InfoText>Sunday: Closed</InfoText>
              </InfoContent>
            </InfoItem>
            
            <Map>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3262.940193307792!2d137.1513317!3d35.0836373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6004a35a24a687f3%3A0x6e22a0ba3ad3a49c!2z5oiQ5a-M5biC5p2x5Lqs6YO944Ki44Kx44Oc44OOIOcuIDUtNzQ!5e0!3m2!1sen!2sjp!4v1646400000000!5m2!1sen!2sjp" 
                allowFullScreen="" 
                loading="lazy" 
                title="Golden Japan LLC Location"
              ></iframe>
            </Map>
          </ContactInfo>
          
          <ContactForm>
            <InfoTitle>Send Us a Message</InfoTitle>
            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <Label>Your Name</Label>
                <Input 
                  type="text" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  required 
                />
              </FormGroup>
              
              <FormGroup>
                <Label>Email Address</Label>
                <Input 
                  type="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  required 
                />
              </FormGroup>
              
              <FormGroup>
                <Label>Subject</Label>
                <Input 
                  type="text" 
                  name="subject" 
                  value={formData.subject} 
                  onChange={handleChange} 
                  required 
                />
              </FormGroup>
              
              <FormGroup>
                <Label>Message</Label>
                <Textarea 
                  name="message" 
                  value={formData.message} 
                  onChange={handleChange} 
                  required 
                />
              </FormGroup>
              
              <SubmitButton 
                type="submit" 
                disabled={isSubmitting}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </SubmitButton>
              
              {isSuccess && (
                <SuccessMessage
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  Your message has been sent successfully. We'll get back to you soon!
                </SuccessMessage>
              )}
            </Form>
          </ContactForm>
        </ContactContent>
      </ContactWrapper>
    </motion.div>
  );
};

export default Contact;