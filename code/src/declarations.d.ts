// declarations.d.ts

// Allow importing normal CSS files
declare module '*.css' {
  const content: { [className: string]: string };
  export default content;
}

// Allow importing Swiper's CSS files
declare module 'swiper/css';
declare module 'swiper/css/pagination';
