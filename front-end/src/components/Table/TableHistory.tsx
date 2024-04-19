import { formatDateDDMMYYYwithTime } from "@/utils/formatDate"
import { User } from "@/utils/store/useUser";
import { Concert } from "../CardConcert";

export interface TableHistoryProps {
  histories: History[]
}

export interface History {
  date: Date;
  user: User;
  concert: Concert;
  action: string;
}

export default function TableHistory({histories}: TableHistoryProps) {

  const defaultHeaderCss = "py-4 border"
  const defaultRowCss = "px-6 py-4 border"

  return (
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-100">
        <tr>
          <th
            className={`${defaultHeaderCss}`}
          >
            Date Time
          </th>
          <th className={`${defaultHeaderCss}`}
          >
            Username
          </th>
          <th className={`${defaultHeaderCss}`}
          >
            Concert name
          </th>
          <th className={`${defaultHeaderCss}`}
          >
            Action
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {
          histories.map((history, index) => {
            return (
              <tr key={index}>
                <td className={`${defaultRowCss}`}>{formatDateDDMMYYYwithTime(new Date(history?.date))}</td>
                <td className={`${defaultRowCss}`}>{ history?.user?.name }</td>
              <td className={`${defaultRowCss}`}>{ history?.concert?.name }</td>
                <td className={`${defaultRowCss}`}>{history?.action}</td>
              </tr>
            )
          })
        }
      </tbody>
    </table>

  )
}