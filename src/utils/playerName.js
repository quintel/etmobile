import store from './store';

export const getPlayerName = () => store.getItem('playerName');
export const setPlayerName = name => store.setItem('playerName', name);
export const clearPlayerName = () => store.removeItem('playerName');
