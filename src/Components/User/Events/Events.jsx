// simula el array de objetos que vendra del back

const events = [
  {
    eventID: 35678553,
    name: "Karol G (1)",
    description:
      "Concierto de Karol G en Medellín, como parte de su gira por Colombia",
    category: "Música",
    capacity: "15000",
    date: "2023-10-14",
    time: "20:20",
    locationName: "Estadio Atanasio Girardot",
    adressLocation:
      "Cra. 74 #48010, Laureles - Estadio, Medellín, Laureles, Medellín, Antioquia",
    mapLocation: "https://maps.app.goo.gl/gaW2NopsVJuFHDgy8",
    image:
      "https://ca-times.brightspotcdn.com/dims4/default/6faa129/2147483647/strip/true/crop/3500x2333+0+0/resize/1200x800!/format/webp/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Ff6%2F2a%2F5614c375f28769589386537dbb47%2Fc9739d852d904ae382c3b5c7f829a0a0",
    bannerImage:
      "https://ca-times.brightspotcdn.com/dims4/default/6faa129/2147483647/strip/true/crop/3500x2333+0+0/resize/1200x800!/format/webp/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Ff6%2F2a%2F5614c375f28769589386537dbb47%2Fc9739d852d904ae382c3b5c7f829a0a0",
    planImage:
      "https://ca-times.brightspotcdn.com/dims4/default/6faa129/2147483647/strip/true/crop/3500x2333+0+0/resize/1200x800!/format/webp/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Ff6%2F2a%2F5614c375f28769589386537dbb47%2Fc9739d852d904ae382c3b5c7f829a0a0",
    views: 10000,
    priceMin: "300000",
    priceMax: "10000000",
  },
  {
    eventID: 55726847,
    name: "Carnaval de Barranquilla",
    description: "Evento folclórico y cultural celebrado en Colombia",
    category: "Festivales",
    capacity: "15000",
    date: "2023-10-25",
    time: "20:20",
    locationName: "Barranquilla",
    adressLocation:
      "Cra. 74 #48010, Laureles - Estadio, Medellín, Laureles, Medellín, Antioquia",
    mapLocation: "https://maps.app.goo.gl/gaW2NopsVJuFHDgy8",
    image:
      "https://radionacional-v3.s3.amazonaws.com/s3fs-public/styles/portadas_relaciona_4_3/public/node/article/field_image/Congo%20Grande%20Adolfo%20Maury.jpg?h=ea95bb15&itok=jy24UZgb",
    bannerImage:
      "https://ca-times.brightspotcdn.com/dims4/default/6faa129/2147483647/strip/true/crop/3500x2333+0+0/resize/1200x800!/format/webp/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Ff6%2F2a%2F5614c375f28769589386537dbb47%2Fc9739d852d904ae382c3b5c7f829a0a0",
    planImage:
      "https://ca-times.brightspotcdn.com/dims4/default/6faa129/2147483647/strip/true/crop/3500x2333+0+0/resize/1200x800!/format/webp/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Ff6%2F2a%2F5614c375f28769589386537dbb47%2Fc9739d852d904ae382c3b5c7f829a0a0",
    views: 8000,
    priceMin: "300000",
    priceMax: "10000000",
  },
  {
    eventID: 35678353,
    name: "Karol G (1)",
    description:
      "Concierto de Karol G en Medellín, como parte de su gira por Colombia",
    category: "Música",
    capacity: "15000",
    date: "2023-10-14",
    time: "20:20",
    locationName: "Estadio Atanasio Girardot",
    adressLocation:
      "Cra. 74 #48010, Laureles - Estadio, Medellín, Laureles, Medellín, Antioquia",
    mapLocation: "https://maps.app.goo.gl/gaW2NopsVJuFHDgy8",
    image:
      "https://ca-times.brightspotcdn.com/dims4/default/6faa129/2147483647/strip/true/crop/3500x2333+0+0/resize/1200x800!/format/webp/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Ff6%2F2a%2F5614c375f28769589386537dbb47%2Fc9739d852d904ae382c3b5c7f829a0a0",
    bannerImage:
      "https://ca-times.brightspotcdn.com/dims4/default/6faa129/2147483647/strip/true/crop/3500x2333+0+0/resize/1200x800!/format/webp/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Ff6%2F2a%2F5614c375f28769589386537dbb47%2Fc9739d852d904ae382c3b5c7f829a0a0",
    planImage:
      "https://ca-times.brightspotcdn.com/dims4/default/6faa129/2147483647/strip/true/crop/3500x2333+0+0/resize/1200x800!/format/webp/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Ff6%2F2a%2F5614c375f28769589386537dbb47%2Fc9739d852d904ae382c3b5c7f829a0a0",
    views: 10000,
    priceMin: "300000",
    priceMax: "10000000",
  },
  {
    eventID: 55736847,
    name: "Carnaval de Barranquilla",
    description: "Evento folclórico y cultural celebrado en Colombia",
    category: "Festivales",
    capacity: "15000",
    date: "2023-10-25",
    time: "20:20",
    locationName: "Barranquilla",
    adressLocation:
      "Cra. 74 #48010, Laureles - Estadio, Medellín, Laureles, Medellín, Antioquia",
    mapLocation: "https://maps.app.goo.gl/gaW2NopsVJuFHDgy8",
    image:
      "https://radionacional-v3.s3.amazonaws.com/s3fs-public/styles/portadas_relaciona_4_3/public/node/article/field_image/Congo%20Grande%20Adolfo%20Maury.jpg?h=ea95bb15&itok=jy24UZgb",
    bannerImage:
      "https://ca-times.brightspotcdn.com/dims4/default/6faa129/2147483647/strip/true/crop/3500x2333+0+0/resize/1200x800!/format/webp/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Ff6%2F2a%2F5614c375f28769589386537dbb47%2Fc9739d852d904ae382c3b5c7f829a0a0",
    planImage:
      "https://ca-times.brightspotcdn.com/dims4/default/6faa129/2147483647/strip/true/crop/3500x2333+0+0/resize/1200x800!/format/webp/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Ff6%2F2a%2F5614c375f28769589386537dbb47%2Fc9739d852d904ae382c3b5c7f829a0a0",
    views: 8000,
    priceMin: "300000",
    priceMax: "10000000",
  },
  {
    eventID: 35698553,
    name: "Karol G (1)",
    description:
      "Concierto de Karol G en Medellín, como parte de su gira por Colombia",
    category: "Música",
    capacity: "15000",
    date: "2023-10-14",
    time: "20:20",
    locationName: "Estadio Atanasio Girardot",
    adressLocation:
      "Cra. 74 #48010, Laureles - Estadio, Medellín, Laureles, Medellín, Antioquia",
    mapLocation: "https://maps.app.goo.gl/gaW2NopsVJuFHDgy8",
    image:
      "https://ca-times.brightspotcdn.com/dims4/default/6faa129/2147483647/strip/true/crop/3500x2333+0+0/resize/1200x800!/format/webp/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Ff6%2F2a%2F5614c375f28769589386537dbb47%2Fc9739d852d904ae382c3b5c7f829a0a0",
    bannerImage:
      "https://ca-times.brightspotcdn.com/dims4/default/6faa129/2147483647/strip/true/crop/3500x2333+0+0/resize/1200x800!/format/webp/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Ff6%2F2a%2F5614c375f28769589386537dbb47%2Fc9739d852d904ae382c3b5c7f829a0a0",
    planImage:
      "https://ca-times.brightspotcdn.com/dims4/default/6faa129/2147483647/strip/true/crop/3500x2333+0+0/resize/1200x800!/format/webp/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Ff6%2F2a%2F5614c375f28769589386537dbb47%2Fc9739d852d904ae382c3b5c7f829a0a0",
    views: 10000,
    priceMin: "300000",
    priceMax: "10000000",
  },
  {
    eventID: 55226847,
    name: "Carnaval de Barranquilla",
    description: "Evento folclórico y cultural celebrado en Colombia",
    category: "Festivales",
    capacity: "15000",
    date: "2023-10-25",
    time: "20:20",
    locationName: "Barranquilla",
    adressLocation:
      "Cra. 74 #48010, Laureles - Estadio, Medellín, Laureles, Medellín, Antioquia",
    mapLocation: "https://maps.app.goo.gl/gaW2NopsVJuFHDgy8",
    image:
      "https://radionacional-v3.s3.amazonaws.com/s3fs-public/styles/portadas_relaciona_4_3/public/node/article/field_image/Congo%20Grande%20Adolfo%20Maury.jpg?h=ea95bb15&itok=jy24UZgb",
    bannerImage:
      "https://ca-times.brightspotcdn.com/dims4/default/6faa129/2147483647/strip/true/crop/3500x2333+0+0/resize/1200x800!/format/webp/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Ff6%2F2a%2F5614c375f28769589386537dbb47%2Fc9739d852d904ae382c3b5c7f829a0a0",
    planImage:
      "https://ca-times.brightspotcdn.com/dims4/default/6faa129/2147483647/strip/true/crop/3500x2333+0+0/resize/1200x800!/format/webp/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Ff6%2F2a%2F5614c375f28769589386537dbb47%2Fc9739d852d904ae382c3b5c7f829a0a0",
    views: 8000,
    priceMin: "300000",
    priceMax: "10000000",
  },
]

export default events
