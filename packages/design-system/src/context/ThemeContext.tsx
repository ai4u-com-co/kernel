import React, { createContext, useContext, useMemo, useState, useCallback, useEffect, ReactNode } from 'react';
import { ThemeProvider as MuiThemeProvider, createTheme, PaletteMode, Theme, Components, Shadows } from '@mui/material/styles';
import { TypographyVariantsOptions } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// Import consolidated color system from single source of truth
import { AI4U_PALETTE } from '../tokens/palette';
import { SHADOW_TOKENS } from '../tokens/theme';
import { TYPOGRAPHY_TOKENS } from '../tokens/typography';

// Fuentes para código
const CODE_FONT_FAMILY = TYPOGRAPHY_TOKENS.fontFamily.code;

// Configuración de tipografía
const typography: TypographyVariantsOptions = {
	fontFamily: TYPOGRAPHY_TOKENS.fontFamily.primary,
	h1: {
		fontFamily: TYPOGRAPHY_TOKENS.fontFamily.primary,
		fontWeight: TYPOGRAPHY_TOKENS.fontWeight.medium,
		fontSize: TYPOGRAPHY_TOKENS.fontSize['2xl'],
	},
	h2: {
		fontFamily: TYPOGRAPHY_TOKENS.fontFamily.primary,
		fontWeight: TYPOGRAPHY_TOKENS.fontWeight.medium,
		fontSize: TYPOGRAPHY_TOKENS.fontSize.xl,
	},
	h3: {
		fontFamily: TYPOGRAPHY_TOKENS.fontFamily.primary,
		fontWeight: TYPOGRAPHY_TOKENS.fontWeight.medium,
		fontSize: TYPOGRAPHY_TOKENS.fontSize.lg,
	},
	h4: {
		fontFamily: TYPOGRAPHY_TOKENS.fontFamily.primary,
		fontWeight: TYPOGRAPHY_TOKENS.fontWeight.medium,
		fontSize: TYPOGRAPHY_TOKENS.fontSize.base,
	},
	h5: {
		fontFamily: TYPOGRAPHY_TOKENS.fontFamily.primary,
		fontWeight: TYPOGRAPHY_TOKENS.fontWeight.regular,
		fontSize: TYPOGRAPHY_TOKENS.fontSize.sm,
	},
	h6: {
		fontFamily: TYPOGRAPHY_TOKENS.fontFamily.primary,
		fontWeight: TYPOGRAPHY_TOKENS.fontWeight.regular,
		fontSize: TYPOGRAPHY_TOKENS.fontSize.xs,
	},
	body1: {
		fontFamily: TYPOGRAPHY_TOKENS.fontFamily.primary,
		fontWeight: TYPOGRAPHY_TOKENS.fontWeight.regular,
		fontSize: TYPOGRAPHY_TOKENS.fontSize.sm,
	},
	body2: {
		fontFamily: TYPOGRAPHY_TOKENS.fontFamily.primary,
		fontWeight: TYPOGRAPHY_TOKENS.fontWeight.regular,
		fontSize: TYPOGRAPHY_TOKENS.fontSize.xs,
	},
	button: {
		fontFamily: TYPOGRAPHY_TOKENS.fontFamily.primary,
		fontWeight: TYPOGRAPHY_TOKENS.fontWeight.regular,
		textTransform: 'none' as const,
	},
	caption: {
		fontFamily: TYPOGRAPHY_TOKENS.fontFamily.primary,
		fontWeight: TYPOGRAPHY_TOKENS.fontWeight.regular,
		fontSize: TYPOGRAPHY_TOKENS.fontSize.xs,
	},
	overline: {
		fontFamily: TYPOGRAPHY_TOKENS.fontFamily.primary,
		fontWeight: TYPOGRAPHY_TOKENS.fontWeight.regular,
		fontSize: TYPOGRAPHY_TOKENS.fontSize.xs,
		textTransform: 'none',
		letterSpacing: '0.08em',
	},
};

