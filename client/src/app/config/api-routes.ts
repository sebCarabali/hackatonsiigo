export class ApiRoutes {
    private static PORT: number = 3977;
    private static PROTOCOL: string = "http";
    private static HOST: string = "localhost";

    public static getBaseUrl() {
        return `${this.PROTOCOL}://${this.HOST}:${this.PORT}/api/`;
    }
}