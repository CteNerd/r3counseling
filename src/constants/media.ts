// Single place to manage all S3/CDN media URLs.
// To switch to CloudFront, replace S3_BASE with your distribution URL and path prefix:
//   const S3_BASE = "https://YOUR_DISTRIBUTION_ID.cloudfront.net/r3counseling";
const S3_BASE = "https://wellcall-app-cdk.s3.amazonaws.com/r3counseling";

export const MEDIA = {
  // Branding
  logoSocial: `${S3_BASE}/R3+Counseling+Logo+-+Final-05.jpeg`,
  logoTransparent: `${S3_BASE}/R3+Counseling+Logo+-+Final-01-Transparentv2.png`,

  // Backgrounds
  contactBanner: `${S3_BASE}/Attachment-1.jpeg`,

  // Team
  tiffanyProfile: `${S3_BASE}/tiff-profile.jpeg`,
  tiffanySwinging: `${S3_BASE}/tiff-swinging.jpeg`,

  // Home
  homeRocks: `${S3_BASE}/Home-Rocks.png`,
  emdrBadge: `${S3_BASE}/EMDR+Certified+Therapist+%E2%80%A2+Tiffany+Luke+%E2%80%A2+EMDR+International+Association+Badge.png`,
  tfbgLogo: `${S3_BASE}/TFBG-logo.jpg`,

  // Insurance logos
  unitedHealthcareLogo: `${S3_BASE}/united-healthcare-logo.png`,
  anthemLogo: `${S3_BASE}/anthem-bcbs-logo-removebg.png`,
  oscarLogo: `${S3_BASE}/oscar-removebg.png`,
  aetnaLogo: `${S3_BASE}/aetna_purple.jpg`,
  cignaLogo: `${S3_BASE}/Cigna-Logo.png`,

  // Retreat — shared
  retreatHost: `${S3_BASE}/Retreat_Host_v2.jpg`,

  // Retreat — Pause
  retreat1: `${S3_BASE}/Retreat-1.png`,
  retreat7: `${S3_BASE}/Retreat-7.png`,
  retreat9: `${S3_BASE}/Retreat-9.png`,
  retreat12: `${S3_BASE}/Retreat-12.png`,
  retreat18: `${S3_BASE}/Retreat-18.png`,
  retreat19: `${S3_BASE}/Retreat-19.png`,
  pauseHero: `${S3_BASE}/retreat/IMG_0299.JPG`,
  pausePhoto0300: `${S3_BASE}/retreat/IMG_0300.jpg`,
  pausePhoto0301: `${S3_BASE}/retreat/IMG_0301.JPG`,
  pausePhoto0496: `${S3_BASE}/retreat/IMG_0496.JPG`,
  pausePhoto0497: `${S3_BASE}/retreat/IMG_0497.JPG`,
  pausePhoto0498: `${S3_BASE}/retreat/IMG_0498.JPG`,
  pausePhoto0502: `${S3_BASE}/retreat/IMG_0502.JPG`,

  // Retreat — Still Away
  stillAwayBanner: `${S3_BASE}/retreat/still-away-banner.jpeg`,
  stillAwayLake: `${S3_BASE}/retreat/still-away-lake.jpg`,
  stillAwayDock: `${S3_BASE}/retreat/still-away-dock.jpg`,
  stillAwayCandles: `${S3_BASE}/retreat/still-away-candles.png`,
  stillAwayFlower: `${S3_BASE}/retreat/still-away-flower.jpeg`,
  stillAwayNotebook: `${S3_BASE}/retreat/still-away-notebook.png`,
  stillAwayHotTub: `${S3_BASE}/retreat/still-away-hot-tub.jpg`,

  // Offerings
  groupIntensiveVideo: `${S3_BASE}/Group+Intensive+Offering+.mp4`,
  groupIntensivePdf: `${S3_BASE}/Group+Intensive+Offering+.pdf`,
  groupIntensiveFirstResponders: `${S3_BASE}/Group+Intensive+Offerings/EMDR+Group+-+First+Responders.png`,
  groupIntensiveHolistic: `${S3_BASE}/Group+Intensive+Offerings/EMDR+Group+-+Holistic+Offerings.png`,
  groupIntensiveSexualTrauma: `${S3_BASE}/Group+Intensive+Offerings/EMDR+Group+-+Sexual+Trauma.png`,
  groupIntensiveWellnessBooster: `${S3_BASE}/Group+Intensive+Offerings/EMDR+Group+-+Wellness+Booster.png`,

  // Videos
  emdrIntensivePackagesVideo: `${S3_BASE}/2024+EMDR+Intensive+Packages.mp4`,

  // Front desk
  frontDeskCheckin: `${S3_BASE}/Front-Desk-Check-in.jpeg`,
} as const;
