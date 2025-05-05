import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    image: "src/assets/img/testimonials/testimonials-1.jpg",
    name: "Saul Goodman",
    title: "Ceo & Founder",
    text: "Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit...",
  },
  {
    image: "src/assets/img/testimonials/testimonials-2.jpg",
    name: "Sara Wilsson",
    title: "Designer",
    text: "Export tempor illum tamen malis malis eram quae irure esse labore...",
  },
  {
    image: "src/assets/img/testimonials/testimonials-3.jpg",
    name: "Jena Karlis",
    title: "Store Owner",
    text: "Enim nisi quem export duis labore cillum quae magna enim sint...",
  },
  {
    image: "src/assets/img/testimonials/testimonials-4.jpg",
    name: "Matt Brandon",
    title: "Freelancer",
    text: "Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos...",
  },
  {
    image: "src/assets/img/testimonials/testimonials-5.jpg",
    name: "John Larson",
    title: "Entrepreneur",
    text: "Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam...",
  },
];

const Testimonials = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="py-20 bg-white" data-aos="fade-up">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-sm text-blue-600 font-semibold uppercase">Testimonials</h2>
          <p className="text-3xl font-bold text-gray-900 mt-2">What they are saying about us</p>
        </div>

        {/* Extra bottom padding to move pagination down */}
        <div className="relative pb-24">
          <Swiper
            modules={[Pagination, Autoplay]}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            spaceBetween={30}
            centeredSlides={true}
            loop={true}
            grabCursor={true}
            breakpoints={{
              640: { slidesPerView: 1 },
              1024: { slidesPerView: 3 },
            }}
          >
            {testimonials.map((t, index) => (
              <SwiperSlide key={index} className="group transition-transform duration-300 ease-in-out">
                {({ isActive }) => (
                  <div
                    className={`rounded-xl p-6 text-center h-full transition-all duration-500 shadow-md mb-10 ${
                      isActive
                        ? "bg-white scale-100 opacity-100 shadow-xl"
                        : "bg-white scale-90 opacity-40"
                    }`}
                  >
                    <div className="flex justify-center mb-4 text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} />
                      ))}
                    </div>
                    <p className="text-gray-600 italic mb-6">{t.text}</p>
                    <div className="mt-auto">
                      <img
                        src={t.image}
                        alt={t.name}
                        className="w-16 h-16 mx-auto rounded-full mb-4"
                      />
                      <h3 className={`text-lg font-semibold ${isActive ? "text-gray-900" : "text-gray-400"}`}>
                        {t.name}
                      </h3>
                      <p className={`text-sm ${isActive ? "text-gray-500" : "text-gray-300"}`}>{t.title}</p>
                    </div>
                  </div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
