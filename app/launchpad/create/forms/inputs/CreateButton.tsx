import React, { useContext, useState } from "react";
import Context from "../../Context";
import {
   useWeb3ModalAccount,
   useWeb3ModalProvider,
} from "@web3modal/ethers/react";
import { BrowserProvider, Contract, ethers } from "ethers";
import { boardFactoryAddress } from "@/app/components/constants";
import moment from "moment";
import ResultModal from "./ResultModal";
import { imageUploader, ipfsUpload, saveToDatabase } from "./Uploader";

const ERCAbi = [
   "function approve(address spender, uint amount)",
   "function allowance(address owner, address spender) view returns (uint)",
];

function CreateButton() {
   const values = useContext(Context);
   const [loading, setLoading] = useState(false);
   const [textBtn, setTextBtn] = useState("Create Now");
   const [deployed, setDeployed] = useState("");

   const { address, isConnected } = useWeb3ModalAccount();
   const { walletProvider } = useWeb3ModalProvider();

   async function getBoardAddress(hash: string): Promise<string | any> {
      if (!isConnected || !walletProvider) return;

      const provider = new BrowserProvider(walletProvider);
      const tx = await provider.getTransactionReceipt(hash);

      if (!tx?.logs) return;

      return tx.logs[0].address;
   }

   async function deployContract(cid: string) {
      if (!isConnected || !walletProvider) return;

      try {
         const ethersProvider = new BrowserProvider(walletProvider);
         const signer = await ethersProvider.getSigner();

         const CJSON = require("../FactoryABI.json");
         const contract = new Contract(boardFactoryAddress, CJSON.abi, signer);
         const baseFee = await contract.baseFee();

         // Check allowance first
         const token = new Contract(
            values.launchpadData.address,
            ERCAbi,
            signer
         );
         const allowance = await token.allowance(address, boardFactoryAddress);

         if (allowance == BigInt(0)) {
            setTextBtn(() => "Approving..");
            const tx = await token.approve(
               boardFactoryAddress,
               ethers.MaxUint256
            );
            await tx.wait();
         }

         setTextBtn(() => "Making Pool..");
         const data = values.launchpadData;
         const tx = await contract.createLaunchpad(
            data.address,
            ethers.parseEther(data.minBuy),
            ethers.parseEther(data.maxBuy),
            ethers.parseEther(data.priceNative),
            moment(data.startDate).unix().toString(),
            moment(data.endDate).unix().toString(),
            ethers.parseEther(
               (
                  parseInt(data.allocation) / parseInt(data.priceNative)
               ).toString()
            ),
            data.rewardTol,
            cid,
            ethers.parseUnits(data.allocation, values.tokenInfo[3]),
            {
               value: baseFee.toString(),
            }
         );
         const receipt = await tx.wait();
         return receipt;
      } catch (err: any) {
         if (!err.message) return;
         console.log(err.message);
      }
   }

   async function createLaunchpad() {
      try {
         setLoading(true);
         setTextBtn("Processing Data..");
         const banners = values.banners.filter((val) => val != "");
         let [...photos] = await Promise.all([
            ...banners.map((val) =>
               imageUploader({
                  data: val.split(";base64,")[1],
                  name: values.metadata.projectName + " banner",
               })
            ),
            imageUploader({
               data: values.logo.split(";base64,")[1],
               name: values.metadata.projectName,
            }),
         ]);
         let bannersUrl = photos.map((val) => val.url);
         const logo = bannersUrl[banners.length];
         bannersUrl.splice(banners.length, 1);

         const { cid } = await ipfsUpload({
            metadata: values.metadata,
            banners: bannersUrl,
            logo,
         });

         const deployed = await deployContract(cid);
         const poolAddress = await getBoardAddress(deployed.hash);

         const ldata = values.launchpadData;
         const mdata = values.metadata;
         const pCore = 1.1;
         await saveToDatabase({
            projectName: mdata.projectName,
            description: mdata.shortDesc,
            logo,
            banner: bannersUrl[0],
            allocation: ldata.allocation,
            poolAddress,
            goals: Math.floor(
               (parseInt(ldata.allocation) / parseInt(ldata.priceNative)) *
                  pCore
            ).toString(),
            price: ((1 / parseInt(ldata.priceNative)) * pCore).toString(),
         });

         setDeployed(poolAddress);
         openModal();
         setTextBtn(() => "Create Now");
         setLoading(() => false);
      } catch (err) {
         setLoading(() => false);
         setTextBtn(() => "Create Now");
      }
   }

   function openModal() {
      const myModal: any = document.getElementById("result_modal");

      if (myModal === null) {
         return;
      }

      myModal.showModal();
   }

   return (
      <>
         <button
            className="btn bg-teal-600 text-white px-10 disabled:bg-teal-800 disabled:text-slate-300 hover:bg-teal-700"
            onClick={createLaunchpad}
            disabled={loading}
         >
            {loading && (
               <span className="loading loading-spinner loading-sm"></span>
            )}{" "}
            {textBtn}
         </button>
         <ResultModal address={deployed} />
      </>
   );
}

export default CreateButton;
