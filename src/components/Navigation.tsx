// Navigation.tsx

import React, { useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";

const NavContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  padding: 20px;
`;

const Logo = styled.div`
  position: fixed;
  top: 20px;
  left: 20px;
  z-index: 1001;
  cursor: pointer;
  font-size: 24px;
  font-weight: bold;
  color: white;
  font-family: 'Helvetica Neue', sans-serif;
  letter-spacing: 2px;
`;

const MenuButton = styled.button`
  position: fixed;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  z-index: 1001;
  padding: 10px;

  &:hover {
    opacity: 0.8;
  }
`;

const MenuOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.95);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const MenuItem = styled(motion.div)`
  color: white;
  font-size: 48px;
  margin: 20px 0;
  text-decoration: none;
  cursor: pointer;
  font-family: 'Helvetica Neue', sans-serif;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  position: relative;
  background: none;
  border: none;
  padding: 0;
  transition: color 0.2s;

  &:hover {
    color: #ffb300;
    opacity: 1;
    text-decoration: none;
  }
`;

interface NavigationProps {
  onSectionChange: (section: 'work' | 'still-images') => void;
}

const Navigation: React.FC<NavigationProps> = ({ onSectionChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const menuVariants = {
    closed: { opacity: 0, transition: { duration: 0.3 } },
    open: { opacity: 1, transition: { duration: 0.3 } },
  };

  const menuItemVariants = {
    closed: { opacity: 0, y: 20, transition: { duration: 0.3 } },
    open: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  const handleMenuItemClick = (section: string) => {
    setIsOpen(false);
    if (section === "contact") {
      navigate("/contact");
    } else if (section === "work" || section === "still-images") {
      onSectionChange(section);
    }
  };

  return (
    <NavContainer>
      <Logo>KARMAFX</Logo>
      <MenuButton onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <CloseIcon style={{ fontSize: 32 }} /> : <MenuIcon style={{ fontSize: 32 }} />}
      </MenuButton>

      <AnimatePresence>
        {isOpen && (
          <MenuOverlay initial="closed" animate="open" exit="closed" variants={menuVariants}>
            <MenuItem
              variants={menuItemVariants}
              transition={{ delay: 0.1 }}
              whileTap={{ scale: 0.95 }}
              onTap={() => handleMenuItemClick("work")}
            >
              ANIMATIONS
            </MenuItem>
            <MenuItem
              variants={menuItemVariants}
              transition={{ delay: 0.2 }}
              whileTap={{ scale: 0.95 }}
              onTap={() => handleMenuItemClick("still-images")}
            >
              STILL IMAGES
            </MenuItem>
            <MenuItem
              variants={menuItemVariants}
              transition={{ delay: 0.3 }}
              whileTap={{ scale: 0.95 }}
              onTap={() => handleMenuItemClick("contact")}
            >
              CONTACT
            </MenuItem>
          </MenuOverlay>
        )}
      </AnimatePresence>
    </NavContainer>
  );
};

export default Navigation;
