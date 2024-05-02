import "./AboutUsVideo.css"

export default function AboutUsBgVideo(props) {
    const { videoLink } = props;
    return (
        <>
          <div className="relative lg:h-2/3 md:h-2/3 ">
            <video src={videoLink} autoPlay loop muted className='object-cover w-full h-full' />
            {/* <img src={videoLink} alt="" className="w-full h-96" /> */}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
                <div className="lg:text-6xl font-extrabold tracking-wider bgVideoText absolute left-[3rem]">
                    <h1 className="heading text-[#006600]">21V PRODUCTS</h1>
                    <h1 className="title text-[#181818]">BETTER CHOICE</h1>
                </div>
            </div>
         </div>

        </>
    )
}