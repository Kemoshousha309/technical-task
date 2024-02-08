import { IconProps } from "@/app/types/staticPage.types";

export function LogoIcon({w, h}: IconProps) {
    const height = h?h:"43"
    const width=w?w:"108"
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      href="http://www.w3.org/1999/xlink"
    >
      <path
        d="M41.9949 33.2824C41.847 33.2815 41.6996 33.3073 41.5574 33.359C41.4215 33.4099 41.2953 33.4954 41.1866 33.6101C41.0709 33.7293 40.9749 33.8761 40.9042 34.0421C40.8165 34.2486 40.7557 34.4716 40.7242 34.7025L40.4945 36.2093C40.4565 36.4262 40.4491 36.6497 40.4727 36.8698C40.4911 37.0301 40.5429 37.1813 40.6228 37.308C40.7033 37.4208 40.8063 37.504 40.9211 37.5491C41.0553 37.6015 41.1953 37.6265 41.3357 37.6232C41.4836 37.625 41.6309 37.6001 41.7732 37.5491C41.9074 37.4998 42.0327 37.4179 42.1421 37.308C42.2583 37.1864 42.3549 37.0376 42.4265 36.8698C42.5138 36.6632 42.5742 36.4402 42.6054 36.2093L42.6323 36.0348H41.9949L41.9512 36.3161C41.9373 36.4959 41.8728 36.6635 41.7692 36.7882C41.6751 36.8741 41.5611 36.9182 41.4451 36.9137C41.3931 36.919 41.3408 36.9106 41.2915 36.8889C41.2422 36.8673 41.197 36.833 41.1587 36.7882C41.0961 36.7066 41.0832 36.5496 41.1189 36.3161L41.3815 34.5971C41.3951 34.4168 41.4597 34.2487 41.5634 34.1237C41.6575 34.0378 41.7715 33.9937 41.8876 33.9981C41.9397 33.9929 41.9922 34.0013 42.0416 34.0229C42.0911 34.0445 42.1365 34.0788 42.1749 34.1237C42.2366 34.2053 42.2495 34.3623 42.2127 34.5971L42.1958 34.7139H42.8371V34.7013C42.8748 34.4844 42.8819 34.2608 42.858 34.0408C42.8402 33.882 42.788 33.7324 42.7069 33.6089C42.6286 33.4908 42.525 33.4036 42.4086 33.3578C42.2745 33.3045 42.1345 33.2787 41.9939 33.2812L41.9949 33.2824ZM50.7449 33.2824C50.5969 33.2814 50.4495 33.3072 50.3074 33.359C50.1718 33.41 50.0459 33.4955 49.9375 33.6101C49.8214 33.7295 49.7249 33.8762 49.6531 34.0421C49.5658 34.2487 49.5053 34.4717 49.4741 34.7025L49.2444 36.2093C49.2055 36.426 49.1984 36.6499 49.2236 36.8698C49.2413 37.0303 49.2932 37.1818 49.3737 37.308C49.4541 37.421 49.5572 37.5043 49.672 37.5491C49.8066 37.6014 49.9469 37.6265 50.0876 37.6232C50.2352 37.6249 50.3822 37.6 50.5241 37.5491C50.6583 37.4998 50.7836 37.4179 50.893 37.308C51.0093 37.1861 51.1061 37.0374 51.1784 36.8698C51.2657 36.6632 51.3262 36.4402 51.3573 36.2093L51.587 34.7025C51.626 34.4859 51.6337 34.2622 51.6099 34.0421C51.5917 33.8834 51.5394 33.734 51.4588 33.6101C51.3802 33.4924 51.2767 33.4053 51.1605 33.359C51.0257 33.3056 50.8851 33.2798 50.7439 33.2824H50.7449ZM59.7543 33.2824C59.6066 33.2815 59.4596 33.3073 59.3178 33.359C59.1822 33.41 59.0564 33.4955 58.9479 33.6101C58.8322 33.7293 58.7363 33.8761 58.6655 34.0421C58.5779 34.2486 58.5171 34.4716 58.4856 34.7025L58.2559 36.2093C58.217 36.426 58.2099 36.6499 58.235 36.8698C58.2528 37.0303 58.3047 37.1818 58.3851 37.308C58.4654 37.4211 58.5685 37.5044 58.6834 37.5491C58.8176 37.6016 58.9576 37.6266 59.098 37.6232C59.2456 37.6249 59.3926 37.6 59.5345 37.5491C59.6693 37.4995 59.7952 37.4177 59.9054 37.308C60.021 37.1856 60.1175 37.037 60.1898 36.8698C60.2766 36.6629 60.3371 36.44 60.3688 36.2093L60.3956 36.0348H59.7612L59.7135 36.3161C59.6994 36.4961 59.6345 36.6637 59.5306 36.7882C59.4366 36.8743 59.3225 36.9185 59.2064 36.9137C59.1544 36.9189 59.1021 36.9104 59.0528 36.8888C59.0035 36.8672 58.9584 36.833 58.9201 36.7882C58.8584 36.7066 58.8455 36.5496 58.8813 36.3161L59.1428 34.5971C59.1567 34.4166 59.2216 34.2486 59.3257 34.1237C59.4198 34.0375 59.5338 33.9934 59.6499 33.9981C59.7019 33.993 59.7542 34.0015 59.8035 34.0231C59.8528 34.0447 59.898 34.0789 59.9363 34.1237C59.9979 34.2053 60.0108 34.3623 59.975 34.5971L59.9571 34.7139H60.5965V34.7013C60.6355 34.4847 60.6432 34.2609 60.6193 34.0408C60.601 33.8817 60.548 33.7321 60.4662 33.6089C60.3884 33.4901 60.2847 33.4028 60.1679 33.3578C60.0339 33.3043 59.8939 33.2785 59.7533 33.2812L59.7543 33.2824ZM35.8352 33.3402L35.1929 37.5592H36.1275C36.287 37.5621 36.4462 37.5384 36.6008 37.4888C36.7385 37.4437 36.869 37.3689 36.9866 37.2678C37.1005 37.1674 37.1976 37.0394 37.272 36.8912C37.4007 36.6207 37.4669 36.3101 37.4629 35.9946C37.4602 35.904 37.4437 35.8149 37.4142 35.7322C37.3888 35.6479 37.3483 35.5723 37.2958 35.5112C37.2378 35.4332 37.1739 35.3625 37.1049 35.3002C37.2438 35.2175 37.3655 35.095 37.4603 34.9424C37.555 34.7898 37.6203 34.6113 37.6508 34.4213C37.6854 34.2798 37.6891 34.1291 37.6614 33.9852C37.6338 33.8414 37.5758 33.7096 37.4937 33.6039C37.2762 33.4018 37.008 33.3063 36.739 33.3352L35.8352 33.3402ZM39.017 33.3402L37.5474 37.5592H38.1619L38.4781 36.6714H39.362L39.3889 37.5592H40.0013L39.8383 33.3402H39.017ZM43.5669 33.3402L42.9246 37.5592H43.564L43.7628 36.2684L44.086 35.7899L44.4837 37.5592H45.2006L44.6259 35.0416L45.7465 33.3414H45.0505L43.9567 35.0818H43.9478L44.2132 33.3414L43.5669 33.3402ZM47.2349 33.3402L47.1266 34.0534H47.8723L47.3384 37.5592H47.9777L48.5116 34.0534H49.2574L49.3658 33.3402H47.2349ZM53.5985 33.3402L52.9562 37.5592H53.8908C54.0504 37.5619 54.2095 37.5383 54.3642 37.4888C54.5018 37.4434 54.6322 37.3686 54.7499 37.2678C54.8632 37.1668 54.9598 37.0389 55.0343 36.8912C55.1648 36.6217 55.2311 36.3104 55.2252 35.9946C55.2228 35.9041 55.2066 35.815 55.1775 35.7322C55.1517 35.6483 55.1112 35.5727 55.0592 35.5112C55.0008 35.4336 54.9369 35.3629 54.8683 35.3002C55.0068 35.2169 55.1282 35.0941 55.2229 34.9416C55.3176 34.7892 55.383 34.6111 55.4141 34.4213C55.4488 34.2797 55.4525 34.1289 55.4246 33.985C55.3968 33.841 55.3385 33.7093 55.2561 33.6039C55.0388 33.4022 54.7711 33.3068 54.5024 33.3352L53.5985 33.3402ZM56.7803 33.3402L55.3097 37.5592H55.9252L56.2414 36.6714H57.1254L57.1512 37.5592H57.7627L57.5996 33.3402H56.7803ZM61.3303 33.3402L60.6879 37.5592H61.3273L61.5262 36.2684L61.8493 35.7899L62.247 37.5592H62.9629L62.3892 35.0416L63.5088 33.3414H62.8128L61.7191 35.0818H61.7111L61.9766 33.3414L61.3303 33.3402ZM50.6434 33.9944C50.6955 33.9892 50.7478 33.9977 50.797 34.0193C50.8463 34.0409 50.8915 34.0752 50.9298 34.1199C50.9914 34.2016 51.0044 34.3585 50.9686 34.5933L50.7031 36.3098C50.689 36.4898 50.624 36.6574 50.5202 36.7819C50.4261 36.8681 50.3121 36.9122 50.196 36.9075C50.144 36.9127 50.0917 36.9042 50.0424 36.8826C49.9931 36.8609 49.9479 36.8267 49.9096 36.7819C49.848 36.7003 49.8351 36.5433 49.8709 36.3098L50.1324 34.5908C50.1463 34.4104 50.2112 34.2423 50.3153 34.1174C50.4093 34.0313 50.5234 33.9871 50.6395 33.9919L50.6434 33.9944ZM36.3801 34.0069H36.6346C36.6916 33.9985 36.7494 34.0067 36.8035 34.0308C36.8576 34.055 36.9067 34.0945 36.9468 34.1463C36.9779 34.1983 36.999 34.2587 37.0085 34.3228C37.018 34.3868 37.0156 34.4528 37.0015 34.5155C36.9799 34.6597 36.9141 34.7873 36.8186 34.8708C36.7112 34.9675 36.5815 35.0169 36.4497 35.0114H36.2279L36.3801 34.0069ZM54.1394 34.0069H54.395C54.4518 33.9985 54.5095 34.0067 54.5634 34.0309C54.6174 34.055 54.6662 34.0945 54.7062 34.1463C54.7374 34.1983 54.7586 34.2586 54.7683 34.3227C54.7779 34.3867 54.7757 34.4527 54.7619 34.5155C54.7396 34.66 54.6732 34.7877 54.5769 34.8708C54.4699 34.9677 54.3406 35.0171 54.209 35.0114H53.9843L54.1394 34.0069ZM39.2795 34.2581H39.2924L39.3431 35.9645H38.7008L39.2795 34.2581ZM57.0398 34.2581L57.0896 35.9645H56.4602L57.0398 34.2581ZM36.1265 35.6832H36.3492C36.4861 35.6694 36.6218 35.723 36.7281 35.8326C36.7732 35.8906 36.8049 35.9629 36.82 36.0418C36.835 36.1208 36.8328 36.2034 36.8136 36.2809C36.7933 36.4608 36.7197 36.6242 36.6077 36.7382C36.4957 36.8522 36.3535 36.9082 36.2101 36.8949H35.9416L36.1265 35.6832ZM53.8869 35.6832H54.1096C54.2464 35.6701 54.3819 35.7236 54.4884 35.8326C54.5333 35.8907 54.5649 35.9631 54.5798 36.042C54.5947 36.1209 54.5923 36.2035 54.5729 36.2809C54.5531 36.4608 54.4798 36.6244 54.3679 36.7385C54.256 36.8525 54.1138 36.9085 53.9704 36.8949H53.7019L53.8869 35.6832Z"
        fill="#610060"
      />
      <path
        d="M52.9284 17.2767L48.9233 31.2294H51.5682L52.3795 27.9773H55.8716L55.8069 29.3824L59.8637 26.5208L56.0714 23.6591L56.0068 25.0642H53.1104L54.391 20.0655L54.746 22.3256H54.752L55.0364 24.0396H55.4142L55.4967 22.2566L57.4247 23.7106L56.143 17.2855L52.9284 17.2767ZM58.3583 28.4846L56.0227 30.1282L56.2076 31.2294H58.8714L58.3583 28.4846Z"
        fill="#FDBC01"
      />
      <path
        d="M37.8944 17.2767L35.9575 31.2294H38.4433L39.5629 23.0916L40.8555 31.2294H43.2637L45.311 22.9773L45.7197 31.2294H48.1905L47.5233 17.2842H45.1131L42.2614 27.4889L40.3365 17.2842L37.8944 17.2767Z"
        fill="#44215D"
      />
      <path
        d="M60.2307 17.2767L60.0965 20.1885H64.5022L59.7077 28.6265L59.5894 31.2207H67.1183L67.2535 28.3063H62.8457L67.6393 19.8708L67.7576 17.2779L60.2307 17.2767Z"
        fill="#FDBC01"
      />
      <path
        d="M71.7951 17.2767L67.79 31.2294H70.4399L71.1071 28.6893H74.6189L75.0674 31.2294H77.7311L75.0097 17.2842L71.7951 17.2767ZM73.2597 20.0579L74.1546 25.7711H71.8329L73.2597 20.0579Z"
        fill="#9B0257"
      />
      <path
        d="M82.0564 17.2767L78.0493 31.2294H80.7021L81.3693 28.6893H84.8812L85.3296 31.2294H87.9904L85.269 17.2842L82.0564 17.2767ZM83.52 20.0579L84.4149 25.7711H82.0962L83.52 20.0579Z"
        fill="#D20653"
      />
      <path
        d="M89.676 17.2767L89.0347 31.2294H93.8073C94.3842 31.274 94.9611 31.1436 95.4898 30.8491C96.0186 30.5547 96.484 30.1047 96.847 29.5368C97.6517 27.9718 98.0723 26.1415 98.056 24.2757C98.2191 22.5179 97.9976 20.7374 97.4157 19.1275C97.108 18.4999 96.6667 17.9944 96.1421 17.6688C95.6176 17.3433 95.031 17.2109 94.4497 17.2867L89.676 17.2767ZM92.117 20.1885H94.0679C94.3862 20.1653 94.7013 20.2781 94.9627 20.5087C95.2255 20.8247 95.3908 21.2484 95.429 21.7041C95.5301 22.55 95.5554 23.4075 95.5046 24.2606C95.5032 25.3216 95.3279 26.3708 94.9895 27.3419C94.8699 27.6418 94.6844 27.8918 94.4551 28.062C94.2259 28.2321 93.9626 28.3152 93.6969 28.3013H91.7461L92.117 20.1885Z"
        fill="#F45B14"
      />
      <path
        d="M98.938 17.2767L101.728 27.1398L101.54 31.2294H104.114L104.301 27.1498L108 17.2867H105.441L103.218 23.845L101.601 17.2867L98.938 17.2767Z"
        fill="#FF951D"
      />
      <path
        d="M53.1537 17.6848L51.7617 22.5291L53.4222 18.1117L55.3621 17.681L53.1537 17.6848Z"
        fill="white"
      />
      <path
        d="M65.1165 17.578H60.4791L60.3936 19.4238L60.7485 17.9296L65.1165 17.578Z"
        fill="white"
      />
      <path
        d="M53.8618 25.3418H56.2074L56.2581 24.218L57.4662 25.0605L56.4898 24.7089L56.4689 25.8101L53.8618 25.3418Z"
        fill="white"
      />
      <path
        d="M56.1914 30.2313L57.8897 29.0359L56.4519 30.3644L56.3336 31.1177L56.1914 30.2313Z"
        fill="white"
      />
      <path
        d="M64.2227 28.5976L66.6358 28.9668L66.8347 30.7598L66.9341 28.6039L64.2227 28.5976Z"
        fill="white"
      />
      <path
        d="M17.0229 24.7629C14.0796 24.7269 11.2107 25.9304 8.86958 28.1833C7.72422 29.3194 6.84533 30.8278 6.32713 32.5467C6.07594 33.2798 5.97175 34.0799 6.02378 34.876C6.07581 35.6721 6.28245 36.4398 6.62542 37.111C7.0479 37.8179 7.62675 38.351 8.2889 38.6429C8.08793 39.082 7.98206 39.5801 7.98194 40.0873C7.98182 40.5944 8.08745 41.0927 8.28822 41.5319C8.48898 41.9711 8.7778 42.3358 9.12561 42.5893C9.47342 42.8429 9.86797 42.9763 10.2696 42.9761H10.375C9.7835 40.4829 9.89704 37.8075 10.6961 35.4083H9.86786C9.69129 35.4376 9.51175 35.4147 9.34336 35.3415C9.17497 35.2683 9.02232 35.1467 8.89742 34.9864C8.79799 34.8157 8.70949 34.6097 8.93023 33.9518C9.11478 33.4358 9.38624 32.9768 9.72568 32.607C10.0742 32.1825 10.4882 31.8531 10.9418 31.6392C11.3954 31.4254 11.879 31.3317 12.3626 31.3639H12.9224C14.8456 28.9418 17.4031 27.4901 20.1142 27.2818H20.2206C20.9773 27.3144 21.721 27.5381 22.4081 27.9397C22.4081 27.9397 23.1369 25.6607 18.5681 24.8973C18.0544 24.8135 17.5369 24.7716 17.0189 24.7717L17.0229 24.7629Z"
        fill="#FDBC01"
      />
      <path
        d="M0.973558 0.00149797C0.859412 0.00863876 0.749947 0.0610059 0.660704 0.151165C0.571462 0.241324 0.506977 0.364693 0.476403 0.503758L0.0190211 2.63836C0.00034456 2.72485 -0.00464285 2.81514 0.00434435 2.90406C0.0133315 2.99299 0.0361169 3.0788 0.0713964 3.15659C0.106676 3.23438 0.153757 3.30263 0.209945 3.35741C0.266133 3.4122 0.330325 3.45246 0.398847 3.47588L1.79784 3.94926L2.33874 4.13258L3.86998 4.64991L5.27096 11.2433C7.93969 12.0306 11.9647 13.9166 11.9647 13.9166C12.7869 14.2933 12.5612 12.052 13.2573 12.4224C23.5981 17.9096 21.9406 22.4349 21.9406 22.4349C23.7154 24.5118 23.7154 26.0411 23.3326 26.9364C28.3986 18.1732 17.3289 10.8101 11.7787 8.32017C11.5799 8.23353 11.3889 8.14564 11.1951 8.06151H11.1841L7.24566 6.72173L6.39751 2.72751C6.33347 2.42414 6.20717 2.14747 6.03136 1.92546C5.85556 1.70345 5.63648 1.54395 5.39625 1.46307L2.34272 0.428419L1.13563 0.0203327C1.08275 0.00316176 1.02803 -0.0031971 0.973558 0.00149797ZM19.6884 19.8307C19.6676 19.8307 19.6556 19.8521 19.6517 19.8872C19.6129 20.2754 19.6508 20.6697 19.762 21.0349C19.8803 21.1994 20.8806 21.9515 20.9383 21.6627C20.9751 21.4806 20.4769 20.7837 20.297 20.5012C20.1388 20.2403 19.9456 20.0163 19.7262 19.8395C19.717 19.8348 19.7073 19.8318 19.6974 19.8307H19.6884Z"
        fill="#44215D"
      />
      <path
        d="M23.2321 27.1134C22.7837 27.8668 22.4148 27.9358 22.4118 27.9358C22.4453 27.9279 22.4785 27.9179 22.5112 27.9057C23.4817 27.5905 31.5127 24.7264 29.0667 14.1074L11.186 8.0564C16.3922 10.2739 28.7147 17.8291 23.2321 27.1134Z"
        fill="#610060"
      />
      <path
        d="M29.066 14.0999C31.4106 24.6473 23.482 27.5905 22.5115 27.912C22.4788 27.9242 22.4456 27.9342 22.4121 27.9421C28.6564 30.1621 31.9376 26.6978 31.9376 26.6978C31.9376 26.6978 32.91 19.5582 33.2302 17.2063C33.2892 16.7671 33.2166 16.3158 33.0265 15.9405C32.8365 15.5651 32.5426 15.2926 32.2021 15.1759L29.066 14.0999Z"
        fill="#9B0257"
      />
      <path
        d="M31.9712 26.4467C31.6312 26.7355 28.5657 30.1095 22.413 27.941C22.385 29.0865 22.4446 30.2328 22.5909 31.3639H30.1099C30.4431 31.3619 30.7651 31.212 31.0195 30.9404C31.274 30.6688 31.4448 30.2929 31.5019 29.8784L31.9712 26.4467ZM23.45 35.4121C24.1233 37.6278 25.2471 39.5802 26.7084 41.0725C26.9014 40.3962 26.8872 39.6532 26.6686 38.9894H29.4934C30.0154 38.9894 30.2571 39.0283 30.3485 38.3478L30.5066 37.1851L30.6061 35.8578C30.5265 35.5414 30.2819 35.4096 29.9727 35.4096L23.45 35.4121Z"
        fill="#D20653"
      />
      <path
        d="M22.4117 27.9409C21.1264 28.7703 19.9967 29.9379 19.0987 31.365H22.5897C22.4501 30.2326 22.3905 29.0866 22.4117 27.9409ZM17.47 35.412C17.2214 36.5765 17.1519 37.7905 17.2652 38.9881H22.4356C22.322 39.338 22.2629 39.7123 22.2616 40.0905C22.2576 40.7738 22.4456 41.4367 22.7921 41.9615C23.1386 42.4863 23.6213 42.8389 24.1543 42.9567C24.6873 43.0745 25.2361 42.9498 25.7031 42.6048C26.1702 42.2598 26.5252 41.7168 26.7052 41.0724C25.2811 39.5361 24.1646 37.5966 23.4468 35.412H17.47Z"
        fill="#F45B14"
      />
      <path
        d="M20.1168 27.278C17.4052 27.4836 14.8469 28.9357 12.925 31.3601H19.1016C20.0099 29.9455 21.1373 28.7799 22.4147 27.9347C21.7419 27.4835 20.9889 27.257 20.2272 27.2767L20.1168 27.278ZM10.6938 35.4133C9.89624 37.813 9.78307 40.4878 10.3736 42.9811C10.9627 42.9487 11.5192 42.6302 11.9268 42.0921C12.3344 41.554 12.5616 40.8378 12.5611 40.0931C12.5612 39.7146 12.5017 39.3399 12.3861 38.9907H17.2691C17.1763 37.7926 17.2455 36.5833 17.474 35.4146L10.6938 35.4133Z"
        fill="#FF951D"
      />
      <path
        d="M1.05791 0.570287C0.92567 0.570287 0.841154 0.655671 0.794421 0.877921C0.700956 1.32619 0.439453 2.5404 0.439453 2.5404C0.439453 2.5404 1.07879 1.3852 1.32936 1.3852C1.71615 1.3852 4.83032 1.80459 4.83032 1.80459L1.60976 0.718453C1.43116 0.641151 1.24591 0.590991 1.05791 0.569031V0.570287ZM21.7962 12.2478L28.0604 15.0278L25.9664 15.014C25.9664 15.014 29.2098 15.8415 30.8236 16.3877C31.2571 16.5371 31.7831 16.6489 31.8387 17.7325C31.7897 20.9996 31.5858 24.2601 31.2282 27.4964C31.2282 27.4964 32.6203 18.2046 32.6899 17.6622C32.7595 17.1197 33.018 15.9859 31.7433 15.5552C30.4686 15.1245 21.7972 12.2503 21.7972 12.2503L21.7962 12.2478ZM8.77077 38.9781C8.63927 39.262 8.56016 39.5798 8.5393 39.9077C8.51845 40.2356 8.55639 40.5652 8.65031 40.872C8.74423 41.1788 8.8917 41.455 9.08178 41.6799C9.27185 41.9048 9.49963 42.0728 9.74818 42.1712C9.56294 41.9312 9.41701 41.6474 9.31873 41.336C9.22046 41.0247 9.17177 40.6919 9.17545 40.3568C9.29251 40.6607 9.47519 40.9166 9.70244 41.0951C9.5173 40.8009 9.38709 40.4578 9.3215 40.0912C9.25591 39.7247 9.25663 39.3442 9.32361 38.9781H8.77077ZM23.057 38.9781V38.9856C22.8725 39.3894 22.7949 39.857 22.8353 40.3204C22.8757 40.7838 23.0321 41.2188 23.2817 41.5622C23.2156 41.2384 23.2006 40.9013 23.2376 40.5701C23.2746 40.239 23.3629 39.9203 23.4975 39.6323C23.4793 39.9696 23.5361 40.3067 23.6615 40.6054C23.5901 40.0417 23.683 39.4644 23.923 38.9806L23.057 38.9781Z"
        fill="white"
      />
      <mask
        id="mask0_1820_561"
        maskUnits="userSpaceOnUse"
        x="7"
        y="20"
        width="16"
        height="9"
      >
        <path
          d="M22.7025 20.5137H7.20117V28.2837H22.7025V20.5137Z"
          fill="white"
        />
      </mask>
      <g mask="url(#mask0_1820_561)">
        <rect
          x="7.20117"
          y="20.5137"
          width="15.5063"
          height="7.78251"
          fill="url(#pattern0)"
        />
      </g>
      <defs>
        <pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            href="#image0_1820_561"
            transform="scale(0.0018315 0.00460829)"
          />
        </pattern>
        <image
          id="image0_1820_561"
          width="546"
          height="217"
          href="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
}
