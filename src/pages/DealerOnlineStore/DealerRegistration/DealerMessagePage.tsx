import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { HiOutlineHome } from "react-icons/hi";

export default function DealerMessagePage() {
  const { username } = useParams<{ username: string }>();

  return (
    <section className="h-screen flex items-center justify-center px-6">
      <div className="bg-white shadow-2xl drop-shadow-xl rounded-none overflow-hidden w-full max-w-[45rem] p-8">
        <h2 className="text-2xl font-bold text-center text-[#03237b]">
          Welcome to Imperio!
        </h2>
        <p className="text-center mt-4 text-lg">
          Dear{" "}
          <b className="text-[#03237b] uppercase font-medium">{username}</b>,
          your dealer registration request has been successfully submitted.
        </p>
        <p className="text-center mt-2 text-lg">
          We are reviewing your request, and you will receive a confirmation
          within 24 hours.
        </p>
        <p className="text-center mt-4 text-md text-[#03237b]">
          Please check your email for further details.
        </p>
        <div className="flex justify-center p-2">
          <Link
            to="/"
            className="flex items-center text-lg font-medium text-[--black] bg-[--secound] px-6 py-3 rounded-none hover:bg-[--black] hover:text-[--secound] transition-500"
          >
            <HiOutlineHome className="mr-2 " /> Go Home
          </Link>
        </div>
      </div>
    </section>
  );
}
