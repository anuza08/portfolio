import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
// import { log } from "three/examples/jsm/nodes/Nodes.js";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);
  const formRef = useRef(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFocus = () => {};
  const handleBlur = () => {};

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    console.log(import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY);
    console.log(import.meta.env.VITE_APP_EMAILJS_SERVICE_ID);
    console.log(import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID);

    setTimeout(() => {
      debugger;
      emailjs
        .send(
          import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
          {
            from_name: form.name,
            to_name: "Anuja",
            from_email: form.email,
            to_email: "anujashinde0803@gmail.com",
            message: form.message,
          },
          import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
        )

        .then(() => {
          setIsLoading(false);

          setForm({ name: "", email: "", message: "" });
        })
        .catch((error) => {
          setIsLoading(false);
          console.log(error);
        });
    }, 200);
  };

  return (
    <section className="relative flex lg:flex-row flex-col max-container">
      <div className="flex-1 min-w-[50%] flex flex-col">
        <h1 className="head-text">Get in Touch</h1>

        <form
          ref={formRef}
          className="w-full flex flex-col gap-7 mt-14"
          onSubmit={handleSubmit}
        >
          <label className="text-black-500 font-semibold">
            Name
            <input
              type="text"
              name="name"
              className="input"
              placeholder="Enter your name"
              required
              value={form.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className="text-black-500 font-semibold">
            Email
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Enter your Email"
              required
              value={form.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className="text-black-500 font-semibold">
            Message
            <textarea
              name="message"
              rows={4}
              className="textarea"
              placeholder="Enter your message..."
              required
              value={form.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <button type="submit" className="btn" disabled={isLoading}>
            {isLoading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
