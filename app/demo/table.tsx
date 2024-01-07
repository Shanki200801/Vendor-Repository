import { useState } from "react";
import AddVendor from "./add-vendor";
import { getServerSideProps } from "next/dist/build/templates/pages";

// add your table items dynamically through this element
// add props or whatever later
const TableElement = ({ vendor_name, bank_account_number, bank_name }) => {
  return (
    <>
      <li className="col-start-1 border-b border-r border-b-black/10 border-r-black/30 py-2">
        {vendor_name}
      </li>
      <li className="col-start-2 border-b border-r border-b-black/10 border-r-black/30 py-2">
        {bank_account_number}
      </li>
      <li className="col-start-3 border-b border-r border-b-black/10 border-r-black/30 py-2">
        {bank_name}
      </li>
      <li className="col-start-4 border-b border-r border-b-black/10 border-r-black/30 py-2">
        <button className="text-blue-500">Edit</button>
      </li>
      <li className="col-start-5 border-b border-b-black/10 py-2">
        <button className="text-red-500">Delete</button>
      </li>
    </>
  );
};

export default async function VendorTable() {
  //Make an API request to get vendor count
  const countResponse = await fetch("/api/getvendorcount", {
    method: "GET",
    headers: {},
  });
  //Make a GET request to the API to api/getvendors to get all vendors details
  const response = await fetch("/api/getvendors", {
    method: "GET",
    headers: {},
  });

  const vendors = await response.json();
  const count = await countResponse.json();
  console.log("Vendors", vendors);
  console.log("Count", count);

  return (
    <section id="vendor-table" className="flex w-[60vw] flex-col font-default">
      <div className="grid grid-cols-5 items-center justify-between p-2 tracking-tight">
        <p className="col-start-1 justify-self-start">Listed Vendors</p>
        <p className="col-start-5 justify-self-end">
          <AddVendor />
        </p>
      </div>
      <div>
        <ul className="grid grid-cols-5 grid-rows-1 items-center border border-b-0 border-black/20 text-center font-semibold uppercase">
          <li className="col-start-1 border-r border-black/30 py-4">
            Vendor Name
          </li>
          <li className="col-start-2 border-r border-black/30 py-4">
            Account Number
          </li>
          <li className="col-start-3 border-r border-black/30 py-4">
            Bank Name
          </li>
          <li className="col-span-2">Modifications</li>
        </ul>
        <ul className="grid auto-rows-auto grid-cols-5 items-center border border-black/20 border-t-black/40 text-center">
          {vendors.map((vendor) => (
            <TableElement
              key={vendor.id}
              vendor_name={vendor.vendor_name}
              bank_account_number={vendor.bank_account_number}
              bank_name={vendor.bank_name}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}
