// One scale budget, obeyed everywhere. The previous build put 180 km glow discs and 248 km
// beacons on a 4,500 km continent, which is why it read as mushrooms rather than a map.
export const S = {
  MAP: 100,            // map width in scene units → 1 unit ≈ 45 km at national scale
  RELIEF_US: 2.0,      // true continental relief is 0.1 units, so ~15x exaggerated
  RELIEF_CO: 6.0,      // at state zoom
  DOT: 0.20,           // marker sphere radius
  DOT_ON: 0.30,
  STEM: 0.85,          // marker stem height
  STEM_ON: 1.30,
  RING: 0.42,          // ground ring radius
  RIVER: 0.10,
  ROAD: 0.13,
  LABEL: 0.95,
  LABEL_BIG: 1.25,
  PEAK: 1.9,           // 14er shaft base height, plus elevation scaling
};
export const C = {
  bg: 0x090b09,
  landOff: 0x232b25, landOn: 0x3d5a3c, landCO: 0x33452f,
  edgeOff: 0x3d4740, edgeOn: 0x86a56b,
  park: 0xa8cc70, next: 0xe3c765, town: 0x86a8c4,
  summit: 0xf2f6ee, river: 0x4f93b5, road: 0xd9963f,
};
