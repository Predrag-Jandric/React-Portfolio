import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, EffectCreative } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { endorsementsMap } from "../utils/data.js";
// import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import { motion } from "framer-motion";
import { generalVariants } from "../utils/animations.js";

export default function Endorsements() {
  return (
    <motion.section
      variants={generalVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className="xs:px-5 px-3 mx-1"
      id="endorsements"
    >
      <Swiper
        grabCursor={true}
        effect={"creative"}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        spaceBetween={20}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[EffectCreative, Pagination, Navigation]}
        className="container rounded-custom"
      >
        {endorsementsMap.map((endorsement, index) => (
          <SwiperSlide
            key={index}
            className="flex flex-col items-center justify-center text-center bg-pureWhite text-grayText p-10"
          >
            <img
              src={endorsement.endorsementsImageUrl}
              alt="user photo"
              className="size-24 object-cover mb-3 rounded-full mx-auto"
            />

            <p className="font-semibold">{endorsement.name}</p>
            <small className="text-stone-400 block italic">
              {endorsement.job}
            </small>
            <div className="flex text-start flex-col md:px-10 w-full mx-auto p-6">
              <span className="md:px-5 text-body">{endorsement.message}</span>
              <span className="md:px-5 my-5 text-body">
                {endorsement.message2}
              </span>
              <span className="md:px-5 text-body">{endorsement.message3}</span>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/predrag-jandric/details/recommendations/?detailScreen"
                className="specialLink italic text-sm text-center"
              >
                View more on Linkedin
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.section>
  );
}
