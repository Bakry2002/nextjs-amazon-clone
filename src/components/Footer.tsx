//? Next components
import Image from "next/image"

//? assets 
import logo from '../images/logo.png'

function Footer() {
    return (
        <div className="w-full h-20 bg-amazon_light text-gray-300 flex items-center justify-center gap-4">
            <Image className='w-24' src={logo} alt="Logo" />
            <p className="text-sm -mt-4">
                All rights reserved. Amazon Clone by{" "}
                <a 
                    className="hover:text-white hover:underline decoration-[1px] cursor-pointer duration-300"
                    href="https://bakry-portfolio.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                >
                    Abdullah M. Bakry
                    </a>
            </p>
        </div>
    )
}

export default Footer