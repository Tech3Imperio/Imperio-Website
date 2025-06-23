import React, { useState } from "react";
import { contest_banner } from "../../assets/Images/contest";
function Contest() {
  type FormFields = {
    fullName: string;
    phone: number | string;
  };

  const fieldLabels: Record<keyof FormFields, string> = {
    fullName: "Full Name",
    phone: "Phone",
  };

  const [formData, setFormData] = useState<FormFields>({
    fullName: "",
    phone: "",
  });

  const [message, setMessage] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
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
    setIsSubmitting(true);
    setMessage("");

    try {
      const res = await fetch(
        "https://backendimperio-5uku.onrender.com/contest-form",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      const result = await res.json();

      if (result.status === "success") {
        setMessage("Data submitted successfully!");
        setFormData({
          fullName: "",
          phone: "",
        });
        setSubmitted(true);
      } else {
        setMessage("Failed to submit data.");
      }
    } catch (err) {
      setMessage("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
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
              <strong>Shoot a video</strong> — Record a quick video showing your
              beautiful railing and sharing your experience with Imperio.
            </li>
            <li>
              <strong>Upload &amp; Tag</strong> — Post the video on your social
              media and tag us <strong>@imperiorailings</strong>.
            </li>
            <li>
              <strong>Win a trip!</strong> — The video with the most{" "}
              <strong>views, likes, and shares</strong> takes home the grand
              prize! 🏖️
            </li>
          </ol>

          <div className="w-full mx-auto text-left ">
            {/* <p className="mb-4 italic">
              ✨ No stress. No script. Just your genuine experience with
              Imperio.
            </p> */}
            <p className="mb-6">
              Fill in your <strong>Name, Mobile Number</strong> — and let the
              journey begin!
            </p>
          </div>

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
              till <strong>31st December 2025!</strong>! Mark your calendars —
              the lucky winner will be revealed on <strong>10th January</strong>
              ! 🎉
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
                  required
                  placeholder={`Enter your ${fieldLabels[field]}`}
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
                <ol className="list-decimal list-inside space-y-4 text-sm leading-relaxed">
                  <li>
                    <span className="font-semibold text-gray-800">
                      Entry Submission
                    </span>
                    <p>
                      Participants must submit their entry via the official
                      online form by providing their Name and Mobile Number.
                    </p>
                  </li>
                  <li>
                    <span className="font-semibold text-gray-800">
                      Eligibility
                    </span>
                    <p>
                      All participants must agree to these Terms and Conditions
                      to be considered eligible for the contest.
                    </p>
                  </li>
                  <li>
                    <span className="font-semibold text-gray-800">
                      Shoot Your Video
                    </span>
                    <p>
                      Record a short video (no longer than 90 seconds) at your
                      home or site, showcasing your Imperio Glass Railing and
                      sharing your genuine experience. Be natural — no script
                      required.
                    </p>
                  </li>
                  <li>
                    <span className="font-semibold text-gray-800">
                      Content Focus
                    </span>
                    <p>
                      Your video should highlight your honest experience with
                      Imperio Glass Railing Systems and showcase the product in
                      a positive and clear manner.
                    </p>
                  </li>
                  <li>
                    <span className="font-semibold text-gray-800">
                      Post &amp; Tag
                    </span>
                    <p>
                      Upload the video to your personal Instagram, Facebook, or
                      other social media platforms. Tag{" "}
                      <strong>@imperiorailings</strong> in the post and make
                      sure the post is public.
                    </p>
                  </li>
                  <li>
                    <span className="font-semibold text-gray-800">
                      Content Standards
                    </span>
                    <p>
                      Submissions must be suitable for all audiences. No content
                      containing violence, nudity, offensive language, or
                      inappropriate behavior will be accepted. Imperio reserves
                      the right to disqualify any entry that violates these
                      standards.
                    </p>
                  </li>
                  <li>
                    {" "}
                    <span className="font-semibold text-gray-800">
                      Language Preference
                    </span>
                    <p>
                      You may speak in English or Hindi, depending on your
                      comfort.
                    </p>
                  </li>
                  <li>
                    <span className="font-semibold text-gray-800">
                      Original Content Only
                    </span>
                    <p>
                      The video must be shot by you (or someone on your behalf),
                      specifically for this contest.
                    </p>
                  </li>
                  <li>
                    <span className="font-semibold text-gray-800">
                      Brand Exclusivity
                    </span>
                    <p>
                      The video must not feature or mention any other brands,
                      products, or services apart from Imperio.
                    </p>
                  </li>
                  <li>
                    <span className="font-semibold text-gray-800">
                      Usage Rights
                    </span>
                    <p>
                      By participating, you agree that Imperio has the right to
                      use your video content for marketing and promotional
                      purposes across all digital and offline platforms, without
                      additional consent or compensation.
                    </p>
                  </li>
                  <li>
                    <span className="font-semibold text-gray-800">
                      Please note
                    </span>
                    <p>
                      The contest will only proceed if we receive a minimum of
                      50 valid entries. Imperio reserves the right to cancel,
                      modify, or postpone the contest at its sole discretion if
                      this condition is not met.
                    </p>
                  </li>
                </ol>
              </div>
            )}
            <button
              type="submit"
              disabled={!agreed || isSubmitting || submitted}
              className={`w-full py-2 rounded text-white font-medium transition ${
                submitted
                  ? "bg-green-600 cursor-default"
                  : isSubmitting
                  ? "bg-blue-400 cursor-wait"
                  : agreed
                  ? "bg-blue-600 hover:bg-blue-700"
                  : "bg-gray-400 cursor-not-allowed"
              }`}
            >
              {submitted
                ? "Submitted ✅"
                : isSubmitting
                ? "Submitting..."
                : "Submit"}
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Contest;
