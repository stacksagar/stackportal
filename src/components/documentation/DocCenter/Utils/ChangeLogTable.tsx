export const ChangeLog = ({
  date,
  version, 
  action,
}: {
  date: string;
  version: string;
  action: "new release" | "update" | "fixed";
}) => (
  <tr className="">
    <td className="p-4 text-center">
      <p className="text-2xl">{date}</p>
    </td>
    <td className="p-4  text-center">
      <span className="px-3 rounded text-white bg-gray-500 py-0.5">
        {version}
      </span>
    </td>
    <td className="p-4 text-center">
      <p>
        {action == "new release" ? (
          <>
            <span className="bg-pink-500 text-white px-2 py-0.5 mr-1 rounded">
              new
            </span>
            <span>release</span>
          </>
        ) : action == "update" ? (
          <span className="bg-green-600 text-white px-2 py-0.5 rounded">
            {action}
          </span>
        ) : (
          <span className="bg-pink-600 text-white px-2 py-0.5 rounded">
            {action}
          </span>
        )}
      </p>
    </td>
  </tr>
);

export default function ChangeLogTable({ children }) {
  return (
    <table className="table-fixed border-separate w-full">
      <thead>
        <tr>
          <th className="w-1/2 border p-1 bg-black text-gray-300">Date</th>
          <th className="w-1/4 border p-1 bg-black text-gray-300">Version</th>
          <th className="w-1/4 border p-1 bg-black text-gray-300">Details</th>
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  );
}
