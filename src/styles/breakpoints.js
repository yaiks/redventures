const breakpoints = [420, 768, 1200];

export default breakpoints.map(bp => `@media (min-width: ${bp}px)`);
