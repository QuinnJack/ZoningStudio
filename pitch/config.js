var config = {
  style: "mapbox://styles/qdogger69/cm8zcqmeb001g01ru4c8e09wg",

  accessToken:
    "pk.eyJ1IjoicWRvZ2dlcjY5IiwiYSI6ImNseDd1MWZ4ZzBrdmsyanB2d3E4MHY4ejQifQ.aXV61OY1jofAOXK_28omhA",
  showMarkers: false,
  markerColor: "#3FB1CE",
  //projection: 'equirectangular',
  //Read more about available projections here
  //https://docs.mapbox.com/mapbox-gl-js/example/projections/
  inset: false,
  insetOptions: {
    markerColor: "orange",
  },
  insetPosition: "bottom-right",
  theme: "dark",
  use3dTerrain: false, //set true for enabling 3D maps.
  auto: false,
  title: "Ottawa and Zoning",
  subtitle: "How cities plan for growth",
  byline: "SED 3111 Group One",
  footer: "",
  chapters: [
    {
      id: "slide-1",
      alignment: "left",
      hidden: false,
      title: "A Unique Opportunity",
      description:
        "Imagine a city designed intentionally, not just by planners or councillors, but by its residents. Ottawa’s local laws shape where we live, work, shop, and relax. They determine how neighbourhoods look and feel, from how tall buildings can be to how green our parks remain. Now, Ottawa is rewriting its zoning rules for the first time in over 16 years, offering a crucial moment for residents to shape the city’s future.",
      location: {
        center: [-75.69847, 45.42356],
        zoom: 13.8,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "special_district_1",
          opacity: 0,
          duration: 500,
        },
        {
          layer: "buildings-1",
          opacity: 0,
          duration: 1000,
        },
        {
          layer: "buildings-2",
          opacity: 0,
          duration: 1000,
        },
        {
          layer: "special_district_2",
          opacity: 0,
          duration: 500,
        },
      ],
      onChapterExit: [],
    },

    {
      id: "slide-2",
      alignment: "left",
      hidden: false,
      title: "What Is Zoning?",
      description:
        "Zoning by-laws translate the city’s vision into practical rules about land use—what can be built, where, and how. Each property in Ottawa falls within a specific zone, such as residential, commercial, industrial, dictating everything, including permissible uses, noises restrictions and height limits. Zoning is not static; it evolves alongside the city. ",
      location: {
        center: [-75.69847, 45.42356],
        zoom: 13.8,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "zoning",
          opacity: 1,
          duration: 1500,
        },
      ],
      onChapterExit: [
        {
          layer: "zoning",
          opacity: 0,
          duration: 1000,
        },
      ],
    },
    {
      id: "slide-3",
      alignment: "left",
      hidden: false,
      title: "New Changes",
      description:
        "For the first time since 2008, Ottawa is undergoing a transformation of its zoning laws to reflect the city’s new priorities outlined in the Offical Plan, intensification, sustainable transport, and environmental resilience. In response to the ongoing housing affordability crisis, the cities plan includes specific measures such as eliminating minimum parking requirements, enabling mixed-use neighbourhoods and increasing the density of public housing. ",
      location: {
        center: [-75.70216, 45.41928],
        zoom: 15.8,
        pitch: 63.27,
        bearing: 111.57,
        speed: 0.5,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "zoning",
          opacity: 1,
          duration: 1000,
        },
        {
          layer: "buildings-1",
          opacity: 1,
          duration: 1000,
        },
        {
          layer: "buildings-2",
          opacity: 1,
          duration: 1000,
        },
      ],
      onChapterExit: [],
    },
    {
      id: "slide-4",
      alignment: "left",
      hidden: false,
      title: "How to Engage",
      description:
        "The policies will determine the character of your neighbourhood, the availability of affordable homes, the accessibility of essential services, and the health of our environment. Use interactive tools to explore zoning impacts on your neighbourhood, attend public consultations, leave your feedback online, or contact city planners or councillors directly.",
      location: {
        center: [-75.70565, 45.40852],
        zoom: 14.76,
        pitch: 0,
        bearing: -15.2,
        speed: 0.5,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [],
      onChapterExit: [],
    },
    {
      id: "slide-5",
      alignment: "left",
      hidden: false,
      title: "Tackling Affordability",
      description:
        "Ottawa expects to add 200,000 homes for 400,000 new residents by 2046. The new zoning by-law allows up to four units on every residential lot with city services, even in the lowest-density neighbourhoods. Removing mandatory minimum parking spaces means developers can prioritize affordable units over costly parking infrastructure, reducing both housing costs and environmental footprints. Cities like Toronto and Edmonton have already successfully adopted similar policies, achieving more affordable and sustainable communities.",
      location: {
        center: [-75.69493, 45.39927],
        zoom: 17,
        pitch: 58.6,
        bearing: 148.49,
        speed: 0.5,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [],
      onChapterExit: [],
    },

    {
      id: "slide-6",
      alignment: "left",
      hidden: false,
      title: "Creating 15-Minute Neighbourhoods",
      description:
        "Imagine walking from your front door to your favourite bakery or café in under 15 minutes. Ottawa’s zoning changes encourage exactly this—by allowing more neighbourhood-based businesses, home bakeries, small retail stores, and services in residential areas. This encourages mixed-use neighbourhoods, boosting local economies, reducing car dependency, and fostering community connections.",
      location: {
        center: [-75.68604, 45.39881],
        zoom: 16.8,
        pitch: 75.6,
        bearing: -21.91,
        speed: 0.5,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "neighbourhood_mixed_zone",
          opacity: 1,
          duration: 500,
        },
        {
          layer: "neighbourhood_mixed_zone_1",
          opacity: 1,
          duration: 500,
        },
        {
          layer: "neighbourhood_mixed_zone_2",
          opacity: 1,
          duration: 500,
        },
      ],
      onChapterExit: [],
    },

    {
      id: "slide-7",
      alignment: "left",
      hidden: false,
      title: "Protecting our Environment",
      description:
        "The New Zoning By-law prioritizes the protection of Ottawa’s green spaces and tree canopy, critical for climate resilience. New zones include specific measures for developers to preserve minimum soil depth for trees, preventing harm from underground parking structures. Adjusted setback rules also allow developers flexibility to preserve mature trees, reducing the urban heat island effect and enhancing neighbourhood greenery ",
      location: {
        center: [-75.66647, 45.40995],
        zoom: 14.9,
        pitch: 44.5,
        speed: 0.5,
        bearing: 103.94,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "neighbourhood_mixed_zone",
          opacity: 1,
          duration: 500,
        },
        {
          layer: "neighbourhood_mixed_zone_1",
          opacity: 1,
          duration: 500,
        },
        {
          layer: "neighbourhood_mixed_zone_2",
          opacity: 1,
          duration: 500,
        },
      ],
      onChapterExit: [
        {
          layer: "neighbourhood_mixed_zone",
          opacity: 0.2,
          duration: 500,
        },
        {
          layer: "neighbourhood_mixed_zone_1",
          opacity: 0,
          duration: 500,
        },
        {
          layer: "neighbourhood_mixed_zone_2",
          opacity: 0,
          duration: 500,
        },
      ],
    },

    {
      id: "village_mixed",
      alignment: "left",
      hidden: false,
      title: "Transit-Oriented Development",
      description:
        "The new Zoning By-law increases allowable building heights and densities near transit stations to support intensification and reduce car dependence. Buildings up to 40 storeys are permitted within designated areas around LRT and bus rapid transit corridors. These areas are prioritized for growth to align with the Official Plan’s targets for compact, connected communities.",
      location: {
        center: [-75.65453, 45.41789],
        zoom: 16.15,
        pitch: 69.64,
        bearing: -42.06,
        speed: 0.65,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "village_mixed",
          opacity: 1,
          duration: 500,
        },
        {
          layer: "village_mixed_1",
          opacity: 1,
          duration: 500,
        },
        {
          layer: "village_mixed_2",
          opacity: 1,
          duration: 500,
        },
      ],
      onChapterExit: [],
    },
    {
      id: "village_mixed-2",
      alignment: "left",
      hidden: false,
      title: "Rethinking Parking",
      description:
        "Ottawa’s new zoning rules aim to reclaim urban spaces by completely removing minimum parking requirements—except for visitor and accessible spaces—and banning new surface parking lots downtown. This shift empowers developers to replace unnecessary pavement with lush green spaces, vibrant pedestrian plazas, and additional housing units, ultimately lowering costs and making Ottawa’s neighbourhoods more affordable and sustainable ",
      location: {
        center: [-75.64499, 45.41356],
        zoom: 15.16,
        pitch: 0,
        bearing: 35.26,
        speed: 0.6,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "village_mixed",
          opacity: 1,
          duration: 500,
        },
        {
          layer: "village_mixed_1",
          opacity: 1,
          duration: 500,
        },
        {
          layer: "village_mixed_2",
          opacity: 1,
          duration: 500,
        },
      ],
      onChapterExit: [
        {
          layer: "village_mixed",
          opacity: 0.2,
          duration: 500,
        },
        {
          layer: "village_mixed_1",
          opacity: 0,
          duration: 500,
        },
        {
          layer: "village_mixed_2",
          opacity: 0,
          duration: 500,
        },
      ],
    },
  ],
};
