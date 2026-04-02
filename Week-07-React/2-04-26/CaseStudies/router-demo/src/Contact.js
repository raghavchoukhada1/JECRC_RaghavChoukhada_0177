import React from "react";
function Contact(){
  return(
    <div style={styles.container}>
      <h1>Contact Page</h1>
      <p>This is the contact page of our router demo.</p>
      <p>Email: contact@example.com</p>
      <p>Phone: +1 (123) 456-7890</p>
    </div>

  );
}
const styles={
  container: {
    textAlign: "center",
    padding: "20px",
    marginTop: "50px",
    backgroundColor:"blue",
  }
};
export default Contact;