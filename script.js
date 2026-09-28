// ==========================================
// CAMPUSBUZZ - MAIN JAVASCRIPT
// ==========================================


// ==========================================
// SIGN UP
// ==========================================

const signupForm = document.getElementById("signupForm");

if (signupForm) {

    signupForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = document.getElementById("studentName").value;
        const roll = document.getElementById("rollNumber").value;
        const email = document.getElementById("signupEmail").value;
        const phone = document.getElementById("signupPhone").value;
        const password = document.getElementById("signupPassword").value;
        const confirmPassword = document.getElementById("confirmPassword").value;


        // Check password
        if (password !== confirmPassword) {

            alert("❌ Passwords do not match!");

            return;
        }


        // Student data
        const studentData = {
            name: name,
            roll: roll,
            email: email,
            phone: phone,
            password: password
        };


        // Save student data
        localStorage.setItem(
            "studentData",
            JSON.stringify(studentData)
        );


        alert("✅ Account created successfully!");


        // Open login page
        window.location.href = "login.html";

    });

}



// ==========================================
// LOGIN
// ==========================================

const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const email = document.getElementById("loginEmail").value;
        const password = document.getElementById("loginPassword").value;


        // Get saved student
        const savedStudent =
            JSON.parse(localStorage.getItem("studentData"));


        // Check account
        if (!savedStudent) {

            alert("❌ No account found. Please Sign Up first.");

            return;
        }


        // Check login details
        if (
            email === savedStudent.email &&
            password === savedStudent.password
        ) {

            alert("✅ Login successful!");


            // Save login status
            localStorage.setItem("isLoggedIn", "true");


            // Open dashboard
            window.location.href = "dashboard.html";

        } else {

            alert("❌ Incorrect email or password.");

        }

    });

}



// ==========================================
// EVENT REGISTRATION
// ==========================================

const registrationForm =
    document.getElementById("registrationForm");


if (registrationForm) {

    registrationForm.addEventListener("submit", function (event) {

        event.preventDefault();


        const studentName =
            document.getElementById("studentName").value;

        const rollNumber =
            document.getElementById("rollNumber").value;

        const email =
            document.getElementById("email").value;

        const eventName =
            document.getElementById("event").value;

        const phone =
            document.getElementById("phone").value;


        // Registration data
        const registrationData = {

            studentName: studentName,

            rollNumber: rollNumber,

            email: email,

            event: eventName,

            phone: phone

        };


        // Save registration
        localStorage.setItem(
            "registeredEvent",
            JSON.stringify(registrationData)
        );


        alert("🎉 Event registration successful!");


        // Open dashboard
        window.location.href = "dashboard.html";

    });

}



// ==========================================
// DASHBOARD
// ==========================================

const savedStudent =
    JSON.parse(localStorage.getItem("studentData"));


if (savedStudent) {

    const dashboardName =
        document.getElementById("dashboardName");

    const dashboardRoll =
        document.getElementById("dashboardRoll");

    const dashboardEmail =
        document.getElementById("dashboardEmail");

    const dashboardPhone =
        document.getElementById("dashboardPhone");


    if (dashboardName) {
        dashboardName.textContent =
            savedStudent.name;
    }


    if (dashboardRoll) {
        dashboardRoll.textContent =
            savedStudent.roll;
    }


    if (dashboardEmail) {
        dashboardEmail.textContent =
            savedStudent.email;
    }


    if (dashboardPhone) {
        dashboardPhone.textContent =
            savedStudent.phone;
    }

}



// ==========================================
// SHOW REGISTERED EVENT
// ==========================================

const registeredEvent =
    JSON.parse(localStorage.getItem("registeredEvent"));


const registeredEventMessage =
    document.getElementById("registeredEventMessage");


const registeredEventsContainer =
    document.getElementById("registeredEventsContainer");


if (
    registeredEvent &&
    registeredEventsContainer
) {

    registeredEventMessage.textContent =
        "🎉 You are registered for:";


    registeredEventsContainer.innerHTML = `

        <div class="registered-event-card">

            <h3>${registeredEvent.event}</h3>

            <p>
                <strong>Student:</strong>
                ${registeredEvent.studentName}
            </p>

            <p>
                <strong>Roll Number:</strong>
                ${registeredEvent.rollNumber}
            </p>

            <p>
                <strong>Email:</strong>
                ${registeredEvent.email}
            </p>

            <p>
                <strong>Phone:</strong>
                ${registeredEvent.phone}
            </p>

            <p>
                <strong>Status:</strong>
                ✅ Registered
            </p>

        </div>

    `;

}



// ==========================================
// CONTACT FORM
// ==========================================

const contactForm =
    document.getElementById("contactForm");


if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();


        const contactMessage =
            document.getElementById("contactMessage");


        contactMessage.textContent =
            "✅ Your message has been submitted successfully!";


        contactForm.reset();

    });

}



// ==========================================
// LOGOUT
// ==========================================

function logout() {

    localStorage.removeItem("isLoggedIn");

    alert("👋 You have been logged out!");

    window.location.href = "index.html";

}