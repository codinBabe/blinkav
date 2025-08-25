// "use client";
// import {
//   ArrowLeftIcon,
//   ArrowRightIcon,
//   BuildingOfficeIcon,
//   CameraIcon,
//   CheckCircleIcon,
//   HomeIcon,
//   HomeModernIcon,
//   MicrophoneIcon,
//   SpeakerWaveIcon,
// } from "@heroicons/react/24/outline";
// import {
//   Badge,
//   Button,
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
//   Input,
//   Label,
//   RadioGroup,
//   RadioGroupItem,
//   Textarea,
// } from "../ui";
// import { Controller, useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { ProjectWizardData, projectWizardSchema } from "@/schemas";
// import { useState } from "react";
// import {
//   calculateDueDate,
//   generateInvoiceNumber,
// } from "./utils/invoice-generator";

// // Company information - Configure this for your business
// const COMPANY_INFO = {
//   name: "Blinkav Ltd",
//   address: "Monica Court 5, Royal Pine Estate, Orchid Rd, Lagos, Nigeria",
//   phone: "+234-916-3244-921",
//   email: "odevservices@gmail.com",
// };

// // Pricing Maps (kept for email calculations)
// const projectTypePrices: Record<string, number> = {
//   surveillance: 500000,
//   conference: 800000,
//   cinema: 1200000,
//   multiroom: 700000,
//   automation: 100000,
// };

// const propertyTypePrices: Record<string, number> = {
//   residential: 100000,
//   commercial: 300000,
//   hospitality: 500000,
// };

// const roomPricing: Record<string, number> = {
//   residential: 100000,
//   commercial: 250000,
//   hospitality: 400000,
// };

// const subtypeAddons: Record<string, number> = {
//   Apartment: 200000,
//   Duplex: 300000,
//   Office: 500000,
//   Lounge: 350000,
//   Store: 250000,
//   "Event Center": 100000,
//   "Hotel/Shelter": 120000,
//   Hospital: 150000,
// };

// const wiringPrices: Record<string, number> = {
//   yes: 0,
//   no: 200000,
//   partial: 100000,
// };

// const getPriceBreakdown = (data: ProjectWizardData) => {
//   const breakdown = [];
//   const {
//     projectType,
//     propertyType,
//     propertySubtype,
//     hasExistingWiring,
//     roomCount,
//   } = data;

//   if (projectType) {
//     breakdown.push({
//       label: `Project Type (${projectType})`,
//       price: projectTypePrices[projectType] || 0,
//     });
//   }

//   if (propertyType) {
//     breakdown.push({
//       label: `Property Type (${propertyType})`,
//       price: propertyTypePrices[propertyType] || 0,
//     });
//   }

//   if (propertySubtype && subtypeAddons[propertySubtype]) {
//     breakdown.push({
//       label: `Building Description (${propertySubtype})`,
//       price: subtypeAddons[propertySubtype],
//     });
//   }

//   if (hasExistingWiring) {
//     breakdown.push({
//       label: `Wiring (${hasExistingWiring})`,
//       price: wiringPrices[hasExistingWiring] || 0,
//     });
//   }

//   const parsedRoomCount = Number(roomCount) || 0;
//   const roomRate = roomPricing[propertyType] || 0;
//   if (parsedRoomCount > 0) {
//     breakdown.push({
//       label: `Room Count (${parsedRoomCount} × ₦${roomRate})`,
//       price: parsedRoomCount * roomRate,
//     });
//   }

//   const total = breakdown.reduce((sum, item) => sum + item.price, 0);
//   return { breakdown, total };
// };

// const ProjectWizardForm = () => {
//   const [currentStep, setCurrentStep] = useState(1);
//   const [submitted, setIsSubmitted] = useState(false);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitError, setSubmitError] = useState<string | null>(null);

//   const defaultValues: ProjectWizardData = {
//     projectType: "",
//     propertyType: "",
//     propertySubtype: "",
//     roomCount: "",
//     hasExistingWiring: "",
//     contactInfo: {
//       name: "",
//       phone: "",
//       email: "",
//       additionalInfo: "",
//     },
//   };

//   const {
//     control,
//     watch,
//     register,
//     handleSubmit,
//     setValue,
//     reset,
//     formState: { errors },
//   } = useForm<ProjectWizardData>({
//     resolver: zodResolver(projectWizardSchema),
//     defaultValues,
//     mode: "onChange",
//   });

//   const projectTypes = [
//     {
//       id: "surveillance",
//       label: "Surveillance & CCTV",
//       icon: CameraIcon,
//       description: "Security cameras and monitoring systems",
//     },
//     {
//       id: "conference",
//       label: "Conference Room/Boardroom",
//       icon: MicrophoneIcon,
//       description: "Professional meeting room solutions",
//     },
//     {
//       id: "cinema",
//       label: "Cinema/Media Room",
//       icon: SpeakerWaveIcon,
//       description: "Home theater and media systems",
//     },
//     {
//       id: "multiroom",
//       label: "Multiroom Audio",
//       icon: SpeakerWaveIcon,
//       description: "Whole-home audio distribution",
//     },
//     {
//       id: "automation",
//       label: "Home Automation",
//       icon: HomeIcon,
//       description: "Smart home control systems",
//     },
//   ];

