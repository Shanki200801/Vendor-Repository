import React from "react";
import VendorTable from "./table";

const TableWrapper = async () => {
  //Make an API request to get vendor count
  // const countResponse = await fetch("/api/getvendorcount", {
  //   method: "GET",
  //   headers: {},
  // });
  // //Make a GET request to the API to api/getvendors to get all vendors details
  // const response = await fetch("/api/getvendors", {
  //   body: JSON.stringify({
  //     page: 1,
  //     limit: 10,
  //   }),
  //   method: "GET",
  //   headers: {},
  // });

  // const vendors = await response.json();
  // const count = await countResponse.json();
  // console.log("Vendors", vendors);
  // console.log("Count", count);

  return (
    <div>
      <VendorTable
        vendors={[
          {
            id: "1",
            vendor_name: "...",
            bank_account_numer: "123",
            bank_name: "sbi",
          },
        ]}
      />
    </div>
  );
};

export default TableWrapper;
