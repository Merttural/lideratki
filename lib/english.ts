import type { Faq, LandingPage } from "@/lib/catalog";

type Copy = Pick<LandingPage, "nav" | "h1" | "seoTitle" | "description" | "intro" | "details" | "points" | "message"> & {
  faqs: Faq[];
};

export const englishPages: Record<string, Copy> = {
  "dokuma-atki": {
    nav: "Woven scarf",
    h1: "Woven scarf",
    seoTitle: "Woven Scarf Production | Lider Atkı",
    description:
      "A scarf woven on the loom. Lettering and logos stay firm. For clubs, schools and associations, from one sample to wholesale.",
    intro:
      "A woven scarf is made on the loom. Lettering, a crest and colours sit firmly in the cloth. Clubs, schools and associations can order a single sample.",
    details:
      "It is cut narrower than a shawl scarf and is flatter and firmer than a knitted or knit scarf. It holds its shape at a match or an event.",
    points: [
      "Send the logo file or a sharp photo on WhatsApp. Lettering and crests stay clear in the weave.",
      "Quantity, colour and model set the price. Daily capacity is 5,000.",
      "Time depends on quantity and model. We do not publish a fixed number of days.",
    ],
    message: "Hello, I would like a price for a woven scarf.",
    faqs: [
      {
        q: "Can you make a woven scarf sample?",
        a: "Yes. One sample is enough. Match days and events can be hundreds of pieces.",
      },
      {
        q: "Is a woven scarf the same as a shawl scarf?",
        a: "No. A woven scarf is narrower and firmer. A shawl scarf is cut wider and worn over the shoulder.",
      },
      {
        q: "What sets the price of a woven scarf?",
        a: "Quantity, colour and model. Send the logo and we will quote that order.",
      },
    ],
  },
  "sal-atki": {
    nav: "Shawl scarf",
    h1: "Shawl scarf",
    seoTitle: "Custom Shawl Scarf | Lider Atkı",
    description:
      "A wide shawl scarf worn over the shoulder. A name, date, logo or short line. For clubs, associations and events, from 1 piece.",
    intro:
      "A shawl scarf is cut wide and worn over the shoulder. A name, date, logo or short line is worked into the edge. Clubs, associations and events can start at 1 piece.",
    details:
      "It is wider and longer than a classic fan scarf. Width and length follow a photo of your sample. We do not publish a fixed centimetre chart.",
    points: [
      "A single gift is possible, and so are hundreds for an association or an event.",
      "For a narrower, firmer cloth, see the woven scarf.",
      "Send the text and the logo on WhatsApp. The price follows quantity and size.",
    ],
    message: "Hello, I would like a price for a shawl scarf.",
    faqs: [
      {
        q: "What size is a shawl scarf cut to?",
        a: "Width and length are set with the order. Send a photo of your sample and we will cut to match. There is no ready size list.",
      },
      {
        q: "Can you put a name or a date on a shawl scarf?",
        a: "Yes. A name, date, logo or short line can be added. Write the text in the message.",
      },
      {
        q: "Can shawl scarves be ordered wholesale?",
        a: "Yes. One piece or hundreds. Send the quantity and we will quote it.",
      },
    ],
  },
  "triko-atki": {
    nav: "Knitted scarf",
    h1: "Knitted scarf",
    seoTitle: "Knitted Scarf Production | Lider Atkı",
    description:
      "A soft yarn knitted scarf for winter. Plain colour, club colour or a printed logo. From 1 piece.",
    intro:
      "A knitted scarf is yarn. It wraps around the neck and feels softer than a woven scarf. Choose a plain colour, a club colour or a printed logo.",
    details:
      "Yarn type and knit thickness are not a fixed list on the site. Send a photo of the model you want and we will quote that sample. Schools, fan groups and gifts start at 1 piece.",
    points: [
      "A search for a knit scarf means the same yarn construction. The knit scarf page explains that.",
      "A logo, name or short slogan can be printed. Send the artwork as a photo.",
      "A winter hat or beanie can be added to the same order.",
    ],
    message: "Hello, I would like a price for a knitted scarf.",
    faqs: [
      {
        q: "How is a knitted scarf different from a woven scarf?",
        a: "A knitted scarf is yarn and feels soft. A woven scarf comes off the loom, so lettering and crests look firmer.",
      },
      {
        q: "How do I send a logo for a knitted scarf?",
        a: "Send the logo, name or short slogan on WhatsApp as a photo or a file. The print follows that.",
      },
      {
        q: "What yarn is a knitted scarf made from?",
        a: "There is no fixed yarn list on the site. Send a photo of the model and we will make and price that sample.",
      },
    ],
  },
  "orme-atki": {
    nav: "Knit scarf",
    h1: "Knit scarf",
    seoTitle: "Knit Scarf Manufacturing | Lider Atkı",
    description:
      "A knit scarf is a winter yarn knit. Colour, a name and a short slogan. It is a different cloth from a woven scarf.",
    intro:
      "A knit scarf is the same yarn construction as a knitted scarf. It is a soft winter scarf that wraps the neck. Colour, name and a short slogan are written with the order.",
    details:
      "A woven scarf is loom cloth and the lettering looks firmer. Knit structure is not a catalogue on the site. If you want a rib or another stitch, send a photo of the sample.",
    points: [
      "One sample or a season quantity both work. Daily capacity is 5,000.",
      "For a large run, see wholesale scarves.",
      "The knitted scarf page describes the same family from the winter-use side.",
    ],
    message: "Hello, I would like a price for a knit scarf.",
    faqs: [
      {
        q: "Are a knit scarf and a knitted scarf the same product?",
        a: "Yes. Both are yarn knits. A woven scarf is a different cloth. Send a photo and we will match the type.",
      },
      {
        q: "Can I choose the stitch of a knit scarf?",
        a: "There is no fixed stitch catalogue. Send a photo of the sample you want and we will make that.",
      },
      {
        q: "Can knit scarves be made wholesale?",
        a: "Yes. Send the quantity, colour and text. Daily capacity is 5,000. Time depends on quantity and model.",
      },
    ],
  },
  "taraftar-atkisi": {
    nav: "Fan scarf",
    h1: "Fan scarf",
    seoTitle: "Fan Scarf Production | Lider Atkı",
    description:
      "A scarf for a fan group. Group name, slogan, colours and crest. Woven, shawl or knit. From one sample to a bulk run.",
    intro:
      "A fan scarf carries the group name, slogan, colours and crest. It can be woven, a shawl, knitted or a knit scarf. A photo of an old scarf works as the sample.",
    details:
      "One sample is possible, and so are hundreds for a match day. The founding year and the group name can sit on the same scarf. Production follows the crest and colours you send.",
    points: [
      "A large group order can also go through the wholesale scarf page.",
      "Choose a woven scarf when the lettering should look firm.",
      "A beanie can be added in the same colours. Time depends on quantity and model.",
    ],
    message: "Hello, I would like a price for a fan scarf.",
    faqs: [
      {
        q: "What can you put on a fan scarf?",
        a: "Group name, slogan, founding year, colours and crest. A photo of an old scarf is enough as the sample.",
      },
      {
        q: "How long does a fan scarf take?",
        a: "Time depends on quantity and model. There is no fixed number of days. Send the quantity and we will confirm the time on WhatsApp.",
      },
      {
        q: "How do I order fan scarves in bulk?",
        a: "Send the model, the colours and the quantity. A sample is one piece. Hundreds can be made from the same design.",
      },
    ],
  },
  "kisiye-ozel-atki": {
    nav: "Custom",
    h1: "Custom scarf",
    seoTitle: "Custom Scarf | Lider Atkı",
    description:
      "A scarf made to a name, date, logo or short line. For companies, schools and associations. From one gift to a company run.",
    intro:
      "On a custom scarf the text and the logo are yours. Companies, schools, associations and fan groups can choose a shawl, a woven scarf or a knit.",
    details:
      "A drawing, a logo file or a clear photo is enough. We do not publish an accepted file-format list. Send it on WhatsApp. A gift can be one piece. A company order can be hundreds.",
    points: [
      "For a wide cut and edge lettering, see the shawl scarf.",
      "For firmer lettering, choose a woven scarf.",
      "Quantity, colour and model set the price. Send the text and the logo in the message.",
    ],
    message: "Hello, I would like a price for a custom scarf.",
    faqs: [
      {
        q: "How do I send a logo or design file?",
        a: "Send a file or a clear photo on WhatsApp. There is no format list. Text and colour follow that image.",
      },
      {
        q: "Can you make a single custom scarf?",
        a: "Yes. Samples and gifts start at 1 piece.",
      },
      {
        q: "How does the order move forward?",
        a: "Pick the model, write the quantity and the text, and send the logo or a sample photo. We quote on WhatsApp.",
      },
    ],
  },
  "toptan-atki": {
    nav: "Wholesale",
    h1: "Wholesale scarves",
    seoTitle: "Wholesale Scarf Production | Lider Atkı",
    description:
      "Wholesale scarves: woven, shawl, knitted and knit. Price follows quantity, size and model. Capacity of 5,000 a day.",
    intro:
      "Wholesale scarves are for events, away trips and a full season. Woven, shawl, knitted and knit options are available. The same design can also be made in batches.",
    details:
      "The unit price changes as the quantity grows. We do not publish the quantity where the price changes. Send the number and we will quote that order. Daily capacity is 5,000.",
    points: [
      "You can order 1 piece. We do not publish a separate minimum.",
      "Time depends on quantity and model. There is no fixed delivery day.",
      "Hats and flags can be added to the same order.",
    ],
    message: "Hello, I would like a price for wholesale scarves.",
    faqs: [
      {
        q: "Is there a minimum for wholesale scarves?",
        a: "You can order 1 piece. The unit price changes as the quantity grows. We do not publish discount bands. Send the number.",
      },
      {
        q: "What affects the wholesale scarf price?",
        a: "Quantity, size and model. Making the same design in batches also changes the price. We do not publish other factors.",
      },
      {
        q: "What does production time depend on?",
        a: "Quantity and model. Daily capacity is 5,000. Send the quantity and we will confirm the time on WhatsApp.",
      },
    ],
  },
  bere: {
    nav: "Beanie",
    h1: "Fan beanie",
    seoTitle: "Fan Beanie Production | Lider Atkı",
    description:
      "Fleece beanies and neck gaiters. A printed crest, name and colour. Winter orders start at 1 piece.",
    intro:
      "A beanie is a close-fitting fleece winter hat. A neck gaiter can be made with it. Crest, name and colour are chosen with the order.",
    details:
      "A hat search usually means this model. If you want a different cut, send a photo. There is no fixed pattern list on the site.",
    points: [
      "One sample is made. A group order can be larger.",
      "The hat page describes the same winter product for a hat search.",
      "A fleece sweatshirt can be added to the same order.",
    ],
    message: "Hello, I would like a price for a fan beanie.",
    faqs: [
      {
        q: "How is a logo applied to a beanie?",
        a: "Crest, name and colour are printed. Send the sample on WhatsApp. We do not split print methods on the site.",
      },
      {
        q: "Do you make neck gaiters too?",
        a: "Yes. A neck gaiter can be made with the fleece beanie. Send a photo of the model.",
      },
      {
        q: "Is a beanie the same as a hat?",
        a: "Winter orders are usually a fleece beanie. Send a photo for a different model. The hat page describes the same product.",
      },
    ],
  },
  sapka: {
    nav: "Hat",
    h1: "Hat",
    seoTitle: "Fan Hat Production | Lider Atkı",
    description:
      "Fan and group hats. A crest, name or short slogan on a fleece beanie. For schools and associations, from 1 piece.",
    intro:
      "Most hat orders are a fleece beanie, printed with a crest, group name and colours. Schools and associations can also start at 1 piece.",
    details:
      "The beanie page describes the same product as a beanie and a neck gaiter. If you want a brim or another cut, send a photo. Head size is not a standard chart on the site.",
    points: [
      "A name, number or short slogan can be printed. Write the text in the message.",
      "Scarves and flags can be collected in the same order.",
      "One sample is made. A group order can be larger.",
    ],
    message: "Hello, I would like a price for a hat.",
    faqs: [
      {
        q: "What text can you print on a hat?",
        a: "A name, number, group name or short slogan. A crest can be printed too. Send the text and the image on WhatsApp.",
      },
      {
        q: "What is the minimum order for a hat?",
        a: "One sample is made. A group order can be larger. We do not publish a separate minimum.",
      },
      {
        q: "Is a hat different from a beanie?",
        a: "Winter orders are usually a fleece beanie. If you want another model, send a photo.",
      },
    ],
  },
  bayrak: {
    nav: "Flag",
    h1: "Flag",
    seoTitle: "Flag Production | Lider Atkı",
    description:
      "Pennants, club flags and terrace flags. Crest, year and slogan are printed. Size and quantity are set with the order.",
    intro:
      "A flag order runs from a pennant to a large terrace flag two people can open. Crest, founding year and slogan are printed on the same face.",
    details:
      "We do not keep a fixed centimetre chart. Send the size you have, or where the flag will be used. A small pennant and a large flag are priced separately.",
    points: [
      "For team colours and a crest, see the team flag page.",
      "Scarves and hats can be made on the same order.",
      "One piece is possible. Write the quantity and where it will be used together.",
    ],
    message: "Hello, I would like a price for a flag.",
    faqs: [
      {
        q: "What sizes do you make flags in?",
        a: "Pennants and large terrace sizes are priced separately. There is no ready size chart. Send the size or where it will be used.",
      },
      {
        q: "What is the difference between a flag and a team flag?",
        a: "A team flag is printed with the club crest and colours. This page describes pennants and terrace sizes in general.",
      },
      {
        q: "Can you print a crest and a slogan on a flag?",
        a: "Yes. Crest, year and a short slogan go on the same face. Send the logo file or a clear photo.",
      },
    ],
  },
  "takim-bayragi": {
    nav: "Team flag",
    h1: "Team flag",
    seoTitle: "Team Flag and Pennant | Lider Atkı",
    description:
      "Terrace flags and pennants in team colours, with a crest. Write the size and the quantity separately. From 1 piece.",
    intro:
      "A team flag is printed in the club colour with its crest. A small pennant suits a dressing room or a stand. A large one is for the terrace.",
    details:
      "The flag page describes pennants and terrace sizes in general. This page is the job made to the crest and team colours you send. There is no size chart.",
    points: [
      "Crest, year and slogan sit on the same face. A clear logo speeds the job up.",
      "Write the pennant quantity and the large-flag quantity separately. They are priced apart.",
      "A fan scarf can be added in the same colours.",
    ],
    message: "Hello, I would like a price for a team flag.",
    faqs: [
      {
        q: "Can you print a crest on a team flag?",
        a: "Yes. Crest, year and slogan go on the same face. A clear logo file or photo speeds the job up.",
      },
      {
        q: "Can a pennant and a large flag be ordered together?",
        a: "Yes. Write the two quantities separately and we will price each line.",
      },
      {
        q: "Where is a team flag used?",
        a: "A small pennant is for a dressing room or a stand. A large one is for the terrace. Tell us where it will be used.",
      },
    ],
  },
  forma: {
    nav: "Fleece",
    h1: "Fleece sweatshirt",
    seoTitle: "Fleece Sweatshirt Printing | Lider Atkı",
    description:
      "A logo printed on a fleece sweatshirt. Chest and back are set separately. Mixed sizes, from 1 piece.",
    intro:
      "A club or group logo is printed on a fleece sweatshirt. Colour and the size breakdown are set with the order. Send the sample on WhatsApp.",
    details:
      "We do not split print methods on the site, and we do not claim embroidery or a named transfer. Write whether the logo sits on the chest or the back, and how many of each size. A photo of your sample is enough for the cloth.",
    points: [
      "One sample is possible. Sizes can be mixed.",
      "Scarves, beanies and hats can be added to the same order.",
      "The price is written for the quantity, colour and print placement.",
    ],
    message: "Hello, I would like a price for a fleece sweatshirt.",
    faqs: [
      {
        q: "How is a logo printed on a fleece sweatshirt?",
        a: "Chest and back are written separately. Send a photo of the logo. We do not list print methods on the site.",
      },
      {
        q: "Can sizes be mixed in one order?",
        a: "Yes. Write how many of each size.",
      },
      {
        q: "Can a fleece sweatshirt be ordered with scarves?",
        a: "Yes. Write the size breakdown and where the logo sits. A beanie or a hat can be added too.",
      },
    ],
  },
};

