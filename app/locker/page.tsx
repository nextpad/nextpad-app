import { Prisma, PrismaClient, TokenLocked } from "@prisma/client";
import React, { cache } from "react";

function page() {
   return (
      <div className="min-h-screen">
         <h1 className="text-3xl font-bold mb-8">Locker</h1>
      </div>
   );
}

export default page;
