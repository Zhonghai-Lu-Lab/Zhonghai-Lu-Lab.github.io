const PUBLIC_SITE_ORIGIN = 'https://zhonghai-lu-lab.github.io';

// Cloudflare gives the exact /auth and /callback Functions precedence over
// this optional catch-all route. All other legacy paths retain their path and
// query string when permanently redirected to the GitHub Pages site.
export function onRequest({ request }) {
  const requestUrl = new URL(request.url);
  const destination = new URL(`${requestUrl.pathname}${requestUrl.search}`, PUBLIC_SITE_ORIGIN);
  return Response.redirect(destination.toString(), 301);
}
