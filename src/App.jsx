import React from 'react'


function App() {
  const navBarUlStyle = {
    padding: 0,
    margin: 0
  }


  const navBarLiTagStyle = {
    display: 'inline',
    margin: '32px'
  }


  const navBarATagStyle = {
    textDecoration: 'none',
    color: 'black'
  }


  const containerStyle = {
    textAlign: 'center'
  }


  const aboutMeStyle = {
    margin: '120px 0',
    padding: '20px'
  }


  const projectsContainerStyle = {
    margin: '120px 0',
    padding: '20px'
  }


  const projectsStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '32px'
  }


  const cardStyle = {
    boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
    borderRadius: '16px',
    padding: '32px'
  }



  const projects = [
    { title: 'Project 1', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, totam.' },
    { title: 'Project 2', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, totam.' },
    { title: 'Project 3', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, totam.' },
    { title: 'Project 4', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, totam.' },
    { title: 'Project 5', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, totam.' }
  ]


  return (
    <div style={containerStyle}>

      <header>
        <nav>
          <ul style={navBarUlStyle}>
            <li style={navBarLiTagStyle}><a href="#about-me" style={navBarATagStyle}>About</a></li>
            <li style={navBarLiTagStyle}><a href="#projects-container" style={navBarATagStyle}>Projects</a></li>
            <li style={navBarLiTagStyle}><a href="#contact-me" style={navBarATagStyle}>Contact</a></li>
          </ul>
        </nav>
      </header>

      <section style={aboutMeStyle}>
        <h2>About Me</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem, autem asperiores, unde error quis, provident impedit blanditiis quibusdam debitis ea temporibus ex hic sapiente? Itaque sunt consectetur pariatur illo id?</p>
      </section>

      <section style={projectsContainerStyle}>
        <h2>Projects</h2>
        <div style={projectsStyle}>
          {projects.map(project => (
            <div style={cardStyle}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href="#">View Project</a>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2>Contact Me</h2>
        <p>Contact me at: <a href="#">email.email@example.com</a></p>
      </section>

    </div>
  )
}

export default App