import { FaLongArrowAltRight } from "react-icons/fa";

export default function ProductCard(props) {
    const {ImgUrl,title} = props;
    return (
        <>
            <div className=" mb-5">
                <div className="bg-success h-full lg:max-w-[22rem] md:w-80 sm:w-80 rounded-md flex flex-col justify-center items-center relative">
                    <div className="relative bg-white h-80 sm:max-w-60 rounded-md bottom-5 flex justify-center items-center">
                        <img src={ImgUrl} className='flex justify-center items-center h-full' />
                    </div>
                    <h1 className='text-white text-xl font-bold text-center pb-[4rem]'>{title}</h1>
                    <div className='h-24 w-24 bg-zinc-500 rounded-full flex justify-center items-center absolute -bottom-12'>
                        <FaLongArrowAltRight className="text-white text-xl"/>
                    </div>
                </div>
            </div>
        </>
    )
}

// import { FaLongArrowAltRight } from "react-icons/fa";

// export default function ProductCard(props) {
//     const { ImgUrl, title } = props;
//     return (
//         <div className="mb-5">
//             <div className="bg-success h-full lg:max-w-full sm:max-w-[22rem] rounded-md flex flex-col justify-center items-center relative">
//                 <div className="relative bg-white h-80 max-w-48 max-h-64 sm:w-full rounded-md bottom-5 flex justify-center items-center">
//                     <img src={ImgUrl} className="h-full max-w-full" alt="Product" style={{ maxWidth: "90%" }} />
//                 </div>
//                 <h1 className="text-white text-xl font-bold text-center pb-[4rem]">{title}</h1>
//                 <div className="h-24 w-24 bg-zinc-500 rounded-full flex justify-center items-center absolute -bottom-12">
//                     <FaLongArrowAltRight className="text-white text-xl" />
//                 </div>
//             </div>
//         </div>
//     );
// }
