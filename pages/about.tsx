import styles from '@/styles/AboutPage.module.css';

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Nandini Jambhulkar</h1>
        <div className={styles.subtitle}>
          Final Year CSE Student | AI/ML & Python Developer
        </div>

        <div className={styles.aboutContent}>
          <section className={styles.section}>
            <p className={styles.paragraph}>
              Hello! I&apos;m a Computer Science and Engineering student from Chandrapur, Maharashtra, currently studying at
              Shri Sant Gajanan Maharaj College of Engineering, Shegaon.
            </p>
            <p className={styles.paragraph}>
              I specialize in Python development, AI/ML, and web development.  As a Data Science enthusiast, I love working with data to build meaningful, real-world solutions. I also have a strong foundation in Java and Data Structures & Algorithms (DSA)
              I&apos;m passionate about solving real-world problems with data-driven solutions and building interactive web apps.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Experience</h2>
            <p className={styles.paragraph}>
              I&apos;ve interned as a <span className={styles.highlight}>Data Science and Analytics Intern</span> at Zidio Development
              where I developed tools for customer segmentation and learned techniques for data visualization.
            </p>
            <p className={styles.paragraph}>
              I also worked as a <span className={styles.highlight}>Python Developer</span> at Arohi Software, where I built a
              Milk Dairy Management System using Django.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Hackathons & Achievements</h2>
            <p className={styles.paragraph}>
              I was a Pre-Finalist in <span className={styles.highlight}>Myntra Hackerramp: We For She 2024</span> where I developed a
              Gen-Z engagement platform called <strong>TRENZ</strong>.
            </p>
            <p className={styles.paragraph}>
              I was also selected for the <span className={styles.highlight}>GDSC Solution Challenge</span> and represented my idea
              <strong>&nbsp;“Tapbook”</strong> at T-Hub Hyderabad in 2024.
            </p>
          </section>


          {/* <section className={styles.section}>
  <h2 className={styles.sectionTitle}>Certifications</h2>
  <ul className={styles.list}>
    <li>Programming Using JAVA – NPTEL</li>
    <li>Python for Data Science,AL& Development – Coursera(IBM)</li>
    <li>SQL for Data Science – UC Davis (Coursera)</li>
   
  </ul>
</section> */}

<section className={styles.section}>
  <h2 className={styles.sectionTitle}>Certifications</h2>
  <ul className={styles.list}>
    <li>
      Programming Using JAVA – 
      <a href="https://archive.nptel.ac.in/content/noc/NOC23/SEM2/Ecertificates/106/noc23-cs74/Course/NPTEL23CS74S73090004120270641.pdf" target="_blank" rel="noopener noreferrer">
        &nbsp;  <span className={styles.highlight}>NPTEL</span>
      </a>
    </li>
    <li>
      Python for Data Science, AI & Development – 
      <a href="https://coursera.org/share/acb73f3d8c71ab21acb546e6bc6eb3aa" target="_blank" rel="noopener noreferrer">
        &nbsp;   <span className={styles.highlight}>Coursera (IBM)</span>
      </a>
    </li>
    <li>
      SQL for Data Science – 
      <a href="https://coursera.org/share/46ee552cd571595c3a0afd0d21fcbb1f" target="_blank" rel="noopener noreferrer">
        &nbsp; <span className={styles.highlight}>Coursera (UC Davis)</span>
      </a>
    </li>
     <li>
      Machine Learning – 
      <a href="https://www.credly.com/badges/d39101b6-cb4f-40e5-89f0-3838e21bbdfe/public_url" target="_blank" rel="noopener noreferrer">
        &nbsp;  <span className={styles.highlight}>AWS Academy</span>
      </a>
    </li>
    <li>
      
Postman API Fundamentals Student Expert – 
      <a href="https://api.badgr.io/public/assertions/1ksW7H4SRXOa3OgLVnZrrA" target="_blank" rel="noopener noreferrer">
        &nbsp; <span className={styles.highlight}>Postman</span>
      </a>
    </li>
  </ul>
</section>

<section className={styles.section}>
  <h2 className={styles.sectionTitle}>Beyond Tech</h2>
  <p className={styles.paragraph}>
    Outside of coding, I enjoy public speaking, leading student communities, and contributing to tech events.
    I currently serve as the <span className={styles.highlight}>Student Coordinator at GDSC SSGMCE</span> and led the 
    <span className={styles.highlight}> IT Skill Enhancement Program</span> with <span className={styles.highlight}>HCL Tech</span>.
    I’ve also taken on the role of <span className={styles.highlight}>Technical Head at Mozilla Campus Club</span>, 
    where I promoted open-source learning and technical growth.
    Outside the tech space, I unwind through <span className={styles.highlight}>dancing and listening to music</span>-which refresh my mind.
  </p>
</section>

        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
