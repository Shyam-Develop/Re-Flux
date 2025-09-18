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



export const RefluxSvg = () => (
  <svg
    width="114"
    height="114"
    viewBox="0 0 114 114"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M57.1457 0.0644531C25.9403 0.0644531 0.634766 25.3821 0.634766 56.62C0.634766 87.8579 25.9403 113.181 57.1457 113.181C88.3511 113.181 113.657 87.8528 113.657 56.62C113.657 25.3871 88.3511 0.0644531 57.1457 0.0644531ZM49.4187 104.452L54.0115 93.0608H48.7172L58.2358 81.7356L55.8536 89.6461L61.6829 89.6764L49.4187 104.447V104.452ZM57.6958 81.7507C57.5191 81.7608 57.3273 81.7709 57.1457 81.7709C56.964 81.7709 56.7772 81.7608 56.5955 81.7507C49.9739 81.4123 44.715 75.9416 44.715 69.2333C44.715 62.5251 50.2717 56.7564 57.1457 56.7109C64.0196 56.7614 69.5763 62.3483 69.5763 69.2333C69.5763 76.1184 64.3174 81.4123 57.6958 81.7507ZM69.5763 83.5793C73.2354 80.1848 75.7134 74.6838 75.7134 69.3041C75.7134 59.0346 67.4011 50.7149 57.1507 50.7149C46.9003 50.7149 38.588 59.0396 38.588 69.3041C38.588 74.6838 41.066 80.1848 44.7251 83.5793C39.6529 79.6594 35.7566 73.3654 35.7566 66.4652C35.7566 54.6348 45.3408 45.0422 57.1557 45.0422C68.9707 45.0422 78.5549 54.6348 78.5549 66.4652C78.5549 73.3654 74.6536 79.6594 69.5864 83.5793H69.5763ZM85.1967 66.349C85.1967 50.8412 72.6398 38.2682 57.1457 38.2682C41.6515 38.2682 29.0997 50.8412 29.0997 66.349C29.0997 75.5021 33.8186 83.1348 40.5916 88.2519C32.1581 82.6751 26.0008 74.1231 26.0008 63.2474C26.0008 46.0322 39.9456 32.0752 57.1457 32.0752C74.3457 32.0752 88.2905 46.0272 88.2905 63.2474C88.2905 74.1231 82.1332 82.6751 73.6997 88.2519C80.4727 83.1348 85.1967 75.4971 85.1967 66.349ZM94.1904 63.207C94.1904 42.7286 77.601 26.1247 57.1457 26.1247C36.6903 26.1247 20.1009 42.7337 20.1009 63.207C20.1009 75.7648 26.9295 86.2263 36.4682 92.9396C25.0671 85.7868 16.7295 74.2949 16.7295 59.8276C16.7295 37.4853 34.8229 19.376 57.1457 19.376C79.4684 19.376 97.5618 37.4853 97.5618 59.8276C97.5618 74.2898 89.2191 85.7868 77.8231 92.9396C87.3618 86.2263 94.1904 75.7648 94.1904 63.207ZM81.9414 97.6172C94.8566 89.1914 104.34 76.6842 104.34 60.0954C104.34 34.0048 83.2031 12.8597 57.1457 12.8597C31.0882 12.8597 9.95147 34.0048 9.95147 60.0954C9.95147 76.6842 19.4398 89.1864 32.3549 97.6172C17.5825 88.8126 6.67599 75.2748 6.67599 56.8069C6.67599 28.9029 29.2763 6.29284 57.1457 6.29284C85.015 6.29284 107.615 28.908 107.615 56.8069C107.615 75.2748 96.7139 88.8126 81.9363 97.6172H81.9414Z"
      fill="white"
    />
  </svg>
);
