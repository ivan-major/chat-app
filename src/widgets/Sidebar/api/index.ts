import { apiInstance } from "@/shared/services/api.ts"
import type { DialogsResponse } from "@/entities/dialogs/types/dialogsTypes.ts"

export const apiDialogs = {
	getDialogs(offset: number = 0) {
		return apiInstance.fetch<DialogsResponse>(`/api/dialogs?offset=${ offset }`)
	}
}
