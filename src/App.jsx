import {Post} from "./components/Post.jsx";
import {Header} from "./components/Header.jsx";
import {Sidebar} from "./components/Sidebar.jsx";
import './global.css'
import styles from './App.module.css';
// JSX = Javascript + XML
// arquivo js que contém HTML dentro

export function App() {
  return (
      <div>
        <Header/>

        <div className={styles.wrapper}>
          <Sidebar/>
          <main>
            <Post
                author="lorem"
                content="lorem ipsum"
            />
            <Post
                author="lorem 2"
                content="lorem ipsum 2"
            />
          </main>
        </div>

      </div>
  )
}

