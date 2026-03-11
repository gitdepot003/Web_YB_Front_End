import Footer from "../components/auth/footer";
import Header from "../components/auth/header";

function Vishwaar() {

  const openAR = () => {
    window.open("https://vishwaar.youthbuzz.in/", "_blank");
  };

  return (
    <>
      <Header />
      <section
        style={{
          minHeight: "80vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "120px 20px 60px",
          background: "#f7f9fc",
          textAlign: "center"
        }}
      >

        <div style={{maxWidth:"700px"}}>

          <h1
            style={{
              fontSize: "42px",
              fontWeight: "700",
              color: "#2c3e50",
              marginBottom: "20px"
            }}
          >
            Chandrayaan AR Experience
          </h1>

          <button
            onClick={openAR}
            style={{
              padding: "16px 40px",
              fontSize: "18px",
              background: "linear-gradient(135deg,#00c6ff,#0072ff)",
              color: "#fff",
              border: "none",
              borderRadius: "10px",
              cursor: "pointer",
              fontWeight: "600",
              boxShadow: "0 8px 25px rgba(0,114,255,0.3)"
            }}
          >
            Launch AR Experience
          </button>

        </div>

      </section>

      <Footer />
    </>
  );
}

export default Vishwaar;