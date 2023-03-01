export interface Theme{
    id: number,
    colorHexCode: string
}

export interface ThemesResponse{
    themes: Theme[];
    preferredThemeId: number;
}

export interface ThemeProp{
    theme: Theme;
    themes: Theme[];
    setThemeHandler: (theme: Theme) => void
}