// import { useState, useEffect } from "react";

// const data = [
//   {
//     title: "Heights Plus",
//     desc: "Significant surge in client inquiries and brand recognition.",
//     img: "https://via.placeholder.com/400x250"
//   },
//   {
//     title: "Urvara Fertility",
//     desc: "Increase in patient consultations and online reach.",
//     img: "https://via.placeholder.com/400x250"
//   },
//   {
//     title: "Dr Bindu Garg",
//     desc: "Remarkable growth in engagement and visibility.",
//     img: "https://via.placeholder.com/400x250"
//   },
//   {
//     title: "Dr Bindu Garg",
//     desc: "Remarkable growth in engagement and visibility.",
//     img: "https://via.placeholder.com/400x250"
//   },
//   {
//     title: "Dr Bindu Garg",
//     desc: "Remarkable growth in engagement and visibility.",
//     img: "https://via.placeholder.com/400x250"
//   },
//   {
//     title: "Dr Bindu Garg",
//     desc: "Remarkable growth in engagement and visibility.",
//     img: "https://via.placeholder.com/400x250"
//   },
//   {
//     title: "Dr Bindu Garg",
//     desc: "Remarkable growth in engagement and visibility.",
//     img: "https://via.placeholder.com/400x250"
//   },
//   {
//     title: "Dr Bindu Garg",
//     desc: "Remarkable growth in engagement and visibility.",
//     img: "https://via.placeholder.com/400x250"
//   },
//   {
//     title: "Dr Bindu Garg",
//     desc: "Remarkable growth in engagement and visibility.",
//     img: "https://via.placeholder.com/400x250"
//   },
//   {
//     title: "Dr Bindu Garg",
//     desc: "Remarkable growth in engagement and visibility.",
//     img: "https://via.placeholder.com/400x250"
//   },
//   {
//     title: "Dr Bindu Garg",
//     desc: "Remarkable growth in engagement and visibility.",
//     img: "https://via.placeholder.com/400x250"
//   },
//   {
//     title: "Dr Bindu Garg",
//     desc: "Remarkable growth in engagement and visibility.",
//     img: "https://via.placeholder.com/400x250"
//   },
//   {
//     title: "Dental Care",
//     desc: "Better ROI and improved marketing performance.",
//     img: "https://via.placeholder.com/400x250"
//   }
// ];

// export default function CardCarousel() {
//   const [index, setIndex] = useState(0);

//   // ✅ Auto Slide
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prev) => (prev + 1) % data.length);
//     }, 3000);

//     return () => clearInterval(interval);
//   }, []);

//   // ✅ Manual Controls
//   const prev = () => {
//     setIndex((prev) => (prev - 1 + data.length) % data.length);
//   };

//   const next = () => {
//     setIndex((prev) => (prev + 1) % data.length);
//   };

//   return (
//     <div className="relative w-full h-[500px] flex items-center justify-center bg-[#071a2f] overflow-hidden">

//       {/* Left Button */}
//       <button
//         onClick={prev}
//         className="absolute left-5 z-20 bg-rose-400 text-white w-10 h-10 rounded-full flex items-center justify-center"
//       >
//         ❮
//       </button>

//       {/* Slider */}
//       <div className="relative w-[700px] h-[350px] flex items-center justify-center [perspective:1200px]">

//         {data.map((item, i) => {
//           // ✅ PERFECT LOOP LOGIC
//           let position = (i - index + data.length) % data.length;

//           if (position > data.length / 2) {
//             position -= data.length;
//           }

