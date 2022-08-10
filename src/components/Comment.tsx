import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'
import { useState } from 'react'

type PropsComment= {
  content: string;
  onDeleteComment: (comment: string) => void;
}

export function Comment({content, onDeleteComment}: PropsComment) {
  const [likeComment, setLikeComment] = useState(0)
function handleDeleteComment() {
  onDeleteComment(content)
}

function handleLikeComment() {
  // Acesso o valor mais atual
  setLikeComment((currentLikeComment) => {
    return currentLikeComment + 1
  })
}

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src='https://github.com/joaosam.png' />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>João Santos</strong>
              <time title='08 de Agosto às 15:00h' dateTime='2022-08-08 15:03:30'>Cerca de 1h atrás</time>
            </div>
            <button
              onClick={handleDeleteComment}
              title='Deletar comentário'>
            <Trash size={24}/>
            </button>
          </header>
          <p>{content}</p>
        </div>

        <footer>
        <button onClick={handleLikeComment}>
          <ThumbsUp size={20} />
          </button>
          <p>Curtir <span>{likeComment}</span></p>          
        </footer>
      </div>
    </div>
  )
}