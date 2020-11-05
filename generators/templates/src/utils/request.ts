/* eslint @typescript-eslint/no-explicit-any: 0 */
/* eslint @typescript-eslint/explicit-module-boundary-types :0 */

import req from 'reqwest';
import _ from 'lodash-es';
import { stringify } from 'qs';

type HttpMethods = 'get' | 'post' | 'put' | 'delete';

type ContentType = 'application/json;charset=utf-8' | 'application/x-www-form-urlencoded';

interface RequestOption {
  type?: string;
  headers?: {
    'Content-Type': ContentType;
  };
  'Content-Type'?: ContentType;
}

export const ajax = <T = any>(method: HttpMethods, url: string, data?: any, options?: RequestOption): Promise<T> => {
  return new Promise((resolve, reject) => {
    req(
      _.assign(
        {
          url,
          method,
          data,
          success: (result: any) => {
            return result.msg ? reject(result) : resolve(result);
          },
          error: (error: Error) => {
            reject(error);
          },
        },
        options,
      ),
    );
  });
};

const trimQuery = (data: any) => {
  return _.omitBy(
    _.mapValues(data, (value: any) => {
      return typeof value === 'string' ? _.trim(value) : value;
    }),
    (value: any) => typeof value === 'string' && !value,
  );
};

export const get = <T>(url: string, data?: any, options?: RequestOption): Promise<T> => {
  return ajax('get', url, trimQuery(data), options);
};

export const getJSONP = <T>(url: string, data?: any): Promise<T> => {
  return ajax('get', url, data, { type: 'jsonp' });
};

export const post = <T>(url: string, data?: any): Promise<T> => {
  return ajax('post', url, JSON.stringify(data), { type: 'json', headers: { 'Content-Type': 'application/json;charset=utf-8' } });
};

export const put = <T>(url: string, data?: any): Promise<T> => {
  return ajax('put', url, JSON.stringify(data), { type: 'json', headers: { 'Content-Type': 'application/json;charset=utf-8' } });
};

export const remove = <T>(url: string, data?: any): Promise<T> => {
  return ajax('delete', url, JSON.stringify(data), {
    type: 'json',
    headers: { 'Content-Type': 'application/json;charset=utf-8' },
  });
};

export const removeForm = <T>(url: string, params = {}): Promise<T> => {
  return ajax('delete', url, params, { 'Content-Type': 'application/x-www-form-urlencoded' });
};

export const putForm = <T>(url: string, params = {}): Promise<T> => {
  return ajax('put', url, stringify(params, { arrayFormat: 'repeat' }), { 'Content-Type': 'application/x-www-form-urlencoded' });
};

export const postForm = <T>(url: string, params = {}): Promise<T> => {
  return ajax('post', url, params, { 'Content-Type': 'application/x-www-form-urlencoded' });
};
