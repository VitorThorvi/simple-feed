import styles from './Comment.module.css';
import {ThumbsUp, Trash} from "phosphor-react";
import {Avatar} from "./Avatar.jsx";

export function Comment() {
  return (
      <div className={styles.comment}>
        <Avatar hasBorder={false} className={styles.avatar} src="https://github.com/VitorThorvi.png" alt="" />
        <div className={styles.commentBox}>
          <div className={styles.commentContent}>
            <header>
              <div className={styles.authorAndTime}>
                <strong>Author Name</strong>
                <time title={"21 de Março às 8:13h"} dateTime={"2025-03-21 08:13:00"}>1h atrás</time>
              </div>
              <button title='Deletar comentário'>
                <Trash size={24} />
              </button>
            </header>
            <p>Congrats</p>
          </div>
          <footer>
            <button>
              <ThumbsUp size={20} />
              Claps <span>20</span>
            </button>
          </footer>
        </div>
      </div>
  );
}