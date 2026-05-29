import React from "react";
import PageTitle from "./PageTitle";
import { Form } from "react-router-dom";
import apiClient from "../api/apiClient";
import { useActionData, useNavigation } from "react-router-dom";
import { useEffect, useRef } from "react";
import { toast } from "react-toastify";

export default function Contact() {
  const actionData = useActionData(); //The useActionData hook is used to access the data that was returned from the action function defined for this route. In this case, it will contain the success status of the contact form submission.

  const formRef = useRef(null); //The useRef hook is used to create a reference to the form element. This allows us to programmatically reset the form fields after a successful submission.

  const navigation = useNavigation(); //The useNavigation hook is used to access the current navigation state, which can be used to determine if the form is currently being submitted. This can be useful for showing a loading indicator or disabling the submit button while the form is being processed.
  const isSubmitting = navigation.state === "submitting";

  useEffect(() => {
    if (actionData?.success) {
      formRef.current?.reset(); //If the actionData indicates a successful submission (actionData?.success), the formRef is used to reset the form fields to their initial state. This provides a better user experience by clearing the form after a successful submission.
      toast.success("Your message has been submitted successfully!"); //A success toast notification is displayed to inform the user that their message has been submitted successfully. This provides immediate feedback to the user about the status of their form submission.
    }
  }, [actionData]);

  const labelStyle = "block text-lg font-semibold text-primary dark:text-light mb-2";
  const textFieldStyle =
    "w-full px-4 py-2 text-base border rounded-md transition border-primary dark:border-light focus:ring focus:ring-dark dark:focus:ring-lighter focus:outline-none text-gray-800 dark:text-lighter bg-white dark:bg-gray-600 placeholder-gray-400 dark:placeholder-gray-300";
  return (
    <div className="max-w-6xl min-h-213 mx-auto px-6 py-8 font-primary bg-normalbg dark:bg-darkbg">
      {/* Page Title */}
      <PageTitle title="Contact Us" />
      {/* Contact Info */}
      <p className="max-w-3xl mx-auto mt-8 text-gray-600 dark:text-lighter mb-8 text-center">
        We’d love to hear from you! If you have any questions, feedback, or suggestions, please don’t hesitate to reach
        out.
      </p>

      {/* Contact Form */}
      <Form ref={formRef} method="POST" className="space-y-6 max-w-3xl mx-auto">
        {/* Name Field */}
        <div>
          <label htmlFor="name" className={labelStyle}>
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Your Name"
            className={textFieldStyle}
            required
            minLength={5}
            maxLength={30}
          />
        </div>

        {/* Email and mobile Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Email Field */}
          <div>
            <label htmlFor="email" className={labelStyle}>
              Email
            </label>
            <input id="email" name="email" type="email" placeholder="Your Email" className={textFieldStyle} required />
          </div>

          {/* Mobile Field */}
          <div>
            <label htmlFor="mobileNumber" className={labelStyle}>
              Mobile Number
            </label>
            <input
              id="mobileNumber"
              name="mobileNumber"
              type="tel"
              required
              pattern="^\d{10}$"
              title="Mobile number must be exactly 10 digits"
              placeholder="Your Mobile Number"
              className={textFieldStyle}
            />
          </div>
        </div>

        {/* Message Field */}
        <div>
          <label htmlFor="message" className={labelStyle}>
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            placeholder="Your Message"
            className={textFieldStyle}
            required
            minLength={5}
            maxLength={500}
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-6 py-2 text-white dark:text-black text-xl rounded-md transition duration-200 bg-primary dark:bg-light hover:bg-dark dark:hover:bg-lighter"
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </div>
      </Form>
    </div>
  );
}

export async function contactAction({ request, params }) {
  const data = await request.formData();

  const contactData = {
    name: data.get("name"),
    email: data.get("email"),
    mobileNumber: data.get("mobileNumber"),
    message: data.get("message"),
  };

  // Here you can handle the form data, e.g., send it to an API or process it

  try {
    await apiClient.post("/contact", contactData); //Axios post request to the /contact endpoint of the API, sending the contactData object as the request body. This will return a promise that resolves to the response from the server, which should indicate whether the contact form submission was successful or if there were any errors.
    return { success: true };
  } catch (error) {
    throw new Response(error.message || "Failed to submit your message. Please try again", {
      status: error.status || 500,
    });
  }
}
