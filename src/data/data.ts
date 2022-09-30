type BakeryData = {
  name: string;
  links: {
    facebook: string;
    instagram: string;
    website: string;
  };
};

export const bakeriesData: BakeryData[] = [
  {
    name: "Świeżo upieczona",
    links: {
      facebook: "https://www.facebook.com/profile.php?id=100060301493533",
      instagram: "https://www.instagram.com/swiezo.upieczona.piekarnia/",
      website: "https://swiezo-upieczona.com.pl/",
    },
  },
  {
    name: "Zaczyn",
    links: {
      facebook: "https://www.facebook.com/piekarnia.zaczyn",
      instagram: "https://www.instagram.com/zaczyn.piekarnia/",
      website: "https://piekarnia-zaczyn.pl/",
    },
  },
];
