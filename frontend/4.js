// =========================================================== PROMOTION SECTION ============================================================================>

fetch("https://ronin-pk-landing-page-clone-production.up.railway.app/api/products/Videos/")
  .then(response => response.json())
  .then(VideoDescription => {

VideoDescription.forEach(v => {
  promotion.innerHTML += `<span class="flex flex-col relative xs:w-36 sm:w-48 md:w-60 xl:w-[18.8vw] rounded-xl">
        <video class="w-72 rounded-xl shadow-md xl:w-[18.8vw]" src=${v.Videolink} autoplay loop playsinline muted preload="auto" disablePictureInPicture controlslist="nodownload nofullscreen"  ></video>
        <div class="absolute xs:bottom-4 xs:left-4 md:bottom-8  flex ">
          <img class="rounded-md xs:w-8 xs:h-8 md:w-14 md:h-14" src=${v.ImageLink} alt="">
          <div class="pl-2 self-start">
            <p class="text-white text-sm font-semibold drop-shadow-[0_0_5px_#fff] xs:text-xs md:text-sm">${v.Name}</p>
            <p class="text-white text-xs">${v.profession}</p>
            <div class="flex pt-1 justify-between xs:w-14 ">
              <img class="w-4" src="img/heart.png" alt="">
              <img class="w-4" src="img/chat.png" alt="">
              <img class="w-4" src="img/paper-plane.png" alt="">
            </div>
          </div>
        </div>
      </span>     
  `;
});
})




