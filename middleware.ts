export { default } from "next-auth/middleware";

export const config = {
  // ROUTE FOR THE MIDDLE WARES
  matcher: ["/trips", "/reservations", "/properties", "/favorites"],
};
