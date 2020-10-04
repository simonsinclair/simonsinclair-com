module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ['./src/**/*.njk'],
  theme: {
    colors: {
      neutral: 'var(--color-neutral)',
      primary: 'var(--color-primary)',
    },
    fontFamily: {
      sans: ['IBM Plex Sans', 'Helvetica Neue', 'Arial', 'sans-serif'],
      mono: [
        'IBM Plex Mono',
        'Menlo',
        'DejaVu Sans Mono',
        'Bitstream Vera Sans Mono',
        'Courier',
        'monospace',
      ],
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
    },
    extend: {},
  },
  variants: {},
  plugins: [],
};
