import api from "./api";

export class DatasetService {
    private static URI = "/datasets";

    static async getAllDatasets(): Promise<any[]> {
        const response = await api.get<any[]>(DatasetService.URI);
        return response.data;
    }

    static async getDatasetById(id: string): Promise<any> {
        const response = await api.get<any>(`${DatasetService.URI}/${id}`);
        return response.data;
    }
}
