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

// // Pricing Maps
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

// // Room pricing varies by property type
// const roomPricing: Record<string, number> = {
//   residential: 100000,
//   commercial: 250000,
//   hospitality: 400000,
// };

// // Flat fees for subtypes
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

//   const onSubmit = (data: ProjectWizardData) => {
//     const pricing = getPriceBreakdown(data);
//     const submission = { ...data, pricing };

//     console.log("Submitted data:", submission);

//     // Example: send to email API
//     // await fetch("/api/project-wizard", {
//     //   method: "POST",
//     //   headers: { "Content-Type": "application/json" },
//     //   body: JSON.stringify(submission),
//     // });

//     setIsSubmitted(true);
//     reset();
//   };

//   if (submitted) {
//     return (
//       <div className="text-center mt-10 text-[17px]">
//         Thanks for contacting us! We will be in touch with you shortly.
//       </div>
//     );
//   }

//   const breakdown = getPriceBreakdown(watch());

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       {/* Progress */}
//       <div className="flex justify-center mb-8">
//         {[1, 2, 3, 4].map((step) => (
//           <div key={step} className="flex items-center">
//             <div
//               className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all ${
//                 step <= currentStep
//                   ? "bg-[var(--primary)] border-[var(--primary)] text-[var(--primary-foreground)]"
//                   : "border-[var(--border)] bg-[var(--background)] text-[var(--muted-foreground)]"
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
//                   step < currentStep
//                     ? "bg-[var(--primary)]"
//                     : "bg-[var(--border)]"
//                 }`}
//               />
//             )}
//           </div>
//         ))}
//       </div>

//       <Card className="shadow-[var(--elegant)]">
//         <CardContent className="p-8">
//           {/* Step 1 */}
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
//                               ? "border-[var(--primary)] bg-[var(--primary)]/5"
//                               : "border-[var(--border)]"
//                           }`}
//                         >
//                           <RadioGroupItem
//                             value={id}
//                             id={id}
//                             className="sr-only"
//                           />
//                           <Icon className="w-6 h-6 text-[var(--primary)]" />
//                           <div>
//                             <div className="font-medium">{label}</div>
//                             <div className="text-sm text-[var(--muted-foreground)]">
//                               {description}
//                             </div>
//                             <div className="text-sm font-semibold text-[var(--primary)]">
//                               ₦{projectTypePrices[id].toLocaleString()}
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

//           {/* Step 2 */}
//           {currentStep === 2 && (
//             <>
//               <CardHeader className="px-0 pt-0">
//                 <CardTitle>Select Property Type</CardTitle>
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
//                             ? "border-[var(--primary)] bg-[var(--primary)]/5"
//                             : "border-[var(--border)]"
//                         }`}
//                       >
//                         <RadioGroupItem
//                           value={id}
//                           id={`property-${id}`}
//                           className="sr-only"
//                         />
//                         <Icon className="w-6 h-6 text-[var(--primary)]" />
//                         <div className="flex flex-col">
//                           <span>{label}</span>
//                           <span className="text-sm font-semibold text-[var(--primary)]">
//                             ₦{propertyTypePrices[id].toLocaleString()}
//                           </span>
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
//                           propertySubtype === sub
//                             ? "bg-[var(--primary)] text-white"
//                             : ""
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

//           {/* Step 3 */}
//           {currentStep === 3 && (
//             <div className="space-y-6">
//               <Input
//                 {...register("roomCount")}
//                 placeholder="Number of rooms/zones"
//                 className="bg-[var(--background)]"
//               />
//               {errors.roomCount && (
//                 <p className="text-red-500">{errors.roomCount.message}</p>
//               )}
//               <Label className="block mb-2">
//                 Do you have existing wiring or devices?
//               </Label>
//               <Controller
//                 control={control}
//                 name="hasExistingWiring"
//                 render={({ field }) => (
//                   <RadioGroup
//                     value={field.value}
//                     onValueChange={field.onChange}
//                   >
//                     {["yes", "no", "partial"].map((option) => (
//                       <div key={option} className="flex items-center space-x-2">
//                         <RadioGroupItem id={option} value={option} />
//                         <Label htmlFor={option}>
//                           {option === "yes"
//                             ? "Yes, I have existing infrastructure"
//                             : option === "no"
//                             ? "No, this is a new installation"
//                             : "Some existing, needs upgrade"}{" "}
//                           – ₦{wiringPrices[option].toLocaleString()}
//                         </Label>
//                       </div>
//                     ))}
//                   </RadioGroup>
//                 )}
//               />
//               {errors.hasExistingWiring && (
//                 <p className="text-red-500">
//                   {errors.hasExistingWiring.message}
//                 </p>
//               )}
//             </div>
//           )}

