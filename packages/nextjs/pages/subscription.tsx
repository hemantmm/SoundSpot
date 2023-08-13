import type { NextPage } from "next";
import { FaucetButton, RainbowKitCustomConnectButton } from "~~/components/scaffold-eth";

const ExampleUI: NextPage = () => {

  const subscriptionAmount = 599;


  return (
    <>
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h1 className="text-2xl font-semibold mb-4 text-purple-600">Subscription Plan</h1>
        <p className="text-gray-600 mb-6">
          Access premium content for just {subscriptionAmount} ETH.
        </p>
        <p className="text-center text-gray-600 mt-4">
          Unlock the magic of Soundspot!
        </p>
        <p className="text-center text-gray-600">
          It's a music NFT app where you can access the premium version.
        </p>
        <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md w-full">
          Pay ${subscriptionAmount} with Metamask
        </button>
      </div>
    </div>

    </>
  );
};

export default ExampleUI;
