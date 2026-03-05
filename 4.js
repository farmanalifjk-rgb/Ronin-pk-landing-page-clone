// =========================================================== PROMOTION SECTION ============================================================================>
const VideoDescription = [
  {
    Videolink: "/promotion1.mp4.webm",
    ImageLink: "/img/avatar-iqra-aziz.webp",
    Name: "IQRA AZIZ",
    profession: "#actress",

  },
  {
    Videolink: "/promotion2.mp4.webm",
    ImageLink: "/img/avatar-hasan-raheem.webp",
    Name: "HASAN RAHEEM",
    profession: "#singer",

  },
  {
    Videolink: "/promotion3.mp4.webm",
    ImageLink: "/img/avatar-hamza-sohail.webp",
    Name: "HAMZA SOHAIL",
    profession: "#actor",

  },
  {
    Videolink: "/promotion4.mp4.webm",
    ImageLink: "/img/avatar-kinza.webp",
    Name: "KINZA HASHMI",
    profession: "#actress",

  },
  {
    Videolink: "/promotion5.mp4.webm",
    ImageLink: "/img/avatar-anural.webp",
    Name: "ANNURAL KHALID",
    profession: "#singer",

  },
  {
    Videolink: "/promotion6.mp4.webm",
    ImageLink: "/img/avatar-asim.webp",
    Name: "ASIM AZHAR",
    profession: "#singer",

  },
  {
    Videolink: "/promotion7.mp4.webm",
    ImageLink: "/img/avatar-hannan.webp",
    Name: "ABDUL HANIN",
    profession: "#singer",
  }
];


const promotion = document.querySelector("#promotion");

VideoDescription.forEach(v => {
  promotion.innerHTML += `<span class="flex flex-col relative xs:w-36 sm:w-48 md:w-60 xl:w-[18.8vw] rounded-xl">
        <video class="w-72 rounded-xl shadow-md xl:w-[18.8vw]" src=${v.Videolink} autoplay loop playsinline muted preload="auto" disablePictureInPicture controlslist="nodownload nofullscreen"  ></video>
        <div class="absolute xs:bottom-4 xs:left-4 md:bottom-8  flex ">
          <img class="rounded-md xs:w-8 xs:h-8 md:w-14 md:h-14" src=${v.ImageLink} alt="">
          <div class="pl-2 self-start">
            <p class="text-white text-sm font-semibold drop-shadow-[0_0_5px_#fff] xs:text-xs md:text-sm">${v.Name}</p>
            <p class="text-white text-xs">${v.profession}</p>
            <div class="flex pt-1 justify-between xs:w-14 ">
              <img class="w-4" src="/img/heart.png" alt="">
              <img class="w-4" src="/img/chat.png" alt="">
              <img class="w-4" src="/img/paper-plane.png" alt="">
            </div>
          </div>
        </div>
      </span>     
  `;
});




