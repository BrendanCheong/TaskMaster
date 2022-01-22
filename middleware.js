/* eslint-disable no-console */
// import { refreshToken } from "@/util/refreshToken";
// import { NextResponse } from "next/server";

// export const middleware = async (req) => {
//     const { pathname } = req.nextUrl;
//     const token = req.headers.get("cookie");
//     const value = await refreshToken(token);

//     if (process.env.NEXT_PUBLIC_APP_ENV === "development") console.log("An Api Request was sent");

//     if (pathname !== "/" && !value) {
//         return NextResponse.redirect("/");
//     }
//     return NextResponse.next();
// };