// Configuración de componentes simplificada
const getComponentsOverrides = (mode: PaletteMode): Components<Theme> => {
	const isLight = mode === 'light';
	
	return {
		MuiButton: {
			styleOverrides: {
				root: ({ theme }) => ({
					borderRadius: 0, // Brutalist Zero Radius
					fontWeight: 700,
					textTransform: 'none',
					boxShadow: 'none',
					padding: theme.spacing(1.5, 3),
					transition: 'all 0.2s steps(4, end)', // Snappy Industrial Transition
					border: 'none',
				}),
				outlined: {
					borderWidth: '2px',
					borderColor: isLight ? AI4U_PALETTE.black : AI4U_PALETTE.white,
					color: isLight ? AI4U_PALETTE.black : AI4U_PALETTE.white,
					'&:hover': {
						backgroundColor: isLight ? AI4U_PALETTE.black : AI4U_PALETTE.white,
						borderColor: isLight ? AI4U_PALETTE.black : AI4U_PALETTE.white,
						color: isLight ? AI4U_PALETTE.white : AI4U_PALETTE.black,
						borderWidth: '2px',
					},
				},
				text: {
					color: isLight ? AI4U_PALETTE.black : AI4U_PALETTE.white,
					fontWeight: 700,
					textDecoration: 'none',
					'&:hover': {
						backgroundColor: isLight ? AI4U_PALETTE.tints.erieBlack8 : 'rgba(255,255,255,0.08)',
					},
				},
			},
			variants: [
				{
					props: { variant: 'contained', color: 'primary' },
					style: {
						backgroundColor: isLight ? AI4U_PALETTE.erieBlack : AI4U_PALETTE.white,
						color:           isLight ? AI4U_PALETTE.white     : AI4U_PALETTE.erieBlack,
						'&:hover': {
							backgroundColor: isLight ? '#2A2A2A' : AI4U_PALETTE.gray[200],
							transform: 'translate(-2px, -2px)',
							boxShadow: isLight ? '4px 4px 0px 0px rgba(0,0,0,0.3)' : '4px 4px 0px 0px rgba(255,255,255,0.3)',
						},
					},
				},
				{
					props: { variant: 'outlined', color: 'primary' },
					style: {
						borderWidth: '2px',
						borderColor: isLight ? AI4U_PALETTE.erieBlack : AI4U_PALETTE.white,
						color:       isLight ? AI4U_PALETTE.erieBlack : AI4U_PALETTE.white,
						'&:hover': {
							backgroundColor: isLight ? AI4U_PALETTE.erieBlack     : AI4U_PALETTE.white,
							color:           isLight ? AI4U_PALETTE.white         : AI4U_PALETTE.erieBlack,
						},
					},
				},
			],
		},
		MuiCard: {
			styleOverrides: {
				root: {
					borderRadius: 0, // Brutalist Zero Radius
					backgroundColor: isLight ? AI4U_PALETTE.white : AI4U_PALETTE.black,
					border: `1px solid ${isLight ? AI4U_PALETTE.black : AI4U_PALETTE.white}`,
					boxShadow: 'none',
					transition: 'all 0.2s steps(4, end)',
					'&:hover': {
						transform: 'translate(-4px, -4px)',
						boxShadow: isLight ? `8px 8px 0px ${AI4U_PALETTE.black}` : `8px 8px 0px ${AI4U_PALETTE.white}`,
					},
				},
			},
		},
		MuiIconButton: {
			styleOverrides: {
				root: {
					transition: 'all 200ms',
					color: isLight ? AI4U_PALETTE.erieBlack : AI4U_PALETTE.white,
					'&:hover': {
						backgroundColor: isLight
							? AI4U_PALETTE.tints.erieBlack8
							: 'rgba(255,255,255,0.08)',
					},
				},
			},
		},
		MuiDivider: {
			styleOverrides: {
				root: {
					borderColor: isLight ? AI4U_PALETTE.tints.erieBlack10 : 'rgba(255,255,255,0.08)',
					borderBottomWidth: '1px',
				},
			},
		},
		MuiPaper: {
			styleOverrides: {
				root: {
					// Usa background.paper de la paleta (white light / gray[800] dark)
					backgroundImage: 'none',
				},
			},
		},
		MuiAppBar: {
			styleOverrides: {
				root: {
					// Header sticky: mint-cream/80 + backdrop-blur — Brand Book §layout
					backgroundColor: isLight
						? AI4U_PALETTE.tints.mintCream60
						: `rgba(23,23,23,0.85)`,
					backdropFilter: 'blur(8px)',
					boxShadow: 'none',
					borderBottom: `1px solid ${isLight ? AI4U_PALETTE.tints.erieBlack10 : 'rgba(255,255,255,0.08)'}`,
					color: isLight ? AI4U_PALETTE.erieBlack : AI4U_PALETTE.white,
				},
			},
		},
		MuiChip: {
			styleOverrides: {
				root: {
					borderRadius: '9999px', // pill — Brand Book §badges
					backgroundColor: isLight
						? AI4U_PALETTE.tints.erieBlack8
						: 'rgba(255,255,255,0.08)',
					border: 'none',
					color: isLight ? AI4U_PALETTE.erieBlack : AI4U_PALETTE.white,
					fontWeight: 600,
					letterSpacing: '0.06em',
					textTransform: 'uppercase' as const,
					fontSize: '0.75rem',
				},
			},
		},
		MuiTypography: {
			styleOverrides: {
				root: {
					color: isLight ? AI4U_PALETTE.erieBlack : AI4U_PALETTE.white,
					'& code': {
						fontFamily: CODE_FONT_FAMILY,
						backgroundColor: isLight ? AI4U_PALETTE.tints.erieBlack8 : 'rgba(255,255,255,0.10)',
						padding: '2px 6px',
						borderRadius: 4,
					},
				},
			},
		},
	};
};

