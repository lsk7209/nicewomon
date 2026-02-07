import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    // Check if the request is for the admin section
    if (request.nextUrl.pathname.startsWith('/admin')) {
        const authHeader = request.headers.get('authorization')

        if (authHeader) {
            const authValue = authHeader.split(' ')[1]
            const [user, pwd] = atob(authValue).split(':')

            const validUser = process.env.ADMIN_USER || 'admin'
            const validPass = process.env.ADMIN_PASSWORD || 'password'

            if (user === validUser && pwd === validPass) {
                return NextResponse.next()
            }
        }

        return new NextResponse('Authentication required', {
            status: 401,
            headers: {
                'WWW-Authenticate': 'Basic realm="Secure Admin Area"',
            },
        })
    }

    return NextResponse.next()
}

export const config = {
    matcher: '/admin/:path*',
}
