const getGifs = async (category) => {
  const apiKey = 'FlSCotZieYqma47E9x94yA3WmFBRHgy6';
  const limit = 10;
  const endpoint = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=${limit}&api_key=${apiKey}`;

  const resp = await fetch(endpoint);
  const { data } = await resp.json();

  const gifs = data.map(img => ({
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url
  }));
  return gifs;
}

export default getGifs;