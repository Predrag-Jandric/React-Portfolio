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
        }
      );

      const data = await response.json();
      alert(data.message); // Show success or error message
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to send email.");
    }
  };

  return (
    <footer className="flex flex-col mt-16 items-center bg-dark py-16 xs:px-6 px-4">
      <motion.section
        variants={generalVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="text-grayText rounded-custom container flex flex-col md:flex-row md:gap-10 gap-6"
      >
        {/* Form Section */}
        <form
          className="flex-1 mb-6 md:mb-0"
          id="myform"
          onSubmit={handleSubmit}
        >
          <h3 className="text-headings font-medium relative mb-8 font-headings">
            Message Me <span className="text-sm text-red-500">(Not functional in this version)</span>
            <span className="absolute w-20 h-[3px] bg-primary top-10 left-0"></span>
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
            className="w-44 gap-3 flex items-center justify-center"
          >
            Send <RiMailSendLine size={20} />
          </Button>
        </form>

        {/* get in touch section */}
        <article className="flex-1">
          <h3 className="text-headings font-medium relative mb-8 font-headings">
            Get in Touch
            <span className="absolute w-20 h-[3px] bg-primary top-10 left-0"></span>
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

          <div className="w-fit flex gap-4">
            {footerMap.map((item, index) => (
              <a
                key={index}
                href={item.linkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full transition transform hover:scale-125 "
              >
                <img
                  src={item.footerImageUrl}
                  alt="social media photo"
                  className="w-10 h-10"
                />
              </a>
            ))}
          </div>
        </article>
      </motion.section>

      <p className="text-slate-500 mt-5 text-sm flex items-center justify-center">
        &copy; {new Date().getFullYear()} Predrag. All rights reserved.
      </p>
    </footer>
  );
}
