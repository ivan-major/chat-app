import { ref, onMounted, onUnmounted } from 'vue';
import type { NewMassage } from '@/entities/messages/types/messagesTypes.ts';

export function useWebSocket(url: string) {
  const ws = ref<WebSocket | null>(null);
  const messages = ref<string[]>([]);

  const connect = () => {
    ws.value = new WebSocket(url);

    ws.value.onopen = () => {
      console.log('WebSocket підключено');
    };

    ws.value.onmessage = (event) => {
      messages.value.push(event.data);
    };

    ws.value.onerror = (error) => {
      console.error('WebSocket помилка:', error);
    };

    ws.value.onclose = () => {
      console.log('WebSocket закрито');
    };
  };

  const sendMessage = (message: NewMassage) => {
    if (ws.value && ws.value.readyState === WebSocket.OPEN) {
      ws.value.send(JSON.stringify(message));
    }
  };

  onMounted(connect);
  onUnmounted(() => ws.value?.close());

  return { messages, sendMessage, connect };
}
