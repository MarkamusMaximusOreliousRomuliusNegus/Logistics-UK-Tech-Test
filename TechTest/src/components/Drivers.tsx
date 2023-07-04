import Header from './Header'
import SideMenu from './SideMenu'

function Drivers() {
  return (
    <div className='app-root'>
      <Header />
      <div className='app-body'>
        <SideMenu />
        <div>Drivers Page</div>
      </div>
    </div>
  )
}

export default Drivers
