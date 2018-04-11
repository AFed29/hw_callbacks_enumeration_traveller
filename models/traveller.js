const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  return this.journeys.map((journey) => journey.startLocation);
};

Traveller.prototype.getJourneyEndLocations = function () {
  return this.journeys.map((journey) => journey.endLocation);
};

Traveller.prototype.getModesOfTransport = function () {
  return this.journeys.map((journey) => journey.transport);
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  return this.journeys.filter((journey) => journey.transport === transport);
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  return this.journeys.filter((journey) => journey.distance > minDistance);
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  const distances = this.journeys.map((journey) => journey.distance);
  return distances.reduce((accumulator, currentValue) => accumulator + currentValue);
};

Traveller.prototype.getUniqueModesOfTransport = function () {
  const allTransports = this.getModesOfTransport();
  let uniqueTransports = new Set(allTransports);
  return Array.from(uniqueTransports);
};


module.exports = Traveller;
