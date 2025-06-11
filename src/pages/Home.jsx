// import { Container } from 'react-bootstrap';
// import AnimatedSection from '../components/AnimatedSection';

// function Home() {
//   return (
//     <AnimatedSection>
//       <Container className="text-center py-5">
//         {/* fadeInDown or animate__bounce, animate__zoomIn, animate__slideInUp, animate__shakeX, for timing it, use:
//        animate__animated animate__fadeIn animate__delay-2s animate__slower or animate__animated animate__pulse animate__infinite   */}

//         <h1 className="display-4 animate__animated animate__fadeIn">Welcome to My Portfolio</h1>
//         <p className="lead">I build web apps with React, Node.js, and more.</p>
//       </Container>
//     </AnimatedSection>
//   );
// }

// export default Home;






import { Container, Button } from 'react-bootstrap';
import AnimatedSection from '../components/AnimatedSection';


function Home() {
  return (
    <AnimatedSection>
      <Container className="text-center py-1 text-primary">
         <h5 className=" display-7 fw-bold text-primary animate__animated animate__fadeIn">Welcome to My Portfolio</h5>
        {/* <h3 className="display-4 animate__animated animate__fadeIn">Hi, I'm a Frontend Developer</h3> */}
        <p className="leads"><h6>I'm a passionate beginner Frontend Developer I enjoy turning ideas into interactive, user-friendly web experiences. I'm currently growing my skills and learning real-world development practices.</h6>

          <br />
          <h6>I specialize in HTML, CSS, JavaScript, and React.js, and I’m constantly learning to improve my skills.</h6>
        </p>
        <p><h6>I have strong online communication skills and a background in marketing, which help me work efficiently with remote teams and understand user needs.</h6></p>
        <Button href="/pdf/vivian.pdf" className="mt-3" variant="outline-primary">Download My CV</Button>

      </Container>
    </AnimatedSection>
  );
}

export default Home;
