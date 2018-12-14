exports.distanceAndNameSort = data =>
  data.sort((b, a) => b.name.localeCompare(a.name) || b.distance - a.distance);
