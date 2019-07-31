import rf from 'fs-readfile-promise';
import neatCsv from 'neat-csv';
import path from 'path';
import {parse, differenceInMinutes, differenceInSeconds} from 'date-fns';

export function getWalks(req, res) {

  (async () => {

    let csv = await rf(path.join(__dirname, '../gps_dataset.csv'));

    neatCsv(csv, {
      separator: ';'
    }).then(data => {

      res.json({data: parseWalks(data, 30)});

    });

  })();

}

/**
 * Breaks down gps dataset into sets of walks, as determined by a threshold.
 * @param datapoints
 * @param timeThreshold //in minutes
 * @returns {Array}
 */
function parseWalks(datapoints, timeThreshold) {

  let walks = [];
  let iLast = 0; //index of last datapoint in previous walk

  let addWalk = i => {

    let lonLatArray = datapoints.slice(iLast, i).map(p => [parseFloat(p.longitude), parseFloat(p.latitude)]);
    let dist = distanceOfRoute(lonLatArray);
    let startDate = parse(datapoints[iLast].timestamp);
    let endDate = parse(datapoints[i - 1].timestamp);

    walks.push({
      startDate: startDate,
      endDate: endDate,
      gpsTrace: lonLatArray,
      distance: dist,
      pace: differenceInSeconds(endDate, startDate) / dist,
      altitudeClimbed: altitudeClimbed(datapoints.slice(iLast, i).map(p => parseFloat(p.altitude)))
    });

    iLast = i;

  };

  for (let i = 1; i < datapoints.length; i++) {

    let dif = differenceInMinutes(parse(datapoints[i].timestamp), parse(datapoints[i - 1].timestamp));

    if (dif > timeThreshold) {

      addWalk(i);

    }

  }

  if (iLast < datapoints.length - 1) {

    addWalk(datapoints.length);

  }

  return walks;

}

function distanceOfRoute(route) {

  let d = 0;

  route.map((v,k) => {

    if (k !== 0) {

      d += distance(v[1], v[0], route[k - 1][1], route[k - 1][0]);

    }

  });

  return d;

}

function distance(lat1, lon1, lat2, lon2, unit) {
  if ((lat1 == lat2) && (lon1 == lon2)) {
    return 0;
  }
  else {
    var radlat1 = Math.PI * lat1/180;
    var radlat2 = Math.PI * lat2/180;
    var theta = lon1-lon2;
    var radtheta = Math.PI * theta/180;
    var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
    if (dist > 1) {
      dist = 1;
    }
    dist = Math.acos(dist);
    dist = dist * 180/Math.PI;
    dist = dist * 60 * 1.1515;
    if (unit=="K") { dist = dist * 1.609344 }
    if (unit=="N") { dist = dist * 0.8684 }
    return dist;
  }
}

function altitudeClimbed(altitudes) {

  let h = 0;

  altitudes.map((v,k) => {

    if (k === 0) return;

    if (v > altitudes[k - 1]) {

      h += v - altitudes[k - 1];

    }

  });

  return h;

}