//   const propertyTypes = [
//     {
//       id: "residential",
//       label: "Residential",
//       icon: HomeIcon,
//       subtypes: ["Home", "Apartment", "Duplex"],
//     },
//     {
//       id: "commercial",
//       label: "Commercial",
//       icon: BuildingOfficeIcon,
//       subtypes: ["Office", "Lounge", "Store", "Event Center"],
//     },
//     {
//       id: "hospitality",
//       label: "Hospitality",
//       icon: HomeModernIcon,
//       subtypes: ["Hotel/Shelter", "Hospital"],
//     },
//   ];

//   const propertyType = watch("propertyType");
//   const propertySubtype = watch("propertySubtype");

//   const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, 4));
//   const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 1));

//   const onSubmit = async (data: ProjectWizardData) => {
//     setIsSubmitting(true);
//     setSubmitError(null);
//     try {
//       const pricing = getPriceBreakdown(data);
//       const invoiceData = {
//         ...data,
//         pricing,
//         invoiceNumber: generateInvoiceNumber(),
//         date: new Date().toISOString().split("T")[0],
//         dueDate: calculateDueDate(30),
//         companyInfo: COMPANY_INFO,
//       };

//       console.log("Sending invoice data:", invoiceData);

//       const response = await fetch("/api/send-invoice", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(invoiceData),
//       });

