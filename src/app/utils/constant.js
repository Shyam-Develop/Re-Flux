export const topBarHeight = 64
export const sideNavWidth = 260
export const navbarHeight = 60
export const sidenavCompactWidth = 80
export const containedLayoutWidth = 1200

export const convertHexToRGB = (hex) => {
    // check if it's a rgba
    if (hex.match('rgba')) {
      let triplet = hex.slice(5).split(',').slice(0, -1).join(',');
      return triplet;
    }
  
    let c;
    if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
      c = hex.substring(1).split('');
      if (c.length === 3) {
        c = [c[0], c[0], c[1], c[1], c[2], c[2]];
      }
      c = '0x' + c.join('');
  
      return [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',');
    }
  };
  // typography.js
export const Fonts = {
  // Space Grotesk
  spaceRegular: "SpaceGrotesk-Regular",
  spaceMedium: "SpaceGrotesk-Medium",
  spaceSemiBold: "SpaceGrotesk-SemiBold",
  spaceBold: "SpaceGrotesk-Bold",
  spaceExtraBold: "SpaceGrotesk-ExtraBold",

  // Fira Sans
  firaRegular: "FiraSans-Regular",
  firaMedium: "FiraSans-Medium",
  firaSemiBold: "FiraSans-SemiBold",
  firaBold: "FiraSans-Bold",
  Intersemibold: "Inter-SemiBold"
};

// ---------------- Typography ----------------
export const typography = {
  // Display
  displayXL: { fontFamily: Fonts.spaceBold, fontSize: "64px", lineHeight: "1.10", letterSpacing: "-0.64px" }, // Hero headlines
  displayL: { fontFamily: Fonts.spaceBold, fontSize: "56px", lineHeight: "1.12", letterSpacing: "-0.56px" },  // Big page intros
  displayM: { fontFamily: Fonts.spaceBold, fontSize: "48px", lineHeight: "1.15", letterSpacing: "-0.48px" },  // Section heroes

  // Headings
  h1: { fontFamily: Fonts.spaceBold, fontSize: "40px", lineHeight: "1.10", letterSpacing: "-0.40px" },       // Page titles
  h1B: { fontFamily: Fonts.spaceBold, fontSize: "40px", lineHeight: "1.12", letterSpacing: "-0.40px" },      // Emphasized page title
  h2: { fontFamily: Fonts.spaceSemiBold, fontSize: "32px", lineHeight: "1.20", letterSpacing: "-0.32px" },   // Major section heads
  h2B: { fontFamily: Fonts.spaceBold, fontSize: "32px", lineHeight: "1.20", letterSpacing: "-0.32px" },      // Strong section head
  h3: { fontFamily: Fonts.spaceSemiBold, fontSize: "28px", lineHeight: "1.25", letterSpacing: "-0.28px" },   // Sub-heads / cards
  h3B: { fontFamily: Fonts.spaceBold, fontSize: "28px", lineHeight: "1.22", letterSpacing: "-0.28px" },      // Emphasized sub-head
h3R: {fontFamily: Fonts.spaceRegular, fontSize: "28px", lineHeight: "1.12", letterSpacing: "-0.28%" },
h3RBold: {fontFamily: Fonts.spaceRegular, fontSize: "48px", lineHeight: "1.12", letterSpacing: "-0.4%" },
h3medium: {fontFamily: Fonts.spaceRegular, fontSize: "20px", lineHeight: "1.30", letterSpacing: "0%" },
h3RB: {fontFamily: Fonts.spaceRegular, fontSize: "56px", lineHeight: "1.12", letterSpacing: "-0.56%" },
h3B1: {fontFamily: Fonts.spaceRegular, fontSize: "24px", lineHeight: "1.30", letterSpacing: "-0.12px" },

h4: { fontFamily: Fonts.spaceSemiBold, fontSize: "24px", lineHeight: "1.30", letterSpacing: "-0.12px" },   // Feature titles
  h5: { fontFamily: Fonts.spaceMedium, fontSize: "20px", lineHeight: "1.35", letterSpacing: "0px" },         // Small headers
  h6: { fontFamily: Fonts.spaceMedium, fontSize: "16px", lineHeight: "1.40", letterSpacing: "0px" },         // Long copy
  overline: { fontFamily: Fonts.spaceMedium, fontSize: "16px", lineHeight: "1.40", letterSpacing: "0.32px" },// Label text

  // Body
  bodyBase: { fontFamily: Fonts.firaRegular, fontSize: "18px", lineHeight: "1.60", letterSpacing: "0px" },   // Long copy
    bodyBasemedium: { fontFamily: Fonts.firaRegular, fontSize: "18px", lineHeight: "1.60", letterSpacing: "0px" },   // Long copy

  bodyStrong: { fontFamily: Fonts.firaSemiBold, fontSize: "16px", lineHeight: "1.60", letterSpacing: "0px" },// Emphasis
  bodySmall: { fontFamily: Fonts.firaRegular, fontSize: "14px", lineHeight: "1.40", letterSpacing: "-0.14px" }, // Captions, legal
  bodyStrongB: { fontFamily: Fonts.firaSemiBold, fontSize: "18px", lineHeight: "1.60", letterSpacing: "0px" },// Emphasis

  // Buttons & UI
  buttonLink: { fontFamily: Fonts.firaSemiBold, fontSize: "14px", lineHeight: "1.40", letterSpacing: "-0.42px" }, // CTAs, nav
  uiLabel: { fontFamily: Fonts.firaSemiBold, fontSize: "13px", lineHeight: "1.40", letterSpacing: "-0.26px" },    // Form labels
buttonSBold: { fontFamily: Fonts.Intersemibold, fontSize: "16px", lineHeight: "1", letterSpacing: "0px" },
  // Special
  specNums: { fontFamily: Fonts.firaMedium, fontSize: "16px", lineHeight: "1.45", letterSpacing: "0px" },   // tabular-nums
};
