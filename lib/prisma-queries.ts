import prisma from "./prisma";
import { Session, User } from "@prisma/client";

export const addVendor = async (
  vendor_name: string,
  address1: string,
  address2: string,
  bank_account_no: string,
  bank_name: string,
  country: string,
  city: string,
  zip_code: string,
) => {
  await prisma.vendor.create({
    data: {
      vendor_name: vendor_name,
      address1: address1,
      address2: address2,
      bank_account_no: bank_account_no,
      bank_name: bank_name,
      city: city,
      country: country,
      zip_code: zip_code,
    },
  });
};
