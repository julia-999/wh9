var checkbox = document.querySelector("input[name=checkbox]");

checkbox.addEventListener("change", function () {
  if (this.checked) {
    SendPlay();
  } else {
    SendStop()
  }
});

function SendPlay() {
  // fetch("https://reqbin.com/echo/post/json", {
  //   method: "POST",
  //   headers: {
  //     Accept: "application/json",
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify({ id: 78912 }),
  // });
  console.log("Hello")
}

function SendStop() {
  // fetch("https://reqbin.com/echo/post/json", {
  //   method: "POST",
  //   headers: {
  //     Accept: "application/json",
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify({ id: 78912 }),
  // });
  console.log("Bye")
}