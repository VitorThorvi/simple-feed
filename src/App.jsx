import {Post} from "./components/Post.jsx";
import {Header} from "./components/Header.jsx";
import {Sidebar} from "./components/Sidebar.jsx";
import './global.css'
import styles from './App.module.css';
// JSX = Javascript + XML
// arquivo js que contém HTML dentro

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/VitorThorvi.png',
      name: '1st authorName',
      role: '1st authorRole'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: 'jane.design/doctorcare'}
    ],
    publishedAt: new Date('2025-03-20 08:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/zhyncs.png',
      name: '2nd authorName',
      role: '2nd authorRole'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: 'jane.design/doctorcare'}
    ],
    publishedAt: new Date('2025-03-21 12:00:00')
  }
];
export function App() {
  return (
      <div>
        <Header/>
        <div className={styles.wrapper}>
          <Sidebar/>
          <main>
            {posts.map(post => {
              return (
                <Post
                  key={post.id}
                  author={post.author}
                  content={post.content}
                  publishedAt={post.publishedAt}
                />
              )
            })}
          </main>
        </div>
      </div>
  )
}

