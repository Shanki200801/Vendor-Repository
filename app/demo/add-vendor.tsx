"use client";
import React, { useState, useEffect } from "react";
import { Dialog, Button, TextField, Text } from "@radix-ui/themes";

const AddVendor = () => {
  const [vendor_name, setVendorName] = useState("");
  const [vendor_address1, setVendorAddress1] = useState("");
  const [vendor_address2, setVendorAddress2] = useState("");
  const [zip_code, setZipCode] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [bank_account_number, setBankAccountNumber] = useState("");
  const [bank_name, setBankName] = useState("");

  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <Button className="rounded-md bg-green-600 p-2 text-white">
          Add vendor
        </Button>
      </Dialog.Trigger>
      <Dialog.Content className="z-20" style={{ maxWidth: 450 }}>
        <Text as="div" size="2" mb="1" weight="bold">
          Name
        </Text>
        <TextField.Input
          placeholder="Enter vendor name"
          required
          value={vendor_name}
          onChange={(e) => setVendorName(e.target.value)}
        />
        <Text as="div" size="2" mb="1" weight="bold">
          Address line 1
        </Text>
        <TextField.Input
          placeholder="Enter vendor address line 1"
          value={vendor_address1}
          onChange={(e) => setVendorAddress1(e.target.value)}
        />
        <Text as="div" size="2" mb="1" weight="bold">
          Address line 2
        </Text>
        <TextField.Input
          placeholder="Enter vendor address line 2"
          required
          value={vendor_address2}
          onChange={(e) => setVendorAddress2(e.target.value)}
        />
        <Text as="div" size="2" mb="1" weight="bold">
          Zip code
        </Text>
        <TextField.Input
          placeholder="Enter zip code"
          required
          value={zip_code}
          onChange={(e) => setZipCode(e.target.value)}
        />
        <Text as="div" size="2" mb="1" weight="bold">
          City
        </Text>
        <TextField.Input
          placeholder="Enter city"
          required
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <Text as="div" size="2" mb="1" weight="bold">
          Country
        </Text>
        <TextField.Input
          placeholder="Enter country"
          required
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
        <Text as="div" size="2" mb="1" weight="bold">
          Bank account number
        </Text>
        <TextField.Input
          placeholder="Enter bank account number"
          required
          value={bank_account_number}
          onChange={(e) => setBankAccountNumber(e.target.value)}
        />
        <Text as="div" size="2" mb="1" weight="bold">
          Bank name
        </Text>
        <TextField.Input
          placeholder="Enter bank name"
          required
          value={bank_name}
          onChange={(e) => setBankName(e.target.value)}
        />
      </Dialog.Content>
    </Dialog.Root>
  );
};

export default AddVendor;
