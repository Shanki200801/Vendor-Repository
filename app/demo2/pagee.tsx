"use client";
import { useEffect, useState } from "react";
import { Vendor, columns } from "./columns";
import { DataTable } from "./data-table";
import TableHeaderRow from "./tableheader";
import { env } from "process";

// async function getData(): Promise<Vendor[]> {
//   // Fetch data from your API here.
//   console.log("Fetching data...");
//   const response = await fetch("http://localhost:3000/api/getvendors", {
//     method: "GET",
//     headers: {},
//   });
//   const data = await response.json();

//   return data;
// }
export default function DemoPage(initialdata: any) {
  const [data, setData] = useState(initialdata.initialdata);

  const fetchData = async () => {
    const response = await fetch(`${env.NEXT_PUBLIC_NEXTAPP_URL}/api/getvendors`, {
      method: "GET",
      headers: {},
    });
    const data = await response.json();
    setData(data);
  };
  console.log("Data", data);
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className=" mx-12 flex w-full flex-col items-center px-2 ">
      <TableHeaderRow onDatachange={fetchData} />
      <DataTable columns={columns} data={data} onDatachange={fetchData} />
    </div>
  );
}
