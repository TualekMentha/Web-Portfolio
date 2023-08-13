import Contact from "../Contact";
import Navbar from "../Navbar";
import Header from "../header";

const LeftSection = ({ navBarItems, currentSection }) => {
    return (
        <div className="px-5 mb-14 lg:mb-0">
            <div className='sticky top-14 px-2 grid gap-y-5 lg:grid-rows-[1fr_2fr_20%] lg:h-[89vh]'>
                <Header />
                <Navbar navBarItems={navBarItems} currentSection={currentSection} />
                <Contact />
            </div>
        </div>
    )
}

export default LeftSection;