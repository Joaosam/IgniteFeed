import './styles.css'
import styles from './App.module.css'

import { Header } from "./components/Header"
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/joaosam.png',
      name: 'João Santos',
      role: 'Web Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galera 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2022-08-05 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://media-exp1.licdn.com/dms/image/C4D03AQFSbwxDaYqDRw/profile-displayphoto-shrink_200_200/0/1649775990669?e=1665619200&v=beta&t=awbtsoNpxyAn5ipCtktKb1T6YhPwo4AqHXUAdaElw1o',
      name: 'Vítor Santos',
      role: 'Business Analyst Sr'
    },
    content: [
      { type: 'paragraph', content: 'Olá Pessoal! 👋' },
      { type: 'paragraph', content: 'Gostaria de compartilhar que estou começando em um novo cargo de Business Analyst Sr.' },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2022-08-09 10:00:00'),
  },
];

function App() {

  return (
    <div className="App">
      <Header />

      <div className={styles.wrapper}>
        <aside>
          <Sidebar />
        </aside>
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

export default App
