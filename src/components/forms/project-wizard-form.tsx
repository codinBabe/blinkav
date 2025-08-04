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

// Pricing Maps
const projectTypePrices: Record<string, number> = {
  surveillance: 500,
  conference: 800,
  cinema: 1200,
  multiroom: 700,
  automation: 1000,
};

const propertyTypePrices: Record<string, number> = {
  residential: 100,
  commercial: 300,
  hospitality: 500,
};

// Room pricing varies by property type
const roomPricing: Record<string, number> = {
  residential: 100,
  commercial: 250,
  hospitality: 400,
};

// Flat fees for subtypes
const subtypeAddons: Record<string, number> = {
  Apartment: 200,
  Duplex: 300,
  Office: 500,
  Lounge: 350,
  Store: 250,
  "Event Center": 1000,
  "Hotel/Shelter": 1200,
  Hospital: 1500,
};

const wiringPrices: Record<string, number> = {
  yes: 0,
  no: 200,
  partial: 100,
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

  const onSubmit = (data: ProjectWizardData) => {
    const pricing = getPriceBreakdown(data);
    const submission = { ...data, pricing };

    console.log("Submitted data:", submission);

    // Example: send to email API
    // await fetch("/api/project-wizard", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(submission),
    // });

    setIsSubmitted(true);
    reset();
  };

  if (submitted) {
    return (
      <div className="text-center mt-10 text-[17px]">
        Thanks for contacting us! We will be in touch with you shortly.
      </div>
    );
  }

  const breakdown = getPriceBreakdown(watch());

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Progress */}
      <div className="flex justify-center mb-8">
        {[1, 2, 3, 4].map((step) => (
          <div key={step} className="flex items-center">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all ${
                step <= currentStep
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
                className={`w-16 h-0.5 ${
                  step < currentStep
                    ? "bg-[var(--primary)]"
                    : "bg-[var(--border)]"
                }`}
              />
            )}
          </div>
        ))}
      </div>

      <Card className="shadow-[var(--elegant)]">
        <CardContent className="p-8">
          {/* Step 1 */}
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
                      ({ id, label, icon: Icon, description }) => (
                        <Label
                          key={id}
                          htmlFor={id}
                          className={`flex items-start space-x-3 p-4 border-2 rounded-lg cursor-pointer transition-all ${
                            field.value === id
                              ? "border-[var(--primary)] bg-[var(--primary)]/5"
                              : "border-[var(--border)]"
                          }`}
                        >
                          <RadioGroupItem
                            value={id}
                            id={id}
                            className="sr-only"
                          />
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

          {/* Step 2 */}
          {currentStep === 2 && (
            <>
              <CardHeader className="px-0 pt-0">
                <CardTitle>Select Property Type</CardTitle>
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
                        className={`flex items-center space-x-3 p-4 border-2 rounded-lg cursor-pointer transition-all ${
                          field.value === id
                            ? "border-[var(--primary)] bg-[var(--primary)]/5"
                            : "border-[var(--border)]"
                        }`}
                      >
                        <RadioGroupItem
                          value={id}
                          id={`property-${id}`}
                          className="sr-only"
                        />
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
                        variant={
                          propertySubtype === sub ? "default" : "outline"
                        }
                        className={`cursor-pointer ${
                          propertySubtype === sub
                            ? "bg-[var(--primary)] text-white"
                            : ""
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

          {/* Step 3 */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <Input
                {...register("roomCount")}
                placeholder="Number of rooms/zones"
                className="bg-[var(--background)]"
              />
              {errors.roomCount && (
                <p className="text-red-500">{errors.roomCount.message}</p>
              )}
              <Label className="block mb-2">
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
                    {["yes", "no", "partial"].map((option) => (
                      <div key={option} className="flex items-center space-x-2">
                        <RadioGroupItem id={option} value={option} />
                        <Label htmlFor={option}>
                          {option === "yes"
                            ? "Yes, I have existing infrastructure"
                            : option === "no"
                            ? "No, this is a new installation"
                            : "Some existing, needs upgrade"}{" "}
                          – ₦{wiringPrices[option].toLocaleString()}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                )}
              />
              {errors.hasExistingWiring && (
                <p className="text-red-500">
                  {errors.hasExistingWiring.message}
                </p>
              )}
            </div>
          )}

          {/* Step 4 */}
          {currentStep === 4 && (
            <>
              <div className="mb-6">
                <Card className="bg-[color:var(--primary)]/15 border-2 border-dotted p-4">
                  <h4 className="text-base font-medium mb-2">Cost Breakdown</h4>
                  <ul className="space-y-1 text-sm">
                    {breakdown.breakdown.map((item, idx) => (
                      <li key={idx} className="flex justify-between">
                        <span>{item.label}</span>
                        <span className="font-medium">
                          ₦{item.price.toLocaleString()}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-3 font-semibold text-base border-t pt-2 flex justify-between">
                    <span>Total</span>
                    <span className="text-[var(--primary)]">
                      ₦{breakdown.total.toLocaleString()}
                    </span>
                  </div>
                </Card>
              </div>

              <div className="space-y-4">
                <Input
                  {...register("contactInfo.name")}
                  placeholder="Full Name"
                />
                {errors.contactInfo?.name && (
                  <p className="text-red-500">
                    {errors.contactInfo.name.message}
                  </p>
                )}

                <Input
                  {...register("contactInfo.phone")}
                  placeholder="Phone Number"
                />
                {errors.contactInfo?.phone && (
                  <p className="text-red-500">
                    {errors.contactInfo.phone.message}
                  </p>
                )}

                <Input
                  {...register("contactInfo.email")}
                  placeholder="Email Address"
                />
                {errors.contactInfo?.email && (
                  <p className="text-red-500">
                    {errors.contactInfo.email.message}
                  </p>
                )}

                <Textarea
                  {...register("contactInfo.additionalInfo")}
                  placeholder="Additional Info"
                />
              </div>
            </>
          )}

          {/* Navigation */}
          <div className="flex justify-between mt-10">
            <Button
              type="button"
              onClick={prevStep}
              disabled={currentStep === 1}
              variant="outline"
            >
              <ArrowLeftIcon className="w-5 h-5 mr-2" />
              Back
            </Button>
            {currentStep < 4 ? (
              <Button type="button" onClick={nextStep} variant="gradient">
                Next
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </Button>
            ) : (
              <Button type="submit" variant="gradient">
                Get My Quote
                <CheckCircleIcon className="w-4 h-4 ml-2" />
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </form>
  );
};

export default ProjectWizardForm;
