import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  return NextResponse.json({ name: "File uploaded" });
}

// next js er App Router er moddhe API/Backend create korte chai, tahole file name ta shob somoy "route.ts" dite hobe.
