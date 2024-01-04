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

export async function getVendors(page: number, pageSize: number) {
  // Check if page number and page size are valid
  if (page < 1 || pageSize < 1) {
    throw new Error("Page number and page size must be greater than 0");
  }

  const vendors = await prisma.vendor.findMany({
    skip: (page - 1) * pageSize,
    take: pageSize,
  });

  // Check if there are no more records to retrieve
  if (vendors.length === 0) {
    throw new Error("No more vendors to retrieve");
  }

  return vendors;
}

export async function deleteVendor(id: string) {
  await prisma.vendor.delete({
    where: {
      id: id,
    },
  });
}

export async function updateVendor(
  id: string,
  vendor_name: string,
  address1: string,
  address2: string,
  bank_account_no: string,
  bank_name: string,
  country: string,
  city: string,
  zip_code: string,
) {
  await prisma.vendor.update({
    where: {
      id: id,
    },
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
}

export async function getVendor(id: string) {
  const vendor = await prisma.vendor.findUnique({
    where: {
      id: id,
    },
  });

  return vendor;
}
