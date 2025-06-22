import { contactSchema } from "@/schemas/contact.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function ContactForm() {
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
      <div className="neue-font text-center mt-10 text-[17px]">
        Thanks for contacting us! We will be in touch with you shortly.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="neue-font mx-auto mt-6">
      <div className="grid grid-cols-1 gap-5">
        <input
          type="text"
          {...register("name")}
          placeholder="Your Full Name"
          className="p-3.5 bg-white input-dotted outline-none"
        />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}

        <input
          type="email"
          {...register("email")}
          placeholder="Your Email"
          autoComplete="email"
          className="p-3.5 bg-white input-dotted outline-none"
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}

        <input
          type="text"
          {...register("phone")}
          placeholder="Your Contact Number"
          className="p-3.5 bg-white input-dotted outline-none"
        />
        {errors.phone && <p className="text-red-500">{errors.phone.message}</p>}
      </div>

      <textarea
        {...register("message")}
        name="message"
        placeholder="Your Message"
        className="w-full mt-6 p-3.5 bg-white input-dotted outline-none"
        rows={5}
      ></textarea>
      {errors.message && (
        <p className="text-red-500">{errors.message.message}</p>
      )}

      <button
        type="submit"
        className="mt-6 px-6 py-2 bg-[#DDD0C8] text-black font-semibold leading-loose rounded-lg transition-colors"
      >
        Submit
      </button>
    </form>
  );
}
