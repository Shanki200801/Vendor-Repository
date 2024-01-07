"use client";
import React, { useState, useEffect } from "react";
import { Dialog, Button, TextField, Text, Flex } from "@radix-ui/themes";

const AddVendor = () => {
  const [vendor_name, setVendorName] = useState("");
  const [vendor_address1, setVendorAddress1] = useState("");
  const [vendor_address2, setVendorAddress2] = useState("");
  const [zip_code, setZipCode] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [bank_account_number, setBankAccountNumber] = useState("");
  const [bank_name, setBankName] = useState("");

  async function handleSave(e: React.FormEvent): Promise<void> {
    e.preventDefault();
    const response = await fetch("/api/addvendor", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        vendor_name,
        vendor_address1,
        vendor_address2,
        bank_account_number,
        bank_name,
        country,
        city,
        zip_code,
      }),
    });

    if (!response.ok) {
      console.error("HTTP error", response.status);
    } else {
      try {
        const data = await response.json();
        console.log("Add vendor finished", data);
      } catch (err) {
        console.error("Failed to parse JSON", err);
      }
    }
  }
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
    <Dialog.Root>
      <Dialog.Trigger>
        <Button className="rounded-md bg-green-600 p-2 text-white">
          Add vendor
        </Button>
      </Dialog.Trigger>
      <Dialog.Content
        className="fixed  left-1/2 top-1/2 z-20 my-4 max-w-[75vw] translate-x-[-50%] translate-y-[-50%] transform flex-col items-center justify-center rounded-3xl bg-white px-8"
        style={{ maxHeight: "90%", overflow: "auto" }}
      >
        <div style={{ maxHeight: "100%", overflow: "auto" }} className="py-4">
          {formFields.map((field, index) => (
            <div key={index}>
              <Text as="div" size="1" mb="1">
                {field.label}
              </Text>
              <TextField.Input
                placeholder={field.placeholder}
                required={field.required}
                value={field.value}
                variant="soft"
                onChange={field.onChange}
              />
            </div>
          ))}

          <Flex
            gap="3"
            mt="4"
            justify="end"
            className="my-2 flex flex-row justify-around"
          >
            <Dialog.Close>
              <Button
                variant="soft"
                color="gray"
                className="rounded-md bg-red-700 px-2 py-1 text-white"
              >
                Cancel
              </Button>
            </Dialog.Close>
            <Dialog.Close>
              <Button
                className="rounded-md bg-green-700 px-2 py-1 text-white"
                onClick={(e) => handleSave(e)}
                type="submit"
              >
                Save
              </Button>
            </Dialog.Close>
          </Flex>
        </div>
      </Dialog.Content>
    </Dialog.Root>
  );
};

export default AddVendor;
