const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
    category
  )}&limit=10&api_key=4RKX1dm0OdA29rNPJHyZPgMZc2NT44Od`;
  const resp = await fetch(url);
  const { data } = await resp.json();

  return data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url,
    };
  });
};

export default getGifs;
