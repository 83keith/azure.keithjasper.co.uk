export function Hero() {
  return (
    <div className="hero-image">
      <div className="hero-text">
        <h1>Need to stay conneted?</h1>
        <p>Uptime and performance matter to your customers and staff.</p>
        <button
          className="herobtn"
          // TODO: fix link on button
          //   onclick="window.location.href='public/files/keith-jasper-cv-public.pdf'"
        >
          <i className="fa-solid fa-user fa-lg"></i>&nbsp;Hire me
        </button>
      </div>
    </div>
  );
}
