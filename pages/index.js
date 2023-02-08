import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hey there! I'm a jack-of-all-trades, master of computer science. From India, raised in the Middle East and now thriving in the land of the free, I'm currently a graduate student in New Jersey, pursuing my passion for software engineering, web development, and machine learning for data analytics and data science.

I'm a versatile, curious and nimble individual who is always eager to pick up new skills and apply them to new and challenging issues. I believe in working smarter, not harder and that's why I am known for my ability to work well in teams, my passion for delivering excellence, and my expertise in requirements gathering and translating them into research and applications.

I am currently enrolled in a Master of Science in Computer Science program at Stevens Institute of Technology, where I have honed my skills in Algorithms, Web Programming, Machine Learning, Data Mining, Cybersecurity, and Agile Methodology. My previous education includes a Bachelor of Engineering in Computer Science from Ramaiah Institute of Technology where I had been flexing my computer muscles. 

My professional experience includes working as an Associate Member of Technical Staff and Engineering Intern at Athenahealth, where I've developed tools, implemented features and been the bug fixer who has improved the performance and security of the company's products. I have also engaged in a number of academic projects that have allowed me to apply my skills in software/web development, data science, and machine learning.

I am also a leader, a mentor and a winner. I've held various leadership roles in my academic and professional life, such as being a temporary SCRUM Master, leading debate teams to victory, co-founding a Model UN conference, and mentoring a dance crew to win multiple competitions.

In my free time, I like to keep things light and pun-ny. I enjoy writing, dancing, singing and reading, and I always have a good pun or joke up my sleeve. I'm always looking for opportunities to improve myself and make a positive impact on the world, and I believe that with my skills, passion, and sense of humour, I can make a real difference. So let's work together to make the world a better place, one byte at a time!</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}
