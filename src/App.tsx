import {Post, PostType} from "./components/Post.tsx";
import {Header} from "./components/Header.tsx";
import {Sidebar} from "./components/Sidebar.tsx";
import './global.css'
import styles from './App.module.css';

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/VitorThorvi.png',
      name: '1st authorName',
      role: '1st authorRole'
    },
    content: [
      { type: 'paragraph', content: 'Hello guys!'},
      { type: 'paragraph', content: 'lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
      {type: 'link', content: 'lorem.link/ipsum'}
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
      { type: 'paragraph', content: 'Hello guys! 2nd post on the feed'},
      { type: 'paragraph', content: 'lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
      {type: 'link', content: 'lorem.link/ipsum2'}
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
                  post={post}
                />
              )
            })}
          </main>
        </div>
      </div>
  )
}

