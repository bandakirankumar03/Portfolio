import React from 'react';
import { useParams } from 'react-router-dom';

const dreamRideImages = [
  { src: '/assets/DreamRide/Screenshot (4).png', title: 'Screenshot 4' },
  { src: '/assets/DreamRide/HighresScreenshot00014.png', title: 'Highres 14' },
  { src: '/assets/DreamRide/HighresScreenshot00013.png', title: 'Highres 13' },
  { src: '/assets/DreamRide/HighresScreenshot00012.png', title: 'Highres 12' },
  { src: '/assets/DreamRide/HighresScreenshot00011.png', title: 'Highres 11' },
  { src: '/assets/DreamRide/HighresScreenshot00010.png', title: 'Highres 10' },
  { src: '/assets/DreamRide/HighresScreenshot00009.png', title: 'Highres 09' },
  { src: '/assets/DreamRide/HighresScreenshot00008.png', title: 'Highres 08' },
  { src: '/assets/DreamRide/HighresScreenshot00007.png', title: 'Highres 07' },
  { src: '/assets/DreamRide/HighresScreenshot00006.png', title: 'Highres 06' },
  { src: '/assets/DreamRide/HighresScreenshot00005.png', title: 'Highres 05' },
  { src: '/assets/DreamRide/HighresScreenshot00004.png', title: 'Highres 04' },
  { src: '/assets/DreamRide/HighresScreenshot00003.png', title: 'Highres 03' },
  { src: '/assets/DreamRide/HighresScreenshot00002.png', title: 'Highres 02' },
  { src: '/assets/DreamRide/HighresScreenshot00001.png', title: 'Highres 01' },
  { src: '/assets/DreamRide/HighresScreenshot00000.png', title: 'Highres 00' },
];

const dreamRideVideos = [
  { src: '/assets/DreamRide/videos/Misty Rails Main.mp4', title: 'Misty Rails Main', main: true },
  { src: '/assets/DreamRide/videos/total_project.mp4', title: 'Total Project' },
  { src: '/assets/DreamRide/videos/pcg_train.mp4', title: 'PCG Train' },
  { src: '/assets/DreamRide/videos/pcg_track.mp4', title: 'PCG Track' },
  { src: '/assets/DreamRide/videos/ai_meshy.mp4', title: 'AI Meshy' },
];

const heroImage = dreamRideImages[1].src;
const projectTitle = 'TheDreamRide';
const projectDescription = `TheDreamRide is a cinematic CGI/VFX project showcasing high-resolution environments, dynamic lighting, and photorealistic effects. Explore the gallery below for a visual journey through the project scenes.`;

const ProjectDetail: React.FC = () => {
  const { slug } = useParams();

  if (slug !== 'thedreamride') {
    return (
      <div style={{ padding: '4rem', color: 'white', background: '#000' }}>
        <h1>{slug?.replace(/-/g, ' ')}</h1>
        <p>This is the detail page for {slug}</p>
      </div>
    );
  }

  return (
    <div style={{ background: '#181818', color: '#fff', minHeight: '100vh' }}>
      {/* Main Video Section */}
      <div style={{ width: '100%', margin: '0 auto 2.5rem auto', overflow: 'hidden', background: '#181818', boxShadow: '0 4px 24px rgba(0,0,0,0.4)' }}>
        <video
          src={dreamRideVideos[0].src}
          controls
          style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover', background: '#000' }}
          poster={heroImage}
        >
          Your browser does not support the video tag.
        </video>
      </div>
      {/* Title & Description */}
      <div style={{ maxWidth: 900, margin: '3rem auto 2rem auto', padding: '0 1rem', textAlign: 'center' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 800, letterSpacing: 2, marginBottom: '1rem', textTransform: 'uppercase' }}>{projectTitle}</h1>
        <p style={{ fontSize: '1.3rem', fontWeight: 300, color: '#ccc', marginBottom: '2.5rem' }}>{projectDescription}</p>
      </div>
      {/* Screenshots Section */}
      <div style={{ textAlign: 'center', fontWeight: 900, fontSize: '2.5rem', letterSpacing: 2, margin: '4rem 0 2.5rem 0', textTransform: 'uppercase' }}>
        Screenshots
      </div>
      <div style={{ maxWidth: 1400, margin: '0 auto', padding: '0 1rem 4rem 1rem' }}>
        {dreamRideImages.map((img, idx) => (
          <div key={img.src} style={{ width: '100%', margin: '0 auto 2.5rem auto', overflow: 'hidden', background: '#181818', boxShadow: '0 4px 24px rgba(0,0,0,0.4)' }}>
            <img src={img.src} alt={img.title} style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }} />
          </div>
        ))}
      </div>
      {/* Digital Environment Example Section */}
      <div style={{ textAlign: 'center', fontWeight: 900, fontSize: '2.5rem', letterSpacing: 2, margin: '4rem 0 1.5rem 0', textTransform: 'uppercase' }}>
        Digital Environment
      </div>
      <div style={{ textAlign: 'center', color: '#ccc', fontSize: '1.2rem', marginBottom: '2.5rem' }}>
        animation, particles and vegetation simulations, special effects
      </div>
      {/* Example: reuse some images for this section, or add your own grouping logic */}
      <div style={{ maxWidth: 1400, margin: '0 auto', padding: '0 1rem 4rem 1rem' }}>
        {dreamRideImages.slice(0, 2).map((img, idx) => (
          <div key={img.src + 'env'} style={{ width: '100%', margin: '0 auto 2.5rem auto', overflow: 'hidden', background: '#181818', boxShadow: '0 4px 24px rgba(0,0,0,0.4)' }}>
            <img src={img.src} alt={img.title} style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }} />
          </div>
        ))}
      </div>
      {/* Other Videos */}
      {dreamRideVideos.slice(1).map((vid) => (
        <div key={vid.src} style={{ width: '100%', margin: '4rem auto 2.5rem auto', overflow: 'hidden', background: '#181818', boxShadow: '0 4px 24px rgba(0,0,0,0.4)' }}>
          <div style={{ textAlign: 'center', fontWeight: 900, fontSize: '2.5rem', letterSpacing: 2, margin: '2.5rem 0 1.5rem 0', textTransform: 'uppercase' }}>
            {vid.title}
          </div>
          <video
            src={vid.src}
            controls
            style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover', background: '#000' }}
          >
            Your browser does not support the video tag.
          </video>
        </div>
      ))}
    </div>
  );
};

export default ProjectDetail;
