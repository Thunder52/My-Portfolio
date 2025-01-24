const Navbar = () => {
  return (
<nav>
  <input type="checkbox" className="checkbox" id="check" />
  <h1 className="nav_head">Hussain.</h1>
  <ul>
    <li><a href="#home">Home</a></li>
    <li><a href="#skills">Skills</a></li>
    <li><a href="#projects">My Projects</a></li>
    <li><a href="#contact">Contact</a></li>
    <a href="#contact"><button className="contact_btn">Contact Me</button></a>
  </ul>
  <label htmlFor="check" className="checkbtn">
    <i className="fas fa-bars" />
  </label>
</nav>
  )
}

export default Navbar