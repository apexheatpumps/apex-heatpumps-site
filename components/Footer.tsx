export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <p>&copy; {year} Apex Heat Pumps BC. All rights reserved.</p>
        <p>
          Licensed and insured heat pump specialists serving Vancouver, Victoria, and communities across British Columbia.
        </p>
      </div>
    </footer>
  );
}
