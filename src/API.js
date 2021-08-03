const apiSettings = {
  fetchGeocode: async (location) => {
    const { lat, lng } = location;
    const endpoint = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}&localityLanguage=en`;
    return await (await fetch(endpoint)).json();
  },
};

export default apiSettings;
