const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);

  console.log(dividend);
  console.log(divider)

  let divideResult = dividend / divider;

  if ( divideResult % 1 !== 0) {
    divideResult = Math.floor(divideResult);
  };

  if ( dividend === "" || divider === "") {
    result.innerText = "Division not performed. Both values are required in inputs. Try again";
    return;
  };

  if ( isNaN(dividend) || isNaN(divider) ) {
    console.error("Invalid input values", new Error("Input values should be numbers.") );
    result.classList.add("critical-error");
    result.innerText = "Something critical went wrong. Please reload the page.";
    return;
  };

  if ( divider === "0" ) {

    console.error("Invalid divider", new Error("Divided by Zero"));
    result.classList.add("error-message");
    result.innerText = "Division not performed. Invalid number provided. Try again.";

    return;
  };

  result.innerText = dividend / divider;
});