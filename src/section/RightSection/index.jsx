import ContentContainer from "../../compoment/ContentContainer";
import About from "../About";
import { data as projectsData } from "../../contents/projects"
import { data as experienceData } from "../../contents/experience"
import Footer from "../Footer";

const RightSection = ({ onInitial }) => {
    return (
        <div className="grid gap-y-14 lg:gap-y-40 px-5">
            <About
                title="About"
                onInitial={onInitial}
            />
            <ContentContainer
                onInitial={onInitial}
                title="Projects"
                data={projectsData}
            />

            <ContentContainer
                onInitial={onInitial}
                title="Experience"
                data={experienceData}
            />


            <Footer />


        </div>
    )
}

export default RightSection;
