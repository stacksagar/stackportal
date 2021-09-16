import { ExternalLinkIcon } from "@heroicons/react/solid";

const DocRefLink = ({ text, link }: { text: string; link: string }) => (
  <a target="_blank" className="inline-flex text-blue-400 mx-1" href={link}>
    {text}
    <ExternalLinkIcon className="w-3" />
  </a>
);

export default DocRefLink;
