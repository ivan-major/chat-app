import { apiInstance } from "@/shared/services/api.ts"
import type { MessagesResponse } from "../types/messagesTypes.ts"

export const apiDialogMessages = {
	getDialogsMessages(dialogId: string) {
		return apiInstance.fetch<MessagesResponse>(`/api/dialogs/:${ dialogId }/messages`)
	},
};