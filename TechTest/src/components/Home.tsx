import Header from './Header'
import SideMenu from './SideMenu'
import DriverTable from './DriverTable'

function Home() {
  return (
    <div className='app-root'>
      <Header />
      <div className='app-body'>
        <SideMenu />
        <DriverTable />
      </div>
    </div>
  )
}

export default Home
