// import React from "react";
// import styled from "styled-components";
// import { motion } from "framer-motion";

// const ServicesWrapper = styled.div`
//   padding: 4rem 0;
// `;

// const ServiceHeader = styled.div`
//   text-align: center;
//   margin-bottom: 4rem;
// `;

// const ServiceTitle = styled.h1`
//   font-size: 3rem;
//   color: var(--gold-primary);
//   margin-bottom: 1rem;
  
//   @media (max-width: 768px) {
//     font-size: 2.5rem;
//   }
// `;

// const ServiceSubtitle = styled.p`
//   font-size: 1.2rem;
//   color: #ccc;
//   max-width: 700px;
//   margin: 0 auto;
// `;

// const ServicesList = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 3rem;
// `;

// const ServiceCard = styled(motion.div)`
//   display: grid;
//   grid-template-columns: 1fr 1fr;
//   gap: 3rem;
//   align-items: center;
  
//   &:nth-child(even) {
//     direction: rtl;
//   }
  
//   &:nth-child(even) > div {
//     direction: ltr;
//   }
  
//   @media (max-width: 1024px) {
//     grid-template-columns: 1fr;
//     text-align: center;
    
//     &:nth-child(even) {
//       direction: ltr;
//     }
//   }
// `;

// const ServiceImage = styled.div`
//   position: relative;
//   height: 300px;
//   overflow: hidden;
//   border-radius: 10px;
  
//   img {
//     width: 100%;
//     height: 100%;
//     object-fit: cover;
//   }
  
//   &::after {
//     content: "";
//     position: absolute;
//     top: 0;
//     left: 0;
//     right: 0;
//     bottom: 0;
//     background: linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.5));
//   }
  
//   @media (max-width: 1024px) {
//     height: 250px;
//   }
// `;

// const ServiceContent = styled.div`
//   padding: 1rem;
// `;

// const ServiceCardTitle = styled.h2`
//   font-size: 2rem;
//   color: var(--gold-primary);
//   margin-bottom: 1.5rem;
  
//   @media (max-width: 768px) {
//     font-size: 1.8rem;
//   }
// `;

// const ServiceDescription = styled.p`
//   font-size: 1rem;
//   color: #ccc;
//   margin-bottom: 1.5rem;
//   line-height: 1.6;
// `;

// const ServiceFeatures = styled.ul`
//   list-style: none;
//   padding: 0;
//   margin: 0;
// `;

// const ServiceFeature = styled.li`
//   margin-bottom: 1rem;
//   display: flex;
//   align-items: center;
  
//   &::before {
//     content: "✓";
//     color: var(--gold-primary);
//     margin-right: 0.5rem;
//     font-weight: bold;
//   }
  
//   @media (max-width: 1024px) {
//     justify-content: center;
//   }
// `;

// const ServiceAction = styled(motion.button)`
//   background-color: var(--gold-primary);
//   color: #111;
//   border: none;
//   padding: 0.8rem 2rem;
//   font-size: 1rem;
//   font-weight: 600;
//   border-radius: 30px;
//   cursor: pointer;
//   margin-top: 1.5rem;
//   transition: all 0.3s ease;
  
//   &:hover {
//     background-color: var(--gold-light);
//     transform: translateY(-2px);
//     box-shadow: 0 10px 20px rgba(212, 175, 55, 0.3);
//   }
// `;

// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.3,
//     },
//   },
// };

// const serviceVariants = {
//   hidden: { opacity: 0, y: 30 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.5,
//     },
//   },
// };

// const Services = () => {
//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       transition={{ duration: 0.5 }}
//     >
//       <ServicesWrapper>
//         <ServiceHeader>
//           <ServiceTitle>Our Services</ServiceTitle>
//           <ServiceSubtitle>
//             At Golden Japan LLC, we offer a range of premium services designed to meet your needs with the highest standards of quality and customer satisfaction.
//           </ServiceSubtitle>
//         </ServiceHeader>
        
