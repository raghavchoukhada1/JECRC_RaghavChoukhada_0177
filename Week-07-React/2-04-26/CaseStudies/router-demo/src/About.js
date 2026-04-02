import React from "react";
function About(){
  return(
    <div style={styles.container}>
      <h1>About Page</h1>
      <p>This is the about page of our router demo.</p>
      <p>It include navigation,routing and component rendering.</p>
    </div>
  );
}
const styles={
  container: {
    textAlign: "center",
    marginTop: "50px",
    backgroundColor:"green",
  }
};
export default About;