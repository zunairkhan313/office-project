import ButtonComponent from "../Button/button";

export default function SideBySide_2_Component(props) {
    const { heading, subHeading, paraText, buttonHave, buttonText, buttonLink, imgUrl, Img_At_First, Img_At_End } = props;

    return (
        <>
            <div className="container py-3">
                <div className="row">
                    {Img_At_First &&
                        <div className="col-lg-6 col-md-12 col-sm-12 flex flex-col justify-center">
                            <img src={imgUrl} alt="Image" className="h-[30rem] rounded-md w-full" />
                        </div>
                    }
                    <div className="col-lg-6 col-md-12 col-sm-12 flex flex-col justify-center">
                        <h3 className="not-italic font-bold text-[18px] leading-[10px] tracking-[0.30em] uppercase text-[#006429] mb-3 mt-1 pt-3">
                            {subHeading ? subHeading : null}
                        </h3>
                        <h1 className="text-4xl font-bold">
                            {heading}
                        </h1>
                        <p className="text-left text-lg font-sans my-3">{paraText}</p>
                        {/* <div className="button">
                            {buttonHave && <ButtonComponent buttonText={buttonText} buttonLink={buttonLink} />}
                        </div> */}
                    </div>
                        {Img_At_End &&
                            <div className="col-lg-6 col-md-12 col-sm-12 flex flex-col justify-center">
                            <img src={imgUrl} alt="About Chunglu" className="h-[30rem] rounded-md w-full" />
                            </div>
                        }

                </div>
            </div>
        </>
    )
}