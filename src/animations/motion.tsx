"use client";
import * as React from "react";
import { motion, Variants } from "framer-motion";

interface MotionProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
  variants: Variants;
  className?: string;
  once?: boolean;
  amount?: number;
  children: React.ReactNode;
}

export const Motion = ({
  as: Tag = "div",
  variants,
  className = "",
  once = true,
  children,
  ...rest
}: MotionProps) => {
  const MotionTag = motion.create(Tag);

  return (
    <MotionTag
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once }}
      className={className}
      {...rest}
    >
      {children}
    </MotionTag>
  );
};