//           return (
//             <div
//               key={i}
//               className="absolute w-[280px] h-[340px] bg-[#0f2a44] rounded-2xl p-4 text-white shadow-xl transition-all duration-500"
//               style={{
//                 transform: `
//                   translateX(${position * 260}px)
//                   scale(${position === 0 ? 1 : 0.8})
//                   rotateY(${position * 25}deg)
//                 `,
//                 opacity: Math.abs(position) > 2 ? 0 : position === 0 ? 1 : 0.4,
//                 zIndex: position === 0 ? 10 : 1,
//                 filter: position === 0 ? "blur(0px)" : "blur(2px)"
//               }}
//             >
//               <img
//                 src={item.img}
//                 alt=""
//                 className="w-full h-[160px] object-cover rounded-lg mb-3"
//               />

//               <h3 className="text-lg font-semibold">{item.title}</h3>
//               <p className="text-sm opacity-80 mt-1">{item.desc}</p>

//               <button className="mt-4 px-4 py-2 bg-rose-400 rounded-full text-sm">
//                 Explore Case Study
//               </button>
//             </div>
//           );
//         })}
//       </div>

//       {/* Right Button */}
//       <button
//         onClick={next}
//         className="absolute right-5 z-20 bg-rose-400 text-white w-10 h-10 rounded-full flex items-center justify-center"
//       >
//         ❯
//       </button>
//     </div>
//   );
// }





// import { useState, useEffect } from "react";

// const data = [
//   {
//     title: "Heights Plus",
//     desc: "Significant surge in client inquiries and brand recognition.",
//     img: "https://via.placeholder.com/400x250"
//   },
//   {
//     title: "Urvara Fertility",
//     desc: "Increase in patient consultations and online reach.",
//     img: "https://via.placeholder.com/400x250"
//   },
//   {
//     title: "Dr Bindu Garg",
//     desc: "Remarkable growth in engagement and visibility.",
//     img: "https://via.placeholder.com/400x250"
//   },
//   {
//     title: "Dental Care",
//     desc: "Better ROI and improved marketing performance.",
//     img: "https://via.placeholder.com/400x250"
//   },
//   {
//     title: "Dental Care",
//     desc: "Better ROI and improved marketing performance.",
//     img: "https://via.placeholder.com/400x250"
//   },
//   {
//     title: "Dental Care",
//     desc: "Better ROI and improved marketing performance.",
//     img: "https://via.placeholder.com/400x250"
//   },
//   {
//     title: "Dental Care",
//     desc: "Better ROI and improved marketing performance.",
//     img: "https://via.placeholder.com/400x250"
//   },
//   {
//     title: "Dental Care",
//     desc: "Better ROI and improved marketing performance.",
//     img: "https://via.placeholder.com/400x250"
//   },
//   {
//     title: "Dental Care",
//     desc: "Better ROI and improved marketing performance.",
//     img: "https://via.placeholder.com/400x250"
//   },
//   {
//     title: "Dental Care",
//     desc: "Better ROI and improved marketing performance.",
//     img: "https://via.placeholder.com/400x250"
//   },
//   {
//     title: "Dental Care",
//     desc: "Better ROI and improved marketing performance.",
//     img: "https://via.placeholder.com/400x250"
//   },
//   {
//     title: "Dental Care",
//     desc: "Better ROI and improved marketing performance.",
//     img: "https://via.placeholder.com/400x250"
//   },
//   {
//     title: "Dental Care",
//     desc: "Better ROI and improved marketing performance.",
//     img: "https://via.placeholder.com/400x250"
//   },
//   {
//     title: "Dental Care",
//     desc: "Better ROI and improved marketing performance.",
//     img: "https://via.placeholder.com/400x250"
//   },
//   {
//     title: "Dental Care",
//     desc: "Better ROI and improved marketing performance.",
//     img: "https://via.placeholder.com/400x250"
//   },
//   {
//     title: "Dental Care",
//     desc: "Better ROI and improved marketing performance.",
//     img: "https://via.placeholder.com/400x250"
//   },
//   {
//     title: "Dental Care",
//     desc: "Better ROI and improved marketing performance.",
//     img: "https://via.placeholder.com/400x250"
//   },
//   {
//     title: "Dental Care",
//     desc: "Better ROI and improved marketing performance.",
//     img: "https://via.placeholder.com/400x250"
//   },
//   {
//     title: "Skin Clinic",
//     desc: "Boosted online presence and lead generation.",
//     img: "https://via.placeholder.com/400x250"
//   }
// ];
// const data = [
//   {
//     title: "Heights Plus",
//     desc: "Significant surge in client inquiries and brand recognition.",
//     img: "https://via.placeholder.com/400x250"
//   },
//   {
//     title: "Urvara Fertility",
//     desc: "Increase in patient consultations and online reach.",
//     img: "https://via.placeholder.com/400x250"
//   },
//   {
//     title: "Dr Bindu Garg",
//     desc: "Remarkable growth in engagement and visibility.",
//     img: "https://via.placeholder.com/400x250"
//   },
//   {
//     title: "Dental Care",
//     desc: "Better ROI and improved marketing performance.",
//     img: "https://via.placeholder.com/400x250"
//   }
// ];
import DrVandanaPic from '../assets/IVFTeamPic/DrVandanaPic.jpg';
import DrArpitPic from '../assets/IVFTeamPic/DrArpitPic.png';
import DrAnjulaPic from '../assets/IVFTeamPic/DrAnjulaPic.png';
import DrHarshitPic from '../assets/IVFTeamPic/DrHarshitPic.jpg';
import DrSakshiPic from '../assets/IVFTeamPic/DrSakshiPic.jpg';
import BosePic from '../assets/IVFTeamPic/BosePic.png';
import DrShipraPic from '../assets/IVFTeamPic/DrShipraPic.jpg';
import MrsMamtaPic from '../assets/IVFTeamPic/MrsMamtaPic.jpg';
import DrBansalPic from '../assets/IVFTeamPic/DrBansalPic.jpg';

