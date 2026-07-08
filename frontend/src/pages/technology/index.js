// Registry of technology page configs, keyed by their root-level URL slug.
import digitalRadiography from "./data/digital-radiography";
import softTissueLaser from "./data/soft-tissue-laser";
import seilerMicroscope from "./data/seiler-microscope";
import isolite from "./data/isolite-dental-isolation-system";
import theWand from "./data/the-wand";
import laserDentistry from "./data/laser-dentistry";
import airPurification from "./data/air-purification-system";
import earlyLaserCavityDetection from "./data/early-laser-cavity-detection";
import waterPurification from "./data/water-purification-system";
import velscope from "./data/velscope";
import cbct from "./data/3d-cone-beam-ct-scan";

export const techPages = {
  "digital-radiography": digitalRadiography,
  "soft-tissue-laser": softTissueLaser,
  "seiler-microscope": seilerMicroscope,
  "isolite-dental-isolation-system": isolite,
  "the-wand": theWand,
  "laser-dentistry": laserDentistry,
  "air-purification-system": airPurification,
  "early-laser-cavity-detection": earlyLaserCavityDetection,
  "water-purification-system": waterPurification,
  velscope,
  "3d-cone-beam-ct-scan": cbct,
};
