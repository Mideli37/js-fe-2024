import { assertIsOptions } from '@/helpers/assertIsOptions';
import { assertIsString } from '@/helpers/assertIsString';
import type { Article } from '@/types/article.type';
import type { Endpoint } from '@/types/endpoint.enum';
import { HTTPStatusCode } from '@/types/httpStatusCode.enum';
import type { Options } from '@/types/options.type';
import type { Source } from '@/types/source.type';

type RequestOptions = {
  endpoint: Endpoint;
  options?: {
    sources?: string;
  };
};

type HTTPMethod = 'GET' | 'POST' | 'PUT' | 'UPDATE' | 'DELETE';

class Loader {
  private baseLink: string;

  private options: Options;

  constructor(baseLink: string | undefined, options: { apiKey: string | undefined }) {
    assertIsString(baseLink);
    this.baseLink = baseLink;
    assertIsOptions(options);
    this.options = options;
  }

  protected getResp(
    { endpoint, options = {} }: RequestOptions,
    callback = (): void => {
      console.error('No callback for GET response');
    },
  ): void {
    this.load('GET', endpoint, callback, options);
  }

  private errorHandler(res: Response): Response {
    if (!res.ok) {
      if (res.status === HTTPStatusCode.NotFound || res.status === HTTPStatusCode.Unauthorized) {
        console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
      }
      throw Error(res.statusText);
    }

    return res;
  }

  private makeUrl(options: RequestOptions['options'], endpoint: RequestOptions['endpoint']): string {
    const urlOptions: Record<string, string> = { ...this.options, ...options };
    let url = `${this.baseLink}${endpoint}?`;

    Object.keys(urlOptions).forEach((key) => {
      const option = urlOptions[key];
      if (option) {
        url += `${key}=${option}&`;
      }
    });

    return url.slice(0, -1);
  }

  private load(
    method: HTTPMethod,
    endpoint: Endpoint,
    callback: (data?: Article | Source) => void,
    options: RequestOptions['options'] = {},
  ): void {
    fetch(this.makeUrl(options, endpoint), { method })
      .then((res) => this.errorHandler(res))
      .then((res) => res.json())
      .then((data: Article | Source) => callback(data))
      .catch((err) => console.error(err));
  }
}

export default Loader;
