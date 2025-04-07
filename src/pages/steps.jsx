import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import WeightTrackerChart from "../components/chart";

function StepperForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    age: "",
    weightGoal: "",
    occupation: "",
    interests: "",
    location: "",
    experience: "",
    goals: "",
  });

  // Total number of steps
  const totalSteps = 8;

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Navigate to next step
  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  // Navigate to previous step
  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentStep === totalSteps) {
      console.log("Form submitted:", formData);
      // Handle form submission logic here
      alert("Form submitted successfully!");
    } else {
      nextStep();
    }
  };

  // Render form content based on current step
  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <>
            <h4 className=" class-name-style">What is your full name?</h4>
            <div className="mb-4">
              <input
                type="text"
                className="form-control input-style"
                id="fullName"
                name="fullName"
                placeholder="e.g. John Smith"
                value={formData.fullName}
                onChange={handleChange}
              />
            </div>
          </>
        );
      case 2:
        return (
          <>
            <h4 className="class-name-style">What is your weight loss goal?</h4>
            <div className="mb-3">
              <div
                className="card mb-3"
                style={{ borderColor: "#8E8E8E", borderRadius: "6px" }}
              >
                <div className="card-body p-3">
                  <div className="form-check">
                    <input
                      className="form-check-input custom-radio-button"
                      type="radio"
                      name="weightGoal"
                      id="goal1"
                      value="lose1-20"
                      checked={formData.weightGoal === "lose1-20"}
                      onChange={handleChange}
                    />
                    <label
                      className="form-check-label text0-clr"
                      htmlFor="goal1"
                    >
                      Lose 1-20 lbs for good
                    </label>
                  </div>
                </div>
              </div>

              <div
                className="card mb-3"
                style={{ borderColor: "#8E8E8E", borderRadius: "6px" }}
              >
                <div className="card-body p-3">
                  <div className="form-check">
                    <input
                      className="form-check-input custom-radio-button"
                      type="radio"
                      name="weightGoal"
                      id="goal2"
                      value="lose21-50"
                      checked={formData.weightGoal === "lose21-50"}
                      onChange={handleChange}
                    />
                    <label
                      className="form-check-label text0-clr"
                      htmlFor="goal2"
                    >
                      Lose 21-50 lbs for good
                    </label>
                  </div>
                </div>
              </div>

              <div
                className="card mb-3"
                style={{ borderColor: "#8E8E8E", borderRadius: "6px" }}
              >
                <div className="card-body p-3">
                  <div className="form-check">
                    <input
                      className="form-check-input custom-radio-button"
                      type="radio"
                      name="weightGoal"
                      id="goal3"
                      value="loseOver50"
                      checked={formData.weightGoal === "loseOver50"}
                      onChange={handleChange}
                    />
                    <label
                      className="form-check-label text0-clr"
                      htmlFor="goal3"
                    >
                      Lose over 50 lbs for good
                    </label>
                  </div>
                </div>
              </div>

              <div
                className="card mb-3"
                style={{ borderColor: "#8E8E8E", borderRadius: "6px" }}
              >
                <div className="card-body p-3">
                  <div className="form-check">
                    <input
                      className="form-check-input custom-radio-button"
                      type="radio"
                      name="weightGoal"
                      id="goal4"
                      value="maintain"
                      checked={formData.weightGoal === "maintain"}
                      onChange={handleChange}
                    />
                    <label
                      className="form-check-label text0-clr"
                      htmlFor="goal4"
                    >
                      Maintain my weight and get fit
                    </label>
                  </div>
                </div>
              </div>
              <div
                className="card mb-3"
                style={{ borderColor: "#8E8E8E", borderRadius: "6px" }}
              >
                <div className="card-body p-3">
                  <div className="form-check">
                    <input
                      className="form-check-input custom-radio-button"
                      type="radio"
                      name="weightGoal"
                      id="goal4"
                      value="sure"
                      checked={formData.weightGoal === "sure"}
                      onChange={handleChange}
                    />
                    <label
                      className="form-check-label text0-clr"
                      htmlFor="goal4"
                    >
                      I'm not really sure
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      case 3:
        return (
          <>
            <h4 className="class-name-style">
              What is your current height & weight?
            </h4>

            <p className="class-bmi">Your BMI</p>
            <p className="class-bmi-1">34.86</p>
            <div className="bg-gradient"></div>

            <div className="d-flex gap-3">
              {/* Input 1 */}
              <div className="flex-grow-1">
                <label htmlFor="height1" className="form-label fontyy mb-0">
                  Feet
                </label>
                <div className="position-relative">
                  <input
                    type="number"
                    className="form-control pe-5 class-border"
                    id="height1"
                    placeholder="5"
                  />
                  <span
                    className="position-absolute top-50 translate-middle-y end-0 pe-3 "
                    style={{ pointerEvents: "none" }}
                  >
                    Ft.
                  </span>
                </div>
              </div>

              {/* Input 2 */}
              <div className="flex-grow-1">
                <label htmlFor="height2" className="form-label fontyy mb-0">
                  Inches
                </label>
                <div className="position-relative">
                  <input
                    type="number"
                    className="form-control pe-5 class-border"
                    id="height2"
                    placeholder="11"
                  />
                  <span
                    className="position-absolute top-50 translate-middle-y end-0 pe-3 text-muted"
                    style={{ pointerEvents: "none" }}
                  >
                    In.
                  </span>
                </div>
              </div>
            </div>

            <div className="flex-grow-1">
              <label htmlFor="height2" className="form-label fontyy mb-0">
                Current weight (lbs.)
              </label>
              <div className="position-relative">
                <input
                  type="number"
                  className="form-control pe-5 class-border1"
                  id="height2"
                  placeholder="250"
                />
                <span
                  className="position-absolute top-50 translate-middle-y end-0 pe-3 text-muted"
                  style={{ pointerEvents: "none" }}
                >
                  Lbs.
                </span>
              </div>
            </div>
          </>
        );
      case 4:
        return (
          <>
            <h4
              className="class-name-style"
              
            >
             Alex, we can help you lose up to 45
             pounds by 06/21/2025!
            </h4>
            <div className="mb-4">
              <input
                type="text"
                className="form-control"
                id="occupation"
                name="occupation"
                placeholder="e.g. Software Developer"
                value={formData.occupation}
                onChange={handleChange}
                style={{
                  borderColor: "#E5E5E5",
                  borderRadius: "4px",
                  padding: "12px",
                }}
              />
            </div>


            <WeightTrackerChart/>


            <div className="bg-lady" style={{ height: '160px' }}>
  <div className="container ">
    <div className="row align-items-center">
      {/* Image Column - 4 cols */}
      <div className="col-4 d-flex justify-content-center">
        <img
          src="/src/assets/images/lady1.png"
          alt="lady"
          className="img-fluid"
          
        />
      </div>

      {/* Text Column - 8 cols */}
      <div className="col-8">
        <h3 className="CLR-WHITEW mb-0">Thanks to EaseMD,</h3>
        <h4 className="CLR-WHITEW mb-3">I lost weight effortlessly!</h4>
        <p className="CLR-WHITEW8 mb-0">Anna B, 43</p>
        <p className="CLR-WHITEW8 mb-0">Los Angeles, CA</p>
      </div>
    </div>
  </div>
</div>










          </>
        );
      case 5:
        return (
          <>
            <h4
              className="class-name-style"
              
            >
              What are your interests?
            </h4>
            <div className="mb-4">
              <input
                type="text"
                className="form-control"
                id="interests"
                name="interests"
                placeholder="e.g. Hiking, Reading"
                value={formData.interests}
                onChange={handleChange}
                style={{
                  borderColor: "#E5E5E5",
                  borderRadius: "4px",
                  padding: "12px",
                }}
              />
            </div>
          </>
        );
      case 6:
        return (
          <>
            <h4
              className="class-name-style"
              
            >
              Where are you located?
            </h4>
            <div className="mb-4">
              <input
                type="text"
                className="form-control"
                id="location"
                name="location"
                placeholder="e.g. New York, USA"
                value={formData.location}
                onChange={handleChange}
                style={{
                  borderColor: "#E5E5E5",
                  borderRadius: "4px",
                  padding: "12px",
                }}
              />
            </div>
          </>
        );
      case 7:
        return (
          <>
            <h4
              className="class-name-style"
             
            >
             Alex, we can help you lose up to 45
             pounds by 06/21/2025!
            </h4>
            <div className="mb-4">
              <input
                type="text"
                className="form-control"
                id="experience"
                name="experience"
                placeholder="e.g. 5 years"
                value={formData.experience}
                onChange={handleChange}
                style={{
                  borderColor: "#E5E5E5",
                  borderRadius: "4px",
                  padding: "12px",
                }}
              />
            </div>
          </>
        );
      case 8:
        return (
          <>
            <h4
              className="text-success mb-4 fw-normal"
              style={{ color: "#2D7567" }}
            >
              What are your goals?
            </h4>
            <div className="mb-4">
              <input
                type="text"
                className="form-control"
                id="goals"
                name="goals"
                placeholder="e.g. Learn new skills"
                value={formData.goals}
                onChange={handleChange}
                style={{
                  borderColor: "#E5E5E5",
                  borderRadius: "4px",
                  padding: "12px",
                }}
              />
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="container ptb-class">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card border-0">
            <div className="card-body padding-class">
              {/* Header with back button and title in flex layout */}
              <div className="d-flex justify-content-between align-items-center mb-3 ">
                <button
                  type="button"
                  className="btn btn-link btn-bg text-decoration-none"
                  onClick={prevStep}
                  disabled={currentStep === 1}
                >
                  <img
                    src="/src/assets/images/arrow.png"
                    alt=""
                    className="margin-set"
                  />{" "}
                  Back
                </button>
                <h6 className="text-center text-set-class m-0">GOALS</h6>
                <span className="text-setting">
                  {currentStep}/{totalSteps}
                </span>
              </div>

              {/* Progress bar - styled like the reference image */}
              <div className="d-flex align-items-center mb-4">
                <div
                  className="progress flex-grow-1"
                  style={{ height: "16px" }}
                >
                  <div
                    className="progress-bar custom-progress-bar"
                    role="progressbar"
                    style={{
                      width: `${(currentStep / totalSteps) * 100}%`,
                    }}
                    aria-valuenow={(currentStep / totalSteps) * 100}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>

              <form onSubmit={handleSubmit}>
                {/* Form content - styled like reference image */}
                <div className="form-step text-center">
                  {renderStepContent()}
                </div>

                {/* Continue button - styled like reference image */}
                <div className="d-flex justify-content-center mt-4">
                  <button
                    type="submit"
                    className="btn btn-setting-class-custom rounded-pill py-3"
                  >
                    {currentStep === totalSteps ? "Submit" : "Continue"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StepperForm;
