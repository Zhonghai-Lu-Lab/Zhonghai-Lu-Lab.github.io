const PUBLIC_SITE_ORIGIN = 'https://zhonghai-lu-lab.github.io';

export async function onRequest(context) {
  const requestUrl = new URL(context.request.url);

  // Decap CMS still uses Cloudflare Pages Functions for GitHub OAuth.
  if (requestUrl.pathname === '/auth' || requestUrl.pathname === '/callback') {
    return context.next();
  }

  const destination = new URL(`${requestUrl.pathname}${requestUrl.search}`, PUBLIC_SITE_ORIGIN);
  return Response.redirect(destination.toString(), 301);
}
