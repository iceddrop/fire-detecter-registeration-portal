import logo from "../../assets/9feae60ea81842259049ab0f27467b93-free-removebg-preview.png";
import { Navbar } from "flowbite-react";
import "./Nav.css";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <Navbar className="bg-transparent" fluid={true} rounded={true}>
      <Navbar.Brand href="https://flowbite.com/">
        <img class="h-20" src={logo} alt="Fireeye Logo" />
        <span className="brand-text-one self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
          Fire<span className="brand-text-two text-red-600 ">Eyes</span>
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="md:pr-16 pb-10 md:pt-8">
        <div className="flex flex-col md:flex-row md:items-center poppins-font">
          <Navbar.Link href="#" className="md:pr-9 ">
            Home
          </Navbar.Link>
          <Navbar.Link href="#" className="md:pr-6">
            About
          </Navbar.Link>
          <Navbar.Link href="#" className="md:pr-6">
            Features
          </Navbar.Link>
          <div>
            <Link to={'/register'} className="bg-red-600 text-white py-2 px-4 rounded-md">
              Register
            </Link>
          </div>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Nav;