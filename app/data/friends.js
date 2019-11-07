var friendArray = [ //Select first answers to get Yoda
    {
      name: "Yobama",
      photo: "https://i.kym-cdn.com/photos/images/newsfeed/001/441/147/84e.jpg",
      scores:   Array.from({length: 10}, () => Math.floor(Math.random() * 1)+1)      ,
    },
    {
        name: "Humanoid Orange",
        photo: "https://pbs.twimg.com/profile_images/874755626794192896/wCbhLhTp_400x400.jpg",
        scores:  Array.from({length: 10}, () => Math.floor(Math.random() * 4)+1),
      },
      {
        name: "Bongo Cat",
        photo: "https://i.kym-cdn.com/entries/icons/original/000/027/115/maxresdefault.jpg",
        scores:  Array.from({length: 10}, () => Math.floor(Math.random() * 3)+1),
      },
      {
        name: "Rye Bread",
        photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Mischbrot-1.jpg/1200px-Mischbrot-1.jpg",
        scores:  Array.from({length: 10}, () => Math.floor(Math.random() * 2)+3),
      },    {
        name: "Corgi",
        photo: "https://vetstreet.brightspotcdn.com/dims4/default/79f1bd2/2147483647/crop/0x0%2B0%2B0/resize/645x380/quality/90/?url=https%3A%2F%2Fvetstreet-brightspot.s3.amazonaws.com%2F83%2F9e8de0a7f411e0a0d50050568d634f%2Ffile%2FPembroke-Welsh-Corgi-3-645mk62711.jpg",
        scores:  Array.from({length: 10}, () => Math.floor(Math.random() * 3)+2),
      },    {
        name: "Citrus Squad",
        photo: "https://i.redd.it/2360efq16p111.jpg",
        scores:  Array.from({length: 10}, () => Math.floor(Math.random() * 4)+1),
      },    {
        name: "Coughing Cat",
        photo: "https://i.kym-cdn.com/entries/icons/original/000/027/852/Screen_Shot_2018-12-12_at_1.02.39_PM.png",
        scores:  Array.from({length: 10}, () => Math.floor(Math.random() * 4)+1),
      },    {
        name: "Dog",
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx37HKebl9T6pHa1MpAYF5YQkyFNHM8vIfjPrxZj66mI1yTaBF&s",
        scores:  Array.from({length: 10}, () => Math.floor(Math.random() * 4)+1),
      }
  ];

  module.exports = friendArray;

