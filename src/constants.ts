export const VITE_URL =
  import.meta.env.VITE_URL ?? "/";
export const PUSHER_ID = import.meta.env.VITE_PUSHER_ID ?? 'NO_PUSHER_ID'
export const PUSHER_PK = import.meta.env.VITE_PUSHER_PK ?? 'NO_PUSHER_PK'
export const PUSHER_SK = import.meta.env.VITE_PUSHER_SK ?? 'NO_PUSHER_SK'
export const PUSHER_CLUSTER = import.meta.env.VITE_PUSHER_CLUSTER ?? 'NO_PUSHER_CLUSTER'
export const DEMO_ENV = import.meta.env.__APP_ENV__ ?? 'NO___APP_ENV__'