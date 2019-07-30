import rf from 'fs-readfile-promise';
import neatCsv from 'neat-csv';
import path from 'path';
import {parse, differenceInMinutes} from 'date-fns';

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

    let lonLatArray = datapoints.slice(iLast, i).map(p => [p.longitude, p.latitude]);

    walks.push({
      date: parse(datapoints[iLast].timestamp),
      gpsTrace: lonLatArray
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