//       const result = await response.json();
//       if (result.success) {
//         setIsSubmitted(true);
//         reset();
//       } else {
//         throw new Error(result.message || "Failed to send invoice");
//       }
//     } catch (error) {
//       console.error("Error submitting form:", error);
//       setSubmitError(
//         "Failed to send your quote. Please try again or contact us directly."
//       );
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   if (submitted) {
//     return (
//       <div className="text-center mt-10">
//         <div className="mb-6">
//           <CheckCircleIcon className="w-16 h-16 text-green-500 mx-auto mb-4" />
//         </div>
//         <h2 className="text-2xl font-bold mb-4 text-green-600">
//           Quote Sent Successfully!
//         </h2>
//         <p className="text-[17px] mb-4">
//           Thank you for your quote request! We&apos;ve sent a detailed estimate
//           to your email address.
//         </p>
//         <p className="text-sm text-gray-600 mb-6">
//           Our team will contact you within 24 hours to schedule a consultation.
//         </p>
//         <Button
//           onClick={() => {
//             setIsSubmitted(false);
//             setCurrentStep(1);
//           }}
//           variant="outline"
//         >
//           Submit Another Quote
//         </Button>
//       </div>
//     );
//   }

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       {/* Progress Indicator */}
//       <div className="flex justify-center mb-8">
//         {[1, 2, 3, 4].map((step) => (
//           <div key={step} className="flex items-center">
//             <div
//               className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all ${
//                 step <= currentStep
//                   ? "bg-primary border-primary text-primary-foreground"
//                   : "border-border bg-background text-muted-foreground"
//               }`}
//             >
//               {step < currentStep ? (
//                 <CheckCircleIcon className="w-5 h-5" />
//               ) : (
//                 <span>{step}</span>
//               )}
//             </div>
//             {step < 4 && (
//               <div
//                 className={`w-16 h-0.5 ${
//                   step < currentStep ? "bg-primary" : "bg-border"
//                 }`}
//               />
//             )}
//           </div>
//         ))}
//       </div>

//       <Card className="shadow">
//         <CardContent className="p-8">
//           {/* Step 1: Project Type */}
//           {currentStep === 1 && (
//             <>
//               <CardHeader className="px-0 pt-0">
//                 <CardTitle>Select Project Type</CardTitle>
//                 <CardDescription>
//                   What system do you want to install?
//                 </CardDescription>
//               </CardHeader>
//               <Controller
//                 control={control}
//                 name="projectType"
//                 render={({ field }) => (
//                   <RadioGroup
//                     value={field.value}
//                     onValueChange={field.onChange}
//                     className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4"
//                   >
//                     {projectTypes.map(
//                       ({ id, label, icon: Icon, description }) => (
//                         <Label
//                           key={id}
//                           htmlFor={id}
//                           className={`flex items-start space-x-3 p-4 border-2 rounded-lg cursor-pointer transition-all ${
//                             field.value === id
//                               ? "border-primary bg-primary/5"
//                               : "border-border"
//                           }`}
//                         >
//                           <RadioGroupItem
//                             value={id}
//                             id={id}
//                             className="sr-only"
//                           />
//                           <Icon className="w-6 h-6 text-primary" />
//                           <div>
//                             <div className="font-medium">{label}</div>
//                             <div className="text-sm text-muted-foreground">
//                               {description}
//                             </div>
//                           </div>
//                         </Label>
//                       )
//                     )}
//                   </RadioGroup>
//                 )}
//               />
//               {errors.projectType && (
//                 <p className="text-red-500 mt-2">
//                   {errors.projectType.message}
//                 </p>
//               )}
//             </>
//           )}

//           {/* Step 2: Property Type */}
//           {currentStep === 2 && (
//             <>
//               <CardHeader className="px-0 pt-0">
//                 <CardTitle>Select Property Type</CardTitle>
//                 <CardDescription>
//                   What type of property is this for?
//                 </CardDescription>
//               </CardHeader>
//               <Controller
//                 control={control}
//                 name="propertyType"
//                 render={({ field }) => (
//                   <RadioGroup
//                     value={field.value}
//                     onValueChange={field.onChange}
//                     className="space-y-4 mb-6 mt-4"
//                   >
//                     {propertyTypes.map(({ id, label, icon: Icon }) => (
//                       <Label
//                         key={id}
//                         htmlFor={`property-${id}`}
//                         className={`flex items-center space-x-3 p-4 border-2 rounded-lg cursor-pointer transition-all ${
//                           field.value === id
//                             ? "border-primary bg-primary/5"
//                             : "border-border"
//                         }`}
//                       >
//                         <RadioGroupItem
//                           value={id}
//                           id={`property-${id}`}
//                           className="sr-only"
//                         />
//                         <Icon className="w-6 h-6 text-primary" />
//                         <div className="flex flex-col">
//                           <span>{label}</span>
//                         </div>
//                       </Label>
//                     ))}
//                   </RadioGroup>
//                 )}
//               />
//               <div className="mb-4">
//                 <Label className="block mb-2">Building Description</Label>
//                 <div className="flex flex-wrap gap-2">
//                   {propertyTypes
//                     .find((pt) => pt.id === propertyType)
//                     ?.subtypes.map((sub) => (
//                       <Badge
//                         key={sub}
//                         variant={
//                           propertySubtype === sub ? "default" : "outline"
//                         }
//                         className={`cursor-pointer ${
//                           propertySubtype === sub ? "bg-primary text-white" : ""
//                         }`}
//                         onClick={() => setValue("propertySubtype", sub)}
//                       >
//                         {sub}
//                       </Badge>
//                     ))}
//                 </div>
//               </div>
//               {errors.propertySubtype && (
//                 <p className="text-red-500 mt-2">
//                   {errors.propertySubtype.message}
//                 </p>
//               )}
//             </>
//           )}

//           {/* Step 3: Room Count & Wiring */}
//           {currentStep === 3 && (
//             <>
//               <CardHeader className="px-0 pt-0">
//                 <CardTitle>Project Details</CardTitle>
//                 <CardDescription>
//                   Tell us more about your project scope
//                 </CardDescription>
//               </CardHeader>
//               <div className="space-y-6 mt-4">
//                 <div>
//                   <Label htmlFor="roomCount" className="block mb-2">
//                     Number of rooms/zones
//                   </Label>
//                   <Input
//                     {...register("roomCount")}
//                     placeholder="e.g., 5"
//                     className="bg-background"
//                     type="number"
//                     min="1"
//                   />
//                   {errors.roomCount && (
//                     <p className="text-red-500 text-sm mt-1">
//                       {errors.roomCount.message}
//                     </p>
//                   )}
//                 </div>

//                 <div>
//                   <Label className="block mb-3">
//                     Do you have existing wiring or devices?
//                   </Label>
//                   <Controller
//                     control={control}
//                     name="hasExistingWiring"
//                     render={({ field }) => (
//                       <RadioGroup
//                         value={field.value}
//                         onValueChange={field.onChange}
//                       >
//                         {[
//                           {
//                             value: "yes",
//                             label: "Yes, I have existing infrastructure",
//                             description: "We can work with your current setup",
//                           },
//                           {
//                             value: "no",
//                             label: "No, this is a new installation",
//                             description:
//                               "Complete new system installation required",
//                           },
//                           {
//                             value: "partial",
//                             label: "Some existing, needs upgrade",
//                             description:
//                               "Partial upgrade and integration needed",
//                           },
//                         ].map((option) => (
//                           <div
//                             key={option.value}
//                             className="flex items-start space-x-2 p-3 border rounded-lg"
//                           >
//                             <RadioGroupItem
//                               id={option.value}
//                               value={option.value}
//                               className="mt-1"
//                             />
//                             <Label
//                               htmlFor={option.value}
//                               className="flex-1 cursor-pointer"
//                             >
//                               <div className="font-medium">{option.label}</div>
//                               <div className="text-sm text-muted-foreground mt-1">
//                                 {option.description}
//                               </div>
//                             </Label>
//                           </div>
//                         ))}
//                       </RadioGroup>
//                     )}
//                   />
//                   {errors.hasExistingWiring && (
//                     <p className="text-red-500 text-sm mt-2">
//                       {errors.hasExistingWiring.message}
//                     </p>
//                   )}
//                 </div>
//               </div>
//             </>
//           )}

//           {/* Step 4: Contact Info */}
//           {currentStep === 4 && (
//             <>
//               <CardHeader className="px-0 pt-0">
//                 <CardTitle>Contact Information</CardTitle>
//                 <CardDescription>
//                   How can we reach you with your personalized quote?
//                 </CardDescription>
//               </CardHeader>

//               {/* Contact Form */}
//               <div className="space-y-4 mt-4">
//                 <div>
//                   <Label htmlFor="name">Full Name *</Label>
//                   <Input
//                     {...register("contactInfo.name")}
//                     placeholder="Enter your full name"
//                     className="mt-1"
//                   />
//                   {errors.contactInfo?.name && (
//                     <p className="text-red-500 text-sm mt-1">
//                       {errors.contactInfo.name.message}
//                     </p>
//                   )}
//                 </div>

//                 <div>
//                   <Label htmlFor="phone">Phone Number *</Label>
//                   <Input
//                     {...register("contactInfo.phone")}
//                     placeholder="+234-xxx-xxx-xxxx"
//                     type="tel"
//                     className="mt-1"
//                   />
//                   {errors.contactInfo?.phone && (
//                     <p className="text-red-500 text-sm mt-1">
//                       {errors.contactInfo.phone.message}
//                     </p>
//                   )}
//                 </div>

//                 <div>
//                   <Label htmlFor="email">Email Address *</Label>
//                   <Input
//                     {...register("contactInfo.email")}
//                     placeholder="your.email@example.com"
//                     type="email"
//                     className="mt-1"
//                   />
//                   {errors.contactInfo?.email && (
//                     <p className="text-red-500 text-sm mt-1">
//                       {errors.contactInfo.email.message}
//                     </p>
//                   )}
//                 </div>

//                 <div>
//                   <Label htmlFor="additionalInfo">
//                     Additional Information (Optional)
//                   </Label>
//                   <Textarea
//                     {...register("contactInfo.additionalInfo")}
//                     placeholder="Tell us more about your specific requirements, timeline, or any questions you have..."
//                     rows={4}
//                     className="mt-1"
//                   />
//                 </div>
//               </div>

//               {/* Terms Notice */}
//               <div className="mt-6 p-4 bg-gray-50 rounded-lg text-sm text-gray-600">
//                 <p className="font-medium mb-2">What happens next:</p>
//                 <ul className="list-disc list-inside space-y-1">
//                   <li>
//                     You&apos;ll receive a detailed quote via email within
//                     minutes
//                   </li>
//                   <li>Our team will contact you within 24 hours</li>
//                   <li>
//                     We&apos;ll schedule a free consultation to discuss your
//                     project
//                   </li>
//                   <li>Final pricing will be confirmed after site inspection</li>
//                   <li>Quote is valid for 30 days</li>
//                 </ul>
//               </div>

//               {/* Error Message */}
//               {submitError && (
//                 <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
//                   <p className="text-red-600 text-sm">{submitError}</p>
//                 </div>
//               )}
//             </>
//           )}

//           {/* Navigation */}
//           <div className="flex justify-between mt-10">
//             <Button
//               type="button"
//               onClick={prevStep}
//               disabled={currentStep === 1 || isSubmitting}
//               variant="outline"
//             >
//               <ArrowLeftIcon className="w-5 h-5 mr-2" />
//               Back
//             </Button>

//             {currentStep < 4 ? (
//               <Button type="submit" onClick={nextStep} variant="gradient">
//                 Next
//                 <ArrowRightIcon className="w-5 h-5 ml-2" />
//               </Button>
//             ) : (
//               <Button
//                 type="submit"
//                 variant="gradient"
//                 disabled={isSubmitting}
//                 className="min-w-[140px]"
//               >
//                 {isSubmitting ? (
//                   <>
//                     <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
//                     Sending...
//                   </>
//                 ) : (
//                   <>
//                     Get My Quote
//                     <CheckCircleIcon className="w-4 h-4 ml-2" />
//                   </>
//                 )}
//               </Button>
//             )}
//           </div>
//         </CardContent>
//       </Card>
//     </form>
//   );
// };

// export default ProjectWizardForm;

"use client";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  BuildingOfficeIcon,
  CameraIcon,
  CheckCircleIcon,
  HomeIcon,
  HomeModernIcon,
  MicrophoneIcon,
  SpeakerWaveIcon,
} from "@heroicons/react/24/outline";
import {
  Badge,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Input,
  Label,
  RadioGroup,
  RadioGroupItem,
  Textarea,
} from "../ui";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ProjectWizardData, projectWizardSchema } from "@/schemas";
import { useState } from "react";
import {
  calculateDueDate,
  generateInvoiceNumber,
} from "./utils/invoice-generator";

