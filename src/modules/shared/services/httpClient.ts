export class HttpClient {
    async request<T>(request: Request): Promise<{body: T, headers: Headers, status: number}> {
        const response = await fetch(request);
        const body = await response.json();
        return {body, headers: response.headers, status: response.status};
    }
}