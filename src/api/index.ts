import { jsonSchema, type Json } from '@/lib/JSON.schema';

const REQUEST_ADDRESS = 'http://127.0.0.1:3000';
const enum Endpoint {
  garage = '/garage',
  winners = '/winners',
  engine = '/engine',
}

type HTTPMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

type CarInfo = { name: string; color: string; id: string };

type EngineInfo = { status: 'started' | 'stopped'; id: string };

async function fetchJSON(url: URL, method: HTTPMethod = 'GET', bodyInfo?: Json): Promise<Json> {
  const obj: RequestInit = {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
  };
  if (bodyInfo) {
    obj.body = JSON.stringify(bodyInfo);
  }
  const response = await fetch(url, obj);
  return jsonSchema.parse(await response.json());
}

function buildUrl(endpoint: Endpoint, id?: string): URL {
  let url = REQUEST_ADDRESS + endpoint;
  if (id) {
    url += `/${id}`;
  }
  return new URL(url);
}

type GetCarsResponse = {
  json: Json;
  count: string | null;
};
export async function getCars(page: number, limit = 7): Promise<GetCarsResponse> {
  const url = buildUrl(Endpoint.garage);
  url.search = new URLSearchParams({ _page: page.toString(), _limit: limit.toString() }).toString();
  const response = await fetch(url);
  return { json: jsonSchema.parse(await response.json()), count: response.headers.get('X-Total-Count') };
}

export async function getCar(id: string): Promise<Json> {
  const url = buildUrl(Endpoint.garage, id);
  return fetchJSON(url);
}

export async function createCar(carInfo: Omit<CarInfo, 'id'>): Promise<Json> {
  const url = buildUrl(Endpoint.garage);
  return fetchJSON(url, 'POST', carInfo);
}

export async function deleteCar(id: string): Promise<Json> {
  const url = buildUrl(Endpoint.garage, id);
  return fetchJSON(url, 'DELETE');
}

export async function updateCar({ color, id, name }: CarInfo): Promise<Json> {
  const url = buildUrl(Endpoint.garage, id);
  return fetchJSON(url, 'PUT', { color, name });
}

export async function toggleEngine(engineInfo: EngineInfo): Promise<Json> {
  const url = buildUrl(Endpoint.engine);
  url.search = new URLSearchParams(engineInfo).toString();
  return fetchJSON(url, 'PATCH');
}

export async function switchDriveMode(id: string): Promise<Json> {
  const url = buildUrl(Endpoint.engine);
  url.search = new URLSearchParams({ id, status: 'drive' }).toString();
  return fetchJSON(url, 'PATCH');
}

type WinnersInfoOptions = {
  _page?: string;
  _limit?: string;
  _sort?: 'id' | 'wins' | 'time';
  _order?: 'ASC' | 'DESC';
};

type WinnerInfo = {
  id: string;
  wins: number;
  time: number;
};

export async function getWinners(winnerInfo: WinnersInfoOptions): Promise<Json> {
  const url = buildUrl(Endpoint.winners);
  url.search = new URLSearchParams(winnerInfo).toString();
  return fetchJSON(url);
}

export async function getWinner(id: string): Promise<Json> {
  const url = buildUrl(Endpoint.winners, id);
  return fetchJSON(url);
}

export async function createWinner(winnerInfo: WinnerInfo): Promise<Json> {
  const url = buildUrl(Endpoint.winners);
  return fetchJSON(url, 'POST', winnerInfo);
}

export async function deleteWinner(id: string): Promise<Json> {
  const url = buildUrl(Endpoint.winners, id);
  return fetchJSON(url, 'DELETE');
}

export async function updateWinner({ id, time, wins }: WinnerInfo): Promise<Json> {
  const url = buildUrl(Endpoint.winners, id);
  const requestInit = { time, wins };
  return fetchJSON(url, 'PUT', requestInit);
}
