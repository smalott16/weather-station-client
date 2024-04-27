import styles from "./page.module.css";
import weatherMethods from '../lib/weather-methods'
const { getWeather } = weatherMethods()

const Page = async () => {
  const weather = await getWeather()

  return (
    <main className={styles.main}>
      {JSON.stringify(weather)}
    </main>
  );
}

export default Page