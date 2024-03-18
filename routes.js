/**
 * Array of public accessible routes
 */

export const publicRoutes = [
       "/"
]

/**
 * Array of protected routes
 */
export const protectedRoutes = [
      "/auth/login",
      "/auth/register"
]

/**
 * The prefix for api authentication routes
 */
export const apiAuthPrefix = "/api/auth"

export const DEFAULT_LOGIN_REDIRECT = '/dashboard'