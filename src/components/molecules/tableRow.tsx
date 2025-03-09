import React from "react";

const TableRow = React.memo(({ item }: { item: any }) => {
  return (
    <tr
      key={item.uuid}
      className={`${
        item.status === "high" ? "text-green-500" : "text-[#FF0800]"
      } font-sans`}
    >
      <td className="px-4">{item.Time}</td>
      <td className="px-4">
        {item.stock} Made {item.status} of
      </td>
      <td className="px-4">{item.price}</td>
    </tr>
  );
});

export default TableRow;
