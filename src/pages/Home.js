
// import React from "react";
// import styled from "styled-components";
// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";

// // Styled Components
// const HeroSection = styled.section`
//   height: 90vh;
//   position: relative;
//   overflow: hidden;
//   display: flex;
//   align-items: center;
//   justify-content: center;

//   &::before {
//     content: "";
//     position: absolute;
//     top: 0;
//     left: 0;
//     right: 0;
//     bottom: 0;
//     background-image: url("./assets/hero_image_1.jpg");
//         background-size: cover;
//    background-position: center;
//     background-repeat: no-repeat;
//     filter: brightness(0.65) saturate(1.2) contrast(1.1);
//     transform: scale(1.05);
//     transition: all 0.5s ease-in-out;
   
//   }

//   &::after {
//     content: "";
//     position: absolute;
//     top: 0;
//     left: 0;
//     right: 0;
//     bottom: 0;
//     background: linear-gradient(0deg, rgba(17, 17, 17, 1) 0%, rgba(17, 17, 17, 0) 50%, rgba(17, 17, 17, 0.5) 100%);
//     z-index: -1;
//   }
// `;

// const HeroContent = styled(motion.div)`
//   text-align: center;
//   max-width: 800px;
//   padding: 0 20px;
//   z-index: 1;
// // `;

// const HeroTitle = styled(motion.h1)`
//   font-size: 4rem;
//   margin-bottom: 1rem;
//   color: #fff;
//   text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);

//   span {
//     color: var(--gold-primary);
//   }

//   @media (max-width: 768px) {
//     font-size: 2.5rem;
//   }
// `;

// const HeroSubtitle = styled(motion.p)`
//   font-size: 1.5rem;
//   margin-bottom: 2rem;
//   color: #eee;
//   max-width: 600px;
//   margin-left: auto;
//   margin-right: auto;

//   @media (max-width: 768px) {
//     font-size: 1.2rem;
//   }
// `;

// const CTAButton = styled(motion.button)`
//   background-color: var(--gold-primary);
//   color: #111;
//   border: none;
//   padding: 1rem 2.5rem;
//   font-size: 1.1rem;
//   font-weight: 600;
//   border-radius: 30px;
//   cursor: pointer;
//   transition: all 0.3s ease;
//   text-transform: uppercase;
//   letter-spacing: 1px;

//   &:hover {
//     background-color: var(--gold-light);
//     transform: translateY(-2px);
//     box-shadow: 0 10px 20px rgba(212, 175, 55, 0.3);
//   }
// `;

// const FeaturesSection = styled.section`
//   padding: 5rem 0;
//   background-color: #111;
// `;

// const SectionTitle = styled.h2`
//   text-align: center;
//   font-size: 2.5rem;
//   margin-bottom: 3rem;
//   color: var(--gold-primary);
//   position: relative;

//   &::after {
//     content: "";
//     position: absolute;
//     bottom: -10px;
//     left: 50%;
//     transform: translateX(-50%);
//     width: 80px;
//     height: 3px;
//     background-color: var(--gold-primary);
//   }
// `;

// const FeaturesGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
//   gap: 2rem;
//   max-width: 1200px;
//   margin: 0 auto;
//   padding: 0 20px;
// `;

// const FeatureCard = styled(motion.div)`
//   background-color: rgba(34, 34, 34, 0.8);
//   padding: 2rem;
//   border-radius: 10px;
//   text-align: center;
//   transition: transform 0.3s ease;
//   border: 1px solid #333;

//   &:hover {
//     transform: translateY(-10px);
//     border-color: var(--gold-primary);
//   }
// `;

// const FeatureIcon = styled.div`
//   font-size: 3rem;
//   margin-bottom: 1.5rem;
//   color: var(--gold-primary);
// `;

// const FeatureTitle = styled.h3`
//   font-size: 1.5rem;
//   margin-bottom: 1rem;
//   color: #fff;
// `;

// const FeatureDescription = styled.p`
//   font-size: 1rem;
//   color: #ccc;
// `;

// const AboutSection = styled.section`
//   padding: 5rem 0;
//   background-color: var(--dark-secondary);
// `;

// const AboutContainer = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   max-width: 1200px;
//   margin: 0 auto;
//   padding: 0 20px;
//   gap: 3rem;

//   @media (max-width: 768px) {
//     flex-direction: column;
//   }
// `;

// const AboutImage = styled(motion.div)`
//   flex: 1;
//   height: 400px;
//   border-radius: 10px;
//   overflow: hidden;
//   box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);

