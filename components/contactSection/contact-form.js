import { useForm, ValidationError } from "@formspree/react";
import formStyles from "../contactSection/form.module.css"

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xeqnndve");

  if (state.succeeded) {
    return <p>Thanks for your submission!</p>;
  }

  return (
    <form onSubmit={handleSubmit} className={formStyles.container}>
      <p className="fw-bold fs-4">Sign Up to our Mailing List</p>
      <p className="fs-5">
        Join our mailing list and receive emails about our upcoming shows
      </p>
      <label htmlFor="name" className={formStyles.labels}>
        First Name:
      </label>
      <input
        type="text"
        id="name"
        name="name"
        required
        pattern="[A-Za-z]{2,}"
        title="Name should min 2 alphabets (a to z)."
        className={`${formStyles.inputs} ${formStyles.textarea}`}
      />
      <ValidationError
        prefix="Name"
        field="name"
        errors={state.errors}
        className={formStyles.fieldErrors}
      />
      <label htmlFor="lastName" className={formStyles.labels}>
        Last Name:
      </label>
      <input
        type="text"
        id="lastName"
        name="lastName"
        required
        pattern="[A-Za-z]{2,}"
        title="Name should min 2 alphabets (a to z)."
        className={`${formStyles.inputs} ${formStyles.textarea}`}
      />
      <ValidationError
        prefix="Last Name"
        field="lastName"
        errors={state.errors}
        className={formStyles.fieldErrors}
      />
      <label htmlFor="message" className={formStyles.labels}>
        Message:
      </label>
      <textarea
        id="message"
        name="message"
        minLength="10"
        maxLength=""
        className={`${formStyles.inputs} ${formStyles.textarea}`}
      />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <label htmlFor="email" className={formStyles.labels}>
        Email Address:
      </label>
      <input
        id="email"
        type="email"
        name="email"
        required
        className={formStyles.inputs}
      />
      <ValidationError
        prefix="Email"
        field="email"
        errors={state.errors}
        className={formStyles.fieldErrors}
      />
      <button
        type="submit"
        disabled={state.submitting}
        className={`${formStyles.button} ${"btn-brand"}`}
      >
        Submit
      </button>
      <ValidationError
        errors={state.errors}
        className={formStyles.formErrors}
      />
    </form>
  );
}
