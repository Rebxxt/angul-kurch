export interface Notify {
  message: string;
  type: typeof notifyTypes;
}

export let notifyTypes: 'error' | 'primary' | 'warning';
