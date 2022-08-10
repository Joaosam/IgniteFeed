import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'
import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'


type Author = {
  name: string;
  role: string;
  avatarUrl: string;
}

type Content = {
  type: string;
  content: string
}

type PostProps = {
  author: Author;
  publishedAt: Date;
  content: Content[];
}

export function Post({ author, content, publishedAt }: PostProps) {
  const [comments, setComments] = useState([`Que legal ${author.name}. Parabéns!!`])
  const [newComment, setNewComment] = useState('')

  const publishedDateFormat = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  })
  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  })

  function handleCreateComment(event: FormEvent) {
    event.preventDefault()
    setComments([...comments, newComment])
    setNewComment('')
  }
  
  function handleNewComment(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('')
    setNewComment(event.target.value)
  }

  function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('Esse campo é obrigatório!')
  }

  function deleteComment(deleteComment: string) {
    const newCommentListDelete = comments.filter(comment => {
      return deleteComment !== comment
    })
    setComments(newCommentListDelete)
  }

  const isNewCommentEmpty = newComment.length == 0

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={publishedDateFormat} dateTime={publishedAt.toISOString()}>{publishedDateRelativeToNow}</time>
      </header>

      <div className={styles.content}>
        {content.map(item => {
          if (item.type === 'paragraph') {
            return <p key={item.content}>{item.content}</p>
          } else if (item.type === 'link') {
            return <p key={item.content}><a href="#">{item.content}</a></p>
          }
        })}
      </div>

      <form onSubmit={handleCreateComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea
          onChange={handleNewComment}
          value={newComment}
          placeholder='Deixe um comentário'
          onInvalid={handleNewCommentInvalid}
          required
          />
        <button type='submit' disabled={isNewCommentEmpty}>Publicar</button>
      </form>

      <div className={styles.commentList}>
        {comments.map(comment => {
          return (
            <Comment
              onDeleteComment={deleteComment}
              key={comment}
              content={comment}/>
          )
          })}
      </div>
    </article>
  )
}