// import { Col, Row } from 'react-bootstrap';
// import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import Offcanvas from 'react-bootstrap/Offcanvas';

// function NavBar() {

//   const expand = "md"
//   return (
//     <>
//       <Navbar key={expand} variant="dark" expand={expand} className='nav'>
//         <Container>
//           <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
//           <Navbar.Brand >

//           </Navbar.Brand>
//           <Navbar.Offcanvas
//             id={`offcanvasNavbar-expand-${expand}`}
//             aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
//             placement="start"
//           >
//             <Offcanvas.Header closeButton>
//               <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
//                 Tienda
//               </Offcanvas.Title>
//             </Offcanvas.Header>
//             <Offcanvas.Body>
//               <Nav className="justify-content-end flex-grow-1 pe-3">
//                 <Nav style={{ cursor: "pointer" }}>
//                   Home
//                 </Nav>

//                 <div className="d-flex divider" />
//                 <NavDropdown
//                   title="Horarios"
//                   id={`offcanvasNavbarDropdown-expand-${expand}`}
//                 >

//                   {/* <NavDropdown.Divider /> */}
//                 </NavDropdown>
//                 <div className="d-flex divider" />
//                 <NavDropdown
//                   title="direccion"
//                   id={`offcanvasNavbarDropdown-expand-${expand}`}
//                 >
//                   <NavDropdown.Item target="_blanck" href="#">
//                     <Row>
//                       <Col xs={2} md={4} lg={6} >
//                         <img style={{ width: "320px" }} src='https://i.blogs.es/af3666/google-maps-aniversario-nuevo-logo/840_560.png' alt='image' />

//                       </Col>
//                     </Row>
//                   </NavDropdown.Item>
//                 </NavDropdown>
//                 <div className="d-flex divider" />
//               </Nav>
//             </Offcanvas.Body>
//           </Navbar.Offcanvas>
//         </Container>
//       </Navbar>
//     </>
//   );
// }

// export default NavBar;



import React from 'react'

export default function NavBar() {
  return (
    <nav class="navbar navbar-expand-lg bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                {/* <li><hr class="dropdown-divider"></li> */}
                <li><a class="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled">Disabled</a>
            </li>
          </ul>
          <form class="d-flex" role="search">
            {/* <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"> */}
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  )
}
