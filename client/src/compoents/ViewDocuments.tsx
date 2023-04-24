import * as React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import img from '../assets/hr-connect-logo.png'
import './ViewDocuments.css'
export interface IViewDocumentsProps {
}

export default function ViewDocuments (props: IViewDocumentsProps) {
    const navigate=useNavigate()
  return (
    <div>
    <Navbar className="MainNavbar" expand="lg">
    <Container className="NavContainer" fluid>
      <img className="NavLogo" src={img} onClick={() => navigate("/")} />
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: "100px" }}
          navbarScroll
        ></Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  <div>
    <div className="container">
      <div className="row d-flex justify-content-center">
      <div className="table-container">
       {/*table*/}
    <table className="table">
        <thead>
            <tr>
                <th>#</th>
                <th>Folder Name</th>
                <th>File Name</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td data-label="#">1</td>
                <td data-label="Folder Name">Folder 1</td>
                <td data-label="File Name">File 1.pdf</td>
                <td data-label="Action"><a href="#" className="download-button">Download</a></td>
            </tr>
        </tbody>
    </table>
     {/*table*/}
</div>
          </div>
        </div>
      </div>
</div>
  );
}