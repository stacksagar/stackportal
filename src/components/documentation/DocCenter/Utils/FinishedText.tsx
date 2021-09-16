import { CheckCircleIcon } from "@heroicons/react/solid";

export default function FinishedText({text}) {
 return (
  <h1 className="text-lg inline-flex items-center tracking-wide text-white bg-green-600 my-5 px-3 py-0.5 rounded">
  <CheckCircleIcon className="w-5 mr-3" />
  <span>{text}</span>
</h1>
 )
}
