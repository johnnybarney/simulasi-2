"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { GradientBorder } from "@/components/ui/GradientBorder";
import { SelectField, TextArea, TextField } from "@/components/ui/TextField";
import { contactContent } from "@/lib/constants/contact";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const { form, inquiryTypes } = contactContent;

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <GradientBorder thick glow rounded="lg" innerClassName="px-8 py-16 text-center">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border-2 border-cyan-neon bg-cyan-neon/10">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00e5ff" strokeWidth="2">
            <path d="M20 6 9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3 className="font-headline text-2xl font-bold text-white">{form.successTitle}</h3>
        <p className="mx-auto mt-4 max-w-sm text-white/80">{form.successMessage}</p>
      </GradientBorder>
    );
  }

  return (
    <GradientBorder thick glow rounded="lg" innerClassName="p-8 md:p-10">
      <h2 className="mb-8 font-headline text-2xl font-bold text-white">{form.title}</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid gap-6 sm:grid-cols-2">
          <TextField id="name" label="Full Name" name="name" required placeholder="Your name" />
          <TextField
            id="email"
            label="Email Address"
            name="email"
            type="email"
            required
            placeholder="you@organization.com"
          />
        </div>
        <TextField
          id="organization"
          label="Organization"
          name="organization"
          placeholder="Company or agency name"
        />
        <SelectField
          id="inquiry"
          label="Inquiry Type"
          name="inquiry"
          options={inquiryTypes}
          required
        />
        <TextArea
          id="message"
          label="Message"
          name="message"
          required
          placeholder="Tell us about your cyber resilience goals..."
        />
        <Button type="submit" variant="primary" className="w-full sm:w-auto">
          {form.submitLabel}
        </Button>
      </form>
    </GradientBorder>
  );
}
