/**
 * Represents a request to check a website's health.
 */
export interface CheckRequest {
  /** The URL to be checked. Must include protocol (http/https). */
  url: string;
}

/**
 * Represents the response data from a website health check.
 */
export interface CheckResponse {
  /** The HTTP status code returned by the server (e.g., 200, 404, 500). */
  status: number;
  
  /** The time taken for the server to respond, measured in milliseconds. */
  responseTime: number;

  /** The size of the response body in bytes. */
  length: number;

  /** A cryptographic hash of the response body content for change detection. */
  hash: string;
}
