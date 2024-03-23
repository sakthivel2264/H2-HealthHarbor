import React from 'react';

const MentalHealth = () => {
  // Sample video data (replace with your actual data)
  const videos = [
    { id: 1, title: 'Video 1', url: 'https://www.youtube.com/embed/DxIDKZHW3-E?si=1aL_lcrgdqJdd0n6' },
    { id: 2, title: 'Video 2', url: 'https://www.youtube.com/embed/rkZl2gsLUp4?si=P3OUs-MCvuG1yAYW' },
    { id: 3, title: 'Video 3', url: 'https://www.youtube.com/embed/TLKxdTmk-zc?si=xlaWML-U3bu6bTz_' },
    { id: 4, title: 'Video 4', url: 'https://www.youtube.com/embed/YdMCL9_UTE4?si=_pxvAEulcy5saEmy' },
    { id: 5, title: 'Video 5', url: 'https://www.youtube.com/embed/8jPQjjsBbIc?si=XXUGoI5o_rQBs1J3' },
    { id: 6, title: 'Video 6', url: 'https://www.youtube.com/embed/OyQ8KaTbjnw?si=jueCpn-K1uf-Kl4U' }
    // Add more video objects as needed
  ];

  return (
    <div  className='men-div'>
      <h1 className='men-health'>MentalHealth</h1>
      <div className="video-collection">
        {videos.map(video => (
          <div key={video.id} className="video-item">
            <h3>{video.title}</h3>
            <iframe
              width="560"
              height="315"
              src={video.url}
              title={video.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MentalHealth;
