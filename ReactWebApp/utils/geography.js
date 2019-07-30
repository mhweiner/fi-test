/**
 * coordList must be in format: [[lon, lat],[lon, lat],...]]
 * @param coordList
 * @returns {{minLon: *, maxLat: *, minLat: *, maxLon: *}}
 */
export function getBoundsOfCoordList(coordList) {

  let maxLat = coordList[0][1];
  let maxLon = coordList[0][0];
  let minLat = coordList[0][1];
  let minLon = coordList[0][0];

  for (let i = 0; i < coordList.length; i++) {

    if (coordList[i][1] < minLat) {

      minLat = coordList[i][1];

    } else if (coordList[i][1] > maxLat) {

      maxLat = coordList[i][1];

    }

    if (coordList[i][0] < minLon) {

      minLon = coordList[i][0];

    } else if (coordList[i][0] > maxLon) {

      maxLon = coordList[i][0];

    }

  }

  return {
    minLat: minLat,
    maxLat: maxLat,
    minLon: minLon,
    maxLon: maxLon
  };

}