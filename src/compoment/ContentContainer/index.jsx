import { useEffect, useState } from "react";
import FormatteDate from "../FormatteDate";
import Picture from "../Picture";
import TitleLink from "../TitleLink";
import Material from "../Material";
import Description from "../Description";
import Tech from "../Tech";


const ContentContainer = ({
    onInitial,
    title: sectionTitle = "",
    data = [],
}) => {
    const [isMouseEnter, setIsMouseEnter] = useState({});

    const SECTION_ID = `${sectionTitle}-section`;

    useEffect(() => {
        onInitial(SECTION_ID);
    }, [])

    return (
        <div id={SECTION_ID} className="scroll-m-14">
            <div className='text-primaryAccent font-medium px-2'>{sectionTitle}</div>
            {
                data.map(({
                    date = "",
                    title = "",
                    link = "",
                    materials = [],
                    descriptions = [],
                    skills = [],
                    picture = "",
                }, index) => (


                    <div
                        key={`${SECTION_ID}-${index}-${title.replaceAll(" ", "")}`}
                        className={`grid grid-cols-[30%_70%] rounded-md px-2 py-6 transition-all ${isMouseEnter[`${SECTION_ID}-${index}`] ? "bg-primaryBase" : ""}`}
                        onMouseEnter={() => setIsMouseEnter({ [`${SECTION_ID}-${index}`]: true })}
                        onMouseLeave={() => setIsMouseEnter({ [`${SECTION_ID}-${index}`]: false })}
                    >
                        <div>
                            <FormatteDate isHighLight={isMouseEnter[`${SECTION_ID}-${index}`]}>{date}</FormatteDate>
                            <Picture picture={picture} title={title} />
                        </div>
                        <div className="grid gap-y-4">
                            <TitleLink isHighLight={isMouseEnter[`${SECTION_ID}-${index}`]} title={title} link={link} />
                            {
                                materials.length > 0 ?

                                    < div className="flex gap-4 text-xl items-center">
                                        {
                                            materials.map((e, i) => (
                                                <Material key={`${e}-material-${i}`} icon={e.type} link={link} />

                                            ))
                                        }

                                    </div>
                                    : null
                            }
                            {
                                descriptions.map((e, i) => (
                                    <Description key={`${e}-description-${i}`} description={e} />
                                ))
                            }

                            {
                                skills.map((e, i) => (
                                    <Tech key={`${e}-skill-${i}`} isHighLight={isMouseEnter[`${SECTION_ID}-${index}`]} data={e} />
                                ))
                            }
                        </div>
                    </div>
                ))
            }

        </div >
    )
}


export default ContentContainer;