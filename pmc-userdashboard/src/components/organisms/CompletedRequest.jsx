import clsx from "clsx";
import Button from "../atoms/Button";
import Image from "next/image";
import Icons from "../atoms/Icons";

const CompletedRequest = () => {
  const tableRowGrid = "grid gap-1 items-center grid-cols-6";
  const RequestHeader = [
    "Name",
    "Amount",
    "Destination",
    "Phone Number",
    "Arrival Time",
    "Status",
  ];

  const AvailableRequests = [
    {
      name: "Adeniyi Femilola",
      amount: "NGN10,000",
      destination: "92A Adeshola Street, Ikeja, Lagos",
      PhoneNumber: "09022345673",
      arrivalTime: "3:34pm - 4:04pm",
    },

    {
      name: "Adeniyi Femilola",
      amount: "NGN10,000",
      destination: "92A Adeshola Street, Ikeja, Lagos",
      PhoneNumber: "09022345673",
      arrivalTime: "3:34pm - 4:04pm",
    },
    {
      name: "Adeniyi Femilola",
      amount: "NGN10,000",
      destination: "92A Adeshola Street, Ikeja, Lagos",
      PhoneNumber: "09022345673",
      arrivalTime: "3:34pm - 4:04pm",
    },
    {
      name: "Adeniyi Femilola",
      amount: "NGN10,000",
      destination: "92A Adeshola Street, Ikeja, Lagos",
      PhoneNumber: "09022345673",
      arrivalTime: "3:34pm - 4:04pm",
    },
    {
      name: "Adeniyi Femilola",
      amount: "NGN10,000",
      destination: "92A Adeshola Street, Ikeja, Lagos",
      PhoneNumber: "09022345673",
      arrivalTime: "3:34pm - 4:04pm",
    },
    {
      name: "Adeniyi Femilola",
      amount: "NGN10,000",
      destination: "92A Adeshola Street, Ikeja, Lagos",
      PhoneNumber: "09022345673",
      arrivalTime: "3:34pm - 4:04pm",
    },
    {
      name: "Adeniyi Femilola",
      amount: "NGN10,000",
      destination: "92A Adeshola Street, Ikeja, Lagos",
      PhoneNumber: "09022345673",
      arrivalTime: "3:34pm - 4:04pm",
    },
    {
      name: "Adeniyi Femilola",
      amount: "NGN10,000",
      destination: "92A Adeshola Street, Ikeja, Lagos",
      PhoneNumber: "09022345673",
      arrivalTime: "3:34pm - 4:04pm",
    },
    {
      name: "Adeniyi Femilola",
      amount: "NGN10,000",
      destination: "92A Adeshola Street, Ikeja, Lagos",
      PhoneNumber: "09022345673",
      arrivalTime: "3:34pm - 4:04pm",
    },
    {
      name: "Adeniyi Femilola",
      amount: "NGN10,000",
      destination: "92A Adeshola Street, Ikeja, Lagos",
      PhoneNumber: "09022345673",
      arrivalTime: "3:34pm - 4:04pm",
    },
    {
      name: "Adeniyi Femilola",
      amount: "NGN10,000",
      destination: "92A Adeshola Street, Ikeja, Lagos",
      PhoneNumber: "09022345673",
      arrivalTime: "3:34pm - 4:04pm",
    },
  ];

  return (
    <div>
      {AvailableRequests.length === 0 ? (
        <div className="grid place-content-center place-items-center gap-5 h-full">
          <div>
            <Image
              src="/SVG/no_notification.svg"
              width={158}
              height={149}
              alt="No Transaction Illustration"
            />
          </div>
          <p className="text-lg text-neutral-500 text-center">
            No Request Available
          </p>
          <Button filled type="filled" className="w-52">
            Request funds
          </Button>
        </div>
      ) : (
        <div className="mt-5 overflow-hidden grid grid-rows-[auto_1fr]">
          {/* Table */}
          <div className="relative w-full h-full overflow-hidden">
            {/* Side Fades */}
            {/* <div className="absolute w-5 h-full top-0 left-0 bg-[linear-gradient(90deg,_white,_#fafafa,_transparent)]"></div>
            <div className="absolute w-5 h-full top-0 right-[5px] bg-[linear-gradient(270deg,_white,_#fafafa,_transparent)]"></div> */}

            <div className="w-full h-full overflow-auto table-scroll px-5">
              <div className="min-w-[960px]">
                {/* Table Header */}
                <div className={clsx("", tableRowGrid)}>
                  {RequestHeader.map((header, i) => (
                    <h4 key={i} className="font-semibold">
                      {header}
                    </h4>
                  ))}
                </div>

                {/* Table Content */}
                <div className="grid">
                  {AvailableRequests.map((request, i) => (
                    <div
                      key={i}
                      className={clsx(
                        "text-sm py-5",
                        tableRowGrid,
                        i !== 0 && "border-t border-[rgba(179, 179, 179, 0.5)]"
                      )}
                    >
                      {/* receive or sent */}
                      <div className="grid grid-cols-[auto_1fr] gap-2">
                        <Image
                          src={"/assets/user_request.png"}
                          width={32}
                          height={32}
                          alt="user request on PMC"
                        />
                        <p>{request.name}</p>
                      </div>

                      {/* Amount */}
                      <p>{request.amount}</p>

                      {/* Deatination */}
                      <p>{request.destination}</p>

                      {/* Date */}
                      <p>{request.PhoneNumber}</p>

                      {/* Arrival time */}
                      <p>{request.arrivalTime}</p>

                      {/* status */}
                      <div className="grid gap-3 grid-cols-[1fr_auto]">
                        <Button type="completed" filled rounded>
                          Completed
                        </Button>
                        <Image
                          src="/SVG/dot_3.svg"
                          width={24}
                          height={24}
                          alt="options"
                          className="self-center"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CompletedRequest;
