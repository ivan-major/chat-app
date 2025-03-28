import type { Message } from '@/entities/messages/types/messagesTypes.ts';

interface Dialog {
    id: string;
    participantIds: string[];
    lastMessage: Message;
    updatedAt: number;
}

interface DialogsResponse {
    items: Dialog[];
    total: number;
    offset: number;
    hasMore: boolean;
}

export type { Dialog, DialogsResponse };