//         <ServicesList
//           variants={containerVariants}
//           initial="hidden"
//           animate="visible"
//         >
//           <ServiceCard variants={serviceVariants}>
//             <ServiceImage>
//               <img src="/api/placeholder/600/300" alt="Vehicle Export" />
//             </ServiceImage>
//             <ServiceContent>
//               <ServiceCardTitle>Vehicle Export</ServiceCardTitle>
//               <ServiceDescription>
//                 We specialize in exporting high-quality Japanese vehicles to customers worldwide. Our comprehensive service ensures a smooth experience from selection to delivery.
//               </ServiceDescription>
//               <ServiceFeatures>
//                 <ServiceFeature>Wide selection of premium Japanese vehicles</ServiceFeature>
//                 <ServiceFeature>Complete export documentation handling</ServiceFeature>
//                 <ServiceFeature>Secure shipping and logistics</ServiceFeature>
//                 <ServiceFeature>Pre-shipment inspection and quality assurance</ServiceFeature>
//               </ServiceFeatures>
//               <ServiceAction 
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 Learn More
//               </ServiceAction>
//             </ServiceContent>
//           </ServiceCard>
          
//           <ServiceCard variants={serviceVariants}>
//             <ServiceImage>
//               <img src="/api/placeholder/600/300" alt="Real Estate" />
//             </ServiceImage>
//             <ServiceContent>
//               <ServiceCardTitle>Real Estate</ServiceCardTitle>
//               <ServiceDescription>
//                 Find your dream property in Japan with our comprehensive real estate services. We offer a range of residential and commercial properties for sale and rent.
//               </ServiceDescription>
//               <ServiceFeatures>
//                 <ServiceFeature>Residential and commercial properties</ServiceFeature>
//                 <ServiceFeature>Investment opportunities</ServiceFeature>
//                 <ServiceFeature>Property management services</ServiceFeature>
//                 <ServiceFeature>Legal assistance for property transactions</ServiceFeature>
//               </ServiceFeatures>
//               <ServiceAction 
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 Explore Properties
//               </ServiceAction>
//             </ServiceContent>
//           </ServiceCard>
          
//           <ServiceCard variants={serviceVariants}>
//             <ServiceImage>
//               <img src="/Images/home_pics01.jpg" alt="Restaurant Operations" />
//             </ServiceImage>
//             <ServiceContent>
//               <ServiceCardTitle>Restaurants</ServiceCardTitle>
//               <ServiceDescription>
//                 Experience the authentic taste of Japan at our premium restaurant locations. We offer traditional Japanese cuisine prepared by expert chefs in a modern, comfortable setting.
//               </ServiceDescription>
//               <ServiceFeatures>
//                 <ServiceFeature>Authentic Japanese cuisine</ServiceFeature>
//                 <ServiceFeature>Premium dining experience</ServiceFeature>
//                 <ServiceFeature>Private events and catering</ServiceFeature>
//                 <ServiceFeature>Multiple locations across Japan</ServiceFeature>
//               </ServiceFeatures>
//               <ServiceAction 
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 Find Locations
//               </ServiceAction>
//             </ServiceContent>
//           </ServiceCard>
//         </ServicesList>
//       </ServicesWrapper>
//     </motion.div>
//   );
// };

// export default Services;




import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

// Styled Components
const ServicesWrapper = styled.div`
  padding: 4rem 0;
  background-color: #111;
`;

const HeroSection = styled.section`
  height: 60vh;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url("/assets/hero_image_1.jpg"); /* Add your hero image here */
  background-size: cover;
  background-position: center;
  margin-bottom: 4rem;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(0deg, rgba(17, 17, 17, 1) 0%, rgba(17, 17, 17, 0.5) 100%);
  }
`;

const HeroContent = styled(motion.div)`
  text-align: center;
  z-index: 1;
`;

const HeroTitle = styled.h1`
  font-size: 4rem;
  color: var(--gold-primary);
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.5rem;
  color: #eee;
  max-width: 800px;
  margin: 0 auto;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const ServicesList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const ServiceCard = styled(motion.div)`
  background-color: rgba(34, 34, 34, 0.8);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }
`;

const ServiceImage = styled.div`
  position: relative;
  height: 200px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.5));
  }
`;

const ServiceContent = styled.div`
  padding: 1.5rem;
`;

const ServiceCardTitle = styled.h2`
  font-size: 1.8rem;
  color: var(--gold-primary);
  margin-bottom: 1rem;
`;

const ServiceDescription = styled.p`
  font-size: 1rem;
  color: #ccc;
  margin-bottom: 1.5rem;
  line-height: 1.6;
`;

const ServiceFeatures = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ServiceFeature = styled.li`
  margin-bottom: 0.8rem;
  display: flex;
  align-items: center;

  &::before {
    content: "✓";
    color: var(--gold-primary);
    margin-right: 0.5rem;
    font-weight: bold;
  }
