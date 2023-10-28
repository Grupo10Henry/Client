// simula el array de objetos que vendra del back

const events = [
   {
      eventID: 35678553,
      name: "Karol G (1)",
      description: "Concierto de Karol G en Medellín, como parte de su gira por Colombia",
      category: "Música",
      capacity: "15000",
      date: "2023-10-11",
      time: "20:20",
      locationName: "Estadio Atanasio Girardot",
      adressLocation: "Cra. 74 #48010, Laureles - Estadio, Medellín, Laureles, Medellín, Antioquia",
      mapLocation: "https://maps.app.goo.gl/gaW2NopsVJuFHDgy8",
      image: "https://ca-times.brightspotcdn.com/dims4/default/6faa129/2147483647/strip/true/crop/3500x2333+0+0/resize/1200x800!/format/webp/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Ff6%2F2a%2F5614c375f28769589386537dbb47%2Fc9739d852d904ae382c3b5c7f829a0a0",
      bannerImage: "https://ca-times.brightspotcdn.com/dims4/default/6faa129/2147483647/strip/true/crop/3500x2333+0+0/resize/1200x800!/format/webp/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Ff6%2F2a%2F5614c375f28769589386537dbb47%2Fc9739d852d904ae382c3b5c7f829a0a0",
      planImage: "https://ca-times.brightspotcdn.com/dims4/default/6faa129/2147483647/strip/true/crop/3500x2333+0+0/resize/1200x800!/format/webp/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Ff6%2F2a%2F5614c375f28769589386537dbb47%2Fc9739d852d904ae382c3b5c7f829a0a0",
      views: 10000,
      priceMin: "300000",
      priceMax: "10000000",
   }, {
      eventID: 55726847,
      name: "Karol G (2)",
      description: "Concierto de Karol G en Medellín, como parte de su gira por Colombia",
      category: "Música",
      capacity: "15000",
      date: "2023-10-11",
      time: "20:20",
      locationName: "Estadio Atanasio Girardot",
      adressLocation: "Cra. 74 #48010, Laureles - Estadio, Medellín, Laureles, Medellín, Antioquia",
      mapLocation: "https://maps.app.goo.gl/gaW2NopsVJuFHDgy8",
      image: "https://ca-times.brightspotcdn.com/dims4/default/6faa129/2147483647/strip/true/crop/3500x2333+0+0/resize/1200x800!/format/webp/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Ff6%2F2a%2F5614c375f28769589386537dbb47%2Fc9739d852d904ae382c3b5c7f829a0a0",
      bannerImage: "https://ca-times.brightspotcdn.com/dims4/default/6faa129/2147483647/strip/true/crop/3500x2333+0+0/resize/1200x800!/format/webp/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Ff6%2F2a%2F5614c375f28769589386537dbb47%2Fc9739d852d904ae382c3b5c7f829a0a0",
      planImage: "https://ca-times.brightspotcdn.com/dims4/default/6faa129/2147483647/strip/true/crop/3500x2333+0+0/resize/1200x800!/format/webp/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Ff6%2F2a%2F5614c375f28769589386537dbb47%2Fc9739d852d904ae382c3b5c7f829a0a0",
      views: 8000,
      priceMin: "300000",
      priceMax: "10000000",
   }, {
      eventID: 75462595,
      name: "Karol G (3)",
      description: "Concierto de Karol G en Medellín, como parte de su gira por Colombia",
      category: "Música",
      capacity: "15000",
      date: "2023-10-11",
      time: "20:20",
      locationName: "Estadio Atanasio Girardot",
      adressLocation: "Cra. 74 #48010, Laureles - Estadio, Medellín, Laureles, Medellín, Antioquia",
      mapLocation: "https://maps.app.goo.gl/gaW2NopsVJuFHDgy8",
      image: "https://ca-times.brightspotcdn.com/dims4/default/6faa129/2147483647/strip/true/crop/3500x2333+0+0/resize/1200x800!/format/webp/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Ff6%2F2a%2F5614c375f28769589386537dbb47%2Fc9739d852d904ae382c3b5c7f829a0a0",
      bannerImage: "https://ca-times.brightspotcdn.com/dims4/default/6faa129/2147483647/strip/true/crop/3500x2333+0+0/resize/1200x800!/format/webp/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Ff6%2F2a%2F5614c375f28769589386537dbb47%2Fc9739d852d904ae382c3b5c7f829a0a0",
      planImage: "https://ca-times.brightspotcdn.com/dims4/default/6faa129/2147483647/strip/true/crop/3500x2333+0+0/resize/1200x800!/format/webp/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Ff6%2F2a%2F5614c375f28769589386537dbb47%2Fc9739d852d904ae382c3b5c7f829a0a0",
      views: 7000,
      priceMin: "300000",
      priceMax: "10000000",
   }, {
      eventID: 72595064,
      name: "Karol G (4)",
      description: "Concierto de Karol G en Medellín, como parte de su gira por Colombia",
      category: "Música",
      capacity: "15000",
      date: "2023-10-11",
      time: "20:20",
      locationName: "Estadio Atanasio Girardot",
      adressLocation: "Cra. 74 #48010, Laureles - Estadio, Medellín, Laureles, Medellín, Antioquia",
      mapLocation: "https://maps.app.goo.gl/gaW2NopsVJuFHDgy8",
      image: "https://ca-times.brightspotcdn.com/dims4/default/6faa129/2147483647/strip/true/crop/3500x2333+0+0/resize/1200x800!/format/webp/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Ff6%2F2a%2F5614c375f28769589386537dbb47%2Fc9739d852d904ae382c3b5c7f829a0a0",
      bannerImage: "https://ca-times.brightspotcdn.com/dims4/default/6faa129/2147483647/strip/true/crop/3500x2333+0+0/resize/1200x800!/format/webp/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Ff6%2F2a%2F5614c375f28769589386537dbb47%2Fc9739d852d904ae382c3b5c7f829a0a0",
      planImage: "https://ca-times.brightspotcdn.com/dims4/default/6faa129/2147483647/strip/true/crop/3500x2333+0+0/resize/1200x800!/format/webp/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Ff6%2F2a%2F5614c375f28769589386537dbb47%2Fc9739d852d904ae382c3b5c7f829a0a0",
      views: 6000,
      priceMin: "300000",
      priceMax: "10000000",
   }, {
      eventID: 24956425,
      name: "Karol G (5)",
      description: "Concierto de Karol G en Medellín, como parte de su gira por Colombia",
      category: "Música",
      capacity: "15000",
      date: "2023-10-11",
      time: "20:20",
      locationName: "Estadio Atanasio Girardot",
      adressLocation: "Cra. 74 #48010, Laureles - Estadio, Medellín, Laureles, Medellín, Antioquia",
      mapLocation: "https://maps.app.goo.gl/gaW2NopsVJuFHDgy8",
      image: "https://ca-times.brightspotcdn.com/dims4/default/6faa129/2147483647/strip/true/crop/3500x2333+0+0/resize/1200x800!/format/webp/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Ff6%2F2a%2F5614c375f28769589386537dbb47%2Fc9739d852d904ae382c3b5c7f829a0a0",
      bannerImage: "https://ca-times.brightspotcdn.com/dims4/default/6faa129/2147483647/strip/true/crop/3500x2333+0+0/resize/1200x800!/format/webp/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Ff6%2F2a%2F5614c375f28769589386537dbb47%2Fc9739d852d904ae382c3b5c7f829a0a0",
      planImage: "https://ca-times.brightspotcdn.com/dims4/default/6faa129/2147483647/strip/true/crop/3500x2333+0+0/resize/1200x800!/format/webp/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Ff6%2F2a%2F5614c375f28769589386537dbb47%2Fc9739d852d904ae382c3b5c7f829a0a0",
      views: 5000,
      priceMin: "300000",
      priceMax: "10000000",
   }, {
      eventID: 56946175,
      name: "Karol G (6)",
      description: "Concierto de Karol G en Medellín, como parte de su gira por Colombia",
      category: "Música",
      capacity: "15000",
      date: "2023-10-11",
      time: "20:20",
      locationName: "Estadio Atanasio Girardot",
      adressLocation: "Cra. 74 #48010, Laureles - Estadio, Medellín, Laureles, Medellín, Antioquia",
      mapLocation: "https://maps.app.goo.gl/gaW2NopsVJuFHDgy8",
      image: "https://ca-times.brightspotcdn.com/dims4/default/6faa129/2147483647/strip/true/crop/3500x2333+0+0/resize/1200x800!/format/webp/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Ff6%2F2a%2F5614c375f28769589386537dbb47%2Fc9739d852d904ae382c3b5c7f829a0a0",
      bannerImage: "https://ca-times.brightspotcdn.com/dims4/default/6faa129/2147483647/strip/true/crop/3500x2333+0+0/resize/1200x800!/format/webp/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Ff6%2F2a%2F5614c375f28769589386537dbb47%2Fc9739d852d904ae382c3b5c7f829a0a0",
      planImage: "https://ca-times.brightspotcdn.com/dims4/default/6faa129/2147483647/strip/true/crop/3500x2333+0+0/resize/1200x800!/format/webp/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Ff6%2F2a%2F5614c375f28769589386537dbb47%2Fc9739d852d904ae382c3b5c7f829a0a0",
      views: 4000,
      priceMin: "300000",
      priceMax: "10000000",
   }, {
      eventID: 56196542,
      name: "Karol G (7)",
      description: "Concierto de Karol G en Medellín, como parte de su gira por Colombia",
      category: "Música",
      capacity: "15000",
      date: "2023-10-11",
      time: "20:20",
      locationName: "Estadio Atanasio Girardot",
      adressLocation: "Cra. 74 #48010, Laureles - Estadio, Medellín, Laureles, Medellín, Antioquia",
      mapLocation: "https://maps.app.goo.gl/gaW2NopsVJuFHDgy8",
      image: "https://ca-times.brightspotcdn.com/dims4/default/6faa129/2147483647/strip/true/crop/3500x2333+0+0/resize/1200x800!/format/webp/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Ff6%2F2a%2F5614c375f28769589386537dbb47%2Fc9739d852d904ae382c3b5c7f829a0a0",
      bannerImage: "https://ca-times.brightspotcdn.com/dims4/default/6faa129/2147483647/strip/true/crop/3500x2333+0+0/resize/1200x800!/format/webp/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Ff6%2F2a%2F5614c375f28769589386537dbb47%2Fc9739d852d904ae382c3b5c7f829a0a0",
      planImage: "https://ca-times.brightspotcdn.com/dims4/default/6faa129/2147483647/strip/true/crop/3500x2333+0+0/resize/1200x800!/format/webp/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Ff6%2F2a%2F5614c375f28769589386537dbb47%2Fc9739d852d904ae382c3b5c7f829a0a0",
      views: 3000,
      priceMin: "300000",
      priceMax: "10000000",
   }, {
      eventID: 35861495,
      name: "Karol G (8)",
      description: "Concierto de Karol G en Medellín, como parte de su gira por Colombia",
      category: "Música",
      capacity: "15000",
      date: "2023-10-11",
      time: "20:20",
      locationName: "Estadio Atanasio Girardot",
      adressLocation: "Cra. 74 #48010, Laureles - Estadio, Medellín, Laureles, Medellín, Antioquia",
      mapLocation: "https://maps.app.goo.gl/gaW2NopsVJuFHDgy8",
      image: "https://ca-times.brightspotcdn.com/dims4/default/6faa129/2147483647/strip/true/crop/3500x2333+0+0/resize/1200x800!/format/webp/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Ff6%2F2a%2F5614c375f28769589386537dbb47%2Fc9739d852d904ae382c3b5c7f829a0a0",
      bannerImage: "https://ca-times.brightspotcdn.com/dims4/default/6faa129/2147483647/strip/true/crop/3500x2333+0+0/resize/1200x800!/format/webp/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Ff6%2F2a%2F5614c375f28769589386537dbb47%2Fc9739d852d904ae382c3b5c7f829a0a0",
      planImage: "https://ca-times.brightspotcdn.com/dims4/default/6faa129/2147483647/strip/true/crop/3500x2333+0+0/resize/1200x800!/format/webp/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Ff6%2F2a%2F5614c375f28769589386537dbb47%2Fc9739d852d904ae382c3b5c7f829a0a0",
      views: 2000,
      priceMin: "300000",
      priceMax: "10000000",
   },
]

export default events