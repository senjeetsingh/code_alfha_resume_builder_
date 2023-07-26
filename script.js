document.getElementById('resumeForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get form values
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const summary = document.getElementById('summary').value;
    const eduTitle = document.getElementById('eduTitle').value;
    const eduSchool = document.getElementById('eduSchool').value;
    const eduYear = document.getElementById('eduYear').value;
    const expTitle = document.getElementById('expTitle').value;
    const expCompany = document.getElementById('expCompany').value;
    const expYear = document.getElementById('expYear').value;
  
    // Generate resume output
    const resumeOutput = `
      <h1>${fullName}</h1>
      <p>Email: ${email}</p>
      <p>Phone: ${phone}</p>
      <p>Address: ${address}</p>
      <h2>Summary</h2>
      <p>${summary}</p>
      <h2>Education</h2>
      <p>${eduTitle}, ${eduSchool}, ${eduYear}</p>
      <h2>Experience</h2>
      <p>${expTitle}, ${expCompany}, ${expYear}</p>
    `;
  
    // Display the resume output
    document.body.innerHTML = resumeOutput;
  });
  