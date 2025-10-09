import Link from "next/link";

export const metadata = {
  title: "About Apex Heat Pumps | BC's Trusted Heat Pump Installer",
  description:
    "Learn about Apex Heat Pumps - British Columbia's premier heat pump installation company. Expert service, maximum rebates, professional installation.",
};

const features = [
  {
    icon: "🎯",
    title: "Rebate Experts",
    description:
      "We navigate the complex rebate landscape for you, ensuring you receive every dollar you're entitled to. Our clients save an average of $18,000 in rebates.",
  },
  {
    icon: "🏆",
    title: "Certified Excellence",
    description:
      "All our technicians are certified by the Heating, Refrigeration and Air Conditioning Institute of Canada (HRAI) and CleanBC approved installers.",
  },
  {
    icon: "💰",
    title: "Price Match Guarantee",
    description:
      "We guarantee the best prices in BC. Find a lower quote from a certified installer? We'll match it and give you an extra 5% off.",
  },
  {
    icon: "⚡",
    title: "Fast Installation",
    description:
      "Most installations completed in 1-2 days with minimal disruption to your home. We respect your time and space.",
  },
  {
    icon: "🛡️",
    title: "Lifetime Support",
    description:
      "10-year warranty on all equipment and 5-year labor warranty. Plus, we provide ongoing maintenance and support for life.",
  },
  {
    icon: "🌱",
    title: "Environmental Impact",
    description:
      "Each installation reduces CO2 emissions by 3-5 tons annually - equivalent to planting 150 trees every year.",
  },
];

const stats = [
  { number: "2,500+", label: "Homes Upgraded" },
  { number: "$45M+", label: "In Rebates Secured" },
  { number: "4.9★", label: "Average Rating" },
  { number: "98%", label: "Customer Satisfaction" },
];

const process = [
  {
    step: "1",
    title: "Free Consultation",
    description:
      "We assess your home, discuss your needs, and calculate your available rebates - all at no cost to you.",
  },
  {
    step: "2",
    title: "Custom Proposal",
    description:
      "Within 24 hours, you'll receive a detailed quote showing equipment costs, installation fees, and all available rebates.",
  },
  {
    step: "3",
    title: "Rebate Application",
    description:
      "We handle all the paperwork and submit your rebate applications to federal and provincial programs.",
  },
  {
    step: "4",
    title: "Professional Installation",
    description:
      "Our certified team installs your system efficiently, typically completing the job in 1-2 days.",
  },
  {
    step: "5",
    title: "Ongoing Support",
    description:
      "We provide training, maintenance reminders, and lifetime support for your heat pump system.",
  },
];

export default function About() {
  return (
    <main>
      <section className="bg-gradient-primary text-white py-20">
        <div className="section-container text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
            About Apex Heat Pumps
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            British Columbia's most trusted heat pump installation company, helping
            homeowners save money and reduce their carbon footprint since 2018
          </p>
        </div>
      </section>

      <section className="section-container">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
            Our Mission
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            At Apex Heat Pumps, we're on a mission to make energy-efficient heating
            accessible and affordable for every British Columbia homeowner. We
            believe that transitioning to clean energy shouldn't be complicated or
            expensive.
          </p>
          <p className="text-lg text-gray-700 mb-8">
            Our team of certified professionals specializes in helping BC families
            maximize government rebates while installing premium heat pump systems
            that deliver comfort, savings, and environmental benefits for decades
            to come.
          </p>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="section-container">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Why Choose Apex?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="card text-center">
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-container">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Our Track Record
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-gradient-primary text-white p-8 rounded-2xl text-center"
            >
              <div className="text-4xl md:text-5xl font-bold mb-2">
                {stat.number}
              </div>
              <div className="text-lg">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="section-container">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Our Process
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {process.map((step) => (
              <div key={step.step} className="flex gap-6 items-start">
                <div className="bg-gradient-primary text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                  {step.step}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-container">
        <div className="bg-gradient-primary text-white p-12 rounded-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Home?
          </h2>
          <p className="text-xl mb-8">
            Join thousands of satisfied BC homeowners who have already made the
            switch
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/calculator"
              className="btn-primary bg-white text-primary-500 hover:bg-gray-100"
            >
              Calculate Your Rebates
            </Link>
            <Link
              href="/contact"
              className="btn-secondary border-white text-white hover:bg-white hover:text-primary-500"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
