import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate } from "react-router-dom";
import { MdAddShoppingCart } from "react-icons/md";

function NavBar() {
  let navigate = useNavigate();
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link as={Link} to={"/"}>
              Home
            </Nav.Link>{" "}
            <Nav.Link as={Link} to={"/products"}>
              Products
            </Nav.Link>{" "}
            <Nav.Link as={Link} to={"/newproduct"}>
              NewProduct
            </Nav.Link>
            <Nav.Link as={Link} to={"/counterapp"}>
              CounterApp
            </Nav.Link>{" "}
            <Nav.Link as={Link} to={"/signup/guest"}>
              SignUp
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Button
              variant="contained"
              color="warning"
              onClick={() => {
                navigate("/wishlist");
              }}
            >
              <MdAddShoppingCart />
            </Button>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
