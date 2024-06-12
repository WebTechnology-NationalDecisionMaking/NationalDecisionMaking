import { makeAutoObservable } from 'mobx';

class GlobalLoadingStore {
  isLoading = false;
  message = '';

  constructor() {
    makeAutoObservable(this);
  }

  startLoading(isLoading: boolean, message: string) {
    this.isLoading = isLoading;
    this.message = message;
  }

  stopLoading() {
    this.isLoading = false;
    this.message = '';
  }
}

export const globalLoadingStore = new GlobalLoadingStore();
