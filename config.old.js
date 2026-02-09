const SITE_CONFIG = {
  profile: {
    name: "Nic Huzz",
    bio: "On a mission to make healing fun",
    photo: "assets/profile.jpg",
    photoStyle: "hero"
  },

  social: [
    {
      platform: "instagram",
      url: "https://instagram.com/_huzz",
      label: "Instagram"
    }
  ],

  theme: {
    background: {
      type: "gradient",
      colors: ["#c4b5f0", "#6c3bf5", "#3a0f98"],
      angle: 180,
      animated: true
    },
    accent: "#FFD700",
    nameColor: "#FFD700",
    bioColor: "#ffffff",
    cardBackground: "#ffffff",
    cardText: "#1a1a1a",
    cardBorderRadius: "12px",
    cardHoverScale: "1.03",
    sectionTitleColor: "#FFD700",
    socialIconColor: "#FFD700",
    font: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
  },

  sections: [
    {
      title: null,
      links: [
        {
          title: "Keen to rent headsets in Bali?",
          url: "https://www.silentdiscorentalbali.com/",
          thumbnail: "assets/thumbnails/silent-disco-rental.jpg",
          enabled: true
        },
        {
          title: "Keen to buy headsets for yourself?",
          url: "https://buysilentdiscoheadsets.com/",
          thumbnail: "assets/thumbnails/buy-headsets.webp",
          enabled: true
        }
      ]
    },
    {
      title: "Healing, But Fun Online Tools",
      links: [
        {
          title: "The Ultimate Guide To Make Healing Fun",
          url: "https://huzz.kit.com/makehealingfun",
          thumbnail: null,
          enabled: true
        },
        {
          title: "Rise & Vibe: 5-day wake-up and dance challenge",
          url: "https://airtable.com/apppozbS8cgmVAsaQ/pagDTUm5OTHnWtia8/form",
          thumbnail: null,
          enabled: true
        }
      ]
    },
    {
      title: "My Events",
      links: [
        {
          title: "Sunset Silent Disco @ Dreamland Beach",
          url: null,
          thumbnail: null,
          type: "coming-soon",
          enabled: true
        }
      ]
    }
  ],

  seo: {
    title: "Nic Huzz | Links",
    description: "On a mission to make healing fun",
    ogImage: "assets/profile.jpg"
  },

  footer: {
    show: false,
    text: ""
  }
};
