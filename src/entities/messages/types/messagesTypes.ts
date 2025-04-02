import type { Profile } from "@/entities/profiles/types/profileTypes.ts"
interface Message {
    id: string;
    dialogId: string;
    senderId: string;
    createdAt: number;
    type: 'text' | 'image' | 'video';
    delivered?: boolean;
    content?: string;
    imageUrl?: string;
    videoUrl?: string;
    thumbnailUrl?: string;
    duration?: number;
    caption?: string;
    sender?: Profile
}

interface MessagesResponse {
    items: Message[];
    total: number;
    offset: number;
    hasMore: boolean;
}

interface NewMassage {
    type: string
    payload: Message
}

export type { Message, MessagesResponse, NewMassage }
