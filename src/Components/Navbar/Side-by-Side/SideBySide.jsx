import { MdDone } from "react-icons/md";
import AboutUsBgVideo from "../BgVideo/AboutUsVideo";
import Button from "../Button/button";

export default function SideBySideComponent(props) {
    const {heading, subHeading, paraText, secondHeading, buttonHave, label, buttonLink, offers,imgUrl} = props;

    const renderStyledHeading1 = (text) => {
        return text.split("CHANGLU").map((part, index) => {
            if (index === 0) {
                return part;
            } else {
                return (
                    <span key={index} className="text-[#006429] font-bold">CHANGLU</span>
                );
            }
        });
    };

    const renderStyledHeading2 = (text) => {
        const parts = text.split("CHANGLU");
        const result = [];
        
        if (parts.length > 1) {
            result.push(
                <span key={0} className="text-[#006429] font-bold">CHANGLU</span>
            );
    
            for (let i = 1; i < parts.length; i++) {
                result.push(parts[i]);
            }
        } else {
            result.push(parts[0]);
        }
    
        return result;
    };

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 cold-md-12 cold-sm-12">
                        <img src={imgUrl} alt="About Chunglu" className="h-full w-full"/>
                    </div>
                    <div className="col-lg-6 cold-md-12 cold-sm-12">
                        <h3 className="not-italic font-bold text-[18px] leading-[10px] tracking-[0.30em] uppercase text-[#006429] mb-3 mt-1 pt-3">
                            {subHeading}
                        </h3>
                        <h1 className="text-2xl font-bold">
                            {renderStyledHeading1(heading)}
                        </h1>
                        <p className="line-clamp-6 text-left text-lg font-sans my-3">{paraText}</p>
                        {offers && (
                            <div className="mb-3">
                                <h1 className="text-2xl font-bold my-3">{renderStyledHeading2(secondHeading)}</h1>
                                <div className="d-flex align-items-center py-1">
                                    <div className="bg-success rounded-full h-6 w-6 d-flex justify-content-center align-items-center mr-3 text-white">
                                        <MdDone />
                                    </div>
                                    <p className="font-mono font-semibold text-xl">Affordable Price</p>
                                </div>
                                <div className="d-flex align-items-center py-1">
                                    <div className="bg-success rounded-full h-6 w-6 d-flex justify-content-center align-items-center mr-3 text-white">
                                        <MdDone />
                                    </div>
                                    <p className="font-mono font-semibold text-xl">Long-Testing Quality</p>
                                </div>
                                <div className="d-flex align-items-center py-1">
                                    <div className="bg-success rounded-full h-6 w-6 d-flex justify-content-center align-items-center mr-3 text-white">
                                        <MdDone />
                                    </div>
                                    <p className="font-mono font-semibold text-xl">Ready stock</p>
                                </div>
                                <div className="d-flex align-items-center py-1">
                                    <div className="bg-success rounded-full h-6 w-6 d-flex justify-content-center align-items-center mr-3 text-white">
                                        <MdDone />
                                    </div>
                                    <p className="font-mono font-semibold text-xl">Promotion Support</p>
                                </div>
                            </div>
                        )}
                        { buttonHave && <Button label={label} buttonLink={buttonLink}/> }
                    </div>
                </div>
            </div>
        </>
    )
}