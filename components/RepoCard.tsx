import {
  VscEye,
  VscRepoForked,
  VscStarEmpty,
  VscGithubAlt,
  VscLinkExternal,
  VscTypeHierarchy,
} from 'react-icons/vsc';

import { Repo } from '@/types';
import styles from '@/styles/RepoCard.module.css';

interface RepoCardProps {
  repo: Repo;
}

const RepoCard = ({ repo }: RepoCardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <h3 className={styles.title}>{repo.name}</h3>
        {repo.language && (
          <div className={styles.language}>
            <VscTypeHierarchy className={styles.languageIcon} />
            <span>{repo.language}</span>
          </div>
        )}
      </div>

      <p className={styles.description}>
        {repo.description ? repo.description : 'No description provided.'}
      </p>

      <div className={styles.stats}>
        <div className={styles.statGroup}>
          <div className={styles.statItem}>
            <VscStarEmpty className={styles.icon} />
            <span>
              {repo.stargazers_count}{' '}
              {repo.stargazers_count === 1 ? 'star' : 'stars'}
            </span>
          </div>
          <div className={styles.statItem}>
            <VscRepoForked className={styles.icon} />
            <span>
              {repo.forks} {repo.forks === 1 ? 'fork' : 'forks'}
            </span>
          </div>
          <div className={styles.statItem}>
            <VscEye className={styles.icon} />
            <span>
              {repo.watchers} {repo.watchers === 1 ? 'watcher' : 'watchers'}
            </span>
          </div>
        </div>

        <div className={styles.links}>
          <a
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            title={`View ${repo.name} on GitHub`}
          >
            <VscGithubAlt className={styles.icon} />
          </a>
          {repo.homepage && (
            <a
              href={repo.homepage}
              target="_blank"
              rel="noopener noreferrer"
              title="Visit live site"
            >
              <VscLinkExternal className={styles.icon} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default RepoCard;
