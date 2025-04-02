import { apiInstance } from "@/shared/services/api.ts"
import type { Profile} from "../types/profileTypes.ts"

export const apiProfiles = {
    getProfilesById(id: string) {
        return apiInstance.fetch<Profile>(`/api/profiles/${ id }`)
    }
}
