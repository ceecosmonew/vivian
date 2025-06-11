// import { Container } from 'react-bootstrap';

// function Footer() {
//   return (
//     <footer className="bg-dark text-light py-5 ">
//       <Container className="text-center">
//         <p>&copy; {new Date().getFullYear()} MyPortfolio. All rights reserved.</p>
//       </Container>
//     </footer>
//   );
// }

// export default Footer;








import { Container } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="bg-dark text-light py-1 mt-1">
      <Container className="text-center">
        <p>&copy; {new Date().getFullYear()} MyPortfolio. All rights reserved.</p>
{/*         <p className='fw-bold'>My Social Media Handles:</p> */}
        <p>
          <a href="/pdf/vivian.pdf" className="text-white" download>Download CV</a> |
          <a href="https://linkedin.com/in/ur profile" target="_blank" rel="noreferrer" className="text-white mx-2"><i className='fa-brands fa-linkedin-in fa-2x text-primary'></i></a>
          <a href="https://twitter.com/" target="_blank" rel="noreferrer" className="text-white mx-2"><i className='fa-brands fa-twitter fa-2x text-info'></i></a>
          <a href="https://facebook.com/vijos enterprises" target="_blank" rel="noreferrer" className="text-white mx-2"><i className='fa-brands fa-facebook fa-2x text-info'></i></a>
          <a href="https://wa.me/2348064560834" target="_blank" rel="noreferrer" className="text-white mx-2"><i className='fa-brands fa-whatsapp fa-2x text-info'></i></a>



        </p>
      </Container>
    </footer>
  );
}

export default Footer;
