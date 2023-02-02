export const useMedia = () => {
  return {
    mobile: '480px',
    tablet: '768px',
    desktop: '1200px',
    high: '1400px',
  };
};

export const useMediaQuery = () => {
  return {
    minMobile: '(min-width: 480px)',
    maxMobile: '(max-width: 480px)',
    minTablet: '(min-width: 768px)',
    maxTablet: '(max-width: 768px)',
    minDesktop: '(min-width: 1200px)',
    maxDesktop: '(max-width: 1200px)',
    minHigh: '(min-width: 1400px)',
    maxHigh: '(max-width: 1400px)',
  };
};
