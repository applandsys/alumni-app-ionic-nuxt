
import { Capacitor } from '@capacitor/core';
import { SecureStorage } from '@awesome-cordova-plugins/secure-storage';

export const saveLoginInfo = async (username: string, password: string) => {
    if (!Capacitor.isNativePlatform()) {
        console.warn('SecureStorage is only available on native platforms.');
        return null;
    }
    try {
        const storage = await SecureStorage.create('my_store');
        await storage.set('username', username);
        await storage.set('password', password);
    } catch (err) {
        console.error('Error accessing secure storage:', err);
        return null;
    }
};

export const getSavedPassword = async () => {
    if (!Capacitor.isNativePlatform()) {
        console.warn('SecureStorage is only available on native platforms.');
        return null;
    }

    try {
        const storage = await SecureStorage.create('my_store');
        const username = await storage.get('username');
        const password = await storage.get('password');
        return { username, password };
    } catch (err) {
        console.error('Error accessing secure storage:', err);
        return null;
    }
};

