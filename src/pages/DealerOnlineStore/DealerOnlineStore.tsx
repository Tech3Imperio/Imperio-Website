// import React from "react";
// import { useParams } from "react-router-dom";
// import DealerAccept from "./DealerAccept/DealerAccept"; // Adjust the path as necessary

// const DealerAcceptRoute: React.FC = () => {
//   const { dealerEmail } = useParams<{ dealerEmail: string }>();

//   if (!dealerEmail) {
//     return <div>Error: No dealer email found in URL.</div>;
//   }

//   return <DealerAccept dealerEmail={dealerEmail} />;
// };

// export default DealerAcceptRoute;
import React from "react";

const DealerOnlineStore: React.FC = () => {
  return (
    <div className="max-w-lg mx-auto p-5 bg-white shadow-md rounded-md">
      <h1 className="text-2xl font-semibold text-center">Dealer Authorized</h1>
      <p className="mt-4 text-gray-600">
        You are now authorized to access the dealer's online store.
      </p>
    </div>
  );
};

export default DealerOnlineStore;
