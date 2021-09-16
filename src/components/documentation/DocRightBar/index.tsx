import CustomWork from './CustomWork';
import FontsizeHandler from './FontsizeHandler';
import ScrollHandler from './ScrollHandler';

export default function DocRightBar({ doc_center_ref }) {
  return (
    <div className="w-pixel_375 hidden md:flex flex-col items-center justify-evenly h-full border-l border-gray-500 border-opacity-30">
      <FontsizeHandler />
      <ScrollHandler doc_center_ref={doc_center_ref} />
      <CustomWork />
    </div>
  );
}
