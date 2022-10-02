type BakeryData = {
  name: string;
  links: {
    facebook: string;
    instagram: string;
    website: string;
  };
  location?: string;
};

export const bakeriesData: BakeryData[] = [
  {
    name: "Świeżo upieczona",
    links: {
      facebook: "https://www.facebook.com/profile.php?id=100060301493533",
      instagram: "https://www.instagram.com/swiezo.upieczona.piekarnia/",
      website: "https://swiezo-upieczona.com.pl/",
    },
    location:
      "https://www.google.pl/maps/place/%C5%9Awie%C5%BCo+Upieczona+Rodzinna+Piekarnia+Rzemie%C5%9Blnicza/@50.062405,19.9683293,17z/data=!4m5!3m4!1s0x47165bdbd241853b:0x8a60346bc4e85139!8m2!3d50.062405!4d19.970518",
  },
  {
    name: "Zaczyn",
    links: {
      facebook: "https://www.facebook.com/piekarnia.zaczyn",
      instagram: "https://www.instagram.com/zaczyn.piekarnia/",
      website: "https://piekarnia-zaczyn.pl/",
    },
  },
  {
    name: "Breaking Bread",
    links: {
      facebook: "https://www.facebook.com/breakingbreadkrakow",
      instagram: "https://www.instagram.com/breakingbreadkrakow/",
      website: "http://www.breakingbread.pl/",
    },
  },
];
