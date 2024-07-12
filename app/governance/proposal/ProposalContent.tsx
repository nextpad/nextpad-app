import CheckBadgeIcon from "@/app/components/icons/CheckBadgeIcon";
import React from "react";

function ProposalContent() {
   return (
      <>
         <div className="flex flex-col">
            <div className="flex">
               <div className="badge bg-teal-600 py-4 px-6 text-white">
                  Active
               </div>
               <div className="badge badge-outline badge-primary py-4 px-6 text-white ml-2">
                  <CheckBadgeIcon classList="size-4 mr-1" /> Core
               </div>
            </div>
            <h1 className="text-3xl font-bold block mt-4">
               The Main Title of Proposal
            </h1>
            <p className="block my-4">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
               necessitatibus aspernatur ipsam ad quod error reprehenderit ab
               maiores, impedit quibusdam veniam similique debitis incidunt
               dolor recusandae eius atque laudantium odio. Voluptates mollitia
               molestiae provident in fugiat distinctio adipisci culpa! Nesciunt
               culpa porro mollitia sunt, architecto iure! Minus dolores at
               commodi fugit sed, voluptas id dolore! Ducimus explicabo vero
               officia culpa nam eum saepe assumenda veritatis pariatur cumque
               porro quisquam sequi provident neque a harum
            </p>
            <p className="block my-4">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
               necessitatibus aspernatur ipsam ad quod error reprehenderit ab
               maiores, impedit quibusdam veniam similique debitis incidunt
               dolor recusandae eius atque laudantium odio. Voluptates mollitia
               molestiae provident in fugiat distinctio adipisci culpa! Nesciunt
               culpa porro mollitia sunt, architecto iure! Minus dolores at
               commodi fugit sed, voluptas id dolore! Ducimus explicabo vero
               officia culpa nam eum saepe assumenda veritatis pariatur cumque
               porro quisquam sequi provident neque a harum consectetur
            </p>
         </div>
      </>
   );
}

export default ProposalContent;
