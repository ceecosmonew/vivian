// import { Container, Form, Button } from 'react-bootstrap';
// import AnimatedSection from '../components/AnimatedSection';

// function Contact() {
//   return (
//     <AnimatedSection>
//       <Container className="py-5">
//         <h2>Contact Me</h2>
//         <Form>
//           <Form.Group className="mb-3">
//             <Form.Label>Name</Form.Label>
//             <Form.Control type="text" placeholder="Enter your name" />
//           </Form.Group>
//           <Form.Group className="mb-3">
//             <Form.Label>Email</Form.Label>
//             <Form.Control type="email" placeholder="Enter your email" />
//           </Form.Group>
//           <Form.Group className="mb-3">
//             <Form.Label>Message</Form.Label>
//             <Form.Control as="textarea" rows={4} placeholder="Your message..." />
//           </Form.Group>
//           <Button variant="primary" type="submit">Send Message</Button>
//         </Form>
//       </Container>
//     </AnimatedSection>
//   );
// }

// export default Contact;





import { Container, Form, Button } from 'react-bootstrap';
import AnimatedSection from '../components/AnimatedSection';

function Contact() {
  return (
    <AnimatedSection>
      <Container className="py-5 text-dark">
        <h2>Contact Me</h2>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your name" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter your email" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={4} placeholder="Your message..." />
          </Form.Group>
          <Button variant="primary" type="submit">Send Message</Button>
        </Form>
        <div className="mt-5">
          <p><strong>Email:</strong> viviberry2b@gmail.com</p>
          <p><strong>Phone:</strong> +234-8064560834</p>
          <p><strong>Social:</strong>
            <a href="https://linkedin.com" className="ms-2 text-primary">LinkedIn</a>,
            <a href="https://twitter.com" className="ms-2 text-primary">Twitter</a>
          </p>
        </div>
      </Container>
    </AnimatedSection>
  );
}

export default Contact;
