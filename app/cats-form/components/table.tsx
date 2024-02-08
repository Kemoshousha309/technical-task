import { KeyVal, Property, SelectOption } from "@/app/types/catsForm.types";

interface TableProps {
  tData: KeyVal[];
}

export function Table({ tData }: TableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="table text-center">
        {/* head */}
        <thead>
          <tr>
            <th>#</th>
            <th>Key</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {tData.map((row) => {
            return (
              <tr key={row.key}>
                <th>#</th>
                <td>{row.key}</td>
                <td>{!row.value ? "unset" : row.value}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
