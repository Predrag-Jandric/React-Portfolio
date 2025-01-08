// import "swiper/swiper.min.css";
// import "swiper/modules/navigation/navigation.min.css";
// import "swiper/modules/pagination/pagination.min.css";

// imports required Swiper components, modules and styles
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, EffectCreative } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";

// animation imports
import { motion } from "framer-motion";
import { generalVariants } from "/animations";

// data for map method
const endorsementsMap = [
  {
    endorsementsImageUrl: "/assets/endorsements/face1.jpg",
    name: "Pera Peric",
    job: "Policeman at  XYZ Osiguranje",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur possimus eaque aspernatur ratione sint, maiores esse magnam quia perferendis assumenda?",
    linkUrl:
      "https://www.linkedin.com/in/predrag-jandric/details/recommendations/?detailScreen",
  },
  {
    endorsementsImageUrl: "/assets/endorsements/face3.jpg",
    name: "Marko Maric",
    job: "Freelancer at Self-Employed",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur possimus eaque aspernatur ratione sint, maiores esse magnam quia perferendis assumenda?",
    linkUrl:
      "https://www.linkedin.com/in/predrag-jandric/details/recommendations/?detailScreen",
  },
  {
    endorsementsImageUrl: "/assets/endorsements/face2.jpg",
    name: "Natasa Nikic",
    job: "Coleague at XYZ company",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur possimus eaque aspernatur ratione sint, maiores esse magnam quia perferendis assumenda?",
    linkUrl:
      "https://www.linkedin.com/in/predrag-jandric/details/recommendations/?detailScreen",
  },
];

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
              alt="missing"
              className="size-24 object-cover mb-3 rounded-full mx-auto"
            />

            <a
              target="_blank"
              rel="noopener noreferrer"
              href={endorsement.linkUrl}
              className="specialLink text-lg "
            >
              {endorsement.name}
            </a>
            <small className="text-stone-400 block italic">
              {endorsement.job}
            </small>
            <p className="text-xl flex w-10/12 mx-auto py-6">
              <span className="self-start">
                <RiDoubleQuotesL />
              </span>
              <span className="md:px-5">{endorsement.message}</span>
              <span className="self-end">
                <RiDoubleQuotesR />
              </span>
            </p>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.section>
  );
}
