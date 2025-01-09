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
        txt_journey: {
          DEFAULT: "hsl(var(--txt-journey))",
        },
        para_blog: {
          DEFAULT: "hsl(var(--text-para-blog))",
        },
        link_blog: {
          DEFAULT: "hsl(var(--text-link-blog))",
        },
        code_blog: {
          DEFAULT: "hsl(var(--text-code-blog))",
        },
        high_1: {
          DEFAULT: "hsl(var(--h-color-1))",
        },
        high_2: {
          DEFAULT: "hsl(var(--h-color-2))",
        },
        high_3: {
          DEFAULT: "hsl(var(--h-color-3))",
        },
        high_4: {
          DEFAULT: "hsl(var(--h-color-4))",
        },
        high_5: {
          DEFAULT: "hsl(var(--h-color-5))",
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
        "clamp_from-32_to-128": "clamp(2rem, 0.0408rem + 9.7959vw, 8rem);",
        "clamp_from-24_to-64": "clamp(1.5rem, 0.5909rem + 4.5455vw, 4rem)",
        "clamp_from-24_to-32": "clamp(1.5rem, 1.1098rem + 1.9512vw, 2rem);",
      },
      transitionTimingFunction: {
        "in-expo": "cubic-bezier(0.4, 0, 0.6, 1)",
      },
    },
  },
  plugins: [],
};
