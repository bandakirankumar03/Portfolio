import React from "react";
import styled from "styled-components";
import { Container, Grid, Typography, IconButton } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBehance,
  faGithub,
  faLinkedin,
  faVimeo,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";
import { createGlobalStyle } from "styled-components";
import Navigation from "../Navigation";
import { useNavigate } from "react-router-dom";

const HideScrollbars = createGlobalStyle`
  /* Hide scrollbars for all elements */
  * {
    scrollbar-width: none !important; /* Firefox */
    -ms-overflow-style: none !important;  /* IE and Edge */
  }
  *::-webkit-scrollbar {
    display: none !important; /* Chrome, Safari, Opera */
    width: 0 !important;
    height: 0 !important;
    background: transparent !important;
  }
`;

const Section = styled.section`
  background: #000;
  color: #fff;
  padding: 0 0 4rem 0;
`;
const FullWidthMedia = styled.div`
  width: 100vw;
  max-width: 100vw;
  margin: 0 auto 2.5rem auto;
  position: relative;
  overflow: hidden;
  background: #000;
  /* Hide scrollbars for all browsers */
  scrollbar-width: none !important;
  -ms-overflow-style: none !important;
  &::-webkit-scrollbar {
    display: none !important;
    width: 0 !important;
    height: 0 !important;
    background: transparent !important;
  }
`;
const FullWidthVideo = styled.video`
  width: 100vw;
  max-width: 100vw;
  height: auto;
  display: block;
  border-radius: 0;
  box-shadow: none;
  background: #000;
`;
const FullWidthImg = styled.img`
  width: 100vw;
  max-width: 100vw;
  height: auto;
  display: block;
  border-radius: 0;
  box-shadow: none;
  background: #000;
`;
const ContainedMedia = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto 2.5rem auto;
  position: relative;
  overflow: hidden;
  background: #000;
`;
const ContainedVideo = styled.video`
  width: 100%;
  max-width: 1200px;
  height: auto;
  display: block;
  border-radius: 0;
  box-shadow: 0 8px 32px rgba(0,0,0,0.5);
  background: #000;
`;
const ContainedImg = styled.img`
  width: 100%;
  max-width: 1200px;
  height: auto;
  display: block;
  border-radius: 0;
  box-shadow: 0 4px 24px rgba(0,0,0,0.3);
  background: #000;
`;
const SectionHeader = styled.div`
  background: #000;
  padding: 3.5rem 0 2.5rem 0;
  text-align: center;
`;
const SectionTitle = styled.h2`
  font-size: 2.8rem;
  font-weight: 900;
  letter-spacing: 2px;
  margin: 0 0 0.5rem 0;
`;
const SectionSubtitle = styled.div`
  font-size: 1.3rem;
  font-weight: 400;
  color: #e0e0e0;
`;
const InfoRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 5vw;
  background: #000;
  padding: 2.5rem 0 2.5rem 0;
  max-width: 1200px;
  margin: 0 auto;
`;
const InfoCol = styled.div`
  flex: 1 1 320px;
  min-width: 220px;
  background: #000;
`;
const InfoTitle = styled.div`
  font-size: 1.3rem;
  font-weight: 700;
  letter-spacing: 1px;
  margin-bottom: 1rem;
`;
const InfoText = styled.div`
  font-size: 1.1rem;
  color: #ccc;
  line-height: 1.6;
`;
// Contact Section Styles
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

const mainVideo = "/assets/DreamRide/videos/Misty Rails Main.mp4";
const otherVideos = [
  { src: "/assets/DreamRide/videos/ai_meshy.mp4", title: "AI Meshy" },
  { src: "/assets/DreamRide/videos/pcg_track.mp4", title: "PCG Track" },
  { src: "/assets/DreamRide/videos/pcg_train.mp4", title: "PCG Train" },
  { src: "/assets/DreamRide/videos/total_project.mp4", title: "Total Project" },
];

