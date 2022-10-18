let attention = Prompt();

let btnSubmitDate = document.getElementById("submitDate");

btnSubmitDate.addEventListener("click", function () {
  //notify("This is function Notify", "success")
  //notifyModal("title", "<em>Hello World from SweetAlert2</em>", "success", "Text in Button")
  //attention.error({ msg: "Oops!" });
  let html = `
            <form id="check-availability-form" action="" method="post" novalidate class="needs-validation">
                    <div class="row">
                        <div class="col my-3">
                            <div id="reservation-dates-modal" class="row">
                                <div class="col">
                                    <input disabled required type="text" name="start" id="start" class="form-control" placeholder="Arrival Date" autocomplete="off">
                                </div>
                                <div class="col">
                                    <input disabled required type="text" name="end" id="end" class="form-control" placeholder="Departure Date" autocomplete="off">
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            `;

  attention.custom({ msg: html, title: "Choose your dates" });
});

// Example starter JavaScript for disabling form submissions if there are invalid fields
() => {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
};

const elem = document.getElementById("date-range");
const rangepicker = new DateRangePicker(elem, {
  format: "yyyy-mm-dd",
});

function notify(msg, msgType) {
  notie.alert({
    type: msgType,
    text: msg,
  });
}

function notifyModal(title, text, icon, confirmationButtonText) {
  Swal.fire({
    title: title,
    html: text,
    icon: icon,
    confirmButtonText: confirmationButtonText,
  });
}

function Prompt() {
  let toast = function (c) {
    const { msg = "", icon = "success", position = "top-end" } = c;

    const Toast = Swal.mixin({
      toast: true,
      title: msg,
      icon: icon,
      position: position,
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });

    Toast.fire({});
  };

  let success = function (c) {
    const { msg = "", title = "", footer = "" } = c;

    Swal.fire({
      icon: "success",
      title: title,
      text: msg,
      footer: footer,
    });
  };

  let error = function (c) {
    const { msg = "", title = "", footer = "" } = c;

    Swal.fire({
      icon: "error",
      title: title,
      text: msg,
      footer: footer,
    });
  };

  async function custom(c) {
    const { msg = "", title = "" } = c;

    const { value: formValues } = await Swal.fire({
      title: title,
      html: msg,
      backdrop: false,
      focusConfirm: false,
      showCancelButton: true,
      willOpen: () => {
        const elem = document.getElementById("reservation-dates-modal");
        const rp = new DateRangePicker(elem, {
          format: "yyyy-mm-dd",
          showOnFocus: true,
        });
      },
      preConfirm: () => {
        return [
          document.getElementById("start").value,
          document.getElementById("end").value,
        ];
      },
      didOpen: () => {
        document.getElementById("start").removeAttribute("disabled");
        document.getElementById("end").removeAttribute("disabled");
      },
    });

    if (formValues) {
      Swal.fire(JSON.stringify(formValues));
    }
  }

  return {
    toast: toast,
    success: success,
    error: error,
    custom: custom,
  };
}
