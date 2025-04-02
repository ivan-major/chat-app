import type { Message } from '@/entities/messages/types/messagesTypes.ts'
import type { Profile } from '@/entities/profiles/types/profileTypes.ts'

interface Dialog {
    id: string;
    participantIds: string[];
    lastMessage: Message;
    updatedAt: number;
    participants?: Profile[] | null;
}

interface DialogsResponse {
    items: Dialog[];
    total: number;
    offset: number;
    hasMore: boolean;
}

export type { Dialog, DialogsResponse };