//   img {
//     width: 100%;
//     height: 100%;
//     object-fit: cover;
//   }
// `;

// const AboutContent = styled.div`
//   flex: 1;
// `;

// const AboutTitle = styled.h2`
//   font-size: 2.5rem;
//   margin-bottom: 1.5rem;
//   color: var(--gold-primary);
// `;

// const AboutText = styled.p`
//   font-size: 1.1rem;
//   color: #ccc;
//   line-height: 1.8;
//   margin-bottom: 2rem;
// `;

// const VisionMissionSection = styled.section`
//   padding: 5rem 0;
//   background-color: #111;
// `;

// const VisionMissionContainer = styled.div`
//   max-width: 1200px;
//   margin: 0 auto;
//   padding: 0 20px;
//   text-align: center;
// `;

// const VisionMissionTitle = styled.h2`
//   font-size: 2.5rem;
//   margin-bottom: 3rem;
//   color: var(--gold-primary);
// `;

// const VisionMissionContent = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
//   gap: 3rem;
// `;

// const VisionMissionCard = styled(motion.div)`
//   background-color: rgba(34, 34, 34, 0.8);
//   padding: 2rem;
//   border-radius: 10px;
//   text-align: center;
//   transition: transform 0.3s ease;
//   border: 1px solid #333;

//   &:hover {
//     transform: translateY(-10px);
//     border-color: var(--gold-primary);
//   }
// `;

// const VisionMissionIcon = styled.div`
//   font-size: 3rem;
//   margin-bottom: 1.5rem;
//   color: var(--gold-primary);
// `;

// const VisionMissionHeading = styled.h3`
//   font-size: 1.8rem;
//   margin-bottom: 1rem;
//   color: #fff;
// `;

// const VisionMissionText = styled.p`
//   font-size: 1rem;
//   color: #ccc;
//   line-height: 1.6;
// `;

// // Animation Variants
// const cardVariants = {
//   hidden: { opacity: 0, y: 50 },
//   visible: (i) => ({
//     opacity: 1,
//     y: 0,
//     transition: {
//       delay: i * 0.1,
//       duration: 0.5,
//     },
//   }),
// };

// const Home = () => {
//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       transition={{ duration: 0.5 }}
//     >
//       {/* Hero Section */}
//       <HeroSection>
//         <HeroContent>
//           <HeroTitle
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7, delay: 0.2 }}
//           >
//             Welcome to <span>Golden Japan</span> LLC
//           </HeroTitle>
//           <HeroSubtitle
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7, delay: 0.4 }}
//           >
//             Your trusted partner for premium Japanese vehicle exports and quality services
//           </HeroSubtitle>
//           <Link to="/services">
//             <CTAButton
//               initial={{ opacity: 0, y: -20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.7, delay: 0.6 }}
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               Explore Our Services
//             </CTAButton>
//           </Link>
//         </HeroContent>
//       </HeroSection>

//       {/* Features Section */}
//       <FeaturesSection>
//         <SectionTitle>What We Offer</SectionTitle>
//         <FeaturesGrid>
//           <FeatureCard
//             custom={0}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.3 }}
//             variants={cardVariants}
//           >
//             <FeatureIcon>🚗</FeatureIcon>
//             <FeatureTitle>Vehicle Export</FeatureTitle>
//             <FeatureDescription>
//               We specialize in exporting high-quality Japanese vehicles to customers worldwide with transparent pricing and reliable delivery.
//             </FeatureDescription>
//           </FeatureCard>
//           <FeatureCard
//             custom={1}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.3 }}
//             variants={cardVariants}
//           >
//             <FeatureIcon>🔧</FeatureIcon>
//             <FeatureTitle>Parts & Accessories</FeatureTitle>
//             <FeatureDescription>
//               Access genuine and aftermarket parts for all types of vehicles, machinery, and equipment with worldwide shipping options.
//             </FeatureDescription>
//           </FeatureCard>
//           <FeatureCard
//             custom={2}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.3 }}
//             variants={cardVariants}
//           >
//             <FeatureIcon>🌍</FeatureIcon>
//             <FeatureTitle>Global Reach</FeatureTitle>
//             <FeatureDescription>
//               With our extensive network, we can deliver vehicles and services to customers around the world.
//             </FeatureDescription>
//           </FeatureCard>
//         </FeaturesGrid>
//       </FeaturesSection>