import { useState, useEffect, useRef } from "react";

const data = [
  { id: 6, img: DrBansalPic, title: 'Late Dr. Ashwini Kumar Bansal', desc: 'M.B.B.S., MS, FAIS, FCGP, FIAGES' },
  { id: 1, img: DrVandanaPic, title: 'Dr. Vandana Bansal', desc: 'MS, D.Phil (Gold Medalist), DGO, FCGP' },
  { id: 3, img: DrArpitPic, title: 'Dr. Arpit Bansal', desc: 'MBBS, MS, FMAS, FCS' },
  { id: 2, img: MrsMamtaPic, title: 'Mrs. Mamta Tiwari', desc: 'M.Sc. (Medical Micro Biology)' },
  { id: 4, img: DrAnjulaPic, title: 'Dr. Anjula Sahai', desc: 'MBBS, DGO, FCPS' },
  { id: 6, img: DrSakshiPic, title: 'Dr Sakshi Bansal', desc: 'MBBS MD (Paediatrics)' },
  { id: 6, img: DrHarshitPic, title: 'Dr Harshit Bansal', desc: 'MBBS NAMC | MD Radio Diagnosis (UCMS)' },
  { id: 6, img: DrShipraPic, title: 'Dr Shipra Verma', desc: 'MD, CGO, OBS & Gynae' },
  { id: 6, img: DrSakshiPic, title: 'Dr Sakshi Bansal', desc: 'MBBS MD (Paediatrics)' },
  { id: 6, img: DrShipraPic, title: 'Dr Shipra Verma', desc: '.........' },
  { id: 6, img: DrShipraPic, title: 'Dr Shipra Verma', desc: '.........' },
];

