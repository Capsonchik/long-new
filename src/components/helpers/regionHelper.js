import {CITIES, COUNTRY, FEDERAL_DISTRICT, REGION} from "../../mocks/regionMock.js";

export function regionFormatter(value) {
  if (value === 'Страна') {
    return COUNTRY
  }

  if (value === 'Федеральный округ') {
    return FEDERAL_DISTRICT
  }

  if (value === 'Регион') {
    return REGION
  }

  if (value === 'Город') {
    return CITIES
  }
}