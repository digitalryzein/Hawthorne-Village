// Registry of blog posts, newest first.
import p0 from "./data/why-your-teeth-hurt-during-winter-tips-to-prevent-it";
import p1 from "./data/early-detection-of-oral-cancer";
import p2 from "./data/foods-that-are-good-for-your-oral-health";
import p3 from "./data/do-you-have-sensitive-teeth-follow-these-tips";
import p4 from "./data/cosmetic-dentistry-at-hawthorne-village-dental-care";
import p5 from "./data/oral-cancer-screening-with-velscope";
import p6 from "./data/age-appropriate-dental-care-for-your-kids-as-they-grow";
import p7 from "./data/3d-dental-imaging-with-the-itero-scanner";
import p8 from "./data/i-cant-go-to-the-dentist-im-pregnant";
import p9 from "./data/do-i-really-need-a-crown";
import p10 from "./data/what-you-need-to-know-about-root-canal-therapy";
import p11 from "./data/teeth-in-a-day-treatments-in-milton-on";
import p12 from "./data/infertility-the-oral-health-connection-and-a-couples-ability-to-conceive";
import p13 from "./data/orthodontics-in-milton";
import p14 from "./data/parents-save-kids-baby-teeth-now";
import p15 from "./data/spring-cleaning-benefits-regular-prophylactic-appointments";
import p16 from "./data/soft-tissue-laser-treatments-help-smile";
import p17 from "./data/early-cavity-diagnosis-important";
import p18 from "./data/wand-anesthesia-system-keeps-comfortable";
import p19 from "./data/pediatric-dentist-at-hawthorne-village-dental-care";
import p20 from "./data/prevent-cavities-children";
import p21 from "./data/anxiety-trips-dentist";
import p22 from "./data/sugary-sweets-mean-smile";
import p23 from "./data/real-risks-poor-oral-health";
import p24 from "./data/top-7-tips-brush-floss-correctly";
import p25 from "./data/saving-smiles-hockey-season";
import p26 from "./data/nightlase-snoring-treatments-now-offered";
import p27 from "./data/fulfill-resolution-healthier-beautiful-smile-2018";
import p28 from "./data/orthodontics-helping-teen-adjust-treatment";

export const blogPosts = [
  p0,
  p1,
  p2,
  p3,
  p4,
  p5,
  p6,
  p7,
  p8,
  p9,
  p10,
  p11,
  p12,
  p13,
  p14,
  p15,
  p16,
  p17,
  p18,
  p19,
  p20,
  p21,
  p22,
  p23,
  p24,
  p25,
  p26,
  p27,
  p28,
];

export const blogPostsBySlug = Object.fromEntries(blogPosts.map((p) => [p.slug, p]));