//           {/* Step 4 */}
//           {currentStep === 4 && (
//             <>
//               <div className="mb-6">
//                 <Card className="bg-[color:var(--primary)]/15 border-2 border-dotted p-4">
//                   <h4 className="text-base font-medium mb-2">Cost Breakdown</h4>
//                   <ul className="space-y-1 text-sm">
//                     {breakdown.breakdown.map((item, idx) => (
//                       <li key={idx} className="flex justify-between">
//                         <span>{item.label}</span>
//                         <span className="font-medium">
//                           ₦{item.price.toLocaleString()}
//                         </span>
//                       </li>
//                     ))}
//                   </ul>
//                   <div className="mt-3 font-semibold text-base border-t pt-2 flex justify-between">
//                     <span>Total</span>
//                     <span className="text-[var(--primary)]">
//                       ₦{breakdown.total.toLocaleString()}
//                     </span>
//                   </div>
//                 </Card>
//               </div>

//               <div className="space-y-4">
//                 <Input
//                   {...register("contactInfo.name")}
//                   placeholder="Full Name"
//                 />
//                 {errors.contactInfo?.name && (
//                   <p className="text-red-500">
//                     {errors.contactInfo.name.message}
//                   </p>
//                 )}

//                 <Input
//                   {...register("contactInfo.phone")}
//                   placeholder="Phone Number"
//                 />
//                 {errors.contactInfo?.phone && (
//                   <p className="text-red-500">
//                     {errors.contactInfo.phone.message}
//                   </p>
//                 )}

//                 <Input
//                   {...register("contactInfo.email")}
//                   placeholder="Email Address"
//                 />
//                 {errors.contactInfo?.email && (
//                   <p className="text-red-500">
//                     {errors.contactInfo.email.message}
//                   </p>
//                 )}

//                 <Textarea
//                   {...register("contactInfo.additionalInfo")}
//                   placeholder="Additional Info"
//                 />
//               </div>
//             </>
//           )}

//           {/* Navigation */}
//           <div className="flex justify-between mt-10">
//             <Button
//               type="button"
//               onClick={prevStep}
//               disabled={currentStep === 1}
//               variant="outline"
//             >
//               <ArrowLeftIcon className="w-5 h-5 mr-2" />
//               Back
//             </Button>
//             {currentStep < 4 ? (
//               <Button type="button" onClick={nextStep} variant="gradient">
//                 Next
//                 <ArrowRightIcon className="w-5 h-5 ml-2" />
//               </Button>
//             ) : (
//               <Button type="submit" variant="gradient">
//                 Get My Quote
//                 <CheckCircleIcon className="w-4 h-4 ml-2" />
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
import { calculateDueDate, generateInvoiceNumber } from "./utils/invoice-generator";

// Company information - Configure this for your business
const COMPANY_INFO = {
  name: "Blinkav Ltd",
  address: "123 Business District, Victoria Island, Lagos, Nigeria",
  phone: "+234-xxx-xxx-xxxx",
  email: "odevservices@gmail.com",
};

// Pricing Maps (same as before)
const projectTypePrices: Record<string, number> = {
  surveillance: 500000,
  conference: 800000,
  cinema: 1200000,
  multiroom: 700000,
  automation: 100000,
};

const propertyTypePrices: Record<string, number> = {
  residential: 100000,
  commercial: 300000,
  hospitality: 500000,
};

const roomPricing: Record<string, number> = {
  residential: 100000,
  commercial: 250000,
  hospitality: 400000,
};

const subtypeAddons: Record<string, number> = {
  Apartment: 200000,
  Duplex: 300000,
  Office: 500000,
  Lounge: 350000,
  Store: 250000,
  "Event Center": 100000,
  "Hotel/Shelter": 120000,
  Hospital: 150000,
};

const wiringPrices: Record<string, number> = {
  yes: 0,
  no: 200000,
  partial: 100000,
};

