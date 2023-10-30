// simula el array de objetos que vendra del back

const events = [
  {
    eventID: 35678553,
    name: "Karol G",
    description:
      "Concierto de Karol G en Medellín, como parte de su gira por Colombia",
    category: "Música",
    capacity: "15000",
    date: "2023-10-14",
    time: "20:05",
    locationName: "Estadio Atanasio Girardot",
    adressLocation:
      "Cra. 74 #48010, Laureles - Estadio, Medellín, Laureles, Medellín, Antioquia",
    mapLocation: "https://maps.app.goo.gl/gaW2NopsVJuFHDgy8",
    image:
      "https://ca-times.brightspotcdn.com/dims4/default/6faa129/2147483647/strip/true/crop/3500x2333+0+0/resize/1200x800!/format/webp/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Ff6%2F2a%2F5614c375f28769589386537dbb47%2Fc9739d852d904ae382c3b5c7f829a0a0",
    bannerImage:
      "https://fme-booking.com/wp-content/uploads/2021/08/Banner-FME-BOOKING-Karol-G-wb.png",
    planImage:
      "https://fme-booking.com/wp-content/uploads/2021/08/Banner-FME-BOOKING-Karol-G-wb.png",
    views: 10000,
    priceMin: "300000",
    priceMax: "10000000",
  },
  {
    eventID: 55726847,
    name: "Imagine Dragons",
    description: "Imagine Dragons hace una gira por Latinoamerica",
    category: "Festivales",
    capacity: "15000",
    date: "2023-10-25",
    time: "20:20",
    locationName: "Barranquilla",
    adressLocation:
      "Cra. 74 #48010, Laureles - Estadio, Medellín, Laureles, Medellín, Antioquia",
    mapLocation: "https://maps.app.goo.gl/gaW2NopsVJuFHDgy8",
    image:
      "https://i.scdn.co/image/ab6761610000e5eb920dc1f617550de8388f368e",
    bannerImage:
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9ec28039-b885-442a-9e83-ce5fe3de2cfc/d8hipyl-e3e5d4cb-1443-4639-b342-6c1b55c159cd.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzllYzI4MDM5LWI4ODUtNDQyYS05ZTgzLWNlNWZlM2RlMmNmY1wvZDhoaXB5bC1lM2U1ZDRjYi0xNDQzLTQ2MzktYjM0Mi02YzFiNTVjMTU5Y2QucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.xCK1l4rxCNMflozneIwN9Hfq6rnVaa6inP8LEJILbMk",
    planImage:
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9ec28039-b885-442a-9e83-ce5fe3de2cfc/d8hipyl-e3e5d4cb-1443-4639-b342-6c1b55c159cd.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzllYzI4MDM5LWI4ODUtNDQyYS05ZTgzLWNlNWZlM2RlMmNmY1wvZDhoaXB5bC1lM2U1ZDRjYi0xNDQzLTQ2MzktYjM0Mi02YzFiNTVjMTU5Y2QucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.xCK1l4rxCNMflozneIwN9Hfq6rnVaa6inP8LEJILbMk",
    views: 8000,
    priceMin: "300000",
    priceMax: "10000000",
  },
  {
    eventID: 35678353,
    name: "Abel Pintos",
    description:
      "Concierto de Abel Pintos en Medellín",
    category: "Música",
    capacity: "15000",
    date: "2023-10-18",
    time: "21:20",
    locationName: "Estadio Atanasio Girardot",
    adressLocation:
      "Cra. 74 #48010, Laureles - Estadio, Medellín, Laureles, Medellín, Antioquia",
    mapLocation: "https://maps.app.goo.gl/gaW2NopsVJuFHDgy8",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVfCTj7nQ06cSVUb0bEBhILS1-8w28ycTMYA&usqp=CAU",
    bannerImage:
      "https://teatrooriente.cl/wp-content/uploads/2018/11/banner-principal-ap-1500x459.jpg",
    planImage:
      "https://teatrooriente.cl/wp-content/uploads/2018/11/banner-principal-ap-1500x459.jpg",
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
    date: "2023-11-02",
    time: "17:30",
    locationName: "Barranquilla",
    adressLocation:
      "Cra. 74 #48010, Laureles - Estadio, Medellín, Laureles, Medellín, Antioquia",
    mapLocation: "https://maps.app.goo.gl/gaW2NopsVJuFHDgy8",
    image:
      "https://radionacional-v3.s3.amazonaws.com/s3fs-public/styles/portadas_relaciona_4_3/public/node/article/field_image/Congo%20Grande%20Adolfo%20Maury.jpg?h=ea95bb15&itok=jy24UZgb",
    bannerImage:
      "https://i.redd.it/64jjia3bzul61.png",
    planImage:
      "https://i.redd.it/64jjia3bzul61.png",
    views: 8000,
    priceMin: "300000",
    priceMax: "10000000",
  },
  {
    eventID: 35698553,
    name: "Luis Fonsi",
    description:
      "Concierto de Luis Fonsi, para decaudar fondos para una fundacion",
    category: "Música",
    capacity: "15000",
    date: "2023-11-14",
    time: "18:45",
    locationName: "Estadio Atanasio Girardot",
    adressLocation:
      "Cra. 74 #48010, Laureles - Estadio, Medellín, Laureles, Medellín, Antioquia",
    mapLocation: "https://maps.app.goo.gl/gaW2NopsVJuFHDgy8",
    image:
      "https://i.scdn.co/image/ab6761610000e5ebc85bfa07726d7173c15306dc",
    bannerImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtJDEWk1U6KQYPTbHkpFq-9gGQmjdtF2J-KeqGlxtqlovahh6vmmCnpYEJgPPhNSLl9-E&usqp=CAU",
    planImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtJDEWk1U6KQYPTbHkpFq-9gGQmjdtF2J-KeqGlxtqlovahh6vmmCnpYEJgPPhNSLl9-E&usqp=CAU",
    views: 10000,
    priceMin: "300000",
    priceMax: "10000000",
  },
  {
    eventID: 55226847,
    name: "Maluma",
    description: "Gira mundial del reconocido cantante colombiano, Maluma",
    category: "Festivales",
    capacity: "15000",
    date: "2023-11-29",
    time: "23:00",
    locationName: "Barranquilla",
    adressLocation:
      "Cra. 74 #48010, Laureles - Estadio, Medellín, Laureles, Medellín, Antioquia",
    mapLocation: "https://maps.app.goo.gl/gaW2NopsVJuFHDgy8",
    image:
      "https://album.mediaset.es/eimg/2023/02/01/maluma_06ab.jpg?w=1200&h=900",
    bannerImage:
      "https://www.music-art.sk/wp-content/uploads/2019/10/maluma_Banner.jpg",
    planImage:
      "https://www.music-art.sk/wp-content/uploads/2019/10/maluma_Banner.jpg",
    views: 8000,
    priceMin: "300000",
    priceMax: "10000000",
  },
]

export default events
