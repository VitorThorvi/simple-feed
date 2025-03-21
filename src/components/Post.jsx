import styles from './Post.module.css';
import {Comment} from "./Comment.jsx";
import {Avatar} from "./Avatar.jsx";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar
            className={styles.avatar}
            src="https://github.com/VitorThorvi.png"/>
          <div className={styles.authorInfo}>
            <strong>User name</strong>
            <span>web developer</span>
          </div>
        </div>
        <time title={"20 de Março às 8:13h"} dateTime={"2025-03-20 08:13:00"}>Publicado há</time>
      </header>
      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O
          nome do projeto é DoctorCare 🚀</p>
        <p><a href="">jane.design/doctorcare</a></p>
        <p>
          <a href=''>#novoprojeto</a>{' '}
          <a href=''>#nlw</a> {' '}
          <a href=''>#rocketseat</a>{' '}
        </p>
      </div>
      <form className={styles.commentForm}>
        <strong>Deixe seu comentário</strong>
        <textarea
          placeholder="Comente aqui"
        />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment/>
      </div>

    </article>
  );
}