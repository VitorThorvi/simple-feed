import {formatDistanceToNow} from "date-fns/formatDistanceToNow";
import ptBR from "date-fns/locale/pt-BR";
import styles from './Post.module.css';
import {Comment} from "./Comment.jsx";
import {Avatar} from "./Avatar.jsx";
import {useState} from "react";


export function Post({author, publishedAt, content}) {

  // publish date
  const publishedDateFormatted = new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: 'long',
    hour: '2-digit',
    minute: '2-digit'
  }).format(publishedAt);

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  });

  // comments
  const [comments, setComments] = useState([
    'very nice post'
  ]);

  const [newCommentText, setNewCommentText] = useState('');

  function handleCreateNewComment() {
    event.preventDefault();
    setComments([...comments, newCommentText]);
    setNewCommentText('');
  }


  function handleNewCommentChange() {
    event.target.setCustomValidity('');
    setNewCommentText(event.target.value);
  }

  function deleteComment(comment) {
    setComments(comments.filter(c => c !== comment));
  }

  function handleNewCommentInvalid() {
    event.target.setCustomValidity('Esse campo é obrigatório')
  }

  const isTextInputEmpty = newCommentText.length === 0;

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar
            className={styles.avatar}
            src={author.avatarUrl}/>
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>{publishedDateRelativeToNow}</time>
      </header>
      <div className={styles.content}>
        {content.map(line => {
          if (line.type === 'paragraph') {
            return <p key={line.content}>{line.content}</p>
          } else if (line.type === 'link') {
            return <p key={line.content}><a href='#'>{line.content}</a></p>
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu comentário</strong>
        <textarea
          name="comment"
          placeholder="Comente aqui"
          value={newCommentText}
          onChange={handleNewCommentChange}
          onInvalid={handleNewCommentInvalid}
          required
        />
        <footer>
          <button type="submit" disabled={isTextInputEmpty}>Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map(comment => {
          return (
            <Comment
              key={comment}
              content={comment}
              deleteComment={deleteComment}
            />
          )
        })}
      </div>
    </article>
  );
}