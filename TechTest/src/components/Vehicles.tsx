import Header from './Header'
import SideMenu from './SideMenu'

function Vehicles() {
  return (
    <div className='app-root'>
      <Header />
      <div className='app-body'>
        <SideMenu />
        <div>Vehicles Page</div>
      </div>
    </div>
  )
}

export default Vehicles
