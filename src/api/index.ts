import { z } from 'zod';
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

type FetchJsonResult =
  | { ok: true; statusCode: number; headers: Headers; data: Json }
  | { ok: false; statusCode: number; message: string };

async function fetchJSON(url: URL, method: HTTPMethod = 'GET', bodyInfo?: Json): Promise<FetchJsonResult> {
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
  if (response.ok) {
    return {
      ok: response.ok,
      statusCode: response.status,
      headers: response.headers,
      data: jsonSchema.parse(await response.json()),
    };
  }

  return { ok: response.ok, statusCode: response.status, message: await response.text() };
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
  const response = await fetchJSON(url);
  if (response.ok) {
    return { json: response.data, count: response.headers.get('X-Total-Count') };
  }

  throw new Error(response.message);
}

export async function getCar(id: string): Promise<Json> {
  const url = buildUrl(Endpoint.garage, id);
  const response = await fetchJSON(url);
  if (response.ok) {
    return response.data;
  }

  throw new Error(response.message);
}

export async function createCar(carInfo: Omit<CarInfo, 'id'>): Promise<Json> {
  const url = buildUrl(Endpoint.garage);
  const response = await fetchJSON(url, 'POST', carInfo);
  if (response.ok) {
    return response.data;
  }

  throw new Error(response.message);
}

export async function deleteCar(id: string): Promise<Json> {
  const url = buildUrl(Endpoint.garage, id);
  const response = await fetchJSON(url, 'DELETE');
  if (response.ok) {
    return response.data;
  }

  throw new Error(response.message);
}

export async function updateCar({ color, id, name }: CarInfo): Promise<Json> {
  const url = buildUrl(Endpoint.garage, id);
  const response = await fetchJSON(url, 'PUT', { color, name });
  if (response.ok) {
    return response.data;
  }

  throw new Error(response.message);
}

export async function toggleEngine(engineInfo: EngineInfo): Promise<Json> {
  const url = buildUrl(Endpoint.engine);
  url.search = new URLSearchParams(engineInfo).toString();
  const response = await fetchJSON(url, 'PATCH');
  if (response.ok) {
    return response.data;
  }

  throw new Error(response.message);
}

export async function switchDriveMode(id: string): Promise<{ success: boolean }> {
  const url = buildUrl(Endpoint.engine);
  url.search = new URLSearchParams({ id, status: 'drive' }).toString();
  const response = await fetchJSON(url, 'PATCH');
  if (response.ok) {
    return z.object({ success: z.literal(true) }).parse(response.data);
  }
  if (response.statusCode === 500) {
    return { success: false };
  }
  throw new Error(response.message);
}

export type WinnersInfoOptions = {
  _page?: string;
  _limit?: string;
  _sort?: 'id' | 'wins' | 'time';
  _order?: 'ASC' | 'DESC';
};

type WinnerInfo = {
  id: number;
  wins: number;
  time: number;
};

type WinnersResponse = {
  json: Json;
  count: string | null;
};

export async function getWinners(winnerInfo: WinnersInfoOptions): Promise<WinnersResponse> {
  const url = buildUrl(Endpoint.winners);
  url.search = new URLSearchParams(winnerInfo).toString();
  const response = await fetchJSON(url);
  if (response.ok) {
    return { json: response.data, count: response.headers.get('X-Total-Count') };
  }

  throw new Error(response.message);
}

export async function getWinner(id: string): Promise<Json> {
  const url = buildUrl(Endpoint.winners, id);
  const response = await fetchJSON(url);
  if (response.ok) {
    return response.data;
  }

  throw new Error(response.message);
}

export async function createWinner(winnerInfo: WinnerInfo): Promise<Json> {
  const url = buildUrl(Endpoint.winners);
  const response = await fetchJSON(url, 'POST', winnerInfo);
  if (response.ok) {
    return response.data;
  }

  throw new Error(response.message);
}

export async function deleteWinner(id: string): Promise<Json | null> {
  const url = buildUrl(Endpoint.winners, id);
  const response = await fetchJSON(url, 'DELETE');
  if (response.ok) {
    return response.data;
  }

  if (response.statusCode === 404) {
    return null;
  }
  throw new Error(response.message);
}

export async function updateWinner({ id, time, wins }: WinnerInfo): Promise<Json> {
  const url = buildUrl(Endpoint.winners, id.toString());
  const requestInit = { time, wins };
  const response = await fetchJSON(url, 'PUT', requestInit);
  if (response.ok) {
    return response.data;
  }

  throw new Error(response.message);
}