export const englishHome = {
  h1: "Scarf, hat and flag production",
  seoTitle: "Scarf Manufacturing and Wholesale Production | Lider Atkı",
  description:
    "Custom scarves, woven scarves, fan scarves, beanies and flags. From one sample to wholesale orders. Request a quote from Lider Atkı.",
  intro:
    "We make shawl scarves, woven scarves, knitted scarves and knit scarves, plus hats and flags. For fan groups, clubs, schools and companies. One piece or 5,000. There is no price on the site. Send the wording and logo on WhatsApp.",
  message: "Hello, I would like a price for a scarf.",
  faqs: [
    {
      q: "Are a shawl scarf, a knitted scarf and a knit scarf the same?",
      a: "A shawl scarf is cut wider. Knitted and knit scarves are yarn. A woven scarf comes off the loom, so the lettering looks firmer.",
    },
    {
      q: "How many pieces can you make in a day?",
      a: "Daily capacity is 5,000. A sample can be 1 piece.",
    },
    {
      q: "How do I get a price?",
      a: "There is no cart. Send the quantity, colour and text on WhatsApp and we will quote.",
    },
    {
      q: "What should I send with an order?",
      a: "Quantity, colour, text and the logo if you have one. A photo of an old piece also works. The quote follows those details.",
    },
  ],
};

export const productNamesEn: Record<string, string> = {
  "Şal atkı": "Shawl scarf",
  "Taraftar bere": "Fan beanie",
  "Şapka": "Hat",
  "Bayrak": "Flag",
  "Takım bayrağı": "Team flag",
  "Atkı çeşitleri": "Scarf styles",
  "Dokuma atkı": "Woven scarf",
  "Triko atkı": "Knitted scarf",
  "Polar sweatshirt": "Fleece sweatshirt",
  "Kişiye özel atkı": "Custom scarf",
  "Şirket logosu": "Company logo",
  Türkiye: "Turkey",
  "Sivasspor bere": "Sivasspor beanie",
  Boyunluk: "Neck gaiter",
  "Turkay Spor flama": "Turkay Spor pennant",
  "Gökçebeyspor bayrak": "Gökçebeyspor flag",
};
