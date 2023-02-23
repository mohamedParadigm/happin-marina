$(function () {
  ("use strict");

  const bsBookFormOffcanvas = new bootstrap.Offcanvas("#bookFormOffcanvas");

  // Trigger Bootstrap Select
  const bootstrapSelects = $(".selectpicker");

  if (bootstrapSelects.length !== 0) {
    bootstrapSelects.selectpicker();
  }

  // Trigger Datepicker

  const checkInDate = $("#checkin");
  // Handle Checkin Initial Value
  if (checkInDate.length !== 0) {
    setInitialDate(checkInDate, 0);
  }

  const checkOutDate = $("#checkout");
  // Handle Checkout Initial Value
  if (checkOutDate.length !== 0) {
    setInitialDate(checkOutDate, 1);
  }

  // Handle Checkin Change
  handleCheckinDateChange(checkInDate, checkOutDate);

  // Handle Form Submit
  const handleForm = $("#rateTigger");

  handleForm.on("submit", function (e) {
    e.preventDefault();

    const checkInDate = e.target["checkin"]?.value;
    const checkOutDate = e.target["checkout"]?.value;
    const numberOfRooms = e.target["noOfRooms"]?.value;
    const numberOfAdults = e.target["noOfAdults"]?.value;
    const numberOfChildren = e.target["noOfChildren"]?.value;

    const url = `https://www.google.com/?checkin=${checkInDate}&checkout=${checkOutDate}&lang=EN&noOfAdults=${numberOfAdults}&noOfChildren=${numberOfChildren}&noOfRooms=${numberOfRooms}`;

    const targetURL = encodeURI(url);

    window.open(targetURL, "_blank");

    if (bsBookFormOffcanvas._isShown) {
      bsBookFormOffcanvas.hide();
    }
  });
});

// Handle Initial Date Value
function setInitialDate(el, length) {
  const defaultDate = el.data("default_date") || `+${length}d`;
  el.datepicker("setDate", defaultDate);
}
// Handle CheckinDate Change
function handleCheckinDateChange(el, affect, length = 1) {
  el.on("changeDate", function (e) {
    const currentDay = el.datepicker("getDate");
    currentDay.setDate(currentDay.getDate() + length);
    affect.datepicker("setStartDate", currentDay);
    affect.datepicker("setDate", currentDay);
  });
}
