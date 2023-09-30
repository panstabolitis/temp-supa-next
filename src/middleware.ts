import { NextResponse, type NextRequest } from 'next/server'
import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs';
 
// This function can be marked `async` if using `await` inside
export async function middleware(req: NextRequest) {

  const res = NextResponse.next();
  const supabase = createMiddlewareClient({ req, res })
  const { data: session } = await supabase.auth.getSession();
  console.log(`Session: ${JSON.stringify(session, null, 2)}`);

  // if (req.nextUrl.pathname !== "/") {
  //   return NextResponse.redirect(new URL('/', req.url))
  // }

}

export const config = {
    matcher: [
      /*
       * Match all request paths except for the ones starting with:
       * - api (API routes)
       * - _next/static (static files)
       * - _next/image (image optimization files)
       * - favicon.ico (favicon file)
       */
      '/((?!api|_next/static|_next/image|favicon.ico).*)', '/'
    ],
}