// Company information - Configure this for your business
const COMPANY_INFO = {
  name: "Blinkav Ltd",
  address: "Monica Court 5, Royal Pine Estate, Orchid Rd, Lagos, Nigeria",
  phone: "+234-916-3244-921",
  email: "info@blinkav.co",
};

// Updated pricing structure based on PDF
const surveillancePricing = {
  residential: {
    Home: {
      lessThan4: 478504,
      between4And8: 662000,
      moreThan8: 1356500
    },
    Apartment: {
      lessThan4: 323252,
      between4And8: 393000,
      moreThan8: 1356500
    },
    Duplex: {
      lessThan4: 405654,
      between4And8: 662000,
      moreThan8: 1356500
    }
  },
  // Add commercial and hospitality if needed - using residential as fallback for now
  commercial: {
    Office: {
      lessThan4: 478504,
      between4And8: 662000,
      moreThan8: 1356500
    },
    Lounge: {
      lessThan4: 478504,
      between4And8: 662000,
      moreThan8: 1356500
    },
    Store: {
      lessThan4: 478504,
      between4And8: 662000,
      moreThan8: 1356500
    },
    "Event Center": {
      lessThan4: 478504,
      between4And8: 662000,
      moreThan8: 1356500
    }
  },
  hospitality: {
    "Hotel/Shelter": {
      lessThan4: 478504,
      between4And8: 662000,
      moreThan8: 1356500
    },
    Hospital: {
      lessThan4: 478504,
      between4And8: 662000,
      moreThan8: 1356500
    }
  }
};

