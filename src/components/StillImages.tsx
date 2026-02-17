import React from "react";
import styled from "styled-components";
import Navigation from "./Navigation";

const SectionHeader = styled.div`
  background: #000;
  padding: 3.5rem 0 2.5rem 0;
  text-align: center;
`;
const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 900;
  letter-spacing: 2px;
  margin: 0 0 0.5rem 0;
  color: #fff;
`;
const SectionSubtitle = styled.div`
  font-size: 1.2rem;
  font-weight: 400;
  color: #e0e0e0;
`;
const ImagesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(420px, 1fr));
  gap: 0;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;
const StillImg = styled.img`
  width: 100%;
  max-width: 100%;
  height: auto;
  object-fit: cover;
  display: block;
  border-radius: 0;
  box-shadow: none;
  background: #111;
`;
const FullWidthImg = styled.img`
  width: 100%;
  max-width: 1200px;
  height: auto;
  object-fit: cover;
  display: block;
  border-radius: 0;
  box-shadow: none;
  background: #111;
  margin: 0 auto 2rem auto;
`;

// Organize your images under suitable sections
const moviesAndGames = [
  "/assets/DreamRide/HighresScreenshot00009.png",
  "/assets/DreamRide/HighresScreenshot00005.png",
  "/assets/DreamRide/HighresScreenshot00006.png",
  "/assets/DreamRide/HighresScreenshot00007.png",
  "/assets/DreamRide/HighresScreenshot00008.png",
  "/assets/DreamRide/HighresScreenshot00010.png",
  "/assets/DreamRide/HighresScreenshot00011.png",
];
const automotive = [
  "/assets/DreamRide/HighresScreenshot00001.png",
  "/assets/DreamRide/HighresScreenshot00002.png",
];
const productDesign = [
  "/assets/DreamRide/HighresScreenshot00003.png",
  "/assets/DreamRide/HighresScreenshot00004.png",
];
const advertising = [
  "/assets/DreamRide/HighresScreenshot00012.png",
  "/assets/DreamRide/HighresScreenshot00013.png",
];
const motionDesign = [
  "/assets/DreamRide/HighresScreenshot00014.png",
  "/assets/DreamRide/Screenshot (4).png",
];
const architecture: string[] = [];
const cartoons: string[] = [];

const StillImages: React.FC = () => {
  return (
    <div style={{ background: '#000', color: '#fff', minHeight: '100vh', width: '100%' }}>
      <Navigation onSectionChange={() => {}} />
      {/* Hero Section */}
      <SectionHeader>
        <SectionTitle>CASE STUDIES NOT ENOUGH?</SectionTitle>
        <SectionSubtitle>
          Then I have some still images for you.<br />
          Design, advertising, daily renders and short-term projects. All in one place. Scroll through and find your favorite.
        </SectionSubtitle>
      </SectionHeader>

      {/* MOVIES & GAMES */}
      <SectionHeader>
        <SectionTitle>MOVIES & GAMES</SectionTitle>
      </SectionHeader>
      {/* First image full width */}
      <FullWidthImg src={moviesAndGames[0]} alt="Movies & Games" loading="eager" />
      <ImagesGrid>
        {moviesAndGames.slice(1).map((img) => (
          <StillImg key={img} src={img} alt="Movies & Games" loading="lazy" />
        ))}
      </ImagesGrid>

      {/* AUTOMOTIVE */}
      {automotive.length > 0 && (
        <>
          <SectionHeader>
            <SectionTitle>AUTOMOTIVE</SectionTitle>
          </SectionHeader>
          <ImagesGrid>
            {automotive.map((img) => (
              <StillImg key={img} src={img} alt="Automotive" loading="lazy" />
            ))}
          </ImagesGrid>
        </>
      )}

      {/* PRODUCT DESIGN */}
      {productDesign.length > 0 && (
        <>
          <SectionHeader>
            <SectionTitle>PRODUCT DESIGN</SectionTitle>
          </SectionHeader>
          <ImagesGrid>
            {productDesign.map((img) => (
              <StillImg key={img} src={img} alt="Product Design" loading="lazy" />
            ))}
          </ImagesGrid>
        </>
      )}

      {/* ADVERTISING */}
      {advertising.length > 0 && (
        <>
          <SectionHeader>
            <SectionTitle>ADVERTISING</SectionTitle>
          </SectionHeader>
          <ImagesGrid>
            {advertising.map((img) => (
              <StillImg key={img} src={img} alt="Advertising" loading="lazy" />
            ))}
          </ImagesGrid>
        </>
      )}

      {/* MOTION DESIGN */}
      {motionDesign.length > 0 && (
        <>
          <SectionHeader>
            <SectionTitle>MOTION DESIGN</SectionTitle>
          </SectionHeader>
          <ImagesGrid>
            {motionDesign.map((img) => (
              <StillImg key={img} src={img} alt="Motion Design" loading="lazy" />
            ))}
          </ImagesGrid>
        </>
      )}

      {/* ARCHITECTURE */}
      {architecture.length > 0 && (
        <>
          <SectionHeader>
            <SectionTitle>ARCHITECTURE</SectionTitle>
          </SectionHeader>
          <ImagesGrid>
            {architecture.map((img) => (
              <StillImg key={img} src={img} alt="Architecture" loading="lazy" />
            ))}
          </ImagesGrid>
        </>
      )}

      {/* CARTOONS */}
      {cartoons.length > 0 && (
        <>
          <SectionHeader>
            <SectionTitle>CARTOONS</SectionTitle>
          </SectionHeader>
          <ImagesGrid>
            {cartoons.map((img) => (
              <StillImg key={img} src={img} alt="Cartoons" loading="lazy" />
            ))}
          </ImagesGrid>
        </>
      )}
    </div>
  );
};

export default StillImages; 