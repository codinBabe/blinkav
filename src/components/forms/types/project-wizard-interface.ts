export interface ProjectWizardData {
  projectType: string;
  propertyType: string;
  propertySubtype: string;
  roomCount: string;
  hasExistingWiring: string;
  contactInfo: {
    name: string;
    phone: string;
    email: string;
    additionalInfo: string;
  };
}

export interface PriceBreakdownItem {
  label: string;
  price: number;
}

export interface PriceBreakdown {
  breakdown: PriceBreakdownItem[];
  total: number;
}

export interface InvoiceData extends ProjectWizardData {
  pricing: PriceBreakdown;
  invoiceNumber: string;
  date: string;
  dueDate: string;
  companyInfo: {
    name: string;
    address: string;
    phone: string;
    email: string;
  };
}
