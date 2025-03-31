import { apiInstance } from "@/shared/services/api.ts"
import type { MessagesResponse } from "@/entities/messages/types/messagesTypes.ts"

export const apiDialogMessages = {
	getDialogsMessages(dialogId: string, offset: number = 0) {
		return apiInstance.fetch<MessagesResponse>(`/api/dialogs/${ dialogId }/messages?offset=${ offset }`)
	},
};