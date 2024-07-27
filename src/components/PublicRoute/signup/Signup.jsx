import "./signup.css"

const Signup = () => {
    const handelSubmit = (e) => {
        e.preventDefault();

    }
    return (
        <>
            <div>

                <form onSubmit={handelSubmit}>
                    <div>
                        <div>
                            <label>Select city</label>
                            <select>
                                <option selected="">Select city</option>
                                <option>Karachi</option>
                                <option>Islamabad</option>
                                <option>Lahore</option>
                            </select>
                        </div>
                        <div>
                            <label>Select course or event</label>
                            <select>
                                <option selected="">Select course or event</option>
                                <option>Digital Marketing</option>
                                <option>AI Chat bot</option>
                                <option>Data Science</option>
                            </select>
                        </div>
                        <div>
                            <label>Select campus</label>
                            <select>
                                <option selected="">Select campus</option>
                                <option>Gulshan</option>
                                <option>Head Office</option>
                                <option>Paposh</option>
                            </select>
                        </div>
                        <div>
                            <label>Select class preference</label>
                            <select>
                                <option selected="">Select class preference</option>
                                <option>Mon to Fri</option>
                                <option>Sat and Sun</option>
                            </select>
                        </div>
                        <div>
                            <label>Full name</label>
                            <input type="text" placeholder="Full name" />
                        </div>
                        <div>
                            <label>Father name</label>
                            <input type="text" placeholder="Father name" />
                        </div>
                        <div>
                            <label>Email</label>
                            <input type="email" placeholder="Email" />
                        </div>
                        <div>
                            <label>Phone</label>
                            <input type="tel" placeholder="Phone" />
                        </div>
                        <div>
                            <label>CNIC</label>
                            <input type="text" placeholder="CNIC" />
                        </div>
                        <div>
                            <label>Father’s CNIC (optional)</label>
                            <input type="text" placeholder="Father’s CNIC (optional)" />
                        </div>
                        <div>
                            <label>Date of birth</label>
                            <input type="date" placeholder="mm/dd/yyyy" />
                        </div>
                        <div>
                            <label>Select gender</label>
                            <select>
                                <option selected="">Select gender</option>
                                <option>Male</option>
                                <option>Female</option>
                            </select>
                        </div>
                        <div>
                            <label>Address</label>
                            <input type="text" placeholder="Address" />
                        </div>
                        <div>
                            <label>Last qualification</label>
                            <select>
                                <option selected="">Last Qualification</option>
                                <option>Matric</option>
                                <option>Inter</option>
                                <option>Bachelor</option>
                                <option>Under-Graduate</option>
                                <option>Graduate</option>
                                <option>PhD</option>
                                <option>MPHIL</option>
                            </select>
                        </div>
                        <div>
                            <label>Do you have a Laptop?</label>
                            <select>
                                <option selected="">Do you have a Laptop?</option>
                                <option>Yes</option>
                                <option>No</option>
                            </select>
                        </div>
                        <div>
                            <label>Picture</label>
                            <div>
                                <input type="file" />
                                <label>Choose file</label>
                            </div>
                            <small>
                                With white or blue background <br />
                                File size must be less than 1MB <br />
                                File type: jpg, jpeg, png <br />
                                Upload recent passport size picture <br />
                                Your face should be clearly visible without any glasses
                            </small>
                        </div>
                    </div>
                    <div>
                        <p>
                            I hereby solemnly declare that the data and facts mentioned herein are
                            true and correct to the best of my knowledge. Further, I will abide by
                            all the established and future regulations and policies of SWIT.
                        </p>
                        <p>
                            I hereby accept the responsibilities of good conduct and guarantee that
                            I will not be involved in any other activity, political or ethical, but
                            learning during my stay in the program. Defiance will render my
                            admission canceled at any point in time.
                        </p>
                        <p>
                            Upon completion of the course, I will complete the required project by
                            SWIT.
                        </p>
                        <p>
                            It’s mandatory for female students to wear abaya/hijab in the class.
                        </p>
                    </div>
                    <div>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>


        </>
    )
}

export default Signup