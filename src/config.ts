export const SITE = {
  website: "https://example.com/", // replace with your domain
  author: "Chae Eun Lee",
  profile: "", // optional personal profile URL
  desc:
    "A 3D vision engineer and AI researcher focusing on perception and interaction technologies for XR devices. Passionate about combining computer vision and AI to create intuitive human–computer interactions.",
  title: "Chae Eun Lee",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 0,
  postPerPage: 0,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: false,
  showBackButton: false,
  editPost: {
    enabled: false,
    text: "Edit page",
    url: "",
  },
  dynamicOgImage: false,
  dir: "ltr", // "rtl" | "auto"
  lang: "en", // html lang code. Set this empty and default will be "en"
  timezone: "Asia/Seoul", // Default global timezone (IANA format)
} as const;