export default function IVFTeamHome() {
  const [index, setIndex] = useState(0);
  const [pause, setPause] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [dragging, setDragging] = useState(false);

  const startX = useRef(0);
  const currentX = useRef(0);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (pause || dragging) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % data.length);
    }, 3000); // 🔥 smoother timing

    return () => clearInterval(interval);
  }, [pause, dragging]);

  const next = () => setIndex((prev) => (prev + 1) % data.length);
  const prev = () => setIndex((prev) => (prev - 1 + data.length) % data.length);

  const handleStart = (x) => {
    setDragging(true);
    startX.current = x;
  };

  const handleMove = (x) => {
    if (!dragging) return;
    currentX.current = x;
  };

  const handleEnd = () => {
    const diff = startX.current - currentX.current;
    if (diff > 50) next();
    else if (diff < -50) prev();
    setDragging(false);
  };

  return (
    <div className="w-full bg-gradient-to-b from-gry-200 to-whit bg-rose-800 py-20">

      <h2 className="text-center text-3xl md:text-5xl font-bold text-white mb-14 tracking-wide">
        Our IVF Team
      </h2>

      <p className="mx-auto w-4/5 text-justify md:text-center text-white mb-10">
        Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi animi velit provident veniam voluptatibus obcaecati laudantium repellendus. Perspiciatis dolores, fugiat laboriosam incidunt obcaecati voluptates deleniti quis officiis hic culpa possimus? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad molestiae corrupti vero dolor repellendus est placeat fuga magnam suscipit. Fuga voluptas veritatis quos, officiis numquam delectus harum odio quidem recusandae.
      </p>

      <div
        className="relative w-full h-[680px] flex items-center justify-center overflow-hidden"
        onMouseDown={(e) => handleStart(e.clientX)}
        onMouseMove={(e) => handleMove(e.clientX)}
        onMouseUp={handleEnd}
        onTouchStart={(e) => handleStart(e.touches[0].clientX)}
        onTouchMove={(e) => handleMove(e.touches[0].clientX)}
        onTouchEnd={handleEnd}
      >
        {!isMobile && (
          <>
            <button onClick={prev} className="absolute left-10 z-20 bg-rose-700 bg-white w-12 h-12 rounded-full shadow-lg">❮</button>
            <button onClick={next} className="absolute right-10 z-20 bg-rose-700 bg-white w-12 h-12 rounded-full shadow-lg">❯</button>
          </>
        )}

        <div
          className="relative w-full max-w-[1300px] h-[620px] flex items-center justify-center"
          style={{ perspective: "1000px" }}
        >
          {data.map((item, i) => {
            let position = (i - index + data.length) % data.length;
            if (position > data.length / 2) position -= data.length;

            const abs = Math.abs(position);
            if (abs > 5) return null;

            const isCenter = position === 0;

            return (
              <div
                key={i}
                onMouseEnter={() => setPause(true)}
                onMouseLeave={() => setPause(false)}
                className="absolute w-[340px] h-[540px] rounded-2xl p-5 text-white 
                transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform"
                style={{
                  transform: `
                    translateX(${position * 190}px)
                    translateZ(${-abs * 120}px)
                    scale(${1 - abs * 0.09})
                  `,
                  opacity: 1,
                  zIndex: position === 0 ? 100 : 50 - abs, // 🔥 no jump
                  filter: `blur(${abs * 1}px)`,
                  // background: isCenter ? "#9F1239" : "#BE123C",
                  background: isCenter ? "#ffffff" : "#FFF1F2",
                  boxShadow: isCenter
                    ? "0 25px 60px rgba(0,0,0,0.5)"
                    : "0 10px 30px rgba(0,0,0,0.25)"
                }}
              >
                <div className={`rounded-xl overflow-hidden mb-4 ${isCenter ? "ring-2 ring-white/20" : ""}`}>
                  <img
                    src={item.img}
                    className="w-full h-[280px] object-cover"
                  />
                </div>

                <h3 className="text-2xl font-semibold text-black tracking-wide">
                  {item.title}
                </h3>

                <p className="text-sm opacity-90 text-black mt-2">
                  {item.desc}
                </p>

                <button className="mt-6 px-6 py-2 bg-rose-800 tex-black rounded-full text-sm hover:scale-105 transition">
                  Know more
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}