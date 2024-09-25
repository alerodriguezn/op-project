"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

export default function StreamPage() {
  const searchParams = useSearchParams();

  const url = searchParams.get("url")!;

  const blobName = url.split("/").pop();


  const [videoUrl, setVideoUrl] = useState<string | null>(null);

  useEffect(() => {
    // Configura el URL del backend
    const fetchVideo = async () => {
      const url = `http://51.8.254.60/stream/${blobName}`;
      setVideoUrl(url);
    };

    fetchVideo();
  }, [blobName]);

  return (
    <div className="flex justify-center items-center mt-24">
      {videoUrl && (
        <video
          controls
          width="1000"
          src={videoUrl}
          style={{ border: "1px solid black" }}
        >
          Tu navegador no soporta la etiqueta de video.
        </video>
      )}
    </div>
  );
}
