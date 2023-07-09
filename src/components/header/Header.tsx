import logo from '../../images/logo.png'; 
import Image from 'next/image';

function Header() {
    return (
        <div>
            <div>
                <Image className='' src={logo} alt="Logo" />
            </div>
        </div>
    )
}

export default Header