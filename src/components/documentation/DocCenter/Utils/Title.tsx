const Title = ({ text, no_my }: { text: string; no_my?: boolean }) => (
  <h1
    className={`${
      no_my ? "mt-0 mb-3" : "mt-10 mb-3"
    } text-2xl text-gray-900 dark:text-gray-200 md:text-3xl font-bold`}
  >
    {text}
  </h1>
);

export default Title;
