import { Profile } from "../model/profile";
import api from "./api";

export class ProfileService {
    private static URI = "/profiles";

    static async getAllProfiles(): Promise<Profile[]> {
        const response = await api.get<Profile[]>(ProfileService.URI);
        return response.data;
    }
}
