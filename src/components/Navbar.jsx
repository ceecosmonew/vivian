// import { NavLink } from 'react-router-dom';
// import { Navbar as BootstrapNavbar, Nav, Container } from 'react-bootstrap';

// function Navbar() {
//   return (
//     <BootstrapNavbar className='' style={{marginTop: '-72px'}} bg="dark py-4" variant="dark" expand="lg" sticky="top">
//       <Container>
//         <BootstrapNavbar.Brand href="/">MyPortfolio</BootstrapNavbar.Brand>
//         <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
//         <BootstrapNavbar.Collapse id="basic-navbar-nav">
//           <Nav className="ms-auto">
//             <NavLink className="nav-link" to="/">Home</NavLink>
//             <NavLink className="nav-link" to="/about">About</NavLink>
//             <NavLink className="nav-link" to="/projects">Projects</NavLink>
//             <NavLink className="nav-link" to="/contact">Contact</NavLink>
//           </Nav>
//         </BootstrapNavbar.Collapse>
//       </Container>
//     </BootstrapNavbar>
//   );
// }

// export default Navbar;







import { NavLink } from 'react-router-dom';
import { Navbar as BootstrapNavbar, Nav, Container } from 'react-bootstrap';
import LOGO from '../assets/images/vivian.jpg'

function Navbar() {
  return (
    <BootstrapNavbar style={{marginTop: '-72px'}} bg="dark py-4" variant="dark" expand="lg"  sticky="top">

      <Container>
        <BootstrapNavbar.Brand href="/"><img width="100" style={{borderRadius: '90px'}} src={LOGO} />Mrs. Vivian Obiageli</BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink className="nav-link" to="/">Home</NavLink>
            <NavLink className="nav-link" to="/about">About</NavLink>
            <NavLink className="nav-link" to="/projects">Projects</NavLink>
            <NavLink className="nav-link" to="/contact">Contact</NavLink>
            <NavLink className="nav-link" to="/Live_Demo">Live Demo</NavLink>
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
}

export default Navbar;