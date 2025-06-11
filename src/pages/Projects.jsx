// import { Container, Card, Row, Col } from 'react-bootstrap';
// import AnimatedSection from '../components/AnimatedSection';

// const projects = [
//   { title: 'CEE-BILL', desc: 'Utility bill payments system built with full-stack technologies.', link: '#' },
//   { title: 'DevLogger', desc: 'A journaling app for developers using React and Supabase.', link: '#' }
// ];

// function Projects() {
//   return (
//     <AnimatedSection>
//       <Container className="py-5">
//         <h2>Projects</h2>
//         <Row className="mt-4">
//           {projects.map((project, idx) => (
//             <Col md={6} key={idx} className="mb-4">
//               <Card className="shadow-sm">
//                 <Card.Body>
//                   <Card.Title>{project.title}</Card.Title>
//                   <Card.Text>{project.desc}</Card.Text>
//                   <a href={project.link} className="btn btn-outline-primary">View</a>
//                 </Card.Body>
//               </Card>
//             </Col>
//           ))}
//         </Row>
//       </Container>
//     </AnimatedSection>
//   );
// }

// export default Projects;






import { Container, Card, Row, Col } from 'react-bootstrap';
import AnimatedSection from '../components/AnimatedSection';
import pic1 from '../assets/images/firstweb.jpg';
import pic2 from '../assets/images/login.jpg';
import pic3 from '../assets/images/sec.jpg';
import pic4 from '../assets/images/gri.jpg';
import pic5 from '../assets/images/table.jpg';
import pic6 from '../assets/images/bp.jpg';
import pic7 from '../assets/images/bath.jpg';
import pic8 from '../assets/images/hol.jpg';
import pic9 from '../assets/images/pla.jpg';
import pic10 from '../assets/images/pro.mp4';

const projects = [
  { title: 'My First Website', desc: 'A responsive webpage I built during my early learning journey.', image: pic1},
  { title: 'Login Form', desc: 'A simple login UI built with HTML, CSS, and Bootstrap.', image: pic2 },
  { title: 'React Practice App', desc: 'A mini-app built with React during practice.', image: pic3 },
  { title: 'Marketing Products', desc: 'Modern grinder', image: pic4},
  { title: 'Marketing Products', desc: 'Relaxation table', image: pic5 },
  { title: 'Marketing Products', desc: 'BP machine', image: pic6 },
  { title: 'Marketing Products', desc: 'Bath set', image: pic7},
  { title: 'Marketing Products', desc: 'Holder', image: pic8 },
  { title: 'Marketing Products', desc: 'Plate set', image: pic9},
 
];
const projects1 = [
  
  { title: 'Marketing Products', desc: 'Fruits processor', vid: pic10}, 
];

function Projects() {
  return (
    <AnimatedSection>
      <Container className="py-5">
        <h2 className="text-primary">Projects</h2>
        <Row className="mt-4">
          {projects.map((project, idx) => (
            <Col md={4} key={idx} className="mb-4">
              <Card className="shadow-sm h-100 border-primary">
                <Card.Img variant="top" src={project.image} alt={project.title} />
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.desc}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
))}



          {projects1.map((project, idx) => (
            <Col md={4} key={idx} className="mb-4">
              <Card className="shadow-sm h-100 border-primary">
                <video controls variant="top">< source src={project.vid}  alt={project.title} /> </video>
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.desc}</Card.Text>
                </Card.Body>
              
              </Card>
            </Col>
            
          ))}
        </Row>
      </Container>
    </AnimatedSection>
  );
}

export default Projects;