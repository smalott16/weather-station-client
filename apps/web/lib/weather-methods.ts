const weatherMethods = () => {
  const weatherUrl = process.env.NEXT_PUBLIC_WEATHER_URL;

  const getWeather = async () => {
    const response = await fetch(weatherUrl ?? '');
    const weather = await response.json();
    return weather;
  }

  return { getWeather}
}

export default weatherMethods;