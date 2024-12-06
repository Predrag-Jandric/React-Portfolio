// import "swiper/swiper.min.css";
// import "swiper/modules/navigation/navigation.min.css";
// import "swiper/modules/pagination/pagination.min.css";

// imports required Swiper components, modules and styles
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, EffectCreative } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// icons import
import { MdFormatQuote } from "react-icons/md";

// animation imports
import { motion } from "framer-motion";
import { generalVariants } from "/animations";

// data for map method
const endorsementsMap = [
  {
    endorsementsImageUrl: "src/assets/endorsements/face1.jpg",
    name: "Pera Peric",
    job: "Policeman at  XYZ Osiguranje",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur possimus eaque aspernatur ratione sint, maiores esse magnam quia perferendis assumenda?",
    linkUrl: "https://www.linkedin.com/in/predrag-jandric/",
  },
  {
    endorsementsImageUrl: "src/assets/endorsements/face3.jpg",
    name: "Marko Maric",
    job: "Freelancer at Self-Employed",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur possimus eaque aspernatur ratione sint, maiores esse magnam quia perferendis assumenda?",
    linkUrl: "https://www.linkedin.com/in/predrag-jandric/",
  },
  {
    endorsementsImageUrl: "src/assets/endorsements/face2.jpg",
    name: "Natasa Nikic",
    job: "Coleague at XYZ company",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur possimus eaque aspernatur ratione sint, maiores esse magnam quia perferendis assumenda?",
    linkUrl: "https://www.linkedin.com/in/predrag-jandric/",
  },
];

export default function Endorsements() {
  return (
    <motion.section
      variants={generalVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className="px-5" // padding: 0 1.3rem;
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
        className="max-w-[70rem] rounded-standard" // max-width: 70rem; border-radius: standard;
      >
        {endorsementsMap.map((endorsement, index) => (
          <SwiperSlide
            key={index}
            className="flex flex-col items-center justify-center space-y-2.5 text-center p-12 bg-pureWhite text-grayText"
          >
            <img
              src={endorsement.endorsementsImageUrl}
              alt="missing"
              className="w-16 h-16 rounded-full mx-auto" // width & height: 5.5rem; border-radius: 50%;
            />

            <a
              target="_blank"
              rel="noopener noreferrer"
              href={endorsement.linkUrl}
              className="text-lg font-semibold" // Font size: 1.1rem; font weight: 600;
            >
              {endorsement.name}
            </a>
            <small className="-mt-2 italic">{endorsement.job}</small>
            <p className="text-xl">
              <MdFormatQuote /> {endorsement.message} <MdFormatQuote />
            </p>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.section>
  );
}
