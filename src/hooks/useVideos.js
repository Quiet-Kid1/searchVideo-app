import React, { useState, useEffect } from 'react';
import youtube from '../apis/Youtube';

const KEY = 'AIzaSyCPyFKW - jkxg1BYvZnBpaX3Q52nROdFVHo';
const useVideos = defaultSearchTerm => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    search(defaultSearchTerm);
  }, []);

  const search = async term => {
    const response = await youtube.get('/search', {
      params: {
        q: term,
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY,
      },
    });

    setVideos(response.data.items);
  };

  return [videos, search];
};

export default useVideos;
