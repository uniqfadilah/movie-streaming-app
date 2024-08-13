import { useCallback, useEffect, useState } from 'react';

const useLikedVideos = () => {
  const [likedVideos, setLikedVideos] = useState<any[]>(() => {
    const saved = localStorage.getItem('likedVideos');
    return saved ? JSON.parse(saved) : [];
  });

  const handleStorageChange = (event: StorageEvent) => {
    if (event.key === 'likedVideos') {
      setLikedVideos(JSON.parse(event?.newValue as any));
    }
  };
  useEffect(() => {
    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  useEffect(() => {
    localStorage.setItem('likedVideos', JSON.stringify(likedVideos));
  }, [likedVideos]);

  const addLikedVideo = useCallback((video: any) => {
    setLikedVideos((prev) => [...prev, video]);
  }, []);

  const removeLikedVideo = useCallback((id: string) => {
    setLikedVideos((prev) => prev.filter((video) => video.id !== id));
  }, []);

  const isLiked = useCallback(
    (id: string) => {
      return likedVideos.some((video) => video.id === id);
    },
    [likedVideos]
  );

  return {
    likedVideos,
    addLikedVideo,
    removeLikedVideo,
    isLiked,
  };
};

export default useLikedVideos;