const DreamRide: React.FC = () => {
  const navigate = useNavigate();
  const handleSectionChange = (section: 'work' | 'still-images') => {
    if (section === 'work') {
      navigate('/#projects');
    } else {
      navigate('/');
    }
  };
  return (
    <Section>
      <Navigation onSectionChange={handleSectionChange} />
      <HideScrollbars />
      {/* Hero Image - Full Width */}
      <FullWidthMedia>
        <FullWidthImg src="/assets/DreamRide/HighresScreenshot00009.png" alt="DreamRide Hero" loading="eager" />
      </FullWidthMedia>

      {/* Project Title and Info */}
      <SectionHeader>
        <SectionTitle>DREAMRIDE</SectionTitle>
      </SectionHeader>
      <InfoRow>
        <InfoCol>
          <InfoTitle>CATEGORY</InfoTitle>
          <InfoText>
            CGI<br />
            Environment<br />
            Simulation<br />
            Animation
          </InfoText>
        </InfoCol>
        <InfoCol>
          <InfoTitle>PROJECT</InfoTitle>
          <InfoText>
            DreamRide is a cinematic CGI/VFX project exploring procedural environments, particle and vegetation simulations, and advanced animation techniques. The project showcases a journey through lush digital landscapes, blending technical artistry with creative storytelling.
          </InfoText>
        </InfoCol>
      </InfoRow>

      {/* Main Video - Contained */}
      <ContainedMedia>
        <ContainedVideo controls poster="/assets/DreamRide/HighresScreenshot00000.png">
          <source src={mainVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </ContainedVideo>
      </ContainedMedia>

      {/* DIGITAL ENVIRONMENT Section */}
      <SectionHeader>
        <SectionTitle>DIGITAL ENVIRONMENT</SectionTitle>
        <SectionSubtitle>animation, particles and vegetation simulations, special effects</SectionSubtitle>
      </SectionHeader>
      {/* Mix of contained and full-width for best visual rhythm */}
      <ContainedMedia>
        <ContainedImg src="/assets/DreamRide/HighresScreenshot00000.png" alt="Digital Env 1" loading="lazy" />
      </ContainedMedia>
      <FullWidthMedia>
        <FullWidthImg src="/assets/DreamRide/HighresScreenshot00001.png" alt="Digital Env 2" loading="lazy" />
      </FullWidthMedia>
      <ContainedMedia>
        <ContainedImg src="/assets/DreamRide/HighresScreenshot00002.png" alt="Digital Env 3" loading="lazy" />
      </ContainedMedia>
      <FullWidthMedia>
        <FullWidthImg src="/assets/DreamRide/HighresScreenshot00003.png" alt="Digital Env 4" loading="lazy" />
      </FullWidthMedia>
      <ContainedMedia>
        <ContainedImg src="/assets/DreamRide/HighresScreenshot00004.png" alt="Digital Env 5" loading="lazy" />
      </ContainedMedia>

      {/* Other Videos - Contained */}
      {otherVideos.map((vid, i) => (
        i % 2 === 0 ? (
          <ContainedMedia key={vid.src}>
            <ContainedVideo controls>
              <source src={vid.src} type="video/mp4" />
              Your browser does not support the video tag.
            </ContainedVideo>
          </ContainedMedia>
        ) : (
          <FullWidthMedia key={vid.src}>
            <FullWidthVideo controls>
              <source src={vid.src} type="video/mp4" />
              Your browser does not support the video tag.
            </FullWidthVideo>
          </FullWidthMedia>
        )
      ))}

      {/* SCREENSHOTS Section */}
      <SectionHeader>
        <SectionTitle>SCREENSHOTS</SectionTitle>
      </SectionHeader>
      <FullWidthMedia>
        <FullWidthImg src="/assets/DreamRide/HighresScreenshot00005.png" alt="Screenshot 1" loading="lazy" />
      </FullWidthMedia>
      <ContainedMedia>
        <ContainedImg src="/assets/DreamRide/HighresScreenshot00006.png" alt="Screenshot 2" loading="lazy" />
      </ContainedMedia>
      <FullWidthMedia>
        <FullWidthImg src="/assets/DreamRide/HighresScreenshot00007.png" alt="Screenshot 3" loading="lazy" />
      </FullWidthMedia>
      <ContainedMedia>
        <ContainedImg src="/assets/DreamRide/HighresScreenshot00008.png" alt="Screenshot 4" loading="lazy" />
      </ContainedMedia>
      <FullWidthMedia>
        <FullWidthImg src="/assets/DreamRide/HighresScreenshot00010.png" alt="Screenshot 5" loading="lazy" />
      </FullWidthMedia>
      <ContainedMedia>
        <ContainedImg src="/assets/DreamRide/HighresScreenshot00011.png" alt="Screenshot 6" loading="lazy" />
      </ContainedMedia>

      {/* CLAY RENDER Section */}
      <SectionHeader>
        <SectionTitle>CLAY RENDER</SectionTitle>
      </SectionHeader>
      <FullWidthMedia>
        <FullWidthImg src="/assets/DreamRide/HighresScreenshot00012.png" alt="Clay Render 1" loading="lazy" />
      </FullWidthMedia>
      <ContainedMedia>
        <ContainedImg src="/assets/DreamRide/HighresScreenshot00013.png" alt="Clay Render 2" loading="lazy" />
      </ContainedMedia>
      <FullWidthMedia>
        <FullWidthImg src="/assets/DreamRide/HighresScreenshot00014.png" alt="Clay Render 3" loading="lazy" />
      </FullWidthMedia>
      <ContainedMedia>
        <ContainedImg src="/assets/DreamRide/Screenshot (4).png" alt="Clay Render 4" loading="lazy" />
      </ContainedMedia>

      {/* Contact Section at the end */}
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
    </Section>
  );
};

export default DreamRide; 