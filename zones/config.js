var config = {
  style: "mapbox://styles/qdogger69/cm3qewkhx006301s936ie3ywj",
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
  title: "Ottawa's New Zoning",
  subtitle: "Explore the regulations that shape Ottawa's future development.",
  byline: "SED 3111 Group One",
  footer: "",
  chapters: [
    {
      id: "special_district",
      alignment: "left",
      hidden: false,
      title: "Special Districts",
      description:
        "Ottawa’s Special Districts are distinct areas of the city that require unique planning approaches. Special Districts can define the city’s image through their cultural heritage, architecture, and public realm. They can also be major economic generators or tourism attractions. The city has two types of Special Districts zones: City-defining Special Districts and Special Economic Districts. ",
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
          layer: "special_district",
          opacity: 1,
          duration: 500,
        },
        {
          layer: "special_district_1",
          opacity: 1,
          duration: 500,
        },
        {
          layer: "special_district_2",
          opacity: 1,
          duration: 500,
        },
      ],
      onChapterExit: [],
    },

    {
      id: "special_district-2",
      alignment: "left",
      hidden: false,
      title: "Parliament and Confederation Boulevard Special District ",
      description:
        "The Parliament and Confederation Boulevard Special District (SDP) is a city-defining Zone that encompasses the Parliament Buildings and key areas along Confederation Boulevard. Replacing the former MD1 subzone, its purpose is to provide zoning that reflects the unique national significance and symbolic character of this area. Development standards, including height, are tailored to the area’s context rather than following standard zone provisions.",
      location: {
        center: [-75.701757, 45.4222],
        zoom: 16.5,
        pitch: 68,
        bearing: 122,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "special_district",
          opacity: 1,
          duration: 500,
        },
        {
          layer: "special_district_1",
          opacity: 1,
          duration: 500,
        },
        {
          layer: "special_district_2",
          opacity: 1,
          duration: 500,
        },
      ],
      onChapterExit: [
        {
          layer: "special_district",
          opacity: 0.15,
          duration: 1,
        },
        {
          layer: "special_district_1",
          opacity: 0,
          duration: 500,
        },
        {
          layer: "special_district_2",
          opacity: 0,
          duration: 500,
        },
      ],
    },
    {
      id: "special_district-3",
      alignment: "left",
      hidden: false,
      title: "Kanata North Economic Special District",
      description:
        "The Kanata North Economic Special District (EDK) Zone focuses on the Kanata North technology park area. Its purpose is to support both the economical stability of the region as well as the transformation of this area from a car-oriented business park to a mixed-use innovation district centered around sustainable transportation. It permits a broad range of residential, employment (office, research & development, light industrial), commercial (retail, restaurant, hotel), and institutional uses.",
      location: {
        center: [-75.91271, 45.34284],
        zoom: 15,
        pitch: 45,
        bearing: 45,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "special_district",
          opacity: 1,
          duration: 500,
        },
        {
          layer: "special_district_1",
          opacity: 1,
          duration: 500,
        },
        {
          layer: "special_district_2",
          opacity: 1,
          duration: 500,
        },
      ],
      onChapterExit: [
        {
          layer: "special_district",
          opacity: 0.15,
          duration: 1,
        },
        {
          layer: "special_district_1",
          opacity: 0,
          duration: 500,
        },
        {
          layer: "special_district_2",
          opacity: 0,
          duration: 500,
        },
      ],
    },
    {
      id: "neighbourhood_zone",
      alignment: "left",
      hidden: false,
      title: "Neighbourhood Zones",
      description:
        "The Neighbourhood Zones (N1-N6) are the primary zones for residential areas within Ottawa's Downtown Core, Inner Urban, Outer Urban, and Suburban areas. Replacing the old R1-R5 zones, their main goal is to permit a wide variety of housing options – from detached homes to high-rise apartments – while shaping development to fit the character of established neighbourhoods. These zones focus on regulating density, building height, and site features like lot width and setbacks to support the creation of complete, walkable 15-minute communities.",
      location: {
        center: [-75.69, 45.4008],
        zoom: 13.8,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "neighbourhood_zone",
          opacity: 1,
          duration: 500,
        },
        {
          layer: "neighbourhood_zone_1",
          opacity: 1,
          duration: 500,
        },
        {
          layer: "neighbourhood_zone_2",
          opacity: 1,
          duration: 500,
        },
      ],
      onChapterExit: [
        {
          layer: "neighbourhood_zone",
          opacity: 0.0,
          duration: 500,
        },
        {
          layer: "neighbourhood_zone_1",
          opacity: 0.0,
          duration: 500,
        },
        {
          layer: "neighbourhood_zone_2",
          opacity: 0.0,
          duration: 500,
        },
      ],
    },
    {
      id: "neighbourhood_zone-2",
      alignment: "left",
      hidden: false,
      title: "Types of Neighbourhood Zones",
      description:
        "The different numbers (N1 to N6) replace the R1-R5 system and generally represent increasing density and building height allowances. N1 allows the lowest density, typically single homes, semis, and townhouses, while N6 permits high-rise buildings in specific downtown areas. Zones N5 and N6, which allow for mid-rise and high-rise buildings respectively, also conditionally permit small-scale, non-residential uses (like cafes or small shops) on the ground floor or basement. This is intended to provide convenient local services within higher-density residential areas, contributing to the 15-minute neighbourhood concept. Specific character elements like setbacks and lot widths are further refined by subzones (A-F) applied alongside the primary N1-N6 designation.",
      location: {
        center: [-75.680154, 45.44197],
        zoom: 17.32,
        pitch: 71,
        bearing: 131,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "neighbourhood_zone",
          opacity: 1,
          duration: 500,
        },
        {
          layer: "neighbourhood_zone_1",
          opacity: 1,
          duration: 500,
        },
        {
          layer: "neighbourhood_zone_2",
          opacity: 1,
          duration: 500,
        },
      ],
      onChapterExit: [
        {
          layer: "neighbourhood_zone",
          opacity: 0.2,
          duration: 500,
        },
        {
          layer: "neighbourhood_zone_1",
          opacity: 0.0,
          duration: 500,
        },
        {
          layer: "neighbourhood_zone_2",
          opacity: 0.0,
          duration: 500,
        },
      ],
    },

    {
      id: "neighbourhood_mixed_zone",
      alignment: "left",
      hidden: false,
      title: "Neighbourhood Mixed Zones",
      description:
        "The Neighbourhood Mixed-Use (NMU) Zone is intended for specific locations within areas designated as Neighbourhoods in the Official Plan, often applying to existing small pockets of commercial or mixed-use development. Replacing parts of the former General Mixed-Use (GM) zone and specific subzones not located in Hubs or Corridors, its purpose is to strengthen local services and amenities that support 15-minute neighbourhoods.",
      location: {
        center: [-75.641828, 45.411603],
        zoom: 13.5,
        pitch: 0,
        bearing: 0,
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
      id: "neighbourhood_mixed_zone-2",
      alignment: "left",
      hidden: false,
      title: "Types of Neighbourhood Mixed Use Zones",
      description:
        "They replace the remaining general mixed-use zones and some commercial zones, streamlining regulations to create a cohesive urban environment. This zone allows for flexible and adaptable spaces that can accommodate both residential and non-residential uses, such as small retail stores, restaurants, personal services, or offices. It aims to regulate development at a scale compatible with the surrounding residential area, ensuring these mixed-use pockets fit within the established neighbourhood character.",
      location: {
        center: [-75.641828, 45.411603],
        zoom: 15.9,
        pitch: 66,
        bearing: -33.9,
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
      title: "Village Mixed Use Zones",
      description:
        "The Village Mixed-Use (VM) Zone applies to the core areas and main streets of Villages designated in the Official Plan. Replacing the former Village Mixed Use (VM) zone, its purpose is to permit a wide variety of commercial, leisure, institutional, and residential uses, reinforcing the historical character and function of village cores as focal points for the community.",
      location: {
        center: [-75.424824, 45.421568],
        zoom: 14.5,
        pitch: 0,
        bearing: 0,
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
      title: "Types of Village Mixed Use Zones",
      description:
        "It permits retail stores, restaurants, offices, community centres, residential dwelling units, and similar uses appropriate for a village main street. Development standards promote small-scale, street-oriented building forms to maintain village character. Numerous subzones (VM1-VM10) tailor permitted uses and development standards to the specific characteristics and existing conditions of different village cores. VM Zones place a stronger emphasis on preserving historical charm and limiting certain types of development to maintain the distinct identity of Ottawa’s villages.",
      location: {
        center: [-75.424824, 45.421568],
        zoom: 17.5,
        pitch: 72,
        bearing: -60.2,
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

    {
      id: "village_residential",
      alignment: "left",
      hidden: false,
      title: "Village Residential Zones",
      description:
        "The Village Residential Zone applies to residential lands within areas designated as 'Village' in the Official Plan. Its primary purpose is to permit a range of low- and medium-density housing options while ensuring that new development respects the established character and building forms found within Ottawa's distinct villages. This zone aims to implement Official Plan policies regarding appropriate residential development and minimum lot sizes, particularly differentiating between areas with and without full municipal water and sewer services.",
      location: {
        center: [-75.421824, 45.422568],
        zoom: 14.5,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "village_residential",
          opacity: 1,
          duration: 500,
        },
        {
          layer: "village_residential_1",
          opacity: 1,
          duration: 500,
        },
        {
          layer: "village_residential_2",
          opacity: 1,
          duration: 500,
        },
      ],
      onChapterExit: [],
    },
    {
      id: "village_residential-2",
      alignment: "left",
      hidden: false,
      title: "Types of Village Residential Zones",
      description:
        "This zone accommodates various housing types, reflecting the different scales found across villages. Depending on the specific location and the availability of municipal services, permitted housing can range from single-detached homes with secondary dwelling units up to more intensive forms like semi-detached dwellings, townhouses, and potentially low-rise apartments. Development standards, such as minimum lot sizes, setbacks, and building heights, vary significantly based on whether lots are fully serviced by municipal water and sewer, or rely on private or partial services. Bed and breakfast establishments, group homes, home-based businesses, and similar accessory or compatible uses are generally permitted wherever residential uses are allowed, contributing to the village's residential fabric, distinguishing them from Neighbourhood Residential Zones by their focused emphasis on historical preservation and smaller-scale growth.",
      location: {
        center: [-75.421824, 45.422568],
        zoom: 17.5,
        pitch: 72,
        bearing: -60.2,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "village_residential",
          opacity: 1,
          duration: 500,
        },
        {
          layer: "village_residential_1",
          opacity: 1,
          duration: 500,
        },
        {
          layer: "village_residential_2",
          opacity: 1,
          duration: 500,
        },
      ],
      onChapterExit: [
        {
          layer: "village_residential",
          opacity: 0.2,
          duration: 500,
        },
        {
          layer: "village_residential_1",
          opacity: 0,
          duration: 500,
        },
        {
          layer: "village_residential_2",
          opacity: 0,
          duration: 500,
        },
      ],
    },
    {
      id: "rural_residential",
      alignment: "left",
      hidden: false,
      title: "Rural Residential Zones",
      description:
        "The Rural Residential (RR) Zone recognizes existing country lot subdivisions and residential development in areas designated Rural Countryside or Greenbelt, outside of Villages. Replacing the former RR zone, its purpose is to regulate development in these established low-density residential areas while respecting the rural character and context. The creation of new lots is generally prohibited by the Official Plan in these areas.",
      location: {
        center: [-75.498408, 45.276376],
        zoom: 14.35,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "rural_residential",
          opacity: 1,
          duration: 500,
        },
        {
          layer: "rural_residential_1",
          opacity: 1,
          duration: 500,
        },
        {
          layer: "rural_residential_2",
          opacity: 1,
          duration: 500,
        },
      ],
      onChapterExit: [],
    },

    {
      id: "rural_residential-2",
      alignment: "left",
      hidden: false,
      title: "Types of Rural Residential Zones",
      description:
        "The primary permitted use is residential (dwelling units), typically limited to two units per lot (including potential coach houses). Limited agricultural use (like keeping hens) is permitted as an accessory use on larger lots (0.8 ha minimum). The numerous subzones (RR1-RR17) reflect the wide variety of existing lot sizes and setbacks found in historical country lot developments, hamlets, clusters, and golf course estate subdivisions across the rural area.",
      location: {
        center: [-75.498408, 45.276376],
        zoom: 16.35,
        pitch: 70,
        bearing: -30,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "rural_residential",
          opacity: 1,
          duration: 500,
        },
        {
          layer: "rural_residential_1",
          opacity: 1,
          duration: 500,
        },
        {
          layer: "rural_residential_2",
          opacity: 1,
          duration: 500,
        },
      ],
      onChapterExit: [
        {
          layer: "rural_residential",
          opacity: 0.2,
          duration: 500,
        },
        {
          layer: "rural_residential_1",
          opacity: 0,
          duration: 500,
        },
        {
          layer: "rural_residential_2",
          opacity: 0,
          duration: 500,
        },
      ],
    },
    {
      id: "neighbourhood_mobile_zone",
      alignment: "left",
      hidden: false,
      title: "Mobile Home Park Zones",
      description:
        "The Mobile Home Park (MH) Zone is designed to permit and regulate the development of mobile home parks in areas designated Village, Rural Countryside, or Neighbourhood in the Official Plan. Replacing the former RM (Mobile Home Park Residential) zone, its purpose is to recognize existing parks and allow for new ones, permitting mobile homes as a distinct housing form. The primary permitted uses are mobile homes and mobile home parks, along with one conventional dwelling unit (often for a manager). Subzones (MH1-MH5) reflect existing parks with varying standards for lot area, setbacks, and maximum number of mobile homes.",
      location: {
        center: [-75.493214, 45.487913],
        zoom: 14.5,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "neighbourhood_mobile_zone",
          opacity: 1,
          duration: 500,
        },
        {
          layer: "neighbourhood_mobile_zone_1",
          opacity: 1,
          duration: 500,
        },
        {
          layer: "neighbourhood_mobile_zone_2",
          opacity: 1,
          duration: 500,
        },
      ],
      onChapterExit: [],
    },

    {
      id: "development_reserve-2",
      alignment: "left",
      hidden: false,
      title: "Development Reserve Zones",
      description:
        "The Development Reserve (DR) Zone applies to lands within the urban boundary identified as being set aside for future urban development, but which are not yet ready for full development. Replacing the former DR zone, its purpose is to limit development to primarily non-urban uses until comprehensive planning (like a Community Design Plan) is completed and municipal services are available. Conditional uses include existing dwellings (with limits on the number of units based on servicing) and on-farm diversified uses (limited to conversions and temporary structures), ensuring the land is not prematurely developed in a way that prejudices future urban uses.",
      location: {
        center: [-75.680766, 45.416798],
        zoom: 16.2,
        pitch: 69,
        bearing: -85,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "development_reserve",
          opacity: 1,
          duration: 500,
        },
        {
          layer: "development_reserve_1",
          opacity: 1,
          duration: 500,
        },
        {
          layer: "development_reserve_2",
          opacity: 1,
          duration: 500,
        },
        {
          layer: "all_buildings",
          opacity: 1,
          duration: 500,
        },
      ],
      onChapterExit: [
        {
          layer: "development_reserve",
          opacity: 0.2,
          duration: 500,
        },
        {
          layer: "development_reserve_1",
          opacity: 0,
          duration: 500,
        },
        {
          layer: "development_reserve_2",
          opacity: 0,
          duration: 500,
        },
        {
          layer: "all_buildings",
          opacity: 0,
          duration: 500,
        },
      ],
    },
    {
      id: "agricultural",
      alignment: "left",
      hidden: false,
      title: "Agricultural Zones",
      description:
        "The Agricultural (AG) Zone applies to lands designated as Agricultural Resource Area in the Official Plan. Its primary purpose is to recognize and permit agricultural uses while protecting prime agricultural lands and systems for future agricultural capability. It restricts the range of non-agricultural uses to ensure compatibility and minimize land use conflicts. ",
      location: {
        center: [-75.5666, 45.4432],
        zoom: 12.6,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "agricultural",
          opacity: 1,
          duration: 500,
        },
        {
          layer: "agricultural_1",
          opacity: 1,
          duration: 500,
        },
        {
          layer: "agricultural_2",
          opacity: 1,
          duration: 500,
        },
      ],
      onChapterExit: [
        {
          layer: "agricultural",
          opacity: 0,
          duration: 500,
        },
        {
          layer: "agricultural_1",
          opacity: 0,
          duration: 500,
        },
        {
          layer: "agricultural_2",
          opacity: 0,
          duration: 500,
        },
      ],
    },
    {
      id: "rural_countryside",
      alignment: "left",
      hidden: false,
      title: "Rural Countryside Zones",
      description:
        "The Rural Countryside (RU) Zone applies to lands designated as Rural Countryside in the Official Plan. Its purpose is to accommodate a mix of agricultural, forestry, and other rural-based land uses, including country residential lots created through severance, while respecting the rural character and minimizing land use conflicts. ",
      location: {
        center: [-75.41032, 45.49848],
        zoom: 12.5,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "rural_countryside",
          opacity: 1,
          duration: 500,
        },
        {
          layer: "rural_countryside_1",
          opacity: 1,
          duration: 500,
        },
        {
          layer: "rural_countryside_2",
          opacity: 1,
          duration: 500,
        },
      ],
      onChapterExit: [
        {
          layer: "rural_countryside",
          opacity: 0,
          duration: 500,
        },
        {
          layer: "rural_countryside_1",
          opacity: 0,
          duration: 500,
        },
        {
          layer: "rural_countryside_2",
          opacity: 0,
          duration: 500,
        },
      ],
    },
    {
      id: "rural_commerical",
      alignment: "left",
      hidden: false,
      title: "Rural Commercial Zones",
      description:
        "The Rural Commercial (RC) Zone permits highway and recreational commercial uses that serve the rural community and travelling public, primarily in areas designated Agricultural Resource Area, Rural Countryside, or Village. Replacing the former RC zone, it accommodates uses like gas bars, restaurants, motels, campgrounds, and stores selling agricultural or construction products. The Rural Commercial (RC) Zone permits highway and recreational commercial uses that serve the rural community and travelling public, primarily in areas designated Agricultural Resource Area, Rural Countryside, or Village. Replacing the former RC zone, it accommodates uses like gas bars, restaurants, motels, campgrounds, and stores selling agricultural or construction products.",
      location: {
        center: [-75.37512, 45.51332],
        zoom: 13.2,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "rural_commerical",
          opacity: 1,
          duration: 500,
        },
        {
          layer: "rural_commerical_1",
          opacity: 1,
          duration: 500,
        },
        {
          layer: "rural_commerical_2",
          opacity: 1,
          duration: 500,
        },
      ],
      onChapterExit: [
        {
          layer: "rural_commerical",
          opacity: 0,
          duration: 500,
        },
        {
          layer: "rural_commerical_1",
          opacity: 0,
          duration: 500,
        },
        {
          layer: "rural_commerical_2",
          opacity: 0,
          duration: 500,
        },
      ],
    },
    {
      id: "greenbelt",
      alignment: "left",
      hidden: false,
      title: "Greenbelt Zones",
      description:
        "The Greenbelt Facility (GBF) Zone is a new zone applied to specific strategic areas within the National Capital Commission Greenbelt, as identified in the Official Plan. Replacing the former RC10 subzone, its purpose is to protect the Greenbelt's natural features while permitting institutional, cultural, creative, recreation, tourism, office, and research uses outlined in the Official Plan for these designated areas. Permitted uses include agriculture, broadcasting studios, environmental preserves, forestry, instructional facilities, offices, recreation facilities, and research centres. Conditional uses serving employees or visitors, such as daycares, personal service businesses, restaurants, or retail stores, are permitted subject to size limitations and association with a primary permitted use. ",
      location: {
        center: [-75.57958, 45.4436],
        zoom: 12.9,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "greenbelt",
          opacity: 1,
          duration: 500,
        },
        {
          layer: "greenbelt_1",
          opacity: 1,
          duration: 500,
        },
        {
          layer: "greenbelt_2",
          opacity: 1,
          duration: 500,
        },
      ],
      onChapterExit: [
        {
          layer: "greenbelt",
          opacity: 0,
          duration: 500,
        },
        {
          layer: "greenbelt_1",
          opacity: 0,
          duration: 500,
        },
        {
          layer: "greenbelt_2",
          opacity: 0,
          duration: 500,
        },
      ],
    },
    {
      id: "industrial",
      alignment: "left",
      hidden: false,
      title: "Industrial Zones",
      description:
        "The Industrial Zones in Ottawa are established to support a diverse range of industrial activities in line with the Official Plan’s Industrial and Logistics designation. The Heavy Industrial (IH) Zone accommodates high-impact industrial uses that may generate noise, fumes, odours, and hazardous conditions, while also allowing complementary recreational and commercial services to support employees and the public. The Industrial and Logistics (IL) Zone focuses on low to moderate impact light industrial uses, primarily serving warehousing and distribution needs, with subzones tailored for different operational requirements and site conditions. The Mixed Industrial (IM) Zone facilitates mixed light industrial uses within business park environments, incorporating recreational and service commercial facilities to benefit both workers and nearby communities.",
      location: {
        center: [-75.62463, 45.42221],
        zoom: 12.5,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "industrial",
          opacity: 1,
          duration: 500,
        },
        {
          layer: "industrial_1",
          opacity: 1,
          duration: 500,
        },
        {
          layer: "industrial_2",
          opacity: 1,
          duration: 500,
        },
      ],
      onChapterExit: [
        {
          layer: "industrial",
          opacity: 0,
          duration: 500,
        },
        {
          layer: "industrial_1",
          opacity: 0,
          duration: 500,
        },
        {
          layer: "industrial_2",
          opacity: 0,
          duration: 500,
        },
      ],
    },
    {
      id: "transportation",
      alignment: "left",
      hidden: false,
      title: "Transportation Zones",
      description:
        "The Transportation Zones (T1-T3) in Ottawa are established to support and enhance the city’s transportation infrastructure by accommodating air, rail, and bus facilities. TThe Airport Transportation (T1) Zone is specifically designed for lands associated with airport operations. The Transportation (T2) Zone is intended for major rail and inter-urban ground transportation facilities. Replacing the former T2 zone, its purpose is to permit and support the operation of these key transportation hubs, such as train stations or major bus depots. Similarly, the Bus Transportation (T3) Zone is designated for inter-urban bus facilities, permitting uses such as bus depots, parking lots, and retail stores.. Besides the primary transportation facility (like a railway station or bus depot), the zone permits associated uses like emergency services, government service centres, and parking facilities. ",
      location: {
        center: [-75.65447, 45.4173],
        zoom: 13.7,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "transportation",
          opacity: 1,
          duration: 500,
        },
        {
          layer: "transportation_1",
          opacity: 1,
          duration: 500,
        },
        {
          layer: "transportation_2",
          opacity: 1,
          duration: 500,
        },
      ],
      onChapterExit: [
        {
          layer: "transportation",
          opacity: 0,
          duration: 500,
        },
        {
          layer: "transportation_1",
          opacity: 0,
          duration: 500,
        },
        {
          layer: "transportation_2",
          opacity: 0,
          duration: 500,
        },
      ],
    },
    {
      id: "environmental",
      alignment: "left",
      hidden: false,
      title: "Environmental Protection Zones",
      description:
        "The Environmental Protection (EP) Zone applies to lands designated in the Official Plan as Significant Wetlands, Natural Environment Areas, or Urban Natural Features. Replacing the former EP zone, its primary purpose is to protect important environmental resources for ecological, educational, and recreational reasons by severely restricting development. ermitted uses are generally limited to environmental preserve and education areas, and forestry operations. Development is strictly regulated to minimize impact, with large setbacks required for any minor structures. ",
      location: {
        center: [-75.56696, 45.43633],
        zoom: 12.65,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "environmental",
          opacity: 1,
          duration: 500,
        },
        {
          layer: "environmental_1",
          opacity: 1,
          duration: 500,
        },
        {
          layer: "environmental_2",
          opacity: 1,
          duration: 500,
        },
      ],
      onChapterExit: [
        {
          layer: "environmental",
          opacity: 0,
          duration: 500,
        },
        {
          layer: "environmental_1",
          opacity: 0,
          duration: 500,
        },
        {
          layer: "environmental_2",
          opacity: 0,
          duration: 500,
        },
      ],
    },
    {
      id: "open_space",
      alignment: "left",
      hidden: false,
      title: "Open Space Facility Zones",
      description:
        "The Open Space Facility (FAC) Zone is specifically created for lands designated with the Open Space sub-designation in the Official Plan, notably including the Central Experimental Farm and other significant open space areas with specific functions. It replaces the former L3 (Central Experimental Farm) zone and certain O1 (Parks and Open Space) subzones. The primary purpose is to protect the natural features and primary functions of these designated open spaces. Permitted uses are generally limited to environmental preserve and education areas, though specific subzones (derived from former O1 subzones) allow for uses like agriculture, marine facilities, or research centres.",
      location: {
        center: [-75.65285, 45.44058],
        zoom: 12.92,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "open_space",
          opacity: 1,
          duration: 500,
        },
        {
          layer: "open_space_1",
          opacity: 1,
          duration: 500,
        },
        {
          layer: "open_space_2",
          opacity: 1,
          duration: 500,
        },
      ],
      onChapterExit: [
        {
          layer: "open_space",
          opacity: 0,
          duration: 500,
        },
        {
          layer: "open_space_1",
          opacity: 0,
          duration: 500,
        },
        {
          layer: "open_space_2",
          opacity: 0,
          duration: 500,
        },
      ],
    },
    {
      id: "mainstreet",
      alignment: "left",
      hidden: false,
      title: "Mainstreet and Minor Corridor Zones",
      description:
        "Mainstreet and Minor Corridor Zones are zoning designations in Ottawa designed to promote mixed-use development along key streets and corridors. They aim to encourage vibrant, pedestrian-oriented environments by permitting a broad range of residential and non-residential uses. These zones support the creation of compact, walkable communities in line with the city's Official Plan. They replace various older zoning categories, including the Traditional Mainstreet (TM) and Arterial Mainstreet (AM) zones, to provide a more consistent and streamlined approach to urban development along mainstreets and minor corridors.",
      location: {
        center: [-75.68164, 45.42155],
        zoom: 13.22,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "mainstreet",
          opacity: 1,
          duration: 500,
        },
        {
          layer: "mainstreet_1",
          opacity: 1,
          duration: 500,
        },
        {
          layer: "mainstreet_2",
          opacity: 1,
          duration: 500,
        },
      ],
      onChapterExit: [
        {
          layer: "mainstreet",
          opacity: 0.2,
          duration: 500,
        },
        {
          layer: "mainstreet_1",
          opacity: 0,
          duration: 500,
        },
        {
          layer: "mainstreet_2",
          opacity: 0,
          duration: 500,
        },
      ],
    },
    {
      // es/#16.02/45.405005/-75.689494/-21/73
      id: "mainstreet-2",
      alignment: "left",
      hidden: false,
      title: "Types of Mainstreet and Minor Corridor Zones",
      description:
        "The Mainstreet Zones are divided into MS1 and MS2. MS1 (Mainstreet Zone 1) primarily applies to older, more compact mainstreets, often within the Downtown Core and Inner Urban Transects, typically with smaller lots and narrower streets. It encourages development that respects this historic character. MS2 (Mainstreet Zone 2) is generally applied along wider mainstreets with larger lots, often in Outer Urban and Suburban Transects, which may have a more auto-oriented history. The Minor Corridor Zones are divided into four subzones—CM1 to CM4—corresponding to the city's transect areas: CM1 for the Downtown Core, CM2 for the Inner Urban, CM3 for the Outer Urban, and CM4 for the Suburban Transect with building heights ranging from up to nine storeys in the Downtown Core to four storeys in the Suburban areas.",
      location: {
        center: [-75.689494, 45.405005],
        zoom: 16.02,
        pitch: 73,
        bearing: -21,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "mainstreet",
          opacity: 1,
          duration: 500,
        },
        {
          layer: "mainstreet_1",
          opacity: 1,
          duration: 500,
        },
        {
          layer: "mainstreet_2",
          opacity: 1,
          duration: 500,
        },
      ],
      onChapterExit: [
        {
          layer: "mainstreet",
          opacity: 0.2,
          duration: 500,
        },
        {
          layer: "mainstreet_1",
          opacity: 0,
          duration: 500,
        },
        {
          layer: "mainstreet_2",
          opacity: 0,
          duration: 500,
        },
      ],
    },
    {
      id: "hub_zones",
      alignment: "left",
      hidden: false,
      title: "Hub Zones",
      description:
        "Hub Zones are applied to key activity nodes across the city, designated as 'Hubs' in the Official Plan. These zones are designed to accommodate a broad mix of uses (residential, commercial, institutional) and promote high-density, transit-supportive development. Replacing former zones like Mixed-Use Downtown (MD), Mixed-Use Centre (MC), Transit-Oriented Development (TD), and some General Mixed-Use (GM) zones, Hub Zones encourage the creation of compact, vibrant urban environments. They generally allow for generous building envelopes to facilitate higher densities.",
      location: {
        center: [-75.70418, 45.40848],
        zoom: 13.11,
        pitch: 27,
        bearing: 112.9,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "hub_zones",
          opacity: 1,
          duration: 500,
        },
        {
          layer: "hub_zones_1",
          opacity: 1,
          duration: 500,
        },
        {
          layer: "hub_zones_2",
          opacity: 1,
          duration: 500,
        },
      ],
      onChapterExit: [
        {
          layer: "hub_zones",
          opacity: 0.2,
          duration: 500,
        },
        {
          layer: "hub_zones_1",
          opacity: 0,
          duration: 500,
        },
        {
          layer: "hub_zones_2",
          opacity: 0,
          duration: 500,
        },
      ],
    },

    {
      // 5.5/45.422822/-75.693647/-141/59
      id: "hub_zones-2",
      alignment: "left",
      hidden: false,
      title: "Types of Hub Zones",
      description:
        "The three Hub Zone types vary in intensity and location. H1 is the most intense, primarily used in the Downtown Core Transect, supporting high-rise development near major transit stations and excluding auto-oriented uses like gas bars or drive-throughs. H2 applies to major nodes throughout the city (Inner Urban, Outer Urban, and Suburban Transects), allowing a mix of mid- to high-density buildings and a wide range of services. H3 is the least intense Hub zone, often found in areas transitioning between major nodes and surrounding neighbourhoods, permitting mid-rise development with setbacks designed for compatibility. ",
      location: {
        center: [-75.693647, 45.422822],
        zoom: 15.5,
        pitch: 59,
        bearing: -141,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "hub_zones",
          opacity: 1,
          duration: 500,
        },
        {
          layer: "hub_zones_1",
          opacity: 1,
          duration: 500,
        },
        {
          layer: "hub_zones_2",
          opacity: 1,
          duration: 500,
        },
      ],
      onChapterExit: [
        {
          layer: "hub_zones",
          opacity: 0.2,
          duration: 500,
        },
        {
          layer: "hub_zones_1",
          opacity: 0,
          duration: 500,
        },
        {
          layer: "hub_zones_2",
          opacity: 0,
          duration: 500,
        },
      ],
    },
    {
      id: "institutional",
      alignment: "left",
      hidden: false,
      title: "Institutional Zones",
      description:
        "The Institutional (INZ) Zone is applied to lands primarily used for community-serving institutions within the Urban Area, as identified in the Official Plan. Replacing the former Minor Institutional (I1) zone and its subzones, its purpose is to permit a range of principal institutional uses like schools, community centres, places of worship, libraries, museums, and emergency services. It also permits limited residential uses like group homes or retirement homes as principal uses, and allows dwelling units or small-scale retail/markets as conditional uses when clearly secondary to the main institutional function.",
      location: {
        center: [-75.68484, 45.41378],
        zoom: 13.3,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "institutional",
          opacity: 1,
          duration: 500,
        },
        {
          layer: "institutional_1",
          opacity: 1,
          duration: 500,
        },
        {
          layer: "institutional_2",
          opacity: 1,
          duration: 500,
        },
      ],
      onChapterExit: [
        {
          layer: "institutional",
          opacity: 0,
          duration: 500,
        },
        {
          layer: "institutional_1",
          opacity: 0,
          duration: 500,
        },
        {
          layer: "institutional_2",
          opacity: 0,
          duration: 500,
        },
      ],
    },
    {
      id: "large_institutional",
      alignment: "left",
      hidden: false,
      title: "Large-Scale Institutional and Recreation (LGZ) Zones",
      description:
        "TThe Large-Scale Institutional and Recreation (LGZ) Zone is designed for major institutional campuses and large recreational facilities, typically found on extensive properties. Replacing the former Major Institutional (I2) zone, its purpose is to maintain permissions for existing large institutions (like universities, colleges, or major hospitals) and provide a zone for new, similar large-scale facilities as outlined in the Official Plan.",
      location: {
        center: [-75.68484, 45.41378],
        zoom: 13.3,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "large_institutional",
          opacity: 1,
          duration: 500,
        },
        {
          layer: "large_institutional_1",
          opacity: 1,
          duration: 500,
        },
        {
          layer: "large_institutional_2",
          opacity: 1,
          duration: 500,
        },
      ],
      onChapterExit: [
        {
          layer: "large_institutional",
          opacity: 0,
          duration: 500,
        },
        {
          layer: "large_institutional_1",
          opacity: 0,
          duration: 500,
        },
        {
          layer: "large_institutional_2",
          opacity: 0,
          duration: 500,
        },
      ],
    },
    {
      id: "recreation",
      alignment: "left",
      hidden: false,
      title: "Recreation Zones",
      description:
        "The Recreation (REC) Zone applies to lands used for public parks and recreational facilities in both urban and rural areas. It replaces the former Community Leisure (L1) and Major Leisure (L2) zones. The purpose is to permit a range of principal recreation uses, such as parks, sports fields, arenas, community centres, libraries, and museums. A key feature introduced is the opportunity for co-locating housing (dwelling units) within community centres, libraries, or recreation/athletic facilities, allowing for more integrated community hubs. Small-scale restaurants or retail stores are permitted as conditional uses when clearly ancillary to the primary recreation function. Shelters are also permitted to support community needs.",
      // 13.11/45.40009/-75.70698/-31.2
      // 13.11/45.41957/-75.69975/-31.2
      location: {
        center: [-75.69975, 45.41957],
        zoom: 13.2,
        pitch: 0,
        bearing: -31.2,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "recreation",
          opacity: 1,
          duration: 500,
        },
        {
          layer: "recreation_1",
          opacity: 1,
          duration: 500,
        },
        {
          layer: "recreation_2",
          opacity: 1,
          duration: 500,
        },
      ],
      onChapterExit: [
        {
          layer: "recreation",
          opacity: 0,
          duration: 500,
        },
        {
          layer: "recreation_1",
          opacity: 0,
          duration: 500,
        },
        {
          layer: "recreation_2",
          opacity: 0,
          duration: 500,
        },
      ],
    },
    {
      id: "greenspace",
      alignment: "left",
      hidden: false,
      title: "Greenspace Zones",
      description:
        "The Greenspace (GRN) Zone applies primarily to public parks and open space areas focused on conservation and passive recreation. It replaces the former Parks and Open Space (O1) zone and several specific O1 subzones. The main purpose is to permit environmental preserves and education areas, and forestry operations, while ensuring these lands remain primarily greenspace through strict limits on building coverage. While the focus is on natural preservation, the zone allows for conditional uses that contribute to park function, such as small restaurants or retail stores (like a canteen), or markets, provided they are clearly ancillary to the primary greenspace use and limited in size.",
      // 13.16/45.36921/-75.67798/0/2
      location: {
        center: [-75.67798, 45.36921],
        zoom: 13.16,
        pitch: 0,
        bearing: 2,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "greenspace",
          opacity: 1,
          duration: 500,
        },
        {
          layer: "greenspace_1",
          opacity: 1,
          duration: 500,
        },
        {
          layer: "greenspace_2",
          opacity: 1,
          duration: 500,
        },
      ],
      onChapterExit: [
        {
          layer: "greenspace",
          opacity: 0,
          duration: 500,
        },
        {
          layer: "greenspace_1",
          opacity: 0,
          duration: 500,
        },
        {
          layer: "greenspace_2",
          opacity: 0,
          duration: 500,
        },
      ],
    },
    {
      // 12.5/45.2767/-75.5714/-33.5
      id: "mineral",
      alignment: "left",
      hidden: false,
      title: "Mineral Extraction Zones",
      description:
        "The Mineral Extraction (ME) Zone applies to lands subject to the Mineral Aggregate Overlay in the Official Plan where licensed extraction operations occur. Its purpose is to permit these operations while allowing limited compatible uses (like agriculture or forestry) and interim uses that don't sterilize the resource potential. The zone permits mineral extraction, related processing (like asphalt plants, conditionally), and compatible uses like kennels or environmental preserves. Residential use is generally limited to one mobile home associated with the operation. Regulations focus on minimizing the impact of extraction on surrounding areas and ensuring appropriate setbacks.",
      location: {
        center: [-75.5714, 45.2767],
        zoom: 12.6,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "mineral",
          opacity: 1,
          duration: 500,
        },
        {
          layer: "mineral_1",
          opacity: 1,
          duration: 500,
        },
        {
          layer: "mineral_2",
          opacity: 1,
          duration: 500,
        },
      ],
      onChapterExit: [
        {
          layer: "mineral",
          opacity: 0,
          duration: 500,
        },
        {
          layer: "mineral_1",
          opacity: 0,
          duration: 500,
        },
        {
          layer: "mineral_2",
          opacity: 0,
          duration: 500,
        },
      ],
    },
    {
      // #12.91/45.23007/-75.69237/-35.2
      id: "rural_institutional",
      alignment: "left",
      hidden: false,
      title: "Rural Institutional Zones",
      description:
        "Rural Institutional Zones permit a range of community-oriented and emergency service uses to support the needs of rural populations. It also allows limited educational and religious institutional uses in General Rural Areas and Agricultural Resource Areas, with a focus on minimizing impacts on neighboring land uses and preserving the rural or village character. Permitted uses include community centers, daycares, schools, places of worship, parks, libraries, and retirement homes, with specific provisions to limit the scale and density of development. Subzones within the RI designation (RI1 to RI8) refine regulations based on lot size, building height, and use types, allowing flexibility for diverse rural community needs while maintaining compatibility with surrounding areas.",
      location: {
        center: [-75.69237, 45.23007],
        zoom: 12.9,
        pitch: 0,
        bearing: -35.2,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          // put to           layer: "rural_ institutional", if nto working, w space
          layer: "rural_institutional",
          opacity: 1,
          duration: 500,
        },
        {
          layer: "rural_institutional_1",
          opacity: 1,
          duration: 500,
        },
        {
          layer: "rural_institutional_2",
          opacity: 1,
          duration: 500,
        },
      ],
      onChapterExit: [
        {
          layer: "rural_institutional",
          opacity: 0,
          duration: 500,
        },
        {
          layer: "rural_institutional_1",
          opacity: 0,
          duration: 500,
        },
        {
          layer: "rural_institutional_2",
          opacity: 0,
          duration: 500,
        },
      ],
    },
  ],
};