// Paleta MUI alineada con Brand Book 2025
const getPalette = (mode: PaletteMode) => {
	const isLight = mode === 'light';

	return {
		mode,
		primary: {
			main:          isLight ? AI4U_PALETTE.erieBlack : AI4U_PALETTE.white,
			light:         AI4U_PALETTE.gray[700],
			dark:          AI4U_PALETTE.gray[900],
			contrastText:  isLight ? AI4U_PALETTE.white : AI4U_PALETTE.erieBlack,
		},
		secondary: {
			main:         AI4U_PALETTE.cadetGray,
			light:        AI4U_PALETTE.gray[400],
			dark:         AI4U_PALETTE.gray[700],
			contrastText: isLight ? AI4U_PALETTE.erieBlack : AI4U_PALETTE.white,
		},
		background: {
			// bg-1: Mint Cream como fondo de página (claro) / Erie Black (oscuro)
			default: isLight ? AI4U_PALETTE.mintCream : AI4U_PALETTE.erieBlack,
			// bg-2: White como superficie elevada (cards, dialogs)
			paper:   isLight ? AI4U_PALETTE.white    : AI4U_PALETTE.gray[800],
		},
		text: {
			primary:   isLight ? AI4U_PALETTE.erieBlack : AI4U_PALETTE.white,
			secondary: isLight ? AI4U_PALETTE.cadetGray : AI4U_PALETTE.cadetGray,
			disabled:  AI4U_PALETTE.gray[400],
		},
		action: {
			active:            isLight ? AI4U_PALETTE.erieBlack : AI4U_PALETTE.white,
			hover:             isLight ? AI4U_PALETTE.tints.erieBlack8 : 'rgba(255,255,255,0.08)',
			selected:          isLight ? AI4U_PALETTE.tints.erieBlack10 : 'rgba(255,255,255,0.12)',
			disabled:          AI4U_PALETTE.cadetGray,
			disabledBackground: isLight ? 'rgba(23,23,23,0.06)' : 'rgba(255,255,255,0.06)',
		},
		// Inversión semántica crítica: orange = error, blue = success
		error:   { main: AI4U_PALETTE.hotOrange,    light: AI4U_PALETTE.tints.hotOrange30,   contrastText: AI4U_PALETTE.white },
		success: { main: AI4U_PALETTE.moderateBlue, light: AI4U_PALETTE.tints.moderateBlue15, contrastText: AI4U_PALETTE.white },
		warning: { main: AI4U_PALETTE.hotOrange,    contrastText: AI4U_PALETTE.white },
		info:    { main: AI4U_PALETTE.moderateBlue, contrastText: AI4U_PALETTE.white },
		divider: isLight ? AI4U_PALETTE.tints.erieBlack10 : 'rgba(255,255,255,0.08)',
	};
};

