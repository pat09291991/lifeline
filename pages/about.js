import Link from 'next/link';

const About = () => (
    <div>
        <ul>
          <li><Link href = "/"><a>Home</a></Link></li>
          <li><Link href = "about"><a>About</a></Link></li>
      </ul>
      <h1>About Lifeline</h1>
    </div>
  );
  
  export default About;
  