export type Tcustomer = {
  name: string;
  address: string;
  suiteFloor?: string;
  city: string;
  state: string;
  zip: string;
  telephone: string;
  fax?: string;
  mapUrl?: string;
  email: string[];
  websiteLink?: string;
  taxId?: string;
  other?: string;
  note?: string;
  isActive?: boolean;
  isDeleted?: boolean;
};
