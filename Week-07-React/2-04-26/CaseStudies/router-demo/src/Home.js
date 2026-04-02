import React from "react";
function Home(){
    return(
        <div style={styles.container}>
            <h1>Home Page</h1>
            <p>Welcome to the home page of our router demo.</p>
            <p>Use the navigation links above to explore different pages.</p>
        </div>
    );
}
const styles={
    container: {
        textAlign: "center",    
        marginTop: "50px",
        padding: "20px",
        backgroundColor:"orange",
    }
};
export default Home;