import Image from 'next/image'
import itdiv from '/public/smcu.png'

const Navbar = () => {
  return (
    <>
        <div className ="flex ">
            <div className ="w-1/6 h-12 bg-white rounded-l-lg text-center">
            <Image src={itdiv} alt="smcu" width={50} height={50}/>
                </div>
                <div className="w-1/6 h-12 bg-white text-center">
                <strong> SMCU IT </strong>
                </div>
                <div className="w-1/6 bg-green-600 h-12 text-center">
                <a href="#home">
                </a>
                <strong>Home</strong>
                </div>
                <div className="w-1/6 bg-green-600 h-12 text-center ">
                <a href="#aboutus">
                <strong>About us</strong>
                </a>
                </div>
                <div className="w-1/6 bg-green-600 h-12 text-center ">
                <a href="#location">
                <strong>Location</strong>
                </a>
                </div>
                <div className="w-1/6 bg-green-600 h-12 text-center ">
                <a href="#contact">
                <strong>Contact</strong>
                </a>
                </div>
                <div className="w-1/6 bg-green-600 h-12 text-center rounded-r-lg">
                <a href="#teammembers">
                <strong>Teammember</strong>
                </a>
            </div>
    
        </div>
    </>
  )
}

export default Navbar
