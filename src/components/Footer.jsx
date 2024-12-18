// animation imports
import { motion } from "framer-motion";
import { generalVariants } from "/animations";

// data for map method
const footerMap = [
  {
    linkUrl: "https://www.linkedin.com/in/predrag-jandric/",
    footerImageUrl: "src/assets/all-social-icons/linkedIn.png",
  },
  {
    linkUrl: "https://github.com/Predrag-Jandric",
    footerImageUrl: "src/assets/all-social-icons/github-footer.png",
  },
  {
    linkUrl: "https://www.youtube.com/@predragjandric/videos",
    footerImageUrl: "src/assets/all-social-icons/youtube.png",
  },
];

export default function Footer() {
  return (
    <footer className="flex flex-col items-center bg-dark text-dark py-14 px-6">
      <motion.section
        variants={generalVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="container flex flex-col md:flex-row md:space-x-12"
      >
        {/* Form Section */}
        <form
          className="flex-1 mb-6 md:mb-0"
          id="myform"
          action="https://formsubmit.co/predrag.jandric.bg@gmail.com"
          method="POST"
        >
          <h3 className="text-xl font-semibold relative mb-8 text-gray-800">
            Message Me
            <span className="absolute w-20 h-[3px] bg-primary top-8 left-0"></span>
          </h3>

          {/* Form Inputs */}
          <input
            type="text"
            name="name"
            placeholder="Your name"
            required
            className="formInput"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            className="formInput"
          />
          <textarea
            placeholder="Message"
            rows="5"
            name="description"
            required
            className="formInput"
          ></textarea>

          <button type="submit" className="btn">
            Send
          </button>
        </form>

        {/* Call to Action Section */}
        <article className="flex-1">
          <h3 className="text-xl font-semibold relative mb-8 text-gray-800">
            Get in Touch
            <span className="absolute w-20 h-[3px] bg-primary top-8 left-0"></span>
          </h3>
          <p className="mb-4">
            Your feedback and insights are highly appreciated. If you&apos;d
            like to connect with me or explore more of my work, you can find me
            on LinkedIn, GitHub, and my YouTube channel. Thank you for visiting!
          </p>
          <p className="mb-4">
            My Email is:{" "}
            <a
              className="specialLink"
              href="mailto: predrag.jandric.bg@gmail.com"
            >
              predrag.jandric.bg@gmail.com
            </a>
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
                  alt="image missing"
                  className="w-10 h-10"
                />
              </a>
            ))}
          </div>
        </article>
      </motion.section>
    </footer>
  );
}
