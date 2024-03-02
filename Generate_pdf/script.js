function generatePDF() {
  // Get the date from the input field
  const date = document.getElementById("dateInput").value;

  // Create a new jsPDF instance
  const pdf = new jsPDF("p", "pt", "a4");
  let options = { pagesplit: true };

  // Add content to the PDF
  pdf.text(`Generated PDF for Date: ${date}`, 20, 20);

  // Save or print the PDF (you can customize this as needed)
  pdf.save("generated_pdf.pdf");
}
//generatePDF();
