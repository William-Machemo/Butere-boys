import React from "react";

const Admissions = () => {
  return (
 <div className="container py-4">
<h1 className="text-success mb-4">Admissions - High School</h1>

<p> Admissions are open to qualified students who meet the required academic standards and demonstrate discipline, commitment, and  excellence in co-curricular activities. </p>

{/* ---------------- 8-4-4 Students ---------------- */}
 <div className="mb-5">
 <h3 className="text-primary mb-3">8-4-4 Curriculum Students</h3>
 <div className="row">

{/* Admission Requirements */}
  <div className="col-md-6 mb-3">
 <div className="card p-3 shadow-sm">
 <h5>Admission Requirements</h5>
 <ul>
 <li>KCPE results</li>
 <li>Completed application form</li>
 <li>Birth certificate</li>
 <li>Passport-size photographs (2 copies)</li>
 <li>Medical certificate (optional)</li>
  <li>Interview (if required)</li>
 </ul>
 </div>
 </div>

 {/* How to Apply */}
  <div className="col-md-6 mb-3">
  <div className="card p-3 shadow-sm">
 <h5>How to Apply</h5>
  <p> 1. Visit the school in person to collect the application form or download it from the school portal.<br/>
   2. Fill out the form completely with accurate information.<br/>
 3. Attach all supporting documents (KCPE results, birth certificate, photos).<br/>
 4. Submit the form in person or via email before the deadline.<br/>
 5. Successful applicants will be invited for an interview (if applicable).<br/>
 </p>
 </div>
 </div>

 </div>

 {/* Application Form */}
  <div className="card p-3 shadow-sm mb-3">
  <h5>High School Application Form - 8-4-4</h5>
   <form>
 <div className="mb-3">
 <label className="form-label">Full Name</label>
 <input type="text" className="form-control" placeholder="Enter your full name" required />
</div>

<div className="mb-3">
 <label className="form-label">Date of Birth</label>
 <input type="date" className="form-control" required />
 </div>
 <div className="mb-3">
 <label className="form-label">KCPE Index Number</label>
 <input type="text" className="form-control" placeholder="Enter KCPE Index Number" required />
</div>

 <div className="mb-3">
<label className="form-label">Parent/Guardian Name</label>
<input type="text" className="form-control" placeholder="Enter parent's or guardian's name" required />
</div>

<div className="mb-3">
<label className="form-label">Parent/Guardian Phone</label>
<input type="tel" className="form-control" placeholder="Enter phone number" required />
 </div>

<div className="mb-3">
 <label className="form-label">Email Address</label>
 <input type="email" className="form-control" placeholder="Enter email" />
</div>

<div className="mb-3">
<label className="form-label">Upload Documents</label>
<input type="file" className="form-control" multiple />
<small className="text-muted">Attach KCPE results, birth certificate, and passport photos.</small>
</div>

<div className="mb-3">
<label className="form-label">Preferred Boarding Option</label>
<select className="form-select">
<option>Day Scholar</option>
<option>Boarding</option>
</select>
</div>

<div className="mb-3">
<label className="form-label">Additional Notes</label>
<textarea className="form-control" placeholder="Any additional information" rows="3"></textarea>
 </div>

 <button type="submit" className="btn btn-success">Submit Application</button>
</form>
</div>

{/* Fees */}
<div className="card p-3 shadow-sm mb-3">
<h5>Application Fees</h5>
<p> The non-refundable application fee is <strong>KES 1,000</strong>. 
 Payment can be made via Mpesa (Till Number: <strong>323253</strong>) 
 or at the school office. </p>
 </div>
 </div>

{/* ---------------- CBC Students ---------------- */}
<div className="mb-5">
<h3 className="text-success mb-3">CBC (Competency-Based Curriculum) Students</h3>
<div className="row">

{/* Admission Requirements */}
<div className="col-md-6 mb-3">
<div className="card p-3 shadow-sm">
<h5>Admission Requirements</h5>
 <ul>
  <li>KCPE or CBC results</li>
  <li>Completed CBC application form</li>
  <li>Birth certificate</li>
 <li>Passport-size photographs (2 copies)</li>
 <li>Medical certificate (optional)</li>
 <li>Interview (if required)</li>
 </ul>
 </div>
</div>

{/* How to Apply */}
<div className="col-md-6 mb-3">
<div className="card p-3 shadow-sm">
<h5>How to Apply</h5>
<p>
 1. Download the CBC application form.<br/>
 2. Complete it with all necessary details.<br/>
3. Attach supporting documents.<br/>
 4. Submit online or in person.<br/>
 5. CBC applicants may be interviewed before final admission.
 </p>
 </div>
 </div>

 </div>

        {/* Application Form */}
        <div className="card p-3 shadow-sm mb-3">
          <h5>Application Form - CBC</h5>
          <form>
            <div className="mb-3">
              <label className="form-label">Full Name</label>
              <input type="text" className="form-control" placeholder="Enter full name" required />
            </div>

            <div className="mb-3">
              <label className="form-label">Date of Birth</label>
              <input type="date" className="form-control" required />
            </div>

            <div className="mb-3">
              <label className="form-label">KCPE/CBC Index Number</label>
              <input type="text" className="form-control" placeholder="Enter Index Number" required />
            </div>

            <div className="mb-3">
              <label className="form-label">Parent/Guardian Name</label>
              <input type="text" className="form-control" placeholder="Enter parent's or guardian's name" required />
            </div>

            <div className="mb-3">
              <label className="form-label">Parent/Guardian Phone</label>
              <input type="tel" className="form-control" placeholder="Enter phone number" required />
            </div>

            <div className="mb-3">
              <label className="form-label">Email Address</label>
              <input type="email" className="form-control" placeholder="Enter email" />
            </div>

            <div className="mb-3">
              <label className="form-label">Upload Documents</label>
              <input type="file" className="form-control" multiple />
              <small className="text-muted">Attach KCPE/CBC results, birth certificate, and passport photos.</small>
            </div>

            <div className="mb-3">
              <label className="form-label">Preferred Boarding Option</label>
              <select className="form-select">
                <option>Day Scholar</option>
                <option>Boarding</option>
              </select>
            </div>

            <div className="mb-3">
              <label className="form-label">Additional Notes</label>
              <textarea className="form-control" placeholder="Any additional information" rows="3"></textarea>
            </div>

            <button type="submit" className="btn btn-success">Submit CBC Application</button>
          </form>
        </div>

        {/* Fees */}
        <div className="card p-3 shadow-sm mb-3">
          <h5>Application Fees</h5>
          <p>
            The non-refundable application fee is <strong>KES 1,000</strong>. 
            Payment can be made via Mpesa (Till Number: <strong>323253</strong>) 
            or at the school office.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Admissions;