import { ThumbsUp, Trash } from 'phosphor-react'
import { useState } from 'react'
import { Avatar } from '../AvatarComponents/Avatar'
import style from './Comment.module.css'

interface CommentProps {
  content: string;
  onDeleteComment: (comment: string) => void;
}

export function Comment({ content, onDeleteComment }: CommentProps) {
  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment() {
    onDeleteComment(content)
  }

  function handleLikeComment() {
    setLikeCount((state) => {
      return state + 1
    });
  }

  return (
    <div className={style.comment}>
      <Avatar hasBorder={false} src="https://github.com/IgMrc.png" alt="" />
      <div className={style.commentBox}>
        <div className={style.commentContent}>
          <header>
            <div className={style.authorAndTime}>
              <strong>Igor Morais Costa</strong>
              <time title='19 de Janeiro as 09:53h' dateTime="2023-01-19 09-53-01">Cerca de 1h atrás</time>
            </div>
            <button onClick={handleDeleteComment} title='Deletar comentário'>
              <Trash size={20}/>
            </button>
          </header>    
          <p>{content}</p>    
        </div>
        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp/>
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}