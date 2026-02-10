import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { AppBar, Toolbar, IconButton, Drawer, List, ListItemButton, ListItemText, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const StyledAppBar = styled(AppBar)`
  background-color: transparent !important;
  box-shadow: none !important;
  backdrop-filter: none !important;
  border: none !important
`;

const MenuContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const Logo = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  transition: color 0.3s ease;

  &:hover {
    color: #f50057;
  }
`;

const DesktopMenu = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const MenuLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1.1rem;
  position: relative;
  padding: 0.5rem 0;
  
  &:after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #f50057;
    transition: width 0.3s ease;
  }

  &:hover:after {
    width: 100%;
  }
`;

const StyledDrawer = styled(Drawer)`
  .MuiDrawer-paper {
    background-color: rgba(0, 0, 0, 0.4); /* transparent background */
    backdrop-filter: blur(12px);         /* blur for effect */
    color: white;
    width: 250px;
    border-left: 1px solid rgba(255, 255, 255, 0.1);
  }
`;

const DrawerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid #333;
`;

const DrawerTitle = styled(Typography)`
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
`;

const StyledListItem = styled(ListItemButton)`
  &:hover {
    background-color: #2a2a2a;
  }
`;

const StyledListItemText = styled(ListItemText)`
  .MuiListItemText-primary {
    color: white;
    font-size: 1.1rem;
  }
`;

interface MenuItem {
  path: string;
  label: string;
}

const MenuBar: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate();

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  const handleMenuItemClick = (path: string) => {
    handleDrawerClose();
    navigate(path);
  };

  const menuItems: MenuItem[] = [
    { path: '/animations', label: 'ANIMATIONS' },
    { path: '/still-images', label: 'STILL IMAGES' },
    { path: '/contact', label: 'CONTACT' },
  ];

  return (
    <StyledAppBar position="fixed">
      <Toolbar>
        <MenuContainer>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Logo to="/">
              KARMAFX
            </Logo>
          </motion.div>

          <DesktopMenu>
            {menuItems.map((item, index) => (
              <motion.div
                key={item.path}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <MenuLink to={item.path}>{item.label}</MenuLink>
              </motion.div>
            ))}
          </DesktopMenu>

          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerOpen}
            sx={{ display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        </MenuContainer>
      </Toolbar>

      <StyledDrawer
        anchor="right"
        open={drawerOpen}
        onClose={handleDrawerClose}
        PaperProps={{
          sx: {
            backgroundColor: '#1a1a1a',
          },
        }}
      >
        <DrawerHeader>
          <DrawerTitle>Menu</DrawerTitle>
          <IconButton onClick={handleDrawerClose} sx={{ color: 'white' }}>
            <CloseIcon />
          </IconButton>
        </DrawerHeader>
        <List>
          {menuItems.map((item) => (
            <StyledListItem
              key={item.path}
              onClick={() => handleMenuItemClick(item.path)}
            >
              <StyledListItemText primary={item.label} />
            </StyledListItem>
          ))}
        </List>
      </StyledDrawer>
    </StyledAppBar>
  );
};

export default MenuBar; 