if ('fonts' in document) {
  const ibmPlex = {
    sans: {
      bold: new FontFace(
        'IBM Plex Sans',
        "local('IBM Plex Sans Bold'), local('IBMPlexSans-Bold'), url('/assets/fonts/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-Bold-Latin1.woff2') format('woff2')",
        {
          style: 'normal',
          weight: '700',
          unicodeRange:
            'U+0000, U+000D, U+0020-007E, U+00A0-00A3, U+00A4-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2013-2014, U+2018-201A, U+201C-201E, U+2020-2022, U+2026, U+2030, U+2039-203A, U+2044, U+2074, U+20AC, U+2122, U+2212, U+FB01-FB02',
        },
      ),
    },
    mono: {
      bold: new FontFace(
        'IBM Plex Mono',
        "local('IBM Plex Mono Bold'), local('IBMPlexMono-Bold'), url('/assets/fonts/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-Bold-Latin1.woff2') format('woff2')",
        {
          style: 'normal',
          weight: '700',
          unicodeRange:
            'U+0000, U+000D, U+0020-007E, U+00A0-00A3, U+00A4-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2013-2014, U+2018-201A, U+201C-201E, U+2020-2022, U+2026, U+2030, U+2039-203A, U+2044, U+2074, U+20AC, U+2122, U+2212, U+FB01-FB02',
        },
      ),
    },
  };

  Promise.all([ibmPlex.sans.bold.load(), ibmPlex.mono.bold.load()]).then(
    fonts => {
      fonts.forEach(font => document.fonts.add(font));
      document.documentElement.classList.add('second-phase-fonts-loaded');
    },
  );
}
