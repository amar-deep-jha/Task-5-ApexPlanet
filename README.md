# Task 5 – Website Performance Optimization

## Objective
Optimize the portfolio website to ensure it runs efficiently, loads quickly, and provides a smooth user experience.

## Actions Taken
1. **Minimized CSS and JavaScript Files**
   - Combined and minified CSS files.
   - Minified JavaScript files to reduce size.

2. **Applied Lazy Loading for Images**
   - Added `loading="lazy"` attribute to non-critical images to delay loading until they are visible.

3. **Reduced Number of HTTP Requests**
   - Merged Google Fonts into a single request.
   - Consolidated CSS and JS files where possible.
   - Removed unused libraries.

4. **Optimized Load Times**
   - Compressed hero and other large images using TinyPNG.
   - Optimized background images for the web.
   - Deferred non-critical JavaScript.

5. **Tested and Verified Performance**
   - Used Google PageSpeed Insights, GTmetrix, and Pingdom for testing.
   - Compared before/after metrics for page load time, total page size, and performance score.

## Tools Used
- [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)
- [Pingdom Tools](https://tools.pingdom.com/)
- [TinyPNG](https://tinypng.com/)
- [CSS Minifier](https://cssminifier.com/)
- [JS Minifier](https://javascript-minifier.com/)

## Results
| Metric               | Before | After  |
|----------------------|--------|--------|
| Page Load Time (sec) | 4.5    | 1.8    |
| Page Size (MB)       | 2.3    | 0.8    |
| Requests             | 35     | 18     |
| Performance Score    | 62     | 94     |

## Conclusion
The optimization process significantly improved website loading speed, reduced resource usage, and enhanced overall performance, providing a smoother user experience.

---
**Author:** Amar Deep Jha
