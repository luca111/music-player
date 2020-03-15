const tracks = [
  {
    trackId: "0",
    trackName: "Siesta",
    artistName: "Jahzzar",
    albumName: "Traveller's Guide",
    lengthInSeconds: 139
  },
  {
    trackId: "1",
    trackName: "Requiem for a Fish",
    artistName: "The Freak Fandango Orchestra",
    albumName: "Tales Of A Dead Fish",
    lengthInSeconds: 220
  },
  {
    trackId: "2",
    trackName: "Hachiko (The Faithtful Dog)",
    artistName: "The Kyoto Connection",
    albumName: "Wake Up",
    lengthInSeconds: 185
  },
  {
    trackId: "3",
    trackName: "RUNNING WATERS",
    artistName: "Jason Shaw",
    albumName: "Audionautix: Acoustic",
    lengthInSeconds: 166
  },
  {
    trackId: "4",
    trackName: "Springish",
    artistName: "Gillicuddy",
    albumName: "Plays Guitar",
    lengthInSeconds: 143
  },
  {
    trackId: "5",
    trackName: "The last ones",
    artistName: "Jahzzar",
    albumName: "Smoke Factory",
    lengthInSeconds: 180
  },
  {
    trackId: "6",
    trackName: "Dew",
    artistName: "Jahzzar",
    albumName: "#handmade",
    lengthInSeconds: 221
  },
  {
    trackId: "7",
    trackName: "Bloom",
    artistName: "Jahzzar",
    albumName: "#handmade",
    lengthInSeconds: 217
  },
  {
    trackId: "8",
    trackName: "Shake It!",
    artistName: "Jahzzar",
    albumName: "Super",
    lengthInSeconds: 272
  },
  {
    trackId: "9",
    trackName: "yesterday",
    artistName: "Jahzzar",
    albumName: "Come",
    lengthInSeconds: 237
  },
  {
    trackId: "10",
    trackName: "Bodies",
    artistName: "Jahzzar",
    albumName: "HiFi City Tales",
    lengthInSeconds: 146
  },
  {
    trackId: "11",
    trackName: "MainSquare",
    artistName: "Jahzzar",
    albumName: "#handmade",
    lengthInSeconds: 177
  }
];

exports.handler = (event, context, callback) => {
  callback(null, {
    statusCode: 200,
    body: JSON.stringify(tracks)
  });
};
