export class Validator {
  validate(value) {
    let success = this.isValid(value);
    let message = success ? "OK" : this.error();
    return { success, message };
  }
  isValid() {
    throw new Error(
      "Sub-class of `Validator` must override the `isValid` method."
    );
  }
  error() {
    throw new Error(
      "Sub-class of `Validator` must override the `isValid` method."
    );
  }
}

export class MinimumLengthValidator extends Validator {
  constructor(minLength) {
    super();
    this.minLength = minLength;
  }
  isValid(value) {
    return value.length >= this.minLength;
  }
  error() {
    return `Minimum length is ${this.minLength} characters.`;
  }
}

export class MaximumLengthValidator extends Validator {
  constructor(minLength) {
    super();
    this.maxLength = maxLength;
  }
  isValid(value) {
    return value.length <= this.maxLength;
  }
  error() {
    return `Maximum length is ${this.maxLength} characters.`;
  }
}

export class NotEmptyValidator extends Validator {
  isValid(value) {
    return value.length > 0 && value != undefined && value != null;
  }
  error() {
    return "Field may not be empty.";
  }
}

export class GroupedValidator extends Validator {
  constructor(validators) {
    super();
    this.validators = validators;
  }
  isValid(value) {
    for (let validator of this.validators) {
      if (!validator.isValid(value)) {
        this.firstError = validator.error();
        return false;
      }
    }
    this.firstError = null;
    return true;
  }
  error() {
    return this.firstError;
  }
}
