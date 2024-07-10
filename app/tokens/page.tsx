import Image from "next/image";
import React from "react";
import GlobeIcon from "../components/icons/GlobeIcon";
import XIcon from "../components/icons/XIcon";
import TelegramIcon from "../components/icons/TelegramIcon";
import DuplicateIcon from "../components/icons/DuplicateIcon";
import QrCodeIcon from "../components/icons/QrCodeIcon";

function page() {
   return (
      <div className="min-h-screen">
         <h1 className="text-2xl font-bold">Tokens</h1>
         <div className="flex justify-between items-center mt-5">
            <div className="flex-1 max-w-xs">
               <div
                  role="tablist"
                  className="tabs tabs-boxed border border-teal-800 p-0"
               >
                  <a role="tab" className="tab bg-teal-600 text-white">
                     All
                  </a>
                  <a role="tab" className="tab">
                     Core
                  </a>
                  <a role="tab" className="tab">
                     Sepolia
                  </a>
               </div>
            </div>
            <div className="flex-1 max-w-2xl">
               <input
                  type="text"
                  placeholder="Search by token name, contract address or symbol"
                  className="input input-bordered w-full"
               />
            </div>
         </div>
         <div className="overflow-x-auto mt-6 border border-teal-800">
            <table className="table">
               {/* head */}
               <thead className="bg-base-200">
                  <tr className="text-base">
                     <th>Token</th>
                     <th>Total Supply</th>
                     <th>Contract Address</th>
                     <th>Blockchain</th>
                     <th>Social Links</th>
                     <th>Created At</th>
                  </tr>
               </thead>
               <tbody className="text-base bg-base-300">
                  {/* row 1 */}
                  <tr className="border-t-2 border-base-100">
                     <td className="py-4">
                        <div className="flex items-center gap-3">
                           <div
                              className="avatar tooltip tooltip-right"
                              data-tip="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat, porro."
                           >
                              <div className="mask mask-squircle h-12 w-12">
                                 <Image
                                    width={64}
                                    height={64}
                                    src="https://polkastarter.com/_next/image?url=https%3A%2F%2Fassets.polkastarter.com%2Fgreen_fa98ca7406%2Fgreen_fa98ca7406.png&w=96&q=70"
                                    alt="Logo"
                                 />
                              </div>
                           </div>
                           <div>
                              <div
                                 className="tooltip tooltip-right"
                                 data-tip="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat, porro."
                              >
                                 <span className="font-bold">Cookie</span>
                              </div>
                              <div className="text-sm opacity-50">$COOKIE</div>
                           </div>
                        </div>
                     </td>
                     <td className="py-4">10,000,000,000</td>
                     <td className="py-4">
                        <a
                           href="https://scan.coredao.org/address/0x1e3fbce6cc71a28bbb38fc6f103da5fc298b121d"
                           className="text-primary"
                        >
                           0x1e3fbce6cc71a28bbb38fc6f103da5fc298b121d
                        </a>
                        <DuplicateIcon classList="size-4 inline hover:text-teal-600 ml-3 mb-1 cursor-pointer" />
                        <QrCodeIcon classList="size-4 inline hover:text-teal-600 ml-3 mb-1 cursor-pointer" />
                     </td>
                     <td className="py-4">
                        <Image
                           src="/images/core-dao.png"
                           alt="token logo"
                           width={32}
                           height={32}
                        />
                     </td>
                     <td className="py-4">
                        <a href="#" className="hover:text-teal-600">
                           <GlobeIcon classList="size-6 inline mr-3" />
                        </a>
                        <a href="#" className="hover:text-teal-600">
                           <XIcon classList="size-5 inline mr-3" />
                        </a>
                        <a href="#" className="hover:text-teal-600">
                           <TelegramIcon classList="size-5 inline" />
                        </a>
                     </td>
                     <td className="py-4">5 minutes ago</td>
                  </tr>
                  <tr className="border-t-2 border-base-100">
                     <td className="py-4">
                        <div className="flex items-center gap-3">
                           <div
                              className="avatar tooltip tooltip-right"
                              data-tip="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat, porro."
                           >
                              <div className="mask mask-squircle h-12 w-12">
                                 <Image
                                    width={64}
                                    height={64}
                                    src="https://polkastarter.com/_next/image?url=https%3A%2F%2Fassets.polkastarter.com%2Fgreen_fa98ca7406%2Fgreen_fa98ca7406.png&w=96&q=70"
                                    alt="Logo"
                                 />
                              </div>
                           </div>
                           <div>
                              <div
                                 className="tooltip tooltip-right"
                                 data-tip="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat, porro."
                              >
                                 <span className="font-bold">The Anime</span>
                              </div>
                              <div className="text-sm opacity-50">$ANIME</div>
                           </div>
                        </div>
                     </td>
                     <td className="py-4">10,000,000,000</td>
                     <td className="py-4">
                        <a
                           href="https://scan.coredao.org/address/0x1e3fbce6cc71a28bbb38fc6f103da5fc298b121d"
                           className="text-primary"
                        >
                           0x1e3fbce6cc71a28bbb38fc6f103da5fc298b121d
                        </a>
                        <DuplicateIcon classList="size-4 inline hover:text-teal-600 ml-3 mb-1 cursor-pointer" />
                        <QrCodeIcon classList="size-4 inline hover:text-teal-600 ml-3 mb-1 cursor-pointer" />
                     </td>
                     <td className="py-4">
                        <Image
                           src="/images/eth.png"
                           alt="token logo"
                           width={32}
                           height={32}
                        />
                     </td>
                     <td className="py-4">
                        <a href="#" className="hover:text-teal-600">
                           <XIcon classList="size-5 inline mr-3" />
                        </a>
                        <a href="#" className="hover:text-teal-600">
                           <TelegramIcon classList="size-5 inline" />
                        </a>
                     </td>
                     <td className="py-4">5 minutes ago</td>
                  </tr>
               </tbody>
            </table>
         </div>
      </div>
   );
}

export default page;
