import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR'
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';

import { Avatar } from '../AvatarComponents/Avatar'
import { Comment } from '../Comment/Comment'
import style from './Post.module.css'

interface Author {
  name: string;
  role: string;
  avatarUrl: string;
}

interface Content {
  type: 'paragraph' | 'Link';
  content: string;
}

export interface PostType {
  id: number;
  author: Author;
  publishedAt: Date;
  content: Content[];
}

interface PostProps {
  post: PostType;
}

export function Post({ post }: PostProps) {
  const [comments, setComments] = useState([
    'Very nice post, huh?'
  ])

  const [newCommentText, setNewCommentText] = useState('')

  const publisheDateFormatted = format(post.publishedAt, "d 'de' LLLL 'as' HH:mm'h'", {
    locale: ptBR, 
  })
  
  const publisheDateRelativeToNow = formatDistanceToNow(post.publishedAt, {
    locale: ptBR, 
    addSuffix: true,
  })

  function handleCreateNewComment(event: FormEvent) {
    event.preventDefault()
    setComments([ ...comments, newCommentText ]);
    setNewCommentText('');
  }

  function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('');
    setNewCommentText(event.target.value);
  }

  function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('Este campo é obrigatorio!');
  }

  function deleteComment(commentToDelete: string) {
    const commentsWithoutDeletedOne = comments.filter(comment => {
      return comment != commentToDelete
    })
    setComments(commentsWithoutDeletedOne);
  }

  const isNewCommentEmpty = newCommentText.length == 0;

  return(
    <article className={style.post}>
      <header>
        <div className={style.author}>
            <Avatar hasBorder={true} src={post.author.avatarUrl}/>
            <div className={style.authorInfo}>
              <strong>{post.author.name}</strong>
              <span>{post.author.role}</span>
            </div>
          </div>
        <time title={publisheDateFormatted} dateTime={post.publishedAt.toISOString()}>
          {publisheDateRelativeToNow}
        </time>
      </header>

      <div className={style.content}>
        {post.content.map(line => {
          if (line.type === 'paragraph') {
            console.log('Chegoy')
            return <p key={line.content}>{line.content}</p>;
          } else if (line.type === 'Link') {
            return <p key={line.content}><a href="">{line.content}</a></p>;
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={style.commentForm}>
        <strong>
          Deixe seu feedback
        </strong>
        <textarea 
          name='comment'
          placeholder='Deixe um comentario...'
          value={newCommentText}
          onChange={handleNewCommentChange}
          onInvalid={handleNewCommentInvalid}
          required
        />
        <footer>
          <button type='submit' disabled={isNewCommentEmpty}>Publicar</button>
        </footer>
      </form>
      
      <div className={style.commentList}>
        {comments.map(comment => {
          return <Comment key={comment} content={comment} onDeleteComment={deleteComment} />
        })}
      </div>
    </article>
  )
}