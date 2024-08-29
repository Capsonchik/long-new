import styles from './styles.module.scss'

export const NewsComponent = ({news}) => {
  return (
    <div className={styles.newsContainer}>
      <h6 className={styles.title}>{news.title}</h6>
      <div className={styles.newsContent}>
        <img className={styles.img} src={news.image_url} alt="image"/>
        <span>{news.description}</span>
      </div>

    </div>
  );
};