//       {/* About Us Section */}
//       <AboutSection>
//         <AboutContainer>
//           <AboutImage
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//           >
//             <img src="./assets/about_image.jpg" alt="About Us" />
//           </AboutImage>
//           <AboutContent>
//             <AboutTitle>About Us</AboutTitle>
//             <AboutText>
//               Golden Japan LLC is a leading provider of premium Japanese vehicles, parts, and services. With years of experience, we are committed to delivering exceptional value and reliability to our customers worldwide.
//             </AboutText>
//             <CTAButton
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               Learn More
//             </CTAButton>
//           </AboutContent>
//         </AboutContainer>
//       </AboutSection>

//       {/* Vision & Mission Section */}
//       <VisionMissionSection>
//         <VisionMissionContainer>
//           <VisionMissionTitle>Our Vision & Mission</VisionMissionTitle>
//           <VisionMissionContent>
//             <VisionMissionCard
//               custom={0}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true, amount: 0.3 }}
//               variants={cardVariants}
//             >
//               <VisionMissionIcon>🌟</VisionMissionIcon>
//               <VisionMissionHeading>Our Vision</VisionMissionHeading>
//               <VisionMissionText>
//                 To lead the global evolution of mobility by creating intelligent, sustainable, and inclusive transportation solutions that empower people, redefine journeys, and inspire a cleaner, safer, and more connected world.
//               </VisionMissionText>
//             </VisionMissionCard>
//             <VisionMissionCard
//               custom={1}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true, amount: 0.3 }}
//               variants={cardVariants}
//             >
//               <VisionMissionIcon>🚀</VisionMissionIcon>
//               <VisionMissionHeading>Our Mission</VisionMissionHeading>
//               <VisionMissionText>
//                 Our mission is to deliver exceptional value and reliability by providing high-quality, innovative, and sustainable vehicles tailored to meet the evolving needs of our customers. Through customer-centric partnerships, rigorous quality standards, and a commitment to environmental stewardship, we empower individuals and businesses to navigate their journeys with confidence, affordability, and a reduced ecological footprint.
//               </VisionMissionText>
//             </VisionMissionCard>
//           </VisionMissionContent>
//         </VisionMissionContainer>
//       </VisionMissionSection>
//     </motion.div>
//   );
// };

// export default Home;



import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Styled Components
const HeroSection = styled.section`
  height: 90vh;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url("/assets/hero_image.jpg"); /* Updated Hero Image Path */
    background-size: cover;
    background-position: center;
    filter: brightness(0.5);
    // z-index: -1;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(0deg, rgba(17, 17, 17, 1) 0%, rgba(17, 17, 17, 0) 50%, rgba(17, 17, 17, 0.5) 100%);
    z-index: -1;
  }
`;

const HeroContent = styled(motion.div)`
  text-align: center;
  max-width: 800px;
  padding: 0 20px;
  z-index: 1;
`;

const HeroTitle = styled(motion.h1)`
  font-size: 4rem;
  margin-bottom: 1rem;
  color: #fff;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);

  span {
    color: var(--gold-primary);
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled(motion.p)`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  color: #eee;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const CTAButton = styled(motion.button)`
  background-color: var(--gold-primary);
  color: #111;
  border: none;
  padding: 1rem 2.5rem;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;

  &:hover {
    background-color: var(--gold-light);
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(212, 175, 55, 0.3);
  }
`;

const FeaturesSection = styled.section`
  padding: 5rem 0;
  background-color: #111;
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: var(--gold-primary);
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 3px;
    background-color: var(--gold-primary);
  }
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const FeatureCard = styled(motion.div)`
  background-color: rgba(34, 34, 34, 0.8);
  padding: 2rem;
  border-radius: 10px;
  text-align: center;
  transition: transform 0.3s ease;
  border: 1px solid #333;

  &:hover {
    transform: translateY(-10px);
    border-color: var(--gold-primary);
  }
`;

const FeatureIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1.5rem;
  color: var(--gold-primary);
`;

const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #fff;
`;

const FeatureDescription = styled.p`
  font-size: 1rem;
  color: #ccc;
`;

const AboutSection = styled.section`
  padding: 5rem 0;
  background-color: var(--dark-secondary);
`;

const AboutContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  gap: 3rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const AboutImage = styled(motion.div)`
  flex: 1;
  height: 400px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const AboutContent = styled.div`
  flex: 1;
`;

const AboutTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: var(--gold-primary);
`;

const AboutText = styled.p`
  font-size: 1.1rem;
  color: #ccc;
  line-height: 1.8;
  margin-bottom: 2rem;
`;

const VisionMissionSection = styled.section`
  padding: 5rem 0;
  background-color: #111;
`;

const VisionMissionContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  text-align: center;
`;

const VisionMissionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: var(--gold-primary);
`;

const VisionMissionContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 3rem;
`;

const VisionMissionCard = styled(motion.div)`
  background-color: rgba(34, 34, 34, 0.8);
  padding: 2rem;
  border-radius: 10px;
  text-align: center;
  transition: transform 0.3s ease;
  border: 1px solid #333;

  &:hover {
    transform: translateY(-10px);
    border-color: var(--gold-primary);
  }
`;

const VisionMissionIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1.5rem;
  color: var(--gold-primary);
`;

const VisionMissionHeading = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: #fff;
`;

const VisionMissionText = styled.p`
  font-size: 1rem;
  color: #ccc;
  line-height: 1.6;
`;

// Animation Variants
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
    },
  }),
};

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <HeroSection>
        <HeroContent>
          <HeroTitle
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Welcome to <span>Golden Japan</span> LLC
          </HeroTitle>
          <HeroSubtitle
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Your trusted partner for premium Japanese vehicle exports , Domestic vehicle dealers and quality services
          </HeroSubtitle>
          <Link to="/services">
            <CTAButton
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Our Services
            </CTAButton>
          </Link>
        </HeroContent>
      </HeroSection>

      {/* Features Section */}
      <FeaturesSection>
        <SectionTitle>What We Offer</SectionTitle>
        <FeaturesGrid>
          <FeatureCard
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
          >
            <FeatureIcon>🚗</FeatureIcon>
            <FeatureTitle>Domestic Vehicle Dealers and Exports</FeatureTitle>
            <FeatureDescription>
              We specialize in exporting high-quality Japanese vehicles to customers worldwide with transparent pricing and reliable delivery.
            </FeatureDescription>
          </FeatureCard>
          <FeatureCard
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
          >
            <FeatureIcon>🔧</FeatureIcon>
            <FeatureTitle>Parts & Accessories</FeatureTitle>
            <FeatureDescription>
              Access genuine and aftermarket parts for all types of vehicles, machinery, and equipment with worldwide shipping options.
            </FeatureDescription>
          </FeatureCard>
          <FeatureCard
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
          >
            <FeatureIcon>🌍</FeatureIcon>
            <FeatureTitle>Global Reach</FeatureTitle>
            <FeatureDescription>
              With our extensive network, we can deliver vehicles and services to customers around the world.
            </FeatureDescription>
          </FeatureCard>
        </FeaturesGrid>
      </FeaturesSection>

      {/* About Us Section */}
      <AboutSection>
        <AboutContainer>
          <AboutImage
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img src="/assets/about_image.jpg" alt="About Us" />
          </AboutImage>
          <AboutContent>
            <AboutTitle>About Us</AboutTitle>
            <AboutText>
              Golden Japan LLC is a leading provider of premium Japanese vehicles, parts, and services. With years of experience, we are committed to delivering exceptional value and reliability to our customers worldwide.
            </AboutText>
            <CTAButton
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </CTAButton>
          </AboutContent>
        </AboutContainer>
      </AboutSection>

      {/* Vision & Mission Section */}
      <VisionMissionSection>
        <VisionMissionContainer>
          <VisionMissionTitle>Our Vision & Mission</VisionMissionTitle>
          <VisionMissionContent>
            <VisionMissionCard
              custom={0}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
            >
              <VisionMissionIcon>🌟</VisionMissionIcon>
              <VisionMissionHeading>Our Vision</VisionMissionHeading>
              <VisionMissionText>
                To lead the global evolution of mobility by creating intelligent, sustainable, and inclusive transportation solutions that empower people, redefine journeys, and inspire a cleaner, safer, and more connected world.
              </VisionMissionText>
            </VisionMissionCard>
            <VisionMissionCard
              custom={1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
            >
              <VisionMissionIcon>🚀</VisionMissionIcon>
              <VisionMissionHeading>Our Mission</VisionMissionHeading>
              <VisionMissionText>
                Our mission is to deliver exceptional value and reliability by providing high-quality, innovative, and sustainable vehicles tailored to meet the evolving needs of our customers. Through customer-centric partnerships, rigorous quality standards, and a commitment to environmental stewardship, we empower individuals and businesses to navigate their journeys with confidence, affordability, and a reduced ecological footprint.
              </VisionMissionText>
            </VisionMissionCard>
          </VisionMissionContent>
        </VisionMissionContainer>
      </VisionMissionSection>
    </motion.div>
  );
};

export default Home;