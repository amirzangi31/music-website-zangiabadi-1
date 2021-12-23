let btns = [...document.querySelector(".btns").children];
let forms = [...document.querySelectorAll("form")];
let btnText = document.querySelector(".btn-text");
let btnSignIn = document.querySelector("#btn-signin");
let btnSignUp = document.querySelector("#btn-signup");
let inputsSignIn = [...document.querySelectorAll("#form-1 input")];
let inputsSignUp = [...document.querySelectorAll("#form-2 input")];
let inputsSignUpPAss = [...document.querySelectorAll("#form-2 input")];
inputsSignUpPAss.splice(0, 2);

window.addEventListener("load", () => {
  btns[0].className = "btn activee";
  forms[0].className = "activee";
});

btnText.addEventListener("click", () => {
  if (btns[0].className === "btn activee") {
    forms[0].className = "sign";
    forms[1].className = "activee";
    btns[1].className = "btn activee";
    btns[0].className = "btn ";
  }
});

btns.forEach((element) => {
  element.addEventListener("click", (e) => {
    let btns = [...document.querySelector(".btns").children];
    let forms = [...document.querySelectorAll("form")];
    btns.forEach((p) => {
      p.className = "btn";
    });
    element.className = "btn activee";

    switch (element.id) {
      case "btn-1": {
        forms[0].className = "activee";
        forms[1].className = "sign";
        break;
      }
      case "btn-2": {
        forms[1].className = "activee";
        forms[0].className = "sign";
        break;
      }
    }
  });
});
btnSignIn.addEventListener("click", () => {
  let err = document.querySelector(".error");
  inputsSignIn.forEach((element) => {
    try {
      if (element.value == "") {
        throw "لطفا کادرها را پر کنید!!!";
      } else {
        element.value = "";
        err.innerHTML = "";
      }
    } catch (e) {
      err.innerHTML = e;
    }
  });
});

btnSignUp.addEventListener("click", () => {
  let err = document.querySelector(".error-signup-val");
  let errPass = document.querySelector(".error-signup-pass");
  const result2 = document.querySelector(".result2");
  const result = document.querySelector(".result");

  try {
    if (inputsSignUp[0].value === "") {
      throw "لطفا نام خود را وارد کنید!!!";
    } else {
      err.innerHTML = "";
    }
  } catch (e) {
    err.innerHTML = e;
  }
  try {
    if (inputsSignUp[1].value === "") {
      throw "لطفا ایمیل خود را وارد کنید!!!";
    } else {
      result.innerHTML = "";
    }
  } catch (e) {
    err.innerHTML = e;
  }
  try {
    if (
      inputsSignUpPAss[0].value.length < 8 &&
      inputsSignUpPAss[1].value.length < 8
    ) {
      throw "رمز عبور باید بیشتر از هشت رقم باشد";
    }
  } catch (r) {
    result2.innerHTML = r;
  }

  try {
    if (inputsSignUpPAss[0].value != inputsSignUpPAss[1].value) {
      throw "لطفا رمز عبور مشابه وارد کنید";
    } else {
      errPass.innerHTML = "";
    }
  } catch (b) {
    errPass.innerHTML = b;
  }

  inputsSignUpPAss[0].value = "";
  inputsSignUpPAss[1].value = "";
  inputsSignUp[0].value = "";
  email.value = "";
});

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

const validate = () => {
  const result = document.querySelector(".result");
  const email = document.querySelector("#email").value;

  if (!validateEmail(email)) {
    result.innerHTML = "لطفا ایمیل صحیح را وارد کنید";
  }else{
    result.innerHTML = "";

  }

  return false;
};

document.querySelector("#email").addEventListener("input", validate);