`;

const ServiceAction = styled(motion.button)`
  background-color: var(--gold-primary);
  color: #111;
  border: none;
  padding: 0.8rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 30px;
  cursor: pointer;
  margin-top: 1.5rem;
  transition: all 0.3s ease;

  &:hover {
    background-color: var(--gold-light);
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(212, 175, 55, 0.3);
  }
`;

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const serviceVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const Services = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <HeroSection>
        <HeroContent>
          <HeroTitle>Our Services</HeroTitle>
          <HeroSubtitle>
            At Golden Japan LLC, we provide premium services tailored to meet your needs with the highest standards of quality and customer satisfaction.
          </HeroSubtitle>
        </HeroContent>
      </HeroSection>

      <ServicesWrapper>
        <ServicesList
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Automotive Sales, Export & Parts */}
          <ServiceCard variants={serviceVariants}>
            <ServiceImage>
              <img src="/assets/vehicle-export.jpg" alt="Automotive Sales" />
            </ServiceImage>
            <ServiceContent>
              <ServiceCardTitle>Automotive Sales, Export & Parts</ServiceCardTitle>
              <ServiceDescription>
                We specialize in exporting high-quality Japanese vehicles, machinery, and parts to customers worldwide.
              </ServiceDescription>
              <ServiceFeatures>
                <ServiceFeature>Passenger Vehicles (Cars, Cabs)</ServiceFeature>
                <ServiceFeature>Commercial Vehicles (Lorries, Trucks)</ServiceFeature>
                <ServiceFeature>Two-Wheelers (Motorcycles, Bicycles)</ServiceFeature>
                <ServiceFeature>Heavy Machinery (Construction Equipment)</ServiceFeature>
                <ServiceFeature>Agricultural Machinery (Tractors, Harvesters)</ServiceFeature>
                <ServiceFeature>Genuine & Aftermarket Parts</ServiceFeature>
              </ServiceFeatures>
              
            </ServiceContent>
          </ServiceCard>

          {/* Electronics & Office Equipment */}
          <ServiceCard variants={serviceVariants}>
            <ServiceImage>
              <img src="/assets/electronics.jpg" alt="Electronics & Office Equipment" />
            </ServiceImage>
            <ServiceContent>
              <ServiceCardTitle>Electronics & Office Equipment</ServiceCardTitle>
              <ServiceDescription>
                We offer a wide range of electronics and office equipment for export, ensuring quality and reliability.
              </ServiceDescription>
              <ServiceFeatures>
                <ServiceFeature>Laptops & Computers</ServiceFeature>
                <ServiceFeature>Mobile Phones</ServiceFeature>
                <ServiceFeature>Printers & Photocopiers</ServiceFeature>
                <ServiceFeature>Cameras</ServiceFeature>
              </ServiceFeatures>
              
            </ServiceContent>
          </ServiceCard>

          {/* Additional Services */}
          <ServiceCard variants={serviceVariants}>
            <ServiceImage>
              <img src="/assets/machinery.jpg" alt="Heavy Machinery" />
            </ServiceImage>
            <ServiceContent>
              <ServiceCardTitle>Heavy Machinery & Equipment</ServiceCardTitle>
              <ServiceDescription>
                We provide a wide range of heavy machinery and equipment for construction and agricultural purposes.
              </ServiceDescription>
              <ServiceFeatures>
                <ServiceFeature>Construction Equipment</ServiceFeature>
                <ServiceFeature>Agricultural Machinery</ServiceFeature>
                <ServiceFeature>Spare Parts & Accessories</ServiceFeature>
              </ServiceFeatures>
              
            </ServiceContent>
          </ServiceCard>

          {/* Spare Parts & Accessories */}
          <ServiceCard variants={serviceVariants}>
            <ServiceImage>
              <img src="/assets/spare_parts.jpg" alt="Spare Parts & Accessories" />
            </ServiceImage>
            <ServiceContent>
              <ServiceCardTitle>Spare Parts & Accessories</ServiceCardTitle>
              <ServiceDescription>
                Access genuine and aftermarket parts for all types of vehicles and machinery.
              </ServiceDescription>
              <ServiceFeatures>
                <ServiceFeature>Genuine OEM Parts</ServiceFeature>
                <ServiceFeature>Aftermarket Parts</ServiceFeature>
                <ServiceFeature>Worldwide Shipping</ServiceFeature>
              </ServiceFeatures>

            </ServiceContent>
          </ServiceCard>
        </ServicesList>
      </ServicesWrapper>
    </motion.div>
  );
};

export default Services;