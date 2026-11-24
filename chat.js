import { createChat } from 'https://cdn.jsdelivr.net/npm/@n8n/chat@1.46.5/dist/chat.bundle.es.js';

createChat({
  webhookUrl: 'https://agenticflows.tokencraze.org/webhook/cc6a29db-42db-4dc4-8ee8-d5342199d6f3/chat',
  mode: 'window',
  loadPreviousSession: false,
  initialMessages: [
    'Welcome to the JS-SEZ advisor.',
    'Ask about a zone, SETUP, incentives, tax or staff passes.'
  ],
  i18n: {
    en: {
      title: 'JS-SEZ advisor',
      subtitle: 'Questions about setting up in Johor?',
      footer: '',
      getStarted: 'Start a new chat',
      inputPlaceholder: 'Ask a JS-SEZ question...'
    }
  }
});

const makeChatToggleKeyboardAccessible = () => {
  const toggle = document.querySelector('.chat-window-toggle');
  if (!toggle) return;

  toggle.setAttribute('role', 'button');
  toggle.setAttribute('tabindex', '0');
  toggle.setAttribute('aria-label', 'Toggle JS-SEZ advisor chat');
  toggle.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      toggle.click();
    }
  });
  toggleObserver.disconnect();
};

const toggleObserver = new MutationObserver(makeChatToggleKeyboardAccessible);
toggleObserver.observe(document.body, { childList: true, subtree: true });
makeChatToggleKeyboardAccessible();
