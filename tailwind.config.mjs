export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--text-foreground))",
        accent: {
          DEFAULT: "hsl(var(--accent))",
        },
        ghost: {
          DEFAULT: "hsl(var(--ghost))",
        },
        ghost_label: {
          DEFAULT: "hsl(var(--ghost-label))",
        },
        link: {
          DEFAULT: "hsl(var(--link))",
        },
        header: {
          DEFAULT: "hsl(var(--header))",
        },
        header_2: {
          DEFAULT: "hsl(var(--header_2))",
        },
        para: {
          DEFAULT: "hsl(var(--para))",
        },
        intro: {
          DEFAULT: "hsl(var(--intro))",
        },
        txt_outline: {
          DEFAULT: "hsl(var(--txt-outline))",
        },
      },
      maxHeight: {
        article_height: "33.75rem", // 540px
      },
      maxWidth: {
        p_width: "28.124rem", // 450px
      },
      fontSize: {
        "2_r": "2rem", // 32px
        "4_r": "4rem", // 64px
      },
      transitionTimingFunction: {
        "in-expo": "cubic-bezier(0.4, 0, 0.6, 1)",
      },
    },
  },
  plugins: [],
};
