import { motion } from "framer-motion";
import { generalVariants } from "../utils/animations.js";
import Button from "./Button";
import { RiMailSendLine } from "react-icons/ri";
import { footerMap } from "../utils/data.js";
// import { Link } from "react-router-dom";

export default function Footer() {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      description: e.target.description.value,
    };

    try {
      const response = await fetch(
        "https://nodejs-backend-portfolio.onrender.com/send-email",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        },
      );

      const data = await response.json();
      alert(data.message); // Show success or error message
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to send email.");
    }
  };

  return (
    <footer className="mt-16 flex flex-col items-center bg-bgcolor px-4 py-12 xs:px-6">
      <motion.section
        id="contact"
        variants={generalVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="container flex flex-col gap-6 rounded-custom text-grayText md:flex-row md:gap-10"
      >
        {/* Form Section */}
        <form
          className="mb-6 flex-1 md:mb-0"
          id="myform"
          onSubmit={handleSubmit}
        >
          <h3 className="relative mb-8 font-headings text-headings font-medium">
            Message Me{" "}
            <span className="text-sm text-red-500">
              (Not functional in this version)
            </span>
            <span className="absolute left-0 top-10 h-[3px] w-20 bg-primary"></span>
          </h3>

          {/* Form Inputs */}
          <input
            type="text"
            name="name"
            placeholder="Your name"
            required
            className="formInput text-body"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            className="formInput text-body"
          />
          <textarea
            placeholder="Message"
            rows="5"
            name="description"
            required
            className="formInput text-body"
          ></textarea>

          <Button
            // type="submit"
            onClick={() => alert("Not functional in this version")}
            className="flex w-44 items-center justify-center gap-3"
          >
            Send <RiMailSendLine size={20} />
          </Button>
        </form>

        {/* get in touch section */}
        <article className="flex-1">
          <h3 className="relative mb-8 font-headings text-headings font-medium">
            Get in Touch
            <span className="absolute left-0 top-10 h-[3px] w-20 bg-primary"></span>
          </h3>
          <p className="mb-4 text-body">
            Your feedback and insights are highly appreciated. If you&apos;d
            like to connect with me or explore more of my work, you can find me
            on LinkedIn, GitHub, and my YouTube channel. Thank you for visiting!
          </p>
          <p className="mb-5 text-body">
            Email:{" "}
            <span className="font-semibold italic">
              predrag.jandric.bg@gmail.com
            </span>{" "}
          </p>

          <div className="flex w-fit gap-4">
            {footerMap.map((item, index) => (
              <a
                key={index}
                href={item.linkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="transform rounded-full transition hover:scale-125"
              >
                <img
                  src={item.footerImageUrl}
                  alt="social media photo"
                  className="h-10 w-10"
                />
              </a>
            ))}
          </div>
        </article>
      </motion.section>

      <p className="mt-4 flex items-center justify-center text-sm text-slate-500">
        &copy; {new Date().getFullYear()} Predrag. All rights reserved.
      </p>
    </footer>
  );
}
