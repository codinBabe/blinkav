import { contactSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button, Input, Textarea } from "../ui";

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data: any) => {
    console.log(data);
    setSubmitted(true);
    reset();
  };

  if (submitted) {
    return (
      <div className="text-center mt-10 text-[17px]">
        Thanks for contacting us! We will be in touch with you shortly.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mx-auto mt-6">
      <div className="grid grid-cols-1 gap-5">
        <Input
          type="text"
          {...register("name")}
          placeholder="Your Full Name"
          className="bg-white"
        />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}

        <Input
          type="email"
          {...register("email")}
          placeholder="Your Email"
          autoComplete="email"
          className="bg-white"
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}

        <Input
          type="text"
          {...register("phone")}
          placeholder="Your Contact Number"
          className="bg-white"
        />
        {errors.phone && <p className="text-red-500">{errors.phone.message}</p>}
      </div>

      <Textarea
        {...register("message")}
        name="message"
        placeholder="Your Message"
        className="w-full mt-6 bg-white"
        rows={5}
      ></Textarea>
      {errors.message && (
        <p className="text-red-500">{errors.message.message}</p>
      )}

      <Button
        type="submit"
        variant={"gradient"}
        className="mt-6 font-semibold"
        size={"lg"}
      >
        Submit
      </Button>
    </form>
  );
};

export default ContactForm;
