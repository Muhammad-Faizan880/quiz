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
    birthDate: "",
    zipCode: "",
  });

  const [errors, setErrors] = useState({
    heightFeet: "",
    heightInches: "",
    weight: "",
    email: "",
    birthDate: "",
    zipCode: "",
  });

  const [activeTab, setActiveTab] = useState("home");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [accordionOpen, setAccordionOpen] = useState(null);

  const [medicationAnswer, setMedicationAnswer] = useState(null);

  const handleSelection = (answer) => {
    setMedicationAnswer(answer);
    setCurrentStep(7);
  };  
 




  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  // Total number of steps
  const totalSteps = 9;

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // ✅ Auto move from step 2 to step 3 after selecting a weight goal
    if (currentStep === 2 && name === "weightGoal") {
      setTimeout(() => {
        nextStep();
      }, 300);
    }
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

  //product start//

  const products = [
    {
      id: 1,
      name: "COMPOUNDED SEMAGLUTIDE",
      currentPrice: "$39",
      originalPrice: "$56",
      description: "Semaglutide administered via injection.",
      code: "GLP100",
      image: "/assets/images/Background.png",
     
    },
    {
      id: 2,
      name: "COMPOUNDED TIRZEPATIDE",
      currentPrice: "$179",
      originalPrice: "$279",
      description: "Tirzepatide administered via injection.",
      code: "GLP200",
      image: "/assets/images/Background.png",
    
    },
  ];

  const handleProductSelect = (productId) => {
    const product = products.find((product) => product.id === productId);
    setSelectedProduct(product);
    setAccordionOpen(null);
  };

  //product end
  const toggleAccordion = (section) => {
    setAccordionOpen((prev) => (prev === section ? null : section));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ Validate fullName on Step 1
    if (currentStep === 1 && formData.fullName.trim() === "") {
      setErrors((prev) => ({
        ...prev,
        fullName: "Please enter your full name.",
      }));
      return false; // Prevent the next step if validation fails
    } else {
      setErrors((prev) => ({
        ...prev,
        fullName: "",
      }));
      // Proceed to next step
    }

    // Validate height and weight on Step 3
    if (currentStep === 3) {
      const newErrors = {};
      let isValid = true;

      // Validate height (feet and inches)
      if (!formData.heightFeet || formData.heightFeet <= 0) {
        newErrors.heightFeet = true; // Just track as true if there's an error
        isValid = false;
      }
      if (
        !formData.heightInches ||
        formData.heightInches < 0 ||
        formData.heightInches > 12
      ) {
        newErrors.heightInches = true; // Just track as true if there's an error
        isValid = false;
      }

      // Validate weight
      if (!formData.weight || formData.weight <= 0) {
        newErrors.weight = true; // Just track as true if there's an error
        isValid = false;
      }

      setErrors(newErrors);

      // If validation fails, don't proceed
      if (!isValid) {
        return;
      }
    }

    // ...step 5 validation......
    if (currentStep === 5) {
      const newErrors = {};
      let isValid = true;

      // Validate height (feet and inches)
      if (!formData.email || formData.email <= 0) {
        newErrors.email = true; // Just track as true if there's an error
        isValid = false;
      }
      if (
        !formData.birthDate ||
        formData.birthDate < 0 ||
        formData.birthDate > 12
      ) {
        newErrors.birthDate = true; // Just track as true if there's an error
        isValid = false;
      }

      // Validate weight
      if (!formData.zipCode || formData.zipCode <= 0) {
        newErrors.zipCode = true; // Just track as true if there's an error
        isValid = false;
      }

      setErrors(newErrors);

      // If validation fails, don't proceed
      if (!isValid) {
        return;
      }
    }

    // ...step 5 validation. end.....

    // ✅ For other steps, just move forward or submit
    if (currentStep === totalSteps) {
      console.log("Form submitted:", formData);
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
                className={`form-control input-style ${
                  errors.fullName ? "border-danger" : ""
                }`}
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
                    className={`form-control pe-5 class-border ${
                      errors.heightFeet ? "border-danger" : ""
                    }`}
                    id="height1"
                    name="heightFeet"
                    placeholder="5"
                    value={formData.heightFeet || ""}
                    onChange={handleChange}
                  />
                  <span
                    className="position-absolute top-50 translate-middle-y end-0 pe-3"
                    style={{ pointerEvents: "none" }}
                  >
                    Ft.
                  </span>
                </div>
                {errors.heightFeet && (
                  <small className="text-danger">{errors.heightFeet}</small>
                )}
              </div>

              {/* Input 2 */}
              <div className="flex-grow-1">
                <label htmlFor="height2" className="form-label fontyy mb-0">
                  Inches
                </label>
                <div className="position-relative">
                  <input
                    type="number"
                    className={`form-control pe-5 class-border ${
                      errors.heightInches ? "border-danger" : ""
                    }`}
                    id="height2"
                    name="heightInches"
                    placeholder="11"
                    value={formData.heightInches || ""}
                    onChange={handleChange}
                  />
                  <span
                    className="position-absolute top-50 translate-middle-y end-0 pe-3 text-muted"
                    style={{ pointerEvents: "none" }}
                  >
                    In.
                  </span>
                </div>
                {errors.heightInches && (
                  <small className="text-danger">{errors.heightInches}</small>
                )}
              </div>
            </div>

            <div className="flex-grow-1">
              <label htmlFor="weight" className="form-label fontyy mb-0">
                Current weight (lbs.)
              </label>
              <div className="position-relative">
                <input
                  type="number"
                  className={`form-control pe-5 class-border1 ${
                    errors.weight ? "border-danger" : ""
                  }`}
                  id="weight"
                  name="weight"
                  placeholder="250"
                  value={formData.weight || ""}
                  onChange={handleChange}
                />
                <span
                  className="position-absolute top-50 translate-middle-y end-0 pe-3 text-muted"
                  style={{ pointerEvents: "none" }}
                >
                  Lbs.
                </span>
              </div>
              {errors.weight && (
                <small className="text-danger">{errors.weight}</small>
              )}
            </div>
          </>
        );
      case 4:
        return (
          <>
            <h4 className="class-name-style">
              Alex, we can help you lose up to 45 pounds by 06/21/2025!
            </h4>

            <WeightTrackerChart />

            <div className="container my-4">
              <div class="bg-lady">
                <div class="flex-container">
                  <div class="image-section">
                    <img
                      src="/assets/images/lady.png"
                      alt="lady"
                      class="img-fluid img-width-hight-set"
                    />
                  </div>

                  <div class="text-section">
                    <h3 class="CLR-WHITEW mb-0">Thanks to EaseMD,</h3>
                    <h4 class="CLR-WHITEW mb-2">I lost weight effortlessly!</h4>
                    <p class="CLR-WHITEW8 mb-0">Anna B, 43</p>
                    <p class="CLR-WHITEW8 mb-0">Los Angeles, CA</p>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      case 5:
        return (
          <>
            <h4 className="class-name-style">
              Find out if you're eligible in your state
            </h4>
            <p className="paragraph-style-div">
              This info helps your doctor determine if you're eligible for
              treatment in your state.
            </p>

            <p className="class-sex">Please select your sex</p>
            <div className="mb-4">
              <div className="container mt-5">
                <ul className="nav nav-tabs" id="myTabs" role="tablist">
                  <li className="nav-item" role="presentation">
                    <div
                      className={`nav-link ${
                        activeTab === "home" ? "active-tab" : ""
                      }`}
                      id="home-tab"
                      onClick={() => handleTabChange("home")}
                      role="tab"
                      aria-controls="home"
                      aria-selected={activeTab === "home"}
                    >
                      Male
                    </div>
                  </li>
                  <li className="nav-item" role="presentation">
                    <div
                      className={`nav-link ${
                        activeTab === "profile" ? "active-tab" : ""
                      }`}
                      id="profile-tab"
                      onClick={() => handleTabChange("profile")}
                      role="tab"
                      aria-controls="profile"
                      aria-selected={activeTab === "profile"}
                    >
                      Female
                    </div>
                  </li>
                </ul>

                <div className="tab-content" id="myTabsContent">
                  <div
                    className={`tab-pane fade ${
                      activeTab === "home" ? "show active" : ""
                    }`}
                    id="home"
                    role="tabpanel"
                    aria-labelledby="home-tab"
                  >
                    <div className="flex-grow-1 class-padding-22">
                      <label
                        htmlFor="height2"
                        className="form-label fontyy mb-0"
                      >
                        Email
                      </label>
                      <div className="position-relative">
                        <input
                          type="text"
                          className={`form-control pe-5 input-style ${
                            errors.email ? "border-danger" : ""
                          }`}
                          id="email"
                          name="email"
                          placeholder="e.g. John Smith@gmail.com"
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="flex-grow-1 class-padding-22">
                      <label
                        htmlFor="height2"
                        className="form-label fontyy mb-0"
                      >
                        Birth Date
                      </label>
                      <div className="position-relative">
                        <input
                          type="date"
                          className={`form-control input-style ${
                            errors.birthDate ? "border-danger" : ""
                          }`}
                          id="birthDate"
                          name="birthDate"
                          placeholder="MM / DD / YYYY"
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="flex-grow-1 ">
                      <label
                        htmlFor="height2"
                        className="form-label fontyy mb-0"
                      >
                        Zip Code
                      </label>
                      <div className="position-relative">
                        <input
                          type="text"
                          className={`form-control pe-5 input-style ${
                            errors.zipCode ? "border-danger" : ""
                          }`}
                          id="zipCode"
                          name="zipCode"
                          placeholder="####"
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    className={`tab-pane fade ${
                      activeTab === "profile" ? "show active" : ""
                    }`}
                    id="profile"
                    role="tabpanel"
                    aria-labelledby="profile-tab"
                  >
                    <div className="flex-grow-1 class-padding-22">
                      <label
                        htmlFor="height2"
                        className="form-label fontyy mb-0"
                      >
                        Email
                      </label>
                      <div className="position-relative">
                        <input
                          type="text"
                          className={`form-control pe-5 input-style ${
                            errors.email ? "border-danger" : ""
                          }`}
                          id="email"
                          name="email"
                          placeholder="e.g. John Smith@gmail.com"
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="flex-grow-1 class-padding-22">
                      <label
                        htmlFor="height2"
                        className="form-label fontyy mb-0"
                      >
                        Birth Date
                      </label>
                      <div className="position-relative">
                        <input
                          type="date"
                          className={`form-control input-style ${
                            errors.birthDate ? "border-danger" : ""
                          }`}
                          id="birthDate"
                          name="birthDate"
                          placeholder="MM / DD / YYYY"
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="flex-grow-1 ">
                      <label
                        htmlFor="height2"
                        className="form-label fontyy mb-0"
                      >
                        Zip Code
                      </label>
                      <div className="position-relative">
                        <input
                          type="text"
                          className={`form-control pe-5 input-style ${
                            errors.zipCode ? "border-danger" : ""
                          }`}
                          id="zipCode"
                          name="zipCode"
                          placeholder="####"
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        );

      case 6:
        return (
          <>
            <h4 className="class-name-style">
            Are you taking any prescription medication?
            </h4>
            <div className="card mb-3" style={{ borderColor: "#8E8E8E", borderRadius: "6px" }}>
        <div className="card-body p-3">
          <div className="form-check">
            <input
              className="form-check-input custom-radio-button"
              type="radio"
              name="medication"
              id="yes"
              onChange={() => handleSelection("yes")}
            />
            <label className="form-check-label text0-clr" htmlFor="yes">
              Yes
            </label>
          </div>
        </div>
      </div>

      <div className="card mb-3" style={{ borderColor: "#8E8E8E", borderRadius: "6px" }}>
        <div className="card-body p-3">
          <div className="form-check">
            <input
              className="form-check-input custom-radio-button"
              type="radio"
              name="medication"
              id="no"
              onChange={() => handleSelection("no")}
            />
            <label className="form-check-label text0-clr" htmlFor="no">
              No
            </label>
          </div>
        </div>
      </div>
           
          </>
        );

        case 7:
        return (
          <>
           {medicationAnswer === "yes" && (
  <h4 className="class-name-style">
    Your state is eligible! ✅<br />
    Choose Your GLP-1 Medication
  </h4>
)}
            <p className="all-start">
              All our medications is shipped from FDA regulated 503a and 503b
              pharmacies.
            </p>
            <div className="bg-green-dynamic-div">
              <div className="d-flex justify-content-between align-items-center">
                <p className="text-center-divvv">
                  Claim your discounted GLP-1 now while supplies last!
                </p>
                <p className="text-center-divv">00:00</p>
              </div>
            </div>
           
  <div className="product-selection-container">
    <div
      className="mb-3 p-3 rounded-4"
     
    >
      <div>
        <div className="text-center mb-3">
          <img
            src= "/assets/images/big-bg.png"
            alt="Selected Product"
            className="img-fluid CLASS-WIDTH-FULL"
          />
        </div>

        <h5 className="class-compound">COMPOUNDED TIRZEPATIDE
        </h5>

        <div className="class-flex-expand mb-2">
          <span className="class-current">$179</span>
          <span className="class-original text-decoration-line-through">
          $279
          </span>
        </div>

        <div className="class-stock gap-2 mb-2">
          <span className="bg-sett">● In Stock</span>
          <span className="code-class">
            Code Activated:{" "}
            <span className="class-color"> GLP200</span>
          </span>
        </div>

        <p className="text-inter-class">
          Discover the power of Semaglutide, the active ingredient in Ozempic® &
          WeGovy® for a fraction of the cost. All customers also receive free
          expedited shipping.
        </p>

        {/* Accordion Section */}
        <div className="accordion mt-3">
          {[{
              title: "Details",
              content: "This product is compounded for effective weight loss.",
            },
            {
              title: "Active Ingredients",
              content: "Semaglutide (1mg/mL), Preserved Saline, B12.",
            },
            {
              title: "Why Injectable Semaglutide?",
              content: "Injection delivers the compound directly into the bloodstream for faster absorption and better results.",
            },
          ].map(({ title, content }, index) => (
            <div key={index} className="border-top py-2">
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  toggleAccordion(title);
                }}
                className="d-flex justify-content-between align-items-center"
                style={{ cursor: "pointer" }}
              >
                <span className="detail-class">{title}</span>
                <span className="plus-minus">
                  {accordionOpen === title ? "−" : "+"}
                </span>
              </div>
              {accordionOpen === title && (
                <div className="mt-2 class-content">{content}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>


          </>
        );

case 8: 
return (
  <>
  <h3>helloo</h3>
  {currentStep === 8 && (
  <div className="product-selection-container">
  {products.map((product) => (
    <div
      key={product.id}
      onClick={() => handleProductSelect(product.id)} 
      className={`card mb-3 p-3 rounded-4 shadow-sm ${
        selectedProduct === product.id ? 'selected-product' : ''
      }`} 
    >
      <div className="row g-3">
        <div className="col-3 text-center">
          <img
            src={product.image}
            alt={product.name}
            className="class-imgg mt-2"
          />
        </div>
        <div className="col-9">
          <h5 className="class-title">{product.name}</h5>
          <div className="flex-div">
            <p className="class-title-1">{product.currentPrice}</p>
            <p className="class-title-2 ms-3">{product.originalPrice}</p>
          </div>
          <p className="mb-1 class-title-3">{product.description}</p>
          <p className="mb-1 class-title-4">
            Code Activated: <span className="clr">{product.code}</span>
          </p>
        </div>
      </div>
    </div>
  ))}
</div>

)}


  
  </>
);

case 9:
  return (
    <>
    
    
   

    {currentStep === 9 && selectedProduct && (
  <div className="product-selection-container">
    <div
      className="mb-3 p-3 rounded-4"
      style={{ cursor: "pointer", transition: "all 0.3s ease" }}
    >
      <div>
        <div className="text-center mb-3">
          <img
            src={selectedProduct.expandedImage || "/assets/images/big-bg.png"}
            alt="Selected Product"
            className="img-fluid CLASS-WIDTH-FULL"
          />
        </div>

        <h5 className="class-compound">{selectedProduct.name}</h5>

        <div className="class-flex-expand mb-2">
          <span className="class-current">{selectedProduct.currentPrice}</span>
          <span className="class-original text-decoration-line-through">
            {selectedProduct.originalPrice}
          </span>
        </div>

        <div className="class-stock gap-2 mb-2">
          <span className="bg-sett">● In Stock</span>
          <span className="code-class">
            Code Activated:{" "}
            <span className="class-color">{selectedProduct.code}</span>
          </span>
        </div>

        <p className="text-inter-class">
          Discover the power of Semaglutide, the active ingredient in Ozempic® &
          WeGovy® for a fraction of the cost. All customers also receive free
          expedited shipping.
        </p>

       
      </div>
    </div>
  </div>
)}

    
    </>
  )

      default:
        return null;
    }
  };

  return (
    <>
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
                      src="/assets/images/arrow.png"
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
                  {currentStep !== 2 &&
                    (currentStep === 8 ? (
                      <div className="d-flex justify-content-center mt-4">
                        <button
                          type="submit"
                          className="btn btn-setting-class-custom rounded-pill py-3"
                          disabled={selectedProduct === null} // Disable button if no product is selected
                        >
                          Continue
                        </button>
                      </div>
                    ) : (
                      <div className="d-flex justify-content-center mt-4">
                        <button
                          type="submit"
                          className="btn btn-setting-class-custom rounded-pill py-3"
                        >
                          {/* Conditional button text based on step */}
                          {currentStep === 3 || currentStep === 5
                            ? "Next"
                            : currentStep === totalSteps
                            ? "Submit"
                            : "Continue"}
                        </button>
                      </div>
                    ))}

                  {/* Paragraph to show at Step 5 */}
                  {currentStep === 5 && (
                    <div className="mt-3">
                      <div className="container container-paddingt">
                        <div className="d-flex   gap-3 justify-content-center align-items-center">
                          <div
                            className="d-flex flex-column align-items-center"
                            style={{ width: "33.33%" }}
                          >
                            <img
                              src="/assets/images/bg3.png"
                              alt="Image"
                              className="img-fluid mb-2"
                              style={{
                                maxWidth: "80%",
                                height: "auto",
                                margin: "auto",
                              }}
                            />
                            <p className="texty-paragr">100% Data Security</p>
                          </div>

                          <div
                            className="d-flex flex-column align-items-center"
                            style={{ width: "33.33%" }}
                          >
                            <img
                              src="/assets/images/bg2.png"
                              alt="Image"
                              className="img-fluid mb-2"
                              style={{
                                maxWidth: "80%",
                                height: "auto",
                                margin: "auto",
                              }}
                            />
                            <p className="texty-paragr">24/7 Expert Support</p>
                          </div>

                          <div
                            className="d-flex flex-column align-items-center"
                            style={{ width: "33.33%" }}
                          >
                            <img
                              src="/assets/images/bg1.png"
                              alt="Image"
                              className="img-fluid mb-2"
                              style={{
                                maxWidth: "80%",
                                height: "auto",
                                margin: "auto",
                              }}
                            />
                            <p className="texty-paragrq1">
                              60-Day Money Back Guarantee
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {currentStep === 7 && (
        <div className="mt-4 class-width-testimonials">
          <div className="row">
            <div className="col-12 col-sm-6 col-lg-6 col-xxl-4 custom-1700 mb-4">
              <div className=" testimonials-cards-style ">
                <img
                  src="/assets/images/star.png"
                  alt=""
                  className="img-padd-b"
                />
                <p className="glad-class">Glad I Found Ease MD</p>
                <p className="glad-class-p">
                  I am so glad I found Ease MD. At a time when I was struggling
                  to get in a zone to lose weight, this was the easy answer for
                  me. It was an easy program and I felt supported...
                </p>

                <div className="clas-flex-img-client gap-3">
                  <img
                    src="/assets/images/client.png"
                    alt="Client"
                    className="rounded-circle"
                    style={{ width: "48px", height: "48px" }}
                  />

                  <div className="lindsay-margin ">
                    <p className="class-lindsay">Lindsay</p>
                    <div className="d-flex align-items-center gap-1 class-margin">
                      <img
                        src="/assets/images/SVG.png"
                        alt="Verified"
                        className="padding-set"
                        style={{ width: "17px", height: "17px" }}
                      />
                      <p className="class-verify">Verified Buyer</p>
                    </div>
                  </div>
                </div>
                <p className="date-class">
                  Date of experience:{" "}
                  <span className="date">February 07, 2025</span>
                </p>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-lg-6 col-xxl-4 custom-1700 mb-4">
              <div className=" testimonials-cards-style-2 ">
                <div className="position-relative d-inline-block">
                  <img
                    src="/assets/images/Jennifer.png"
                    alt=""
                    className="width-setjennni"
                  />
                  {/* Green box (Right Bottom) */}
                  <div className="position-absolute CLASS-BG-TAG-1 text-white px-2 py-1 rounded-pill">
                    After
                  </div>

                  {/* Red box (Left Bottom) */}
                  <div className="position-absolute CLASS-BG-TAG text-white px-2 py-1 rounded-pill">
                    Before
                  </div>
                </div>
                <div className="padding-card-2">
                  <p className="jeni-style">Jennifer</p>
                  <div className=" gap-1 class-margin-2">
                    <img
                      src="/assets/images/SVG.png"
                      alt="Verified"
                      className="padding-set-2"
                      style={{ width: "17px", height: "17px" }}
                    />
                    <p className="class-verify">Verified Buyer</p>
                  </div>
                  <div className="d-flex justify-content-between align-items-center w-set">
                    <p className="date-class">
                      Date of experience:{" "}
                      <span className="date">February 07, 2025</span>
                    </p>

                    <div className="bg-gray-0">
                      <p className="loast-class">
                        lost <span className="loast-class-2"> 92lbs</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-lg-6 col-xxl-4 custom-1700 mb-4">
              <div className=" testimonials-cards-style ">
                <img
                  src="/assets/images/star.png"
                  alt=""
                  className="img-padd-b"
                />
                <p className="glad-class">Glad I Found Ease MD</p>
                <p className="glad-class-p">
                  I am so glad I found Ease MD. At a time when I was struggling
                  to get in a zone to lose weight, this was the easy answer for
                  me. It was an easy program and I felt supported...
                </p>

                <div className="clas-flex-img-client gap-3">
                  <img
                    src="/assets/images/client.png"
                    alt="Client"
                    className="rounded-circle"
                    style={{ width: "48px", height: "48px" }}
                  />

                  <div className="lindsay-margin ">
                    <p className="class-lindsay">Lindsay</p>
                    <div className="d-flex align-items-center gap-1 class-margin">
                      <img
                        src="/assets/images/SVG.png"
                        alt="Verified"
                        className="padding-set"
                        style={{ width: "17px", height: "17px" }}
                      />
                      <p className="class-verify">Verified Buyer</p>
                    </div>
                  </div>
                </div>
                <p className="date-class">
                  Date of experience:{" "}
                  <span className="date">February 07, 2025</span>
                </p>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-lg-6 col-xxl-4 custom-1700 mb-4">
              <div className=" testimonials-cards-style-2 ">
                <div className="position-relative d-inline-block">
                  <img
                    src="/assets/images/Jennifer.png"
                    alt=""
                    className="width-setjennni"
                  />
                  {/* Green box (Right Bottom) */}
                  <div className="position-absolute CLASS-BG-TAG-1 text-white px-2 py-1 rounded-pill">
                    After
                  </div>

                  {/* Red box (Left Bottom) */}
                  <div className="position-absolute CLASS-BG-TAG text-white px-2 py-1 rounded-pill">
                    Before
                  </div>
                </div>
                <div className="padding-card-2">
                  <p className="jeni-style">Jennifer</p>
                  <div className=" gap-1 class-margin-2">
                    <img
                      src="/assets/images/SVG.png"
                      alt="Verified"
                      className="padding-set-2"
                      style={{ width: "17px", height: "17px" }}
                    />
                    <p className="class-verify">Verified Buyer</p>
                  </div>
                  <div className="d-flex justify-content-between align-items-center w-set">
                    <p className="date-class">
                      Date of experience:{" "}
                      <span className="date">February 07, 2025</span>
                    </p>

                    <div className="bg-gray-0">
                      <p className="loast-class">
                        lost <span className="loast-class-2"> 92lbs</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-lg-6 col-xxl-4 custom-1700 mb-4">
              <div className=" testimonials-cards-style-2 ">
                <div className="position-relative d-inline-block">
                  <img
                    src="/assets/images/Jennifer.png"
                    alt=""
                    className="width-setjennni"
                  />
                  {/* Green box (Right Bottom) */}
                  <div className="position-absolute CLASS-BG-TAG-1 text-white px-2 py-1 rounded-pill">
                    After
                  </div>

                  {/* Red box (Left Bottom) */}
                  <div className="position-absolute CLASS-BG-TAG text-white px-2 py-1 rounded-pill">
                    Before
                  </div>
                </div>
                <div className="padding-card-2">
                  <p className="jeni-style">Jennifer</p>
                  <div className=" gap-1 class-margin-2">
                    <img
                      src="/assets/images/SVG.png"
                      alt="Verified"
                      className="padding-set-2"
                      style={{ width: "17px", height: "17px" }}
                    />
                    <p className="class-verify">Verified Buyer</p>
                  </div>
                  <div className="d-flex justify-content-between align-items-center w-set">
                    <p className="date-class">
                      Date of experience:{" "}
                      <span className="date">February 07, 2025</span>
                    </p>

                    <div className="bg-gray-0">
                      <p className="loast-class">
                        lost <span className="loast-class-2"> 92lbs</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-lg-6 col-xxl-4 custom-1700 mb-4">
              <div className=" testimonials-cards-style ">
                <img
                  src="/assets/images/star.png"
                  alt=""
                  className="img-padd-b"
                />
                <p className="glad-class">Glad I Found Ease MD</p>
                <p className="glad-class-p">
                  I am so glad I found Ease MD. At a time when I was struggling
                  to get in a zone to lose weight, this was the easy answer for
                  me. It was an easy program and I felt supported...
                </p>

                <div className="clas-flex-img-client gap-3">
                  <img
                    src="/assets/images/client.png"
                    alt="Client"
                    className="rounded-circle"
                    style={{ width: "48px", height: "48px" }}
                  />

                  <div className="lindsay-margin ">
                    <p className="class-lindsay">Lindsay</p>
                    <div className="d-flex align-items-center gap-1 class-margin">
                      <img
                        src="/assets/images/SVG.png"
                        alt="Verified"
                        className="padding-set"
                        style={{ width: "17px", height: "17px" }}
                      />
                      <p className="class-verify">Verified Buyer</p>
                    </div>
                  </div>
                </div>
                <p className="date-class">
                  Date of experience:{" "}
                  <span className="date">February 07, 2025</span>
                </p>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-lg-6 col-xxl-4 custom-1700 mb-4">
              <div className=" testimonials-cards-style-2 ">
                <div className="position-relative d-inline-block">
                  <img
                    src="/assets/images/Jennifer.png"
                    alt=""
                    className="width-setjennni"
                  />
                  {/* Green box (Right Bottom) */}
                  <div className="position-absolute CLASS-BG-TAG-1 text-white px-2 py-1 rounded-pill">
                    After
                  </div>

                  {/* Red box (Left Bottom) */}
                  <div className="position-absolute CLASS-BG-TAG text-white px-2 py-1 rounded-pill">
                    Before
                  </div>
                </div>
                <div className="padding-card-2">
                  <p className="jeni-style">Jennifer</p>
                  <div className=" gap-1 class-margin-2">
                    <img
                      src="/assets/images/SVG.png"
                      alt="Verified"
                      className="padding-set-2"
                      style={{ width: "17px", height: "17px" }}
                    />
                    <p className="class-verify">Verified Buyer</p>
                  </div>
                  <div className="d-flex justify-content-between align-items-center w-set">
                    <p className="date-class">
                      Date of experience:{" "}
                      <span className="date">February 07, 2025</span>
                    </p>

                    <div className="bg-gray-0">
                      <p className="loast-class">
                        lost <span className="loast-class-2"> 92lbs</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-lg-6 col-xxl-4 custom-1700 mb-4">
              <div className=" testimonials-cards-style ">
                <img
                  src="/assets/images/star.png"
                  alt=""
                  className="img-padd-b"
                />
                <p className="glad-class">Glad I Found Ease MD</p>
                <p className="glad-class-p">
                  I am so glad I found Ease MD. At a time when I was struggling
                  to get in a zone to lose weight, this was the easy answer for
                  me. It was an easy program and I felt supported...
                </p>

                <div className="clas-flex-img-client gap-3">
                  <img
                    src="/assets/images/client.png"
                    alt="Client"
                    className="rounded-circle"
                    style={{ width: "48px", height: "48px" }}
                  />

                  <div className="lindsay-margin ">
                    <p className="class-lindsay">Lindsay</p>
                    <div className="d-flex align-items-center gap-1 class-margin">
                      <img
                        src="/assets/images/SVG.png"
                        alt="Verified"
                        className="padding-set"
                        style={{ width: "17px", height: "17px" }}
                      />
                      <p className="class-verify">Verified Buyer</p>
                    </div>
                  </div>
                </div>
                <p className="date-class">
                  Date of experience:{" "}
                  <span className="date">February 07, 2025</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default StepperForm;
