interface Message {
    id: string;
    dialogId: string;
    senderId: string;
    createdAt: number;
    type: 'text' | 'image' | 'video';
    delivered: boolean;
    content?: string;
    imageUrl?: string;
    videoUrl?: string;
    thumbnailUrl?: string;
    duration?: number;
    caption?: string;
}

interface MessagesResponse {
    items: Message[];
    total: number;
    offset: number;
    hasMore: boolean;
}


export type { Message, MessagesResponse }