// Sombras personalizadas
const getCustomShadows = (): Shadows => {
	const customShadows: Shadows = [
		'none',
		'0px 2px 4px rgba(0,0,0,0.05)',
		'0px 4px 8px rgba(0,0,0,0.05)',
		'0px 6px 12px rgba(0,0,0,0.08)',
		'0px 8px 16px rgba(0,0,0,0.08)',
		'0px 10px 20px rgba(0,0,0,0.1)',
		'0px 12px 24px rgba(0,0,0,0.1)',
		'0px 14px 28px rgba(0,0,0,0.12)',
		'0px 16px 32px rgba(0,0,0,0.12)',
		'0px 18px 36px rgba(0,0,0,0.14)',
		'0px 20px 40px rgba(0,0,0,0.14)',
		'0px 22px 44px rgba(0,0,0,0.16)',
		'0px 24px 48px rgba(0,0,0,0.16)',
		'0px 26px 52px rgba(0,0,0,0.18)',
		'0px 28px 56px rgba(0,0,0,0.18)',
		'0px 30px 60px rgba(0,0,0,0.2)',
		'0px 32px 64px rgba(0,0,0,0.2)',
		'0px 34px 68px rgba(0,0,0,0.22)',
		'0px 36px 72px rgba(0,0,0,0.22)',
		'0px 38px 76px rgba(0,0,0,0.24)',
		'0px 40px 80px rgba(0,0,0,0.24)',
		'0px 42px 84px rgba(0,0,0,0.25)',
		'0px 44px 88px rgba(0,0,0,0.25)',
		'0px 46px 92px rgba(0,0,0,0.26)',
		'0px 48px 96px rgba(0,0,0,0.26)',
	] as Shadows;
	
	return customShadows;
};

// Crear el tema de AI4U
const createAI4UTheme = (mode: PaletteMode): Theme => {
	return createTheme({
		palette: getPalette(mode),
		typography,
		components: getComponentsOverrides(mode),
		shape: {
			borderRadius: 0, // Brutalist zero radius — aligned with components
		},
		shadows: getCustomShadows(),
	});
};

// Interface para el contexto
interface ThemeContextType {
	mode: PaletteMode;
	toggleColorMode: () => void;
}

// Crear contexto
export const ColorModeContext = createContext<ThemeContextType>({
	mode: 'light',
	toggleColorMode: () => {},
});

// Hook personalizado para usar el modo de color
export const useColorMode = () => useContext(ColorModeContext);

// Proveedor del tema con toggle
export const ThemeProvider: React.FC<{children?: ReactNode}> = ({ children }) => {
	const [mode, setMode] = useState<PaletteMode>(() => {
		if (typeof window === 'undefined') return 'light';
		const saved = localStorage.getItem('ai4u-theme-mode');
		return (saved === 'dark' || saved === 'light') ? saved : 'light';
	});

	const toggleColorMode = useCallback(() => {
		setMode(prev => {
			const next = prev === 'light' ? 'dark' : 'light';
			if (typeof window !== 'undefined') {
				localStorage.setItem('ai4u-theme-mode', next);
				document.documentElement.setAttribute('data-theme', next);
			}
			return next;
		});
	}, []);

	useEffect(() => {
		document.documentElement.setAttribute('data-theme', mode);
	}, [mode]);

	const colorMode = useMemo(() => ({ mode, toggleColorMode }), [mode, toggleColorMode]);
	const theme = useMemo(() => createAI4UTheme(mode), [mode]);

	return (
		<ColorModeContext.Provider value={colorMode}>
			<MuiThemeProvider theme={theme}>
				<CssBaseline />
				{children}
			</MuiThemeProvider>
		</ColorModeContext.Provider>
	);
};

export default ThemeProvider; 