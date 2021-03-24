/**
 * @description: Development model
 */
export const devMode = 'development';

/**
 * @description: Production mode
 */
export const prodMode = 'production';

/**
 * @description: Production mode
 */
export const test = 'test';
/**
 * @description: Get environment variables
 * @returns:
 * @example:
 */
export function getEnv(): string {
  return import.meta.env.MODE;
}

/**
 * @description: Is it a development mode
 * @returns:
 * @example:
 */
export function isDevMode(): boolean {
  return import.meta.env.DEV;
}

/**
 * @description: Is it a production mode
 * @returns:
 * @example:
 */
export function isProdMode(): boolean {
  return import.meta.env.PROD;
}

/**
 * @description: 获取接口地址
 * @returns:
 * @example:
 */
export function getBaseUrl(): string {
  return import.meta.env.VITE_APP_BASE_URL + '';
}
