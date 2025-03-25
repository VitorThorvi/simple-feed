import styles from './Header.module.css';
import simpleFeedLogo from '../assets/simple-feed.svg'

export function Header() {
  return (
      <header className={styles.header}>
        <img src={simpleFeedLogo} alt="Ignite"/>
        <h1>Simple Feed</h1>
</header>
)
  ;
}