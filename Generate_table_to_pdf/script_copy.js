function submitAppointment() {
  // Get the entered appointment date
  const appointmentDate = document.getElementById("appointmentDate").value;

  // Perform calculations or data fetching based on the appointment date
  // For demonstration purposes, let's assume some sample data
  const appointmentData = [
    { date: appointmentDate, time: "10:00 AM", action: "Meeting" },
    { date: appointmentDate, time: "02:30 PM", action: "Follow-up" },
    // Add more data as needed
  ];

  // Display the floating window with the appointment details
  const resultContainer = document.getElementById("resultContainer");
  resultContainer.style.display = "block";

  // Populate the table with the appointment data
  const appointmentTableBody = document.getElementById("appointmentTableBody");
  appointmentTableBody.innerHTML = "";
  appointmentData.forEach((appointment) => {
    const row = document.createElement("tr");
    row.innerHTML = `<td>${appointment.date}</td><td>${appointment.time}</td><td>${appointment.action}</td>`;
    appointmentTableBody.appendChild(row);
  });
}

function generatePDF() {
  // Use html2canvas to capture the appointment table
  html2canvas(document.getElementById("appointmentTable")).then((canvas) => {
    // Create a new jsPDF instance
    const pdf = new jsPDF();

    // Add the canvas to the PDF
    pdf.addImage(canvas.toDataURL("image/png"), "PNG", 10, 10);

    // Save or print the PDF (customize as needed)
    pdf.save("appointment_details.pdf");
  });
  /*.catch((error) => {
      console.error("Error generating PDF:", error);
    }); */
}
