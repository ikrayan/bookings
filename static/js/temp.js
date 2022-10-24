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
