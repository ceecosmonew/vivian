// import { Container } from 'react-bootstrap';
// import AnimatedSection from '../components/AnimatedSection';

// function About() {
//   return (
//     <AnimatedSection>
//       <Container className="py-5">
//         <h2>About Me</h2>
//         <p>I’m a full-stack web developer focused on building modern, responsive, and scalable applications. My stack includes React, Node.js, and PostgreSQL. I also write clear technical documentation and blog posts.</p>
//       </Container>
//     </AnimatedSection>
//   );
// }

// export default About;



import { Container } from 'react-bootstrap';
import AnimatedSection from '../components/AnimatedSection';

function About() {
  return (
    <AnimatedSection>
      <Container className="py-5 text-secondary">
        <h2>About Me</h2>
        <p>I’m a beginner frontend web developer passionate about creating beautiful and functional websites. I’ve spent time learning HTML, CSS, JavaScript, and React. I also practice using tools like Bootstrap to make websites responsive and modern.</p>
        <p>In addition to technical skills, I have strong online communication abilities and experience in marketing, which helps me collaborate effectively and understand how to present content in a compelling way.</p>
        <p>I'm always learning, and I love taking on small projects to practice and improve my skills.</p>
      </Container>
    </AnimatedSection>
  );
}

export default About;