const audioPricing = {
  residential: {
    Home: {
      lessThan4: 182000,
      between4And8: 1425545,
      moreThan8: 2120000
    },
    Apartment: {
      lessThan4: 90000,
      between4And8: 1425545,
      moreThan8: 2120000
    },
    Duplex: {
      lessThan4: 120000,
      between4And8: 1945000,
      moreThan8: 2322550
    }
  },
  // Add commercial and hospitality tiers
  commercial: {
    Office: {
      lessThan4: 182000,
      between4And8: 1945000,
      moreThan8: 3974500
    },
    Lounge: {
      lessThan4: 182000,
      between4And8: 1945000,
      moreThan8: 5563230
    },
    Store: {
      lessThan4: 182000,
      between4And8: 1425545,
      moreThan8: 2120000
    },
    "Event Center": {
      lessThan4: 182000,
      between4And8: 1945000,
      moreThan8: 5563230
    }
  },
  hospitality: {
    "Hotel/Shelter": {
      lessThan4: 182000,
      between4And8: 1945000,
      moreThan8: 3974500
    },
    Hospital: {
      lessThan4: 182000,
      between4And8: 1945000,
      moreThan8: 3974500
    }
  }
};

// Projects that should redirect to consultation
const consultationOnlyProjects = ["cinema", "conference", "automation"];

const getRoomTier = (roomCount: number) => {
  if (roomCount < 4) return "lessThan4";
  if (roomCount >= 4 && roomCount <= 8) return "between4And8";
  return "moreThan8";
};

const getPriceBreakdown = (data: ProjectWizardData) => {
  const breakdown = [];
  const {
    projectType,
    propertyType,
    propertySubtype,
    hasExistingWiring,
    roomCount,
  } = data;

  // For consultation-only projects, return zero pricing
  if (consultationOnlyProjects.includes(projectType)) {
    breakdown.push({
      label: `${projectType} - Consultation Required`,
      price: 0,
    });
    return { breakdown, total: 0, requiresConsultation: true };
  }

  const parsedRoomCount = Number(roomCount) || 1;
  const roomTier = getRoomTier(parsedRoomCount);

  let basePrice = 0;

  if (projectType === "surveillance") {
    const pricing = surveillancePricing[propertyType as keyof typeof surveillancePricing];
    if (pricing && propertySubtype) {
      const subtypePricing = pricing[propertySubtype as keyof typeof pricing];
      if (subtypePricing) {
        basePrice = subtypePricing[roomTier as keyof typeof subtypePricing];
        breakdown.push({
          label: `CCTV Surveillance - ${propertySubtype} (${parsedRoomCount} rooms)`,
          price: basePrice,
        });
      }
    }
  } else if (projectType === "multiroom") {
    const pricing = audioPricing[propertyType as keyof typeof audioPricing];
    if (pricing && propertySubtype) {
      const subtypePricing = pricing[propertySubtype as keyof typeof pricing];
      if (subtypePricing) {
        basePrice = subtypePricing[roomTier as keyof typeof subtypePricing];
        breakdown.push({
          label: `Multiroom Audio - ${propertySubtype} (${parsedRoomCount} rooms)`,
          price: basePrice,
        });
      }
    }
  }

  // Apply existing wiring discount only if customer has existing infrastructure
  if (hasExistingWiring === "yes" && basePrice > 0) {
    // Note: According to PDF, if customer has existing cabling, prices shouldn't reflect the full amount
    // Assuming 20% discount for existing infrastructure
    const discount = Math.floor(basePrice * 0.2);
    breakdown.push({
      label: "Existing Infrastructure Discount",
      price: -discount,
    });
  }

  const total = breakdown.reduce((sum, item) => sum + item.price, 0);
  return { breakdown, total, requiresConsultation: false };
};

const ProjectWizardForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [submitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [showConsultation, setShowConsultation] = useState(false);

  const defaultValues: ProjectWizardData = {
    projectType: "",
    propertyType: "",
    propertySubtype: "",
    roomCount: "",
    hasExistingWiring: "",
    contactInfo: {
      name: "",
      phone: "",
      email: "",
      additionalInfo: "",
    },
  };

  const {
    control,
    watch,
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<ProjectWizardData>({
    resolver: zodResolver(projectWizardSchema),
    defaultValues,
    mode: "onChange",
  });

  const projectTypes = [
    {
      id: "surveillance",
      label: "Surveillance & CCTV",
      icon: CameraIcon,
      description: "Security cameras and monitoring systems",
    },
    {
      id: "conference",
      label: "Conference Room/Boardroom",
      icon: MicrophoneIcon,
      description: "Professional meeting room solutions",
      requiresConsultation: true,
    },
    {
      id: "cinema",
      label: "Cinema/Media Room",
      icon: SpeakerWaveIcon,
      description: "Home theater and media systems",
      requiresConsultation: true,
    },
    {
      id: "multiroom",
      label: "Multiroom Audio",
      icon: SpeakerWaveIcon,
      description: "Whole-home audio distribution",
    },
    {
      id: "automation",
      label: "Home Automation",
      icon: HomeIcon,
      description: "Smart home control systems",
      requiresConsultation: true,
    },
  ];

  const propertyTypes = [
    {
      id: "residential",
      label: "Residential",
      icon: HomeIcon,
      subtypes: ["Home", "Apartment", "Duplex"],
    },
    {
      id: "commercial",
      label: "Commercial",
      icon: BuildingOfficeIcon,
      subtypes: ["Office", "Lounge", "Store", "Event Center"],
    },
    {
      id: "hospitality",
      label: "Hospitality",
      icon: HomeModernIcon,
      subtypes: ["Hotel/Shelter", "Hospital"],
    },
  ];

  const propertyType = watch("propertyType");
  const propertySubtype = watch("propertySubtype");
  const projectType = watch("projectType");

  const nextStep = () => {
    if (currentStep === 1 && consultationOnlyProjects.includes(projectType)) {
      setShowConsultation(true);
      return;
    }
    setCurrentStep((prev) => Math.min(prev + 1, 4));
  };

  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 1));

  const onSubmit = async (data: ProjectWizardData) => {
    setIsSubmitting(true);
    setSubmitError(null);
    try {


      // Generate pricing breakdown using updated data
      const pricing = getPriceBreakdown(data);
      // Convert "yes"/"no" to boolean and update the data object
      const normalizedData = {
        ...data,
        hasExistingWiring: data.hasExistingWiring?.toLowerCase() === "yes"
      };

      // Build invoice data
      const invoiceData = {
        ...normalizedData,
        pricing,
        invoiceNumber: generateInvoiceNumber(),
        date: new Date().toISOString().split("T")[0],
        dueDate: calculateDueDate(30),
        companyInfo: COMPANY_INFO,
      };

      console.log("Sending invoice data:", invoiceData);

      const response = await fetch("http://localhost:8000/invoice", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(invoiceData),
      });

      const result = await response.json();
      if (result.success) {
        setIsSubmitted(true);
        reset();
      } else {
        throw new Error(result.message || "Failed to send invoice");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitError(
        "Failed to send your quote. Please try again or contact us directly."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  // Consultation redirect screen
  if (showConsultation) {
    return (
      <div className="text-center mt-10">
        <div className="mb-6">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <MicrophoneIcon className="w-8 h-8 text-blue-600" />
          </div>
        </div>
        <h2 className="text-2xl font-bold mb-4 text-blue-600">
          Consultation Required
        </h2>
        <p className="text-[17px] mb-4">
          For {projectTypes.find(p => p.id === projectType)?.label} projects, we need to understand your specific requirements through a detailed consultation.
        </p>
        <p className="text-sm text-gray-600 mb-6">
          Please fill out our consultation form so our experts can provide you with a customized solution and accurate pricing.
        </p>
        <div className="flex gap-4 justify-center">
          <Button
            onClick={() => setShowConsultation(false)}
            variant="outline"
          >
            Go Back
          </Button>
          <Button
            onClick={() => {
              // Redirect to consultation form - you'll need to implement this
              window.location.href = "/contact";
            }}
            variant="default"
          >
            Request Consultation
          </Button>
        </div>
      </div>
    );
  }

  if (submitted) {
    return (
      <div className="text-center mt-10">
        <div className="mb-6">
          <CheckCircleIcon className="w-16 h-16 text-green-500 mx-auto mb-4" />
        </div>
        <h2 className="text-2xl font-bold mb-4 text-green-600">
          Quote Sent Successfully!
        </h2>
        <p className="text-[17px] mb-4">
          Thank you for your quote request! We&apos;ve sent a detailed estimate
          to your email address.
        </p>
        <p className="text-sm text-gray-600 mb-6">
          Our team will contact you within 24 hours to schedule a consultation.
        </p>
        <Button
          onClick={() => {
            setIsSubmitted(false);
            setCurrentStep(1);
            setShowConsultation(false);
          }}
          variant="outline"
        >
          Submit Another Quote
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Progress Indicator */}
      <div className="flex justify-center mb-8">
        {[1, 2, 3, 4].map((step) => (
          <div key={step} className="flex items-center">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all ${step <= currentStep
                  ? "bg-primary border-primary text-primary-foreground"
                  : "border-border bg-background text-muted-foreground"
                }`}
            >
              {step < currentStep ? (
                <CheckCircleIcon className="w-5 h-5" />
              ) : (
                <span>{step}</span>
              )}
            </div>
            {step < 4 && (
              <div
                className={`w-16 h-0.5 ${step < currentStep ? "bg-primary" : "bg-border"
                  }`}
              />
            )}
          </div>
        ))}
      </div>

      <Card className="shadow">
        <CardContent className="p-8">
          {/* Step 1: Project Type */}
          {currentStep === 1 && (
            <>
              <CardHeader className="px-0 pt-0">
                <CardTitle>Select Project Type</CardTitle>
                <CardDescription>
                  What system do you want to install?
                </CardDescription>
              </CardHeader>
              <Controller
                control={control}
                name="projectType"
                render={({ field }) => (
                  <RadioGroup
                    value={field.value}
                    onValueChange={field.onChange}
                    className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4"
                  >
                    {projectTypes.map(
                      ({ id, label, icon: Icon, description, requiresConsultation }) => (
                        <Label
                          key={id}
                          htmlFor={id}
                          className={`flex items-start space-x-3 p-4 border-2 rounded-lg cursor-pointer transition-all ${field.value === id
                              ? "border-primary bg-primary/5"
                              : "border-border"
                            }`}
                        >
                          <RadioGroupItem
                            value={id}
                            id={id}
                            className="sr-only"
                          />
                          <Icon className="w-6 h-6 text-primary" />
                          <div className="flex-1">
                            <div className="font-medium flex items-center gap-2">
                              {label}
                              {requiresConsultation && (
                                <Badge variant="secondary" className="text-xs">
                                  Consultation Required
                                </Badge>
                              )}
                            </div>
                            <div className="text-sm text-muted-foreground">
                              {description}
                            </div>
                          </div>
                        </Label>
                      )
                    )}
                  </RadioGroup>
                )}
              />
              {errors.projectType && (
                <p className="text-red-500 mt-2">
                  {errors.projectType.message}
                </p>
              )}
            </>
          )}

          {/* Step 2: Property Type */}
          {currentStep === 2 && (
            <>
              <CardHeader className="px-0 pt-0">
                <CardTitle>Select Property Type</CardTitle>
                <CardDescription>
                  What type of property is this for?
                </CardDescription>
              </CardHeader>
              <Controller
                control={control}
                name="propertyType"
                render={({ field }) => (
                  <RadioGroup
                    value={field.value}
                    onValueChange={field.onChange}
                    className="space-y-4 mb-6 mt-4"
                  >
                    {propertyTypes.map(({ id, label, icon: Icon }) => (
                      <Label
                        key={id}
                        htmlFor={`property-${id}`}
                        className={`flex items-center space-x-3 p-4 border-2 rounded-lg cursor-pointer transition-all ${field.value === id
                            ? "border-primary bg-primary/5"
                            : "border-border"
                          }`}
                      >
                        <RadioGroupItem
                          value={id}
                          id={`property-${id}`}
                          className="sr-only"
                        />
                        <Icon className="w-6 h-6 text-primary" />
                        <div className="flex flex-col">
                          <span>{label}</span>
                        </div>
                      </Label>
                    ))}
                  </RadioGroup>
                )}
              />
              <div className="mb-4">
                <Label className="block mb-2">Building Description</Label>
                <div className="flex flex-wrap gap-2">
                  {propertyTypes
                    .find((pt) => pt.id === propertyType)
                    ?.subtypes.map((sub) => (
                      <Badge
                        key={sub}
                        variant={
                          propertySubtype === sub ? "default" : "outline"
                        }
                        className={`cursor-pointer ${propertySubtype === sub ? "bg-primary text-white" : ""
                          }`}
                        onClick={() => setValue("propertySubtype", sub)}
                      >
                        {sub}
                      </Badge>
                    ))}
                </div>
              </div>
              {errors.propertySubtype && (
                <p className="text-red-500 mt-2">
                  {errors.propertySubtype.message}
                </p>
              )}
            </>
          )}

          {/* Step 3: Room Count & Wiring */}
          {currentStep === 3 && (
            <>
              <CardHeader className="px-0 pt-0">
                <CardTitle>Project Details</CardTitle>
                <CardDescription>
                  Tell us more about your project scope
                </CardDescription>
              </CardHeader>
              <div className="space-y-6 mt-4">
                <div>
                  <Label htmlFor="roomCount" className="block mb-2">
                    Number of rooms/zones
                  </Label>
                  <Input
                    {...register("roomCount")}
                    placeholder="e.g., 5"
                    className="bg-background"
                    type="number"
                    min="1"
                  />
                  {errors.roomCount && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.roomCount.message}
                    </p>
                  )}
                  <p className="text-sm text-gray-500 mt-1">
                    Pricing tiers: Less than 4 rooms | 4-8 rooms | More than 8 rooms
                  </p>
                </div>

                <div>
                  <Label className="block mb-3">
                    Do you have existing wiring or devices?
                  </Label>
                  <Controller
                    control={control}
                    name="hasExistingWiring"
                    render={({ field }) => (
                      <RadioGroup
                        value={field.value}
                        onValueChange={field.onChange}
                      >
                        {[
                          {
                            value: "yes",
                            label: "Yes, I have existing infrastructure",
                            description: "We can work with your current setup (Discount applies)",
                          },
                          {
                            value: "no",
                            label: "No, this is a new installation",
                            description:
                              "Complete new system installation required",
                          },
                          {
                            value: "partial",
                            label: "Some existing, needs upgrade",
                            description:
                              "Partial upgrade and integration needed",
                          },
                        ].map((option) => (
                          <div
                            key={option.value}
                            className="flex items-start space-x-2 p-3 border rounded-lg"
                          >
                            <RadioGroupItem
                              id={option.value}
                              value={option.value}
                              className="mt-1"
                            />
                            <Label
                              htmlFor={option.value}
                              className="flex-1 cursor-pointer"
                            >
                              <div className="font-medium">{option.label}</div>
                              <div className="text-sm text-muted-foreground mt-1">
                                {option.description}
                              </div>
                            </Label>
                          </div>
                        ))}
                      </RadioGroup>
                    )}
                  />
                  {errors.hasExistingWiring && (
                    <p className="text-red-500 text-sm mt-2">
                      {errors.hasExistingWiring.message}
                    </p>
                  )}
                </div>
              </div>
            </>
          )}

          {/* Step 4: Contact Info */}
          {currentStep === 4 && (
            <>
              <CardHeader className="px-0 pt-0">
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>
                  How can we reach you with your personalized quote?
                </CardDescription>
              </CardHeader>

              {/* Contact Form */}
              <div className="space-y-4 mt-4">
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    {...register("contactInfo.name")}
                    placeholder="Enter your full name"
                    className="mt-1"
                  />
                  {errors.contactInfo?.name && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.contactInfo.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    {...register("contactInfo.phone")}
                    placeholder="+234-xxx-xxx-xxxx"
                    type="tel"
                    className="mt-1"
                  />
                  {errors.contactInfo?.phone && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.contactInfo.phone.message}
                    </p>
                  )}
                </div>

                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    {...register("contactInfo.email")}
                    placeholder="your.email@example.com"
                    type="email"
                    className="mt-1"
                  />
                  {errors.contactInfo?.email && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.contactInfo.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <Label htmlFor="additionalInfo">
                    Additional Information (Optional)
                  </Label>
                  <Textarea
                    {...register("contactInfo.additionalInfo")}
                    placeholder="Tell us more about your specific requirements, timeline, or any questions you have..."
                    rows={4}
                    className="mt-1"
                  />
                </div>
              </div>

              {/* Terms Notice */}
              <div className="mt-6 p-4 bg-gray-50 rounded-lg text-sm text-gray-600">
                <p className="font-medium mb-2">What happens next:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>
                    You&apos;ll receive a detailed quote via email within
                    minutes
                  </li>
                  <li>Our team will contact you within 24 hours</li>
                  <li>
                    We&apos;ll schedule a free consultation to discuss your
                    project
                  </li>
                  <li>Final pricing will be confirmed after site inspection</li>
                  <li>Quote is valid for 30 days</li>
                </ul>
              </div>

              {/* Error Message */}
              {submitError && (
                <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-600 text-sm">{submitError}</p>
                </div>
              )}
            </>
          )}

          {/* Navigation */}
          <div className="flex justify-between mt-10">
            <Button
              type="button"
              onClick={prevStep}
              disabled={currentStep === 1 || isSubmitting}
              variant="outline"
            >
              <ArrowLeftIcon className="w-5 h-5 mr-2" />
              Back
            </Button>

            {currentStep < 4 ? (
              <Button type="submit" onClick={nextStep} variant="gradient">
                Next
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </Button>
            ) : (
              <Button
                type="submit"
                variant="gradient"
                disabled={isSubmitting}
                className="min-w-[140px]"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                    Sending...
                  </>
                ) : (
                  <>
                    Get My Quote
                    <CheckCircleIcon className="w-4 h-4 ml-2" />
                  </>
                )}
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </form>
  );
};

export default ProjectWizardForm;
