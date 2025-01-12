import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, EffectCreative } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { endorsementsMap } from "../utils/data.js";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import { motion } from "framer-motion";
import { generalVariants } from "../utils/animations.js";

export default function Endorsements() {
  return (
    <motion.section
      variants={generalVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className="xs:px-5 px-3"
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
            className="flex flex-col items-center justify-center  text-center bg-pureWhite text-grayText p-10"
          >
            <img
              src={endorsement.endorsementsImageUrl}
              alt="user photo"
              className="size-24 object-cover mb-3 rounded-full mx-auto"
            />

            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/predrag-jandric/details/recommendations/?detailScreen"
              className="specialLink"
            >
              {endorsement.name}
            </a>
            <small className="text-stone-400 block italic">
              {endorsement.job}
            </small>
            <p className="flex md:w-10/12 mx-auto py-6">
              <span className="self-start px-2 text-body">
                <RiDoubleQuotesL />
              </span>
              <span className="md:px-5 text-body">{endorsement.message}</span>
              <span className="self-end px-2 text-body">
                <RiDoubleQuotesR />
              </span>
            </p>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.section>
  );
}
