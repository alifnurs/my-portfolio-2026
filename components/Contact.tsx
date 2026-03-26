"use client";

export default function Contact() {
  return (
    <section id="contact" className="bg-black px-6 pb-6">
      <div className="w-full mx-auto">

        {/* CARD */}
        <div className="bg-white text-black rounded-[28px] px-6 pt-16 sm:px-6 sm:pt-18 sm:pb-8 text-center">

          {/* TITLE */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium mb-6">
            Have a project in mind? Let’s Talk
          </h2>

          {/* DESC */}
          <p className="max-w-3xl mx-auto text-sm sm:text-base text-black mb-6 leading-relaxed">
            I’m always open to discussing new ideas, collaborations, or exciting
            projects. Whether you need a digital product, social media content,
            or creative design solutions, I’m ready to help bring your vision to life.
          </p>

          {/* BUTTON */}
          <a href="https://wa.me/6282324632266" target="_blank" className="group w-50 flex items-center justify-start gap-5 mx-auto border bg-primary text-white px-1 py-1 rounded-full hover:opacity-90 transition hover:bg-black">
            
            {/* ICON */}
            <span className="flex items-center justify-center w-10 h-10 bg-white text-black rounded-full transition duration-300 group-hover:translate-x-1 group-hover:font-bold group-hover:bg-black group-hover:text-white">
              →
            </span>

            <span className="font-medium group-hover:font-bold ">Get In Touch</span>
          </a>

          {/* CONTACT INFO */}
          <div className="mt-16 flex flex-col sm:flex-row flex-wrap justify-center gap-4 pb-8 sm:pb-0 sm:gap-10 text-gray-500 text-sm">
            
            <div className="flex items-center gap-2">
                <a className="group flex items-center gap-2 hover:text-black transition-all duration-200" href="https://dribbble.com/alifnurs" target="_blank">
                <svg 
                    className="w-5 h-5 fill-gray-500 group-hover:fill-black transition-all duration-200"
                    viewBox="0 0 30 30"
                >
                    <path d="M 15.9998 2.6665 C 8.63984 2.6665 2.6665 8.63984 2.6665 15.9998 C 2.6665 23.3598 8.63984 29.3332 15.9998 29.3332 C 23.3465 29.3332 29.3332 23.3598 29.3332 15.9998 C 29.3332 8.63984 23.3465 2.6665 15.9998 2.6665 Z M 24.8065 8.81317 C 26.4476 10.8121 27.3556 13.3123 27.3798 15.8985 C 27.0052 15.8265 23.2452 15.0598 19.4558 15.5372 C 19.3692 15.3492 19.2958 15.1465 19.2105 14.9438 C 18.9748 14.3878 18.7241 13.8383 18.4585 13.2958 C 22.6518 11.5892 24.5612 9.1305 24.8065 8.81317 Z M 15.9998 4.63317 C 18.8932 4.63317 21.5385 5.7185 23.5492 7.49717 C 23.3465 7.78517 21.6252 10.0852 17.5758 11.6038 C 15.7105 8.17717 13.6425 5.3705 13.3238 4.93717 C 14.201 4.73228 15.0991 4.63026 15.9998 4.63317 Z M 11.1558 5.70384 C 12.6815 7.81907 14.0912 10.0156 15.3785 12.2838 C 10.0558 13.7012 5.35584 13.6705 4.8505 13.6705 C 5.21684 11.9466 5.97651 10.3307 7.07025 8.9488 C 8.16398 7.56688 9.56221 6.45635 11.1558 5.70384 Z M 4.60384 16.0132 V 15.6665 C 5.09717 15.6798 10.6198 15.7532 16.3038 14.0465 C 16.6372 14.6825 16.9398 15.3332 17.2292 15.9838 C 17.0838 16.0278 16.9252 16.0705 16.7812 16.1145 C 10.9092 18.0078 7.78517 23.1852 7.52517 23.6198 C 5.64474 21.5326 4.6031 18.8226 4.60384 16.0132 Z M 15.9998 27.3958 C 13.4684 27.4004 11.0086 26.5553 9.0145 24.9958 C 9.21717 24.5758 11.5318 20.1212 17.9518 17.8798 C 17.9812 17.8665 17.9958 17.8665 18.0238 17.8505 C 19.107 20.6443 19.9209 23.5352 20.4545 26.4838 C 19.0476 27.0892 17.5315 27.3996 15.9998 27.3958 Z M 22.3478 25.4425 C 22.2332 24.7492 21.6252 21.4225 20.1345 17.3305 C 23.7078 16.7665 26.8318 17.6918 27.2212 17.8225 C 26.9778 19.3599 26.4193 20.8304 25.5807 22.1417 C 24.7421 23.453 23.6414 24.5768 22.3478 25.4425 Z" />
                </svg>
                dribbble.com/alifnurs
                </a>
            </div>

            <div className="flex items-center gap-2">
                <a className="group flex items-center gap-2 hover:text-black transition-all duration-200" href="mailto:alifn985@gmail.com" target="_blank">
                <svg className=" fill-gray-500 group-hover:fill-black transition-all duration-300 " xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 30 30">
                <path d="M6.15467 25.3332C5.54044 25.3332 5.028 25.1278 4.61733 24.7172C4.20667 24.3065 4.00089 23.7936 4 23.1785V8.82117C4 8.20695 4.20578 7.6945 4.61733 7.28384C5.02889 6.87317 5.54089 6.66739 6.15333 6.6665H25.8467C26.46 6.6665 26.972 6.87228 27.3827 7.28384C27.7933 7.69539 27.9991 8.20784 28 8.82117V23.1798C28 23.7932 27.7942 24.3056 27.3827 24.7172C26.9711 25.1287 26.4591 25.3341 25.8467 25.3332H6.15467ZM16 16.1545L5.33333 9.17984V23.1798C5.33333 23.4189 5.41022 23.6154 5.564 23.7692C5.71778 23.9229 5.91467 23.9998 6.15467 23.9998H25.8467C26.0858 23.9998 26.2822 23.9229 26.436 23.7692C26.5898 23.6154 26.6667 23.4185 26.6667 23.1785V9.1785L16 16.1545ZM16 14.6665L26.256 7.99984H5.744L16 14.6665ZM5.33333 9.17984V7.99984V23.1798C5.33333 23.4189 5.41022 23.6154 5.564 23.7692C5.71778 23.9229 5.91467 23.9998 6.15467 23.9998H5.33333V9.17984Z"  fill-opacity="1"/>
                </svg>
                alifn985@gmail.com
                </a>
            </div>

            <div className="flex items-center gap-2">
                <a className="group flex items-center gap-2 hover:text-black transition-all duration-200" href="https://www.instagram.com/a.alifn/" target="_blank">
                <svg className="group-hover:stroke-black stroke-gray-500 transition-all duration-300" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 30 30" fill="none">
                    <path d="M22.6667 8.66667H23.3333M4 12.5333C4 9.54667 4 8.05333 4.58133 6.912C5.09265 5.90851 5.90851 5.09265 6.912 4.58133C8.05333 4 9.54667 4 12.5333 4H19.4667C22.4533 4 23.9467 4 25.088 4.58133C26.0915 5.09265 26.9073 5.90851 27.4187 6.912C28 8.05333 28 9.54667 28 12.5333V19.4667C28 22.4533 28 23.9467 27.4187 25.088C26.9073 26.0915 26.0915 26.9073 25.088 27.4187C23.9467 28 22.4533 28 19.4667 28H12.5333C9.54667 28 8.05333 28 6.912 27.4187C5.90851 26.9073 5.09265 26.0915 4.58133 25.088C4 23.9467 4 22.4533 4 19.4667V12.5333Z" stroke-opacity="1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M20.6158 15.3161C20.7056 15.9224 20.6751 16.5404 20.5261 17.1349C20.3771 17.7294 20.1124 18.2887 19.7473 18.7809C19.3821 19.2731 18.9235 19.6886 18.3978 20.0036C17.872 20.3186 17.2894 20.5269 16.6831 20.6168C16.0768 20.7066 15.4588 20.6761 14.8643 20.5271C14.2698 20.3781 13.7105 20.1134 13.2183 19.7482C12.2242 19.0107 11.5639 17.9085 11.3824 16.6841C11.201 15.4597 11.5135 14.2133 12.251 13.2193C12.9885 12.2252 14.0907 11.5648 15.3151 11.3834C16.5395 11.202 17.7859 11.5144 18.7799 12.252C19.774 12.9895 20.4344 14.0917 20.6158 15.3161Z"  stroke-opacity="1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                a.alifn
                </a>
            </div>

            <div className="flex items-center gap-2">
                <a className="group flex items-center gap-2 hover:text-black transition-all duration-200" href="https://www.linkedin.com/in/alifn/" target="_blank">
                <svg className="fill-gray-500 group-hover:fill-black transition-all duration-300" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 30 30">
                <path d="M27.5 3.5H4.5C3.94687 3.5 3.5 3.94687 3.5 4.5V27.5C3.5 28.0531 3.94687 28.5 4.5 28.5H27.5C28.0531 28.5 28.5 28.0531 28.5 27.5V4.5C28.5 3.94687 28.0531 3.5 27.5 3.5ZM10.9156 24.8031H7.20625V12.8719H10.9156V24.8031ZM9.0625 11.2406C8.63727 11.2406 8.22159 11.1145 7.86802 10.8783C7.51446 10.642 7.23889 10.3063 7.07616 9.91339C6.91343 9.52053 6.87085 9.08824 6.95381 8.67118C7.03677 8.25412 7.24154 7.87103 7.54222 7.57035C7.8429 7.26966 8.226 7.06489 8.64306 6.98194C9.06011 6.89898 9.49241 6.94156 9.88527 7.10428C10.2781 7.26701 10.6139 7.54258 10.8502 7.89615C11.0864 8.24971 11.2125 8.66539 11.2125 9.09062C11.2094 10.2781 10.2469 11.2406 9.0625 11.2406ZM24.8031 24.8031H21.0969V19C21.0969 17.6156 21.0719 15.8375 19.1688 15.8375C17.2406 15.8375 16.9438 17.3438 16.9438 18.9V24.8031H13.2406V12.8719H16.7969V14.5031H16.8469C17.3406 13.5656 18.55 12.575 20.3563 12.575C24.1125 12.575 24.8031 15.0469 24.8031 18.2594V24.8031Z"/>
                </svg>
                https://www.linkedin.com/in/alifn/
                </a>
            </div>

        

          </div>

        </div>
      </div>
    </section>
  );
}