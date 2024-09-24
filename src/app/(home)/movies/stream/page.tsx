'use client'

import { useEffect, useState } from "react";

export default function StreamPage() {
    const [videoUrl, setVideoUrl] = useState<string | null>(null);
  
    useEffect(() => {
      // Configura el URL del backend
      const fetchVideo = async () => {
        const url = 'http://localhost:5000/stream/';
        setVideoUrl(url);
      };
  
      fetchVideo();
    }, []);
  
    return (
      <div className="flex justify-center items-center mt-24">
     
        {videoUrl && (
          <video
   
            controls
            width="1000"
            src={videoUrl}
            style={{ border: '1px solid black' }}
          >
            Tu navegador no soporta la etiqueta de video.
          </video>
        )}
      </div>
    );
  };