const getPriceBreakdown = (data: ProjectWizardData) => {
  const breakdown = [];
  const { projectType, propertyType, propertySubtype, hasExistingWiring, roomCount } = data;

  if (projectType) {
    breakdown.push({
      label: `Project Type (${projectType})`,
      price: projectTypePrices[projectType] || 0,
    });
  }

  if (propertyType) {
    breakdown.push({
      label: `Property Type (${propertyType})`,
      price: propertyTypePrices[propertyType] || 0,
    });
  }

  if (propertySubtype && subtypeAddons[propertySubtype]) {
    breakdown.push({
      label: `Building Description (${propertySubtype})`,
      price: subtypeAddons[propertySubtype],
    });
  }

  if (hasExistingWiring) {
    breakdown.push({
      label: `Wiring (${hasExistingWiring})`,
      price: wiringPrices[hasExistingWiring] || 0,
    });
  }

  const parsedRoomCount = Number(roomCount) || 0;
  const roomRate = roomPricing[propertyType] || 0;

  if (parsedRoomCount > 0) {
    breakdown.push({
      label: `Room Count (${parsedRoomCount} × ₦${roomRate})`,
      price: parsedRoomCount * roomRate,
    });
  }

  const total = breakdown.reduce((sum, item) => sum + item.price, 0);
  return { breakdown, total };
};

const ProjectWizardForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [submitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

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
    },
    {
      id: "cinema",
      label: "Cinema/Media Room",
      icon: SpeakerWaveIcon,
      description: "Home theater and media systems",
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

  const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, 4));
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 1));

  const onSubmit = async (data: ProjectWizardData) => {
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const pricing = getPriceBreakdown(data);
      const invoiceData = {
        ...data,
        pricing,
        invoiceNumber: generateInvoiceNumber(),
        date: new Date().toISOString().split('T')[0],
        dueDate: calculateDueDate(30),
        companyInfo: COMPANY_INFO,
      };

      console.log("Sending invoice data:", invoiceData);

      const response = await fetch("/api/send-invoice", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(invoiceData),
      });

      const result = await response.json();

      if (result.success) {
        setIsSubmitted(true);
        reset();
      } else {
        throw new Error(result.message || 'Failed to send invoice');
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitError("Failed to send your quote. Please try again or contact us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="text-center mt-10">
        <div className="mb-6">
          <CheckCircleIcon className="w-16 h-16 text-green-500 mx-auto mb-4" />
        </div>
        <h2 className="text-2xl font-bold mb-4 text-green-600">Quote Sent Successfully!</h2>
        <p className="text-[17px] mb-4">
          Thank you for your quote request! We've sent a detailed estimate to your email address.
        </p>
        <p className="text-sm text-gray-600 mb-6">
          Our team will contact you within 24 hours to schedule a consultation.
        </p>
        <Button
          onClick={() => {
            setIsSubmitted(false);
            setCurrentStep(1);
          }}
          variant="outline"
        >
          Submit Another Quote
        </Button>
      </div>
    );
  }

  const breakdown = getPriceBreakdown(watch());

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Progress Indicator */}
      <div className="flex justify-center mb-8">
        {[1, 2, 3, 4].map((step) => (
          <div key={step} className="flex items-center">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all ${step <= currentStep
                  ? "bg-[var(--primary)] border-[var(--primary)] text-[var(--primary-foreground)]"
                  : "border-[var(--border)] bg-[var(--background)] text-[var(--muted-foreground)]"
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
                className={`w-16 h-0.5 ${step < currentStep ? "bg-[var(--primary)]" : "bg-[var(--border)]"
                  }`}
              />
            )}
          </div>
        ))}
      </div>

      <Card className="shadow-[var(--elegant)]">
        <CardContent className="p-8">
          {/* Step 1: Project Type */}
          {currentStep === 1 && (
            <>
              <CardHeader className="px-0 pt-0">
                <CardTitle>Select Project Type</CardTitle>
                <CardDescription>What system do you want to install?</CardDescription>
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
                    {projectTypes.map(({ id, label, icon: Icon, description }) => (
                      <Label
                        key={id}
                        htmlFor={id}
                        className={`flex items-start space-x-3 p-4 border-2 rounded-lg cursor-pointer transition-all ${field.value === id
                            ? "border-[var(--primary)] bg-[var(--primary)]/5"
                            : "border-[var(--border)]"
                          }`}
                      >
                        <RadioGroupItem value={id} id={id} className="sr-only" />
                        <Icon className="w-6 h-6 text-[var(--primary)]" />
                        <div>
                          <div className="font-medium">{label}</div>
                          <div className="text-sm text-[var(--muted-foreground)]">
                            {description}
                          </div>
                          <div className="text-sm font-semibold text-[var(--primary)]">
                            ₦{projectTypePrices[id].toLocaleString()}
                          </div>
                        </div>
                      </Label>
                    ))}
                  </RadioGroup>
                )}
              />
              {errors.projectType && (
                <p className="text-red-500 mt-2">{errors.projectType.message}</p>
              )}
            </>
          )}

          {/* Step 2: Property Type */}
          {currentStep === 2 && (
            <>
              <CardHeader className="px-0 pt-0">
                <CardTitle>Select Property Type</CardTitle>
                <CardDescription>What type of property is this for?</CardDescription>
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
                            ? "border-[var(--primary)] bg-[var(--primary)]/5"
                            : "border-[var(--border)]"
                          }`}
                      >
                        <RadioGroupItem value={id} id={`property-${id}`} className="sr-only" />
                        <Icon className="w-6 h-6 text-[var(--primary)]" />
                        <div className="flex flex-col">
                          <span>{label}</span>
                          <span className="text-sm font-semibold text-[var(--primary)]">
                            ₦{propertyTypePrices[id].toLocaleString()}
                          </span>
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
                        variant={propertySubtype === sub ? "default" : "outline"}
                        className={`cursor-pointer ${propertySubtype === sub ? "bg-[var(--primary)] text-white" : ""
                          }`}
                        onClick={() => setValue("propertySubtype", sub)}
                      >
                        {sub}
                        {subtypeAddons[sub] && (
                          <span className="ml-2 text-xs">
                            +₦{subtypeAddons[sub].toLocaleString()}
                          </span>
                        )}
                      </Badge>
                    ))}
                </div>
              </div>
              {errors.propertySubtype && (
                <p className="text-red-500 mt-2">{errors.propertySubtype.message}</p>
              )}
            </>
          )}

          {/* Step 3: Room Count & Wiring */}
          {currentStep === 3 && (
            <>
              <CardHeader className="px-0 pt-0">
                <CardTitle>Project Details</CardTitle>
                <CardDescription>Tell us more about your project scope</CardDescription>
              </CardHeader>

              <div className="space-y-6 mt-4">
                <div>
                  <Label htmlFor="roomCount" className="block mb-2">
                    Number of rooms/zones
                  </Label>
                  <Input
                    {...register("roomCount")}
                    placeholder="e.g., 5"
                    className="bg-[var(--background)]"
                    type="number"
                    min="1"
                  />
                  {errors.roomCount && (
                    <p className="text-red-500 text-sm mt-1">{errors.roomCount.message}</p>
                  )}
                </div>

                <div>
                  <Label className="block mb-3">Do you have existing wiring or devices?</Label>
                  <Controller
                    control={control}
                    name="hasExistingWiring"
                    render={({ field }) => (
                      <RadioGroup value={field.value} onValueChange={field.onChange}>
                        {[
                          { value: "yes", label: "Yes, I have existing infrastructure", addon: "No additional cost" },
                          { value: "no", label: "No, this is a new installation", addon: "+₦200,000" },
                          { value: "partial", label: "Some existing, needs upgrade", addon: "+₦100,000" },
                        ].map((option) => (
                          <div key={option.value} className="flex items-center space-x-2">
                            <RadioGroupItem id={option.value} value={option.value} />
                            <Label htmlFor={option.value} className="flex-1">
                              <span>{option.label}</span>
                              <span className="ml-2 text-sm text-[var(--primary)] font-medium">
                                {option.addon}
                              </span>
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

          {/* Step 4: Contact Info & Summary */}
          {currentStep === 4 && (
            <>
              <CardHeader className="px-0 pt-0">
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>How can we reach you?</CardDescription>
              </CardHeader>

              {/* Cost Summary */}
              <div className="mb-6">
                <Card className="bg-[color:var(--primary)]/15 border-2 border-dotted p-4">
                  <h4 className="text-base font-medium mb-2">Cost Breakdown</h4>
                  <ul className="space-y-1 text-sm">
                    {breakdown.breakdown.map((item, idx) => (
                      <li key={idx} className="flex justify-between">
                        <span>{item.label}</span>
                        <span className="font-medium">₦{item.price.toLocaleString()}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-3 font-semibold text-base border-t pt-2 flex justify-between">
                    <span>Total Estimate</span>
                    <span className="text-[var(--primary)]">
                      ₦{breakdown.total.toLocaleString()}
                    </span>
                  </div>
                </Card>
              </div>

              {/* Contact Form */}
              <div className="space-y-4">
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
                  <Label htmlFor="additionalInfo">Additional Information (Optional)</Label>
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
                <p className="font-medium mb-2">Important Notes:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>This is an estimated quote based on provided information</li>
                  <li>Final pricing may vary after site inspection</li>
                  <li>Quote is valid for 30 days</li>
                  <li>We'll contact you within 24 hours</li>
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
