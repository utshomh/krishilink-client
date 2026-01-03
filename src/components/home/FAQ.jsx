const FAQ = () => {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl md:text-4xl font-bold text-primary">
        Frequently Asked Questions
      </h1>
      <div className="space-y-2">
        <div className="collapse collapse-arrow bg-base-100 border border-base-300">
          <input type="radio" name="accordion" defaultChecked />
          <div className="collapse-title font-semibold">
            How do I create an account?
          </div>
          <div className="collapse-content text-sm">
            Click the "Sign Up" button in the top right corner and follow the
            registration process.
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-100 border border-base-300">
          <input type="radio" name="accordion" />
          <div className="collapse-title font-semibold">
            I forgot my password. What should I do?
          </div>
          <div className="collapse-content text-sm">
            Click on "Forgot Password" on the login page and follow the
            instructions sent to your email.
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-100 border border-base-300">
          <input type="radio" name="accordion" />
          <div className="collapse-title font-semibold">
            How do I update my profile information?
          </div>
          <div className="collapse-content text-sm">
            Go to "Profile Page" (/profile) and select "Update Profile" to make
            changes.
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
