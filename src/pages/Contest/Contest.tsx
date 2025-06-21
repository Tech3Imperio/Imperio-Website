import React, { useState } from "react";
import { contest_banner } from "../../assets/Images/contest";
function Contest() {
  type FormFields = {
    firstName: string;
    lastName: string;
    email: string;
    phone: number | string;
    city: string;
    state: string;
  };

  const fieldLabels: Record<keyof FormFields, string> = {
    firstName: "First Name",
    lastName: "Last Name",
    email: "Email Address",
    phone: "Phone",
    city: "City",
    state: "State",
  };

  const [formData, setFormData] = useState<FormFields>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    city: "",
    state: "",
  });

  const [message, setMessage] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreed) {
      setMessage(
        "You must agree to the Terms and Conditions before submitting."
      );
      return;
    }
    const res = await fetch("http://localhost:3001/contest-form", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const result = await res.json();

    if (result.status === "success") {
      setMessage("Data submitted successfully!");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        city: "",
        state: "",
      });
    } else {
      setMessage("Failed to submit data.");
    }
  };

  return (
    <>
      <section className="w-full ">
        <img
          src={contest_banner}
          alt="Contest Banner"
          className="w-full h-auto rounded-lg  object-cover"
        />
        <div className="max-w-2xl p-6 rounded-lg  mb-8 flex flex-col justify-center items-center mx-auto">
          <div className=" justify-center flex pt-10    "></div>

          <h1 className="text-3xl font-bold mb-4 text-center">
            Contest Details and Submission Guidelines
          </h1>

          <p className="text-xl font-semibold mb-4 text-center">
            Introducing the{" "}
            <span className="text-blue-600">
              Imperio Experience Contest! 🏆
            </span>
          </p>

          <p className="mb-4">
            We’re giving away an unforgettable trip to <strong>Dubai</strong> to
            one lucky Imperio customer!
          </p>
          <div className="w-full mx-auto text-left mt-10">
            <h2 className="text-lg font-semibold mb-2">Here’s how to enter:</h2>
          </div>

          <ol className="list-decimal list-inside space-y-2 mb-6">
            <li>
              <strong>Book a shoot with us</strong> — Just fill in your details,
              and our team will get in touch to schedule a quick video shoot at
              your place. (Don’t worry, we’ll handle everything!)
            </li>
            <li>
              <strong>Share your video</strong> on social media and tag us.
            </li>
            <li>
              The video with the most <strong>views, likes, and shares</strong>{" "}
              wins the trip! 🏖️
            </li>
          </ol>
          <div className="w-full mx-auto text-left ">
            <p className="mb-4 italic">
              ✨ No stress. No script. Just your genuine experience with
              Imperio.
            </p>
          </div>

          <p className="mb-6">
            Fill in your{" "}
            <strong>Name, Mobile Number, Email ID, City, and State</strong> —
            and let the journey begin!
          </p>
          <div className="mx-auto  text-left">
            <h2 className="text-lg font-semibold mb-2 ">🎁 Prize</h2>
            <p className="mb-6">
              The grand prize? A <strong>fully sponsored trip to Dubai</strong>{" "}
              for the winner — and yes, you can take a +1 to share the
              adventure! ✈️
            </p>

            <h2 className="text-lg font-semibold mb-2">🗓️ Contest Timeline</h2>
            <p className="mb-6">
              The contest kicks off on <strong>22nd June 2025</strong> and runs
              till <strong>22nd August 2025</strong>! Mark your calendars — the
              lucky winner will be revealed on <strong>1st September</strong>!
              🎉
            </p>
          </div>
          <form
            onSubmit={handleSubmit}
            className="w-full space-y-6 p-6  rounded"
          >
            {(Object.keys(formData) as (keyof FormFields)[]).map((field) => (
              <div key={field}>
                <label className="block mb-1 text-sm font-medium text-gray-700">
                  {fieldLabels[field]}
                </label>
                <input
                  type={field === "phone" ? "tel" : "text"}
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-4 py-2 bg-gray-100 focus:outline-none"
                />
              </div>
            ))}

            {message && (
              <p
                className={`text-center mt-2 font-medium ${
                  message.toLowerCase().includes("success")
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {message}
              </p>
            )}
            <div className="flex items-center justify-center mt-4 mb-6 gap-2">
              <input
                type="checkbox"
                id="terms"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="w-4 h-4"
              />
              <label htmlFor="terms" className="text-sm text-gray-700">
                I agree to the Terms and Conditions
              </label>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="text-blue-600 underline focus:outline-none w-full text-center"
            >
              {isOpen ? "Hide Terms & Conditions" : "View Terms & Conditions"}
            </button>

            {isOpen && (
              <div className="mt-4 p-4  rounded text-sm space-y-2">
                <h2 className="text-xl font-bold mb-2">
                  Imperio Experience Contest – Official Rules & Guidelines
                </h2>

                <p className="mb-4">
                  To ensure a smooth and fair contest, please review the
                  following:
                </p>
                <ol className="list-decimal list-inside space-y-2">
                  <li>
                    Entries must be submitted through the official online form
                    by providing your Name, Mobile Number, Email ID, City, and
                    State.
                  </li>
                  <li>
                    All participants must agree to the following Terms and
                    Conditions to be eligible.
                  </li>
                  <li>
                    Our team will schedule and shoot a short video (no longer
                    than 90 seconds) at your location — we handle everything, no
                    script needed.
                  </li>
                  <li>
                    The content will highlight your genuine experience with
                    Imperio Glass Railing Systems.
                  </li>
                  <li>
                    Once the video is ready, we will share it with you to post
                    on your personal social media (Instagram, Facebook, etc.).
                  </li>
                  <li>
                    Your post must tag Imperio’s official account and comply
                    with the platform’s Terms of Service.
                  </li>
                  <li>
                    The content must be suitable for all age groups — no
                    violence, nudity, inappropriate language, or behavior.
                    Imperio reserves the right to disqualify any entry that
                    doesn’t meet these standards.
                  </li>
                  <li>
                    Any dialogue or voice-over will be in English or Hindi, as
                    per your preference.
                  </li>
                  <li>
                    All content must be original and shot by Imperio’s team — no
                    modifications or unauthorized usage is allowed.
                  </li>
                  <li>
                    Videos must not mention or feature any other brands or
                    products besides Imperio.
                  </li>
                  <li>
                    By participating, you agree that Imperio has the right to
                    use the final video content for marketing and promotional
                    purposes across all platforms.
                  </li>
                </ol>
              </div>
            )}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Contest;
