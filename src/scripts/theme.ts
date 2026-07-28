export type Theme = 'light' | 'dark';

export const getCurrentTheme = (): Theme =>
    document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light';

export const getNextTheme = (): Theme =>
    getCurrentTheme() === 'dark' ? 'light' : 'dark';

/**
 * Flip the theme and remember the choice. Everything visual keys off
 * `data-theme` on <html>, so setting it here is all that's needed.
 */
export const setTheme = (theme: Theme) => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('theme', theme);
};
