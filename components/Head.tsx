import Head from 'next/head';

interface CustomHeadProps {
  title: string;
}

const CustomHead = ({ title }: CustomHeadProps) => {
  return (
    <Head>
      <title>{title} | Nandini Jambhulkar</title>
      <meta
        name="description"
        content="Nandini Jambhulkar is a CSE student and AI/ML developer with experience in Python, web development, and data science."
      />
      <meta
        name="keywords"
        content="Nandini Jambhulkar, AI ML Developer, Python Developer, Machine Learning Portfolio, Data Science, React, Django, CSE Student"
      />
      <meta property="og:title" content="Nandini Jambhulkar | Portfolio" />
      <meta
        property="og:description"
        content="Explore Nandini's projects and skills in AI, ML, and software development."
      />
      <meta
        property="og:image"
        content="https://nandinijambhulkar12.github.io/portfolio-preview.png"
      />
      <meta
        property="og:url"
        content="https://nandinijambhulkar12.github.io"
      />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Portfolio',
};
