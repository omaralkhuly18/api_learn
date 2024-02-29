const formOpenBtn = document.querySelector("#form-open"),
    home = document.querySelector(".home"),
    formContainer = document.querySelector(".form_container"),
    formCloseBtn = document.querySelector(".form_close"),
    signupBtn = document.querySelector("#signup"),
    loginBtn = document.querySelector("#login"),
    pwShowHide = document.querySelectorAll(".pw_hide");

formOpenBtn.addEventListener("click", () => home.classList.add("show"));
formCloseBtn.addEventListener("click", () => home.classList.remove("show"));

pwShowHide.forEach((icon) => {
    icon.addEventListener("click", () => {
        let getPwInput = icon.parentElement.querySelector("input");
        if (getPwInput.type === "password") {
            getPwInput.type = "text";
            icon.classList.replace("uil-eye-slash", "uil-eye");
        } else {
            getPwInput.type = "password";
            icon.classList.replace("uil-eye", "uil-eye-slash");
        }
    });
});

signupBtn.addEventListener("click", (e) => {
    e.preventDefault();
    formContainer.classList.add("active");
});
loginBtn.addEventListener("click", (e) => {
    e.preventDefault();
    formContainer.classList.remove("active");
});


function login(event) {
    event.preventDefault(); // منع إرسال النموذج

    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    const errorMsg = document.getElementById('error-msg');

    // التحقق من صحة بيانات تسجيل الدخول
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
        window.location.href = "dashboard.html";
    } else {
        errorMsg.innerText = "بيانات تسجيل الدخول غير صحيحة";
    }
}

function signup(event) {
    event.preventDefault(); // منع إرسال النموذج

    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const errorMsg = document.getElementById('error-msg');

    // التحقق من تطابق كلمتي المرور
    if (password !== confirmPassword) {
        errorMsg.innerText = "كلمة المرور غير متطابقة";
        return;
    }

    // التحقق من تنسيق البريد الإلكتروني
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        errorMsg.innerText = "البريد الإلكتروني غير صحيح";
        return;
    }

    // التحقق من قوة كلمة المرور
    if (password.length < 6) {
        errorMsg.innerText = "يجب أن تحتوي كلمة المرور على ما لا يقل عن 6 أحرف";
        return;
    }

    // التحقق من عدم تكرار البريد الإلكتروني
    const existingUser = users.find(u => u.email === email);
    if (existingUser) {
        errorMsg.innerText = "هذا البريد الإلكتروني مسجل مسبقًا";
        return;
    }

    // إضافة المستخدم الجديد إلى قائمة المستخدمين
    users.push({ email, password });

    // بعد إنشاء الحساب بنجاح، يمكنك توجيه المستخدم إلى صفحة تسجيل الدخول
    window.location.href = "login.html";
}
