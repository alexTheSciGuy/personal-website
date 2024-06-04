// app.js

class App extends React.Component {
    render() {
      return (
        <div>
          <Header />
          <Showcase />
          <Main />
          <Footer />
        </div>
      );
    }
  }
  
  class Header extends React.Component {
    render() {
      return (
        <header className="bg-dark text-white">
          <div className="container">
            <div id="branding">
              <h1><span className="highlight">My</span> Programming Skills</h1>
            </div>
            <nav className="navbar navbar-expand-lg navbar-dark">
              <div className="collapse navbar-collapse">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item"><a className="nav-link" href="#">Home</a></li>
                  <li className="nav-item"><a className="nav-link" href="#">About</a></li>
                  <li className="nav-item"><a className="nav-link" href="#">Projects</a></li>
                  <li className="nav-item"><a className="nav-link" href="#">Contact</a></li>
                </ul>
              </div>
            </nav>
          </div>
        </header>
      );
    }
  }
  
  class Showcase extends React.Component {
    render() {
      return (
        <section className="showcase">
          <div className="container">
            <h1>Showcasing My Skills</h1>
            <p>HTML, CSS, JavaScript, and more</p>
          </div>
        </section>
      );
    }
  }
  
  class Main extends React.Component {
    render() {
      return (
        <section id="main" className="container mt-4">
          <div className="row">
            <div className="col-md-8">
              <h1>About Me</h1>
              <p>Hello! I am a passionate programmer with skills in various technologies. I love creating beautiful and functional websites and applications.</p>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-6">
              <h2>Skills</h2>
              <ul className="list-group">
                <li className="list-group-item">HTML5 & CSS3</li>
                <li className="list-group-item">JavaScript & jQuery</li>
                <li className="list-group-item">Responsive Design</li>
                <li className="list-group-item">React & Angular</li>
                <li className="list-group-item">Node.js & Express</li>
                <li className="list-group-item">Python & Django</li>
                <li className="list-group-item">SQL & NoSQL Databases</li>
              </ul>
            </div>
            <div className="col-md-6">
              <h2>Projects</h2>
              <ul className="list-group">
                <li className="list-group-item">Project 1 - <a href="#">View Project</a></li>
                <li className="list-group-item">Project 2 - <a href="#">View Project</a></li>
                <li className="list-group-item">Project 3 - <a href="#">View Project</a></li>
              </ul>
            </div>
          </div>
        </section>
      );
    }
  }
  
  class Footer extends React.Component {
    render() {
      return (
        <footer className="bg-dark text-white mt-4">
          <div className="container text-center">
            <p>My Programming Skills &copy; 2024</p>
          </div>
        </footer>
      );
    }
  }
  
  ReactDOM.render(<App />, document.getElementById('root'));
  