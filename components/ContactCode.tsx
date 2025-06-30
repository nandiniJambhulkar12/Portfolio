import styles from '@/styles/ContactCode.module.css';

const contactItems = [
  {
    social: 'email',
    link: 'nandinijambhulkar1234@gmail.com',
    href: 'mailto:nandinijambhulkar1234@gmail.com',
  },
  {
    social: 'github',
    link: 'nandiniJambhulkar12',
    href: 'https://github.com/nandiniJambhulkar12',
  },
  {
    social: 'linkedin',
    link: 'nandini-jambhulkar',
    href: 'https://www.linkedin.com/in/nandini-jambhulkar-11978125b',
  }
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener noreferrer">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
