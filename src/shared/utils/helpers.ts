import type { Message } from '@/entities/messages/types/messagesTypes.ts'
export function initialsFromName(user: string) {
    const userName = user.split(' ')

    return `${ userName[0]
        .charAt(0)
        .toUpperCase() }${ userName[1]
        .charAt(0)
        .toUpperCase() }`
}

export function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`
}

export function getLastMessageType(message: Message) {
    if (message.imageUrl) {
        return message?.caption ? message?.caption : 'Photo'
    }

    if (message.videoUrl) {
        return 'Video'
    }

    return message.content
}