import React, { useState, useEffect } from "react";
import { z } from "zod";
import { ContactPageData } from "../portfolio.types";
import DataDisplayHandler from "../../../shared/components/data-display-handler";

const contactFormSchema = z.object({
  firstName: z.string().min(1, { message: "First Name is required." }),
  lastName: z.string().optional(),
  email: z
    .string()
    .min(1, { message: "Email Address is required." })
    .email({ message: "Please enter a valid email address." }),
});

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
}

interface ContactSectionProps {
  contactData: ContactPageData | null;
}

const ContactSection: React.FC<ContactSectionProps> = ({ contactData }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: "",
    lastName: "",
    email: "",
  });

  const [formErrors, setFormErrors] = useState<z.ZodError | null>(null);
  const [hasSubmittedOnce, setHasSubmittedOnce] = useState(false);

  const scheduleLinkFromData = contactData?.scheduleLink;

  const validateCurrentForm = () => {
    const result = contactFormSchema.safeParse({
      firstName: formData.firstName.trim(),
      lastName: formData.lastName.trim(),
      email: formData.email.trim(),
    });
    if (!result.success) {
      setFormErrors(result.error);
      return false;
    }
    setFormErrors(null);
    return true;
  };

  useEffect(() => {
    if (hasSubmittedOnce) {
      validateCurrentForm();
    }
  }, [formData, hasSubmittedOnce]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setHasSubmittedOnce(true);
    if (!validateCurrentForm()) {
      return;
    }
    if (!scheduleLinkFromData) {
      console.warn(
        "Schedule link is not configured. Form submission will not redirect."
      );
      return;
    }

    const params = new URLSearchParams();
    if (formData.firstName)
      params.append("firstName", formData.firstName.trim());
    if (formData.lastName) params.append("lastName", formData.lastName.trim());
    if (formData.email) params.append("email", formData.email.trim());

    const redirectUrl = `${scheduleLinkFromData}?${params.toString()}`;
    window.location.href = redirectUrl;
  };

  const getError = (fieldName: keyof ContactFormData) => {
    return formErrors?.errors.find((err) => err.path[0] === fieldName)?.message;
  };

  const baseInputClass =
    "border rounded px-3 py-2 bg-neutral-50 text-neutral-800 text-sm focus:outline-none";
  const normalBorderClass =
    "border-neutral-200 focus:ring-2 focus:ring-neutral-300";
  const errorBorderClass = "border-red-500 focus:ring-2 focus:ring-red-500";

  return (
    <DataDisplayHandler
      loading={false}
      error={null}
      dataCheck={() => !!contactData && !!contactData.scheduleLink}
      noDataComponent={
        <div
          id="contact"
          className="border border-neutral-300 rounded-xl p-6 bg-white shadow-sm scroll-mt-20"
        >
          <p className="text-neutral-500 text-sm">
            Contact information or scheduling link is not available.
          </p>
        </div>
      }
    >
      {contactData && (
        <div
          id="contact"
          className="border border-neutral-300 rounded-xl p-6 bg-white shadow-sm flex flex-col gap-4 scroll-mt-20"
        >
          <div className="flex items-center gap-3">
            <i className="fab fa-google text-neutral-700 text-2xl"></i>
            <div>
              <h2 className="block text-neutral-800 text-xl font-semibold">
                Schedule with Google Calendar
              </h2>
              <span className="block text-neutral-500 text-sm">
                Let's Connect & Discuss
              </span>
            </div>
          </div>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-3 mt-2"
            noValidate
          >
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  aria-required="true"
                  className={`${baseInputClass} w-full ${
                    getError("firstName") ? errorBorderClass : normalBorderClass
                  }`}
                />
                {getError("firstName") && (
                  <p className="text-red-500 text-xs mt-1">
                    {getError("firstName")}
                  </p>
                )}
              </div>
              <div className="flex-1">
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name (Optional)"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className={`${baseInputClass} w-full ${
                    getError("lastName") ? errorBorderClass : normalBorderClass
                  }`}
                />
                {getError("lastName") && (
                  <p className="text-red-500 text-xs mt-1">
                    {getError("lastName")}
                  </p>
                )}
              </div>
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleInputChange}
                aria-required="true"
                className={`${baseInputClass} w-full ${
                  getError("email") ? errorBorderClass : normalBorderClass
                }`}
              />
              {getError("email") && (
                <p className="text-red-500 text-xs mt-1">{getError("email")}</p>
              )}
            </div>

            <p className="text-sm text-neutral-600 text-center mt-4 mb-2 font-medium">
              Your next big idea is just a conversation away. Schedule now!
            </p>
            <button
              type="submit"
              className="px-4 py-2 bg-neutral-900 text-white rounded hover:bg-black transition-colors duration-150 ease-in-out text-sm"
              disabled={!scheduleLinkFromData}
            >
              Schedule with Google Calendar
            </button>
          </form>
        </div>
      )}
    </DataDisplayHandler>
  );
};

export default ContactSection;
