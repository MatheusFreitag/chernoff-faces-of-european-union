import styles from './Footer.module.css';

const Footer = () => {
  return (
    <div className={styles.footerWrapper}>
      <p className={styles.footerParagraph}>
        Powered by ☕️.{' '}
        <a href='https://d3js.org/' target='_blank'>
          D3JS
        </a>{' '}
        and{' '}
        <a href='https://nextjs.org/' target='_blank'>
          NextJS
        </a>
        .
      </p>
      <p className={styles.footerParagraph}>
        Data processed using{' '}
        <a href='https://pandas.pydata.org/' target='_blank'>
          Pandas
        </a>{' '}
        and{' '}
        <a href='https://jupyter.org/' target='_blank'>
          Jupyter Notebooks
        </a>
        .
      </p>
      <p className={styles.footerParagraph}>
        Code available in{' '}
        <a
          href='https://github.com/MatheusFreitag/chernoff-faces-of-european-union'
          target='_blank'
        >
          Github.
        </a>
      </p>
    </div>
  );
};

export default Footer;
