import Header from './Header'
import SideMenu from './SideMenu'
import '../styles/DefaultLayout.css'

export interface DefaultLayoutProps {
    children: JSX.Element
}

function DefaultLayout(props: DefaultLayoutProps) {
  return (
    <div className='app-root'>
      <Header />
      <div className='app-body'>
        <SideMenu />
        <div className='app-body-content'>
            {props.children}
        </div>
      </div>
    </div>
  )
}

export default DefaultLayout
