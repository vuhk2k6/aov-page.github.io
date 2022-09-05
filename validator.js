function validator(options) {
  var selectorRules = {};
  function validate(inputElement, rule) {
    var errorMassage = rule.test(inputElement.value);
    var errorMassage;
    var errorElement = inputElement.parentElement.querySelector(
      ".form__group-massage"
    );

    var rules = selectorRules[rule.selector];

    for (var i = 0; i < rules.length; i++) {
      errorMassage = rules[i](inputElement.value);
      if (errorMassage) break;
    }

    if (errorMassage) {
      errorElement.innerText = errorMassage;
      inputElement.parentElement.classList.add("invalid");
    } else {
      errorElement.innerText = "";
      inputElement.parentElement.classList.remove("invalid");
    }

    return !errorMassage;
  }
  var formElement = document.querySelector(options.form);
  if (formElement) {
    formElement.onsubmit = function (e) {
      e.preventDefault();

      var isFormValid;

      options.rules.forEach(function (rule) {
        var inputElement = formElement.querySelector(rule.selector);
        var isValid = validate(inputElement, rule);

        if (!isValid) {
          isFormValid = false;
        }
      });
    };
    options.rules.forEach(function (rule) {
      // lưu lại các rule
      if (Array.isArray(selectorRules[rule.selector])) {
        selectorRules[rule.selector].push(rule.test);
      } else {
        selectorRules[rule.selector] = [rule.test];
      }
      var inputElement = formElement.querySelector(rule.selector);
      if (inputElement) {
        inputElement.onblur = function () {
          validate(inputElement, rule);
        };
        inputElement.oninput = function () {
          var errorElement = inputElement.parentElement.querySelector(
            ".form__group-massage"
          );
          errorElement.innerText = "";
          inputElement.parentElement.classList.remove("invalid");
        };
      }
    });
  }
}
validator.isRequired = function (selector, message) {
  return {
    selector: selector,
    test: function (value) {
      return value ? undefined : message || "please enter this field";
    },
  };
};

validator.isEmail = function (selector, message) {
  return {
    selector: selector,
    test: function (value) {
      var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      return regex.test(value)
        ? undefined
        : message || "Required content is email";
    },
  };
};

validator.minLength = function (selector, min, message) {
  return {
    selector: selector,
    test: function (value) {
      return value.length >= min
        ? undefined
        : message || `Password must be at least ${min} characters`;
    },
  };
};
validator.isConfirmed = function (selector, getConfirmValue, message) {
  return {
    selector: selector,
    test: function (value) {
      return value === getConfirmValue
        ? undefined
        : message || "Incorrect pass value";
    },
  };
};
