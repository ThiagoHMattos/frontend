import './style.css'
import fecap from '../../images/Icone Fecap (1).png'

function Logo() {
    return (
        <div className='logo'>
            <img src={fecap} alt='logo'></img>
        </div>
    )
}
export default Logo