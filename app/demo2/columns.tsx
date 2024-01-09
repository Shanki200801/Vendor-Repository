"use client";

import { ColumnDef } from "@tanstack/react-table";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Input } from "@/components/ui/input";

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { DialogClose } from "@radix-ui/react-dialog";
import { env } from "process";
// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Vendor = {
  id: String;
  vendor_name: String;
  vendor_address1: String;
  vendor_address2: String;
  bank_account_number: String;
  bank_name: String;
  country: String;
  city: String;
  zip_code: String;
};

const fndeleteVendor = async (id: String) => {
  console.log("Deleting vendor...");
  const response = await fetch("/api/deletevendor", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: id,
    }),
  });

  if (!response.ok) {
    console.error("HTTP error", response.status);
  } else {
    try {
      const data = await response.json();
      console.log("Delete vendor finished", data);
    } catch (err) {
      console.error("Failed to parse JSON", err);
    }
  }
  window.location.reload();
};

const fnEditVendor = async (vendor: any) => {
  console.log("Editing vendor...", vendor);

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_NEXTAPP_URL}/api/updatevendor`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: vendor.id,
        vendor_name: vendor.vendor_name,
        vendor_address1: vendor.vendor_address1,
        vendor_address2: vendor.vendor_address2,
        bank_account_number: vendor.bank_account_number,
        bank_name: vendor.bank_name,
        country: vendor.country,
        city: vendor.city,
        zip_code: vendor.zip_code,
      }),
    },
  );
  if (response.ok) {
    console.log("Edit vendor finished, reloading");

    window.location.reload();
  } else {
    alert("Error in updating vendor");
  }
};

const EditVendor = (vendor: any) => {
  console.log(vendor);
  vendor = vendor.vendor;
  const [vendor_name, setVendorName] = useState(vendor.vendor_name);
  const [vendor_address1, setVendorAddress1] = useState(vendor.vendor_address1);
  const [vendor_address2, setVendorAddress2] = useState(vendor.vendor_address2);
  const [zip_code, setZipCode] = useState(vendor.zip_code);
  const [city, setCity] = useState(vendor.city);
  const [country, setCountry] = useState(vendor.country);
  const [bank_account_number, setBankAccountNumber] = useState(
    vendor.bank_account_number,
  );
  const [bank_name, setBankName] = useState(vendor.bank_name);

  useEffect(() => {
    vendor = {
      id: vendor.id,
      vendor_name: vendor_name,
      vendor_address1: vendor_address1,
      vendor_address2: vendor_address2,
      zip_code: zip_code,
      city: city,
      country: country,
      bank_account_number: bank_account_number,
      bank_name: bank_name,
    };
  }, [
    vendor_name,
    vendor_address1,
    vendor_address2,
    zip_code,
    city,
    country,
    bank_account_number,
    bank_name,
  ]);
  const [errors, setErrors] = useState<Record<string, string>>({});

  type Field = {
    label: string;
    placeholder: string;
    required: boolean;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  };
  const validateField = (field: Field) => {
    let errors = {} as any;

    // Add your validation logic here
    if (field.required && !field.value) {
      errors[field.label] = "This field is required";
    }

    if (field.label === "Zip Code" && !/^\d{5}$/.test(field.value)) {
      errors[field.label] = "Invalid zip code";
    }

    setErrors(errors);
  };
  const formFields = [
    {
      label: "Vendor Name",
      placeholder: "Enter vendor name",
      required: true,
      value: vendor_name,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        setVendorName(e.target.value),
    },
    {
      label: "Address 1",
      placeholder: "Enter address 1",
      required: true,
      value: vendor_address1,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        setVendorAddress1(e.target.value),
    },
    {
      label: "Address 2",
      placeholder: "Enter address 2",
      required: false,
      value: vendor_address2,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        setVendorAddress2(e.target.value),
    },
    {
      label: "Bank Account No",
      placeholder: "Enter bank account number",
      required: true,
      value: bank_account_number,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        setBankAccountNumber(e.target.value),
    },
    {
      label: "Bank Name",
      placeholder: "Enter bank name",
      required: true,
      value: bank_name,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        setBankName(e.target.value),
    },
    {
      label: "Country",
      placeholder: "Enter country",
      required: true,
      value: country,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        setCountry(e.target.value),
    },
    {
      label: "City",
      placeholder: "Enter city",
      required: true,
      value: city,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        setCity(e.target.value),
    },
    {
      label: "Zip Code",
      placeholder: "Enter zip code",
      required: true,
      value: zip_code,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        setZipCode(e.target.value),
    },
  ];

  return (
    <>
      <DialogTrigger className="text-green-800">Edit vendor</DialogTrigger>

      <DialogContent className="h-3/4 overflow-scroll ">
        <DialogHeader>
          <DialogTitle>Edit vendor</DialogTitle>
        </DialogHeader>
        <div style={{ maxHeight: "100%", overflow: "auto" }} className="p-4">
          {formFields.map((field, index) => (
            <div key={index} className="my-1">
              <p>{field.label}</p>
              <Input
                placeholder={field.placeholder}
                required={field.required}
                value={field.value}
                onChange={(e) => {
                  field.onChange(e);
                  validateField(field);
                }}
                className={errors[field.label] ? "border-red-500" : ""}
              />
            </div>
          ))}
        </div>
        <DialogFooter>
          <DialogClose>
            <Button
              type="submit"
              disabled={Object.keys(errors).length > 0}
              onClick={() => fnEditVendor(vendor)}
            >
              Confirm
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </>
  );
};

const DeleteVendor = (vendor: any) => {
  vendor = vendor.vendor;
  return (
    <>
      <DialogTrigger className="text-red-800">Delete vendor</DialogTrigger>

      <DialogContent className="h-1/4  ">
        <DialogHeader>
          <DialogTitle>Delete vendor</DialogTitle>
        </DialogHeader>
        <div style={{ maxHeight: "100%" }} className="px-4">
          <p>Are you sure you want to delete {vendor.vendor_name}?</p>
        </div>
        <DialogFooter>
          <DialogClose>
            <Button type="submit" onClick={() => fndeleteVendor(vendor.id)}>
              Confirm
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </>
  );
};

export const columns: ColumnDef<Vendor>[] = [
  {
    accessorKey: "vendor_name",
    header: "Vendor Name",
  },
  {
    accessorKey: "bank_account_number",
    header: "Bank Account Number",
  },
  {
    accessorKey: "bank_name",
    header: "Bank Name",
  },

  {
    id: "edit",
    cell: ({ row }) => {
      const vendor = row.original;
      return (
        <Dialog>
          <EditVendor vendor={vendor} />
        </Dialog>
      );
    },
  },
  {
    id: "delete",
    cell: ({ row }) => {
      const vendor = row.original;
      return (
        <Dialog>
          <DeleteVendor vendor={vendor} />
        </Dialog>
      );
    },
  },
];
