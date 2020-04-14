const request = require("request");
const forecast = (latitude, longitude, callback) => {
  const url =
    "https://api.darksky.net/forecast/cc0e3799790b0b34bdeb6fef28c3daf7/" +
    encodeURI(latitude) +
    "," +
    encodeURI(longitude) +
    "?units=si";

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather service!");
    } else if (body.error) {
      callback("Unable to find location");
    } else {
      const temperature = body.currently.temperature;
      const precipProbability = body.currently.precipProbability;
      callback(
        undefined,
        `It is currently ${temperature} degree out. there is a ${precipProbability}% chance of rain`
      );
    }
  });
};

module.exports = forecast;
