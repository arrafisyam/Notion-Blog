const CONFIG = {
  // profile setting (required)
  profile: {
    name: "Arrafi",
    image: "/avatar.svg", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "Student",
    bio: "Iam student at Gunadarma.",
    email: "arrafisyam@gmail.com",
    linkedin: "rafisyam",
    github: "arrafisyam",
    instagram: "arrafisyam",
  },
  projects: [
    {
      name: `Arrafi`,
      href: "https://github.com/arrafisyam",
    },
  ],
  // blog setting (required)
  blog: {
    title: "Arrafi Blog",
    description: "welcome to Arrafi-Blog!",
  },

  // CONFIG configration (required)
  link: "https://www.notion.so/93933237bc2b4382b123fdaef3a0e156?v=e6506f57a7ac4e0092b48784b8bd484e&pvs=4",
  since: 2023, // If leave this empty, current year will be used.
  lang: "en-US", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: false,
    config: {
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO || "",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidateTime: 21600 * 7, // revalidate time for [slug], index
}

module.exports = { CONFIG }
