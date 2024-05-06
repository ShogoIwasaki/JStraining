function tryCatchFinally() {
  try {
    console.log("Start try block");
    throw new Error("Error thrown in try block");
  } catch (error) {
    console.log("catch error:" + error.message);
  } finally {
    console.log("End finally block");
  }
}

tryCatchFinally();
