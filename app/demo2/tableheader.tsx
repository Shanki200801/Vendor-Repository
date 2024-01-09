"use client";

import { useState } from "react";
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";

const TableHeaderRow = ({ onDatachange }: { onDatachange: () => void }) => {
  const [vendor_name, setVendorName] = useState("");
  const [vendor_address1, setVendorAddress1] = useState("");
  const [vendor_address2, setVendorAddress2] = useState("");
  const [zip_code, setZipCode] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [bank_account_number, setBankAccountNumber] = useState("");
  const [bank_name, setBankName] = useState("");
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

  const fnAddVendor = async () => {
    const vendor = {
      vendor_name: vendor_name,
      vendor_address1: vendor_address1,
      vendor_address2: vendor_address2,
      zip_code: zip_code,
      city: city,
      country: country,
      bank_account_number: bank_account_number,
      bank_name: bank_name,
    };
    console.log("vendor is being added", vendor);
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_NEXTAPP_URL}/api/addvendor`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(vendor),
      },
    );
    const data = await res.json();
    console.log("data", data);
    onDatachange();
  };
  return (
    <div className=" z-30 mx-auto flex  h-auto w-full py-2 text-black">
      <h1 className="w-4/5 text-center text-2xl">Vendor Table</h1>
      <Dialog>
        <DialogTrigger>
          <Button className="rounded-lg bg-green-700 px-2 py-1 text-white ">
            Add vendor
          </Button>
        </DialogTrigger>

        <DialogContent className="h-3/4 overflow-scroll">
          <DialogHeader>
            <DialogTitle>Add vendor</DialogTitle>
            <div
              style={{ maxHeight: "100%", overflow: "auto" }}
              className="p-4"
            >
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
                  onClick={() => fnAddVendor()}
                >
                  Confirm
                </Button>
              </DialogClose>
            </DialogFooter>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default TableHeaderRow;
