import styles from '@/styles/ArticlesPage.module.css'; // reuse same styling file
import skillsData from '@/data/skills.json';

interface SkillSection {
  category: string;
  items: string[];
}

const SkillsPage = () => {
  return (
    <div className={styles.layout}>
      <h1 className={styles.pageTitle}>My Skills</h1>
      <p className={styles.pageSubtitle}>
        A curated list of technologies, tools, and frameworks I&apos;ve worked with.
      </p>

      <div className={styles.container}>
        {skillsData.map((section: SkillSection, index: number) => (
          <div key={index} className={styles.card}>
            <h2 className={styles.cardTitle}>{section.category}</h2>
            <ul className={styles.cardContent}>
              {section.items.map((skill, i) => (
                <li key={i} className={styles.skillItem}>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'Skills' },
  };
}

export default SkillsPage;
