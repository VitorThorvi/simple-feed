import styles from './Comment.module.css';
import {ThumbsUp, Trash} from "phosphor-react";
import {Avatar} from "./Avatar.tsx";
import {useState} from "react";

interface CommentProps {
  content: string;
  deleteComment: (comment: string) => void;
}

export function Comment({content, deleteComment: onDeleteComment}: CommentProps) {
  function handleDeleteComment() {
    onDeleteComment(content);
  }

  const [likeCount, setLikeCount] = useState(0);

  function handleLikeComment() {
    setLikeCount((state) => state + 1);
  }

  return (
    <div className={styles.comment}>
      <Avatar
        hasBorder={false}
        src="https://github.com/VitorThorvi.png"
        alt="asd"
      />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Author Name</strong>
              {/*todo add relative time to comment*/}
              {/*<time title={"21 de Março às 8:13h"} dateTime={"2025-03-21 08:13:00"}>1h atrás</time>*/}
            </div>
            <button onClick={handleDeleteComment} title='Deletar comentário'>
              <Trash size={24}/>
            </button>
          </header>
          <p>
            {content}
          </p>
        </div>
        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp size={20}/>
            Claps <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}