import Image from 'next/image';
import GitHubCalendar from 'react-github-calendar';
import { VscRepo, VscPerson } from 'react-icons/vsc';

import RepoCard from '@/components/RepoCard';
import { Repo, User } from '@/types';

import styles from '@/styles/GithubPage.module.css';

interface GithubPageProps {
  repos: Repo[];
  user: User;
}

const GithubPage = ({ repos, user }: GithubPageProps) => {
  return (
    <div className={styles.layout}>
      {/* Page Title and Description */}
      <div className={styles.pageHeading}>
        <h1 className={styles.pageTitle}>GitHub</h1>
        <p className={styles.pageSubtitle}>
          Browse through my GitHub repositories and see what I&apos;ve been
          working on. These are some of my public repositories showcasing
          various projects and skills.
        </p>
      </div>

      {/* GitHub Profile Section */}
      <div className={styles.githubPage}>
        <div className={styles.profileSection}>
          <div className={styles.profileInfo}>
            {/* ✅ Safe fallback for avatar */}
            <Image
              src={user?.avatar_url || '/default-avatar.png'}
              className={styles.avatar}
              alt={`${user.login}'s GitHub profile picture`}
              width={100}
              height={100}
              priority
            />

            <div className={styles.userInfo}>
              <h2 className={styles.username}>{user.login}</h2>

              <div className={styles.stats}>
                <div className={styles.statItem}>
                  <VscRepo className={styles.statIcon} />
                  <span>{user.public_repos} repositories</span>
                </div>
                <div className={styles.statItem}>
                  <VscPerson className={styles.statIcon} />
                  <span>{user.followers} followers</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <h3 className={styles.sectionTitle}>Popular Repositories</h3>
        </div>

        {/* ✅ Responsive Repo Grid */}
        <div className={styles.reposContainer}>
          {repos.map((repo) => (
            <RepoCard key={repo.id} repo={repo} />
          ))}
        </div>

        {/* GitHub Contributions Calendar */}
        <div className={styles.contributions}>
          <GitHubCalendar
            username={process.env.NEXT_PUBLIC_GITHUB_USERNAME!}
            hideColorLegend
            hideMonthLabels
            colorScheme="dark"
            theme={{
              dark: ['#161B22', '#0e4429', '#006d32', '#26a641', '#39d353'],
              light: ['#161B22', '#0e4429', '#006d32', '#26a641', '#39d353'],
            }}
            style={{
              width: '100%',
            }}
          />
        </div>
      </div>
    </div>
  );
};

// ✅ Static props with GitHub data
export async function getStaticProps() {
  const username = process.env.NEXT_PUBLIC_GITHUB_USERNAME;

  const [userRes, repoRes] = await Promise.all([
    fetch(`https://api.github.com/users/${username}`),
    fetch(
      `https://api.github.com/users/${username}/repos?sort=pushed&per_page=6`
    ),
  ]);

  const user = await userRes.json();
  const repos = await repoRes.json();

  return {
    props: {
      title: 'GitHub',
      user,
      repos,
    },
    revalidate: 600, // ISR: revalidate every 10 minutes
  };
}

export default GithubPage;
