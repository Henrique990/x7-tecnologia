import React from "react";

import { Header } from "./Components/Header";
import { Home } from "./Components/Home";
import { Services } from "./Components/Services";
import { Abount } from "./Components/Abount";
import { Technology } from "./Components/Technology";
import { Speak } from "./Components/Speak";
import { Footer } from "./Components/Footer";

// const Slide2 = () => {
//   return (
//     <Splide options={{ perPage: 1, arrows: "red" }}>
//       <div className="flex text-center font-semibold text-[#8E09E3] mt-16 gap-4">
//         <SplideSlide>
//           <div className="flex justify-center items-center w-[12.56rem] h-[4.37rem] bg-white border rounded-3xl">
//             logo 1
//           </div>
//         </SplideSlide>
//         <SplideSlide>
//           <div className="flex justify-center items-center w-[12.56rem] h-[4.37rem] bg-white border rounded-3xl">
//             logo 2
//           </div>
//         </SplideSlide>
//         <SplideSlide>
//           <div className="flex justify-center items-center w-[12.56rem] h-[4.37rem] bg-white border rounded-3xl">
//             logo 3
//           </div>
//         </SplideSlide>
//         <SplideSlide>
//           <div className="flex justify-center items-center w-[12.56rem] h-[4.37rem] bg-white border rounded-3xl">
//             logo 4
//           </div>
//         </SplideSlide>
//         <SplideSlide>
//           <div className="flex justify-center items-center w-[12.56rem] h-[4.37rem] bg-white border rounded-3xl">
//             logo 5
//           </div>
//         </SplideSlide>
//         <SplideSlide>
//           <div className="flex justify-center items-center w-[12.56rem] h-[4.37rem] bg-white border rounded-3xl">
//             logo 6
//           </div>
//         </SplideSlide>
//         <SplideSlide>
//           <div className="flex justify-center items-center w-[12.56rem] h-[4.37rem] bg-white border rounded-3xl">
//             logo 7
//           </div>
//         </SplideSlide>
//         <SplideSlide>
//           <div className="flex justify-center items-center w-[12.56rem] h-[4.37rem] bg-white border rounded-3xl">
//             logo 8
//           </div>
//         </SplideSlide>
//       </div>
//     </Splide>
//   );
// };


const App = () => (
  <div className="w-full mx-auto font-montserrat bg-white overflow-x-hidden text-black">
    <Header />
    <Home />
    <Services />
    <Abount  />
    <Technology />
    <Speak />
    <Footer />
  </div>
);

export default App;
