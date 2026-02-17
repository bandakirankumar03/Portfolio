// Home.tsx

import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Typography, Container, Grid, IconButton } from "@mui/material";
import Navigation from "./Navigation";
import { Link, useNavigate } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

// FontAwesome Imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBehance,
  faGithub,
  faLinkedin,
  faVimeo,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

// Styled Components
const HeroSection = styled.div`
  position: relative;
  height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.6);
    z-index: 1;
  }
`;

const BackgroundVideo = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
`;

const MidSectionWrapper = styled.section`
  background-color: #000;
  color: white;
  text-align: center;
  padding: 6rem 1rem;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
  font-family: "Helvetica Neue", sans-serif;
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  font-weight: 300;
  margin-bottom: 2rem;
  font-family: "Helvetica Neue", sans-serif;
`;

const CTAButton = styled.button`
  font-size: 1rem;
  padding: 1rem 2rem;
  border: 2px solid white;
  background: transparent;
  color: white;
  cursor: pointer;
  font-family: "Helvetica Neue", sans-serif;
  letter-spacing: 1px;
  transition: all 0.3s ease;

  &:hover {
    background-color: white;
    color: black;
  }
`;

const ContactSection = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 6rem 0;
  background-color: #0a0a0a;
`;

const ContactInfo = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 3rem;
`;

const StyledIconButton = styled(IconButton)`
  color: white;
  font-size: 1.5rem;
  transition: all 0.3s ease;

  &:hover {
    color: #f50057;
    transform: translateY(-5px);
  }
`;

const SocialLink = styled.a`
  color: inherit;
  text-decoration: none;
`;

// Add styled components for Projects section
const ProjectsSection = styled.section`
  background: #000;
  padding: 0 0 3rem 0;
  text-align: center;
`;
const ProjectImage = styled.img`
  width: 100vw;
  height: auto;
  object-fit: cover;
  display: block;
  border-radius: 0;
  box-shadow: none;
  background: #111;
  transition: transform 0.3s cubic-bezier(.4,2,.6,1);
  cursor: pointer;
  margin: 0;
  &:hover {
    transform: scale(1.03);
    z-index: 2;
  }
`;

// Mid Section Component
const MidSection: React.FC = () => (
  <MidSectionWrapper>
    <Title>Kiran Kumar Banda - CGI | VFX Artist</Title>
    <Subtitle>
      Design, craft & creativity for movies, games, advertising.
    </Subtitle>
    <CTAButton
      onClick={() =>
        window.open(
          "https://www.behance.net/gallery/208600845/VFX-Showreel-2024",
          "_blank"
        )
      }
    >
      SHOWREEL
    </CTAButton>
  </MidSectionWrapper>
);

const HideScrollbars = createGlobalStyle`
  * {
    scrollbar-width: none !important; /* Firefox */
    -ms-overflow-style: none !important;  /* IE and Edge */
  }
  *::-webkit-scrollbar {
    display: none !important;
    width: 0 !important;
    height: 0 !important;
    background: transparent !important;
  }
`;

// Main Component
const Home: React.FC = () => {
  const projectsRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const handleSectionChange = (section: 'work' | 'still-images') => {
    if (section === 'work' && projectsRef.current) {
      projectsRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (section === 'still-images') {
      navigate('/still-images');
    }
  };

  useEffect(() => {
    if (window.location.hash === '#projects' && projectsRef.current) {
      projectsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <>
      <HideScrollbars />
      <Navigation onSectionChange={handleSectionChange} />

      <HeroSection>
        <BackgroundVideo autoPlay loop muted playsInline>
          <source src="/assets/background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </BackgroundVideo>
        <div style={{ zIndex: 2 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Optional hero text or logo */}
          </motion.div>
        </div>
      </HeroSection>

      <MidSection />

      {/* Projects Section - styled like janreeh.com, no title */}
      <ProjectsSection ref={projectsRef}>
        <Link to="/project/dreamride" style={{ display: 'block', width: '100vw' }}>
          <ProjectImage
            src="/assets/DreamRide/HighresScreenshot00009.png"
            alt="The Dream Ride Project"
          />
        </Link>
      </ProjectsSection>

      <ContactSection id="contact">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Grid container spacing={3} justifyContent="center">
              <Grid item xs={12} md={8}>
                <ContactInfo>
                  <Typography variant="h2" component="h1" gutterBottom>
                    Let's Work Together
                  </Typography>
                  <Typography variant="h5" color="textSecondary" paragraph>
                    Ready to dive into visually compelling stories
                  </Typography>
                  <Typography variant="h6" gutterBottom>
                    Email: bandakirankumar03@gmail.com
                  </Typography>
                  <Typography variant="h6">
                    Phone: +91 9963082805
                  </Typography>
                </ContactInfo>

                <SocialLinks>
                  {[
                    {
                      href: "https://www.behance.net/kirankumar_B",
                      icon: faBehance,
                      label: "Behance",
                    },
                    { href: "https://github.com", icon: faGithub, label: "GitHub" },
                    { href: "https://linkedin.com", icon: faLinkedin, label: "LinkedIn" },
                    { href: "https://vimeo.com", icon: faVimeo, label: "Vimeo" },
                    { href: "https://instagram.com", icon: faInstagram, label: "Instagram" },
                  ].map((social, index) => (
                    <motion.div whileHover={{ scale: 1.1 }} key={index}>
                      <SocialLink
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                      >
                        <StyledIconButton>
                          <FontAwesomeIcon icon={social.icon} />
                        </StyledIconButton>
                      </SocialLink>
                    </motion.div>
                  ))}
                </SocialLinks>
              </Grid>
            </Grid>
          </motion.div>
        </Container>
      </ContactSection>
    </>
  );
};

export default Home;
