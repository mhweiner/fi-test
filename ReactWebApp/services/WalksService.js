import {GET} from "../utils/rp";

export function getWalks() {

  return GET('/api/walks').then(result => result.json()).then(resp => resp.data);

}