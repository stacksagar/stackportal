import Image from "next/image";
const DocImage = ({ src, width, height }) => (
 <div className="w-full ring-1 ring-gray-400 rounded my-1 overflow-hidden flex items-center">
   <Image width={width} height={height} src={src} />
 </div>
);

export default DocImage