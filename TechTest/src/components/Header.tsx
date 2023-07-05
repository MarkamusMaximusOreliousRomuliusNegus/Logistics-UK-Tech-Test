import reactLogo from '../assets/logo.png'
import '../styles/Header.css'

function Header() {
    return (
        <div>
            <img src={reactLogo} className="logoheader" alt="Logistic UK logo" />
        </div>
    )
}

export default Header