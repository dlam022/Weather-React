const BASE = "https://cdn.meteocons.com/3.0.0-next.10/svg/fill";

const iconsByType = {
  clear: { url: `${BASE}/clear-day.svg`, codes: [1000] },
  partlyCloudy: { url: `${BASE}/partly-cloudy-day.svg`, codes: [1003] },
  cloudy: { url: `${BASE}/cloudy.svg`, codes: [1006, 1009] },
  fog: { url: `${BASE}/fog.svg`, codes: [1030, 1135, 1147] },
  drizzle: { url: `${BASE}/drizzle.svg`, codes: [1072, 1150, 1153, 1168, 1171] },
  rain: {
    url: `${BASE}/rain.svg`,
    codes: [1063, 1180, 1183, 1186, 1189, 1192, 1195, 1240, 1243, 1246],
  },
  freezingRain: { url: `${BASE}/freezing-rain.svg`, codes: [1198, 1201] },
  sleet: { url: `${BASE}/sleet.svg`, codes: [1069, 1204, 1207, 1249, 1252] },
  snow: {
    url: `${BASE}/snow.svg`,
    codes: [1066, 1114, 1117, 1210, 1213, 1216, 1219, 1222, 1225, 1255, 1258],
  },
  hail: { url: `${BASE}/hail.svg`, codes: [1237, 1261, 1264] },
  thunder: {
    url: `${BASE}/thunderstorms-day.svg`,
    codes: [1087, 1273, 1276, 1279, 1282],
  },
};

const iconsByCode = {};
for (const { url, codes } of Object.values(iconsByType)) {
  for (const code of codes) {
    iconsByCode[code] = url;
  }
}

const defaultIcon = `${BASE}/cloudy.svg`;

export function GetWeatherIcons(code) {
  return iconsByCode[code] ?? defaultIcon;
}
