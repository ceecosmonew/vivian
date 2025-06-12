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


import { Container, Card, Row, Col } from 'react-bootstrap';
import AnimatedSection from '../components/AnimatedSection';

import pic8 from '../assets/images/cac2.jpg';
import pic9 from '../assets/images/cac1.jpg';




const projects = [
  { title: 'Front CAC', desc: 'A responsive webpage I built during my early learning journey.', image: pic9},
  { title: 'Back', desc: 'A simple login UI built with HTML, CSS, and Bootstrap.', image: pic8 },
 
 
];



function About() {
  return (
    <AnimatedSection>
      <Container className="py-5 text-secondary">
        <h2>About Me</h2>
        <p>I’m a beginner frontend web developer passionate about creating beautiful and functional websites. I’ve spent time learning HTML, CSS, JavaScript, and React. I also practice using tools like Bootstrap to make websites responsive and modern.</p>
        <p>In addition to technical skills, I have strong online communication abilities and experience in marketing, which helps me collaborate effectively and understand how to present content in a compelling way.</p>
        <p>I'm always learning, and I love taking on small projects to practice and improve my skills.</p>
    


        <h2 className="text-primary">My business CAC (Front and Back)</h2>
        <Row className="mt-4">
          {projects.map((project, idx) => (
            <Col md={4} key={idx} className="mb-4">
              <Card className="shadow-sm h-100 border-primary">
                <Card.Img variant="top" src={project.image} alt={project.title} />
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  
                </Card.Body>
              </Card>
            </Col>
))}

        
        </Row>
      </Container>
    </AnimatedSection>
  );
}




export default About;
