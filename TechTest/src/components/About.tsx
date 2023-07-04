import Header from './Header'
import SideMenu from './SideMenu'

function About() {
  return (
    <div className='app-root'>
      <Header />
      <div className='app-body'>
        <SideMenu />
        <div>About Page</div>
      </div>
    </div>
  )
}

export default About
