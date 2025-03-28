import { apiInstance } from "@/shared/services/api.ts"
import type { DialogsResponse } from "../types/dialogsTypes.ts"

export const apiDialogs = {
	getDialogs() {
		return apiInstance.fetch<DialogsResponse>(`/api/dialogs`)
	},
};