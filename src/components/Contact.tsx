import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Container, Typography, Grid, IconButton } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faGithub, 
  faLinkedin, 
  faVimeo,  
  faInstagram,
  faBehance
} from '@fortawesome/free-brands-svg-icons';

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

const Contact = () => {
  return (
    <ContactSection>
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
              <motion.div whileHover={{ scale: 1.1 }}>
                  <SocialLink href="https://www.behance.net/kirankumar_B?fbclid=PAZXh0bgNhZW0CMTEAAaeeWbWT5cbRJtYRa-NtSgTSe61bILU77F3S9RkFWtfwLGcDRCGtFwhKBhrdag_aem_WANFSm58yrIoTH1ebXNWag" target="_blank" rel="noopener noreferrer">
                    <StyledIconButton>
                      <FontAwesomeIcon icon={faBehance} />
                    </StyledIconButton>
                  </SocialLink>
                </motion.div>
                <motion.div whileHover={{ scale: 1.1 }}>
                  <SocialLink href="https://github.com" target="_blank" rel="noopener noreferrer">
                    <StyledIconButton>
                      <FontAwesomeIcon icon={faGithub} />
                    </StyledIconButton>
                  </SocialLink>
                </motion.div>
                <motion.div whileHover={{ scale: 1.1 }}>
                  <SocialLink href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <StyledIconButton>
                      <FontAwesomeIcon icon={faLinkedin} />
                    </StyledIconButton>
                  </SocialLink>
                </motion.div>
                <motion.div whileHover={{ scale: 1.1 }}>
                  <SocialLink href="https://vimeo.com" target="_blank" rel="noopener noreferrer">
                    <StyledIconButton>
                      <FontAwesomeIcon icon={faVimeo} />
                    </StyledIconButton>
                  </SocialLink>
                </motion.div>
                <motion.div whileHover={{ scale: 1.1 }}>
                  <SocialLink href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <StyledIconButton>
                      <FontAwesomeIcon icon={faInstagram} />
                    </StyledIconButton>
                  </SocialLink>
                </motion.div>
              </SocialLinks>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </ContactSection>
  );
};

export default Contact; 