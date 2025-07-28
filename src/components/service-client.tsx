"use client";

import { ServicePageData } from "@/lib";
import { ServiceLayout } from "./layouts";

const ServiceClient = (props: ServicePageData) => {
  return <ServiceLayout {...props} />;
};
export default ServiceClient;
