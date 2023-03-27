import React, { useState, useEffect } from 'react';

function api() {
  const [memes, setMemes] = useState([]);

  useEffect(() => {
    async function fetchMemes() {
      const response = await fetch('https://api.imgflip.com/get_memes');
      const data = await response.json();
      setMemes(data.data.memes);
    }

    fetchMemes();
  }, []);
}


export default api;
