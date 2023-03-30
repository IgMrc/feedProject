import { Post, PostType } from "./components/Post/Post";
import { Header } from "./components/Header/Header";

import "./global.css";
import styles from './App.module.css';
import { Sidebar } from "./components/Sidebar/Sidebar";

const post: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/IgMrc.png',
      name: 'Igor Morais Costa',
      role: 'Analista de Sistemas'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋', },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'Link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2022-05-03 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/IgMrc.png',
      name: 'Pessoa',
      role: 'Profissão'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'Link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2022-05-10 20:00:00'),
  },
];

export function App() {
  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          {post.map(post => {
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


