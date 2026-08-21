import { useEffect, useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  Check,
  IdCard,
  Presentation,
  CheckCircle2,
  ChevronRight,
  Copy,
  ExternalLink,
  Globe2,
  Lightbulb,
  Menu,
  Rocket,
  Sparkles,
  Target,
  Trophy,
  Users,
  X,
  Zap,
  UserRound,
  KeyRound,
  ListChecks,
  Building2,
} from "lucide-react";

const EUREKA_URL = "https://docs.google.com/forms/d/e/1FAIpQLSfwIeQIwibhkmXTXbLqNdJPj4Gg5mVEP-KhXk2NmVH0LfcVFw/viewform?usp=sharing&ouid=116516293072967846962";
const NEC_ID = "NEC2658849";

const journey = [
  {
    number: "01",
    title: "Discover",
    subtitle: "Find the problem",
    text: "Start with a problem that matters. Observe, question and identify an opportunity worth solving.",
    icon: Target,
  },
  {
    number: "02",
    title: "Ideate",
    subtitle: "Shape the idea",
    text: "Turn your observation into an innovative idea with a clear purpose and strong value proposition.",
    icon: Lightbulb,
  },
  {
    number: "03",
    title: "Build",
    subtitle: "Create the solution",
    text: "Transform your concept into a practical solution and validate whether it can create real value.",
    icon: Rocket,
  },
  {
    number: "04",
    title: "Pitch",
    subtitle: "Tell your story",
    text: "Present the problem, solution, market and vision with clarity, confidence and conviction.",
    icon: Sparkles,
  },
  {
    number: "05",
    title: "Impact",
    subtitle: "Create the future",
    text: "Take your idea beyond the pitch and build something capable of creating meaningful impact.",
    icon: Trophy,
  },
];

const benefits = [
  {
    icon: Lightbulb,
    title: "Think Different",
    text: "Challenge conventional thinking and discover opportunities hidden inside everyday problems.",
  },
  {
    icon: Users,
    title: "Build Connections",
    text: "Step into an entrepreneurial ecosystem filled with ambitious innovators and creators.",
  },
  {
    icon: Trophy,
    title: "Show Your Potential",
    text: "Put your idea on a platform where your entrepreneurial vision can be heard.",
  },
  {
    icon: Rocket,
    title: "Go Beyond",
    text: "Move from a classroom idea toward a solution with real-world potential.",
  },
];

const pitchSteps = [
  "ABSTRACT",
  "PROBLEM STATEMENT",
  "PROPOSED SOLUTION",
  "UNIQUE VALUE PROPOSITION",
  "TARGET MARKET",
  "BUSINESS MODEL",
  "COMPETITOR ANALYSIS",
  "IMPLEMENTATION PLAN",
  "FINANCIAL OVERVIEW",
  "FUTURE SCOPE",
  "CONCLUSION"
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [activeJourney, setActiveJourney] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveJourney((prev) => (prev + 1) % journey.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const revealElements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
          }
        });
      },
      { threshold: 0.12 }
    );

    revealElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  const goTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setMenuOpen(false);
  };

  const openEureka = () => {
    window.open(EUREKA_URL, "_blank", "noopener,noreferrer");
  };

  const copyNecId = async () => {
    try {
      await navigator.clipboard.writeText(NEC_ID);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = NEC_ID;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      textarea.remove();

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    }
  };

  return (
    <div className="eureka-app">

      {/* =====================================================
          BACKGROUND EFFECTS
      ====================================================== */}

      <div className="global-background">
        <div className="aurora aurora-one" />
        <div className="aurora aurora-two" />
        <div className="aurora aurora-three" />

        <div className="grid-background" />

        <div className="particles">
          {Array.from({ length: 28 }).map((_, index) => (
            <span
              key={index}
              className="particle"
              style={{
                left: `${(index * 37) % 100}%`,
                top: `${(index * 61) % 100}%`,
                animationDelay: `${index * 0.23}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* =====================================================
          NAVBAR
      ====================================================== */}

      <header className="premium-navbar">
        <div className="navbar-inner">

          <button
            className="brand"
            onClick={() => goTo("home")}
          >
            <span className="brand-symbol">
              <Sparkles size={19} />
            </span>

            <span className="brand-content">
              <strong>EUREKA</strong>
              <small>INNOVATION • ENTREPRENEURSHIP</small>
            </span>
          </button>

          <nav className="desktop-navigation">
  <button onClick={() => goTo("home")}>Home</button>

  <button onClick={() => goTo("about")}>Eureka</button>

  <button onClick={() => goTo("eureka-id")}>Get ID</button>

  <button onClick={() => goTo("journey")}>Journey</button>

  <button onClick={() => goTo("checklist")}>Checklist</button>

  <button onClick={() => goTo("pitch")}>Pitch</button>

  <button onClick={() => goTo("why")}>Why Eureka</button>
</nav>

          <button
            className="nav-register"
            onClick={openEureka}
          >
            Register
            <ExternalLink size={15} />
          </button>

          <button
            className="mobile-menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {menuOpen && (
          <div className="mobile-navigation">
  <button onClick={() => goTo("home")}>
    Home
  </button>

  <button onClick={() => goTo("about")}>
    Eureka
  </button>

  <button onClick={() => goTo("eureka-id")}>
    Get ID
  </button>

  <button onClick={() => goTo("journey")}>
    Journey
  </button>

  <button onClick={() => goTo("checklist")}>
    Checklist
  </button>

  <button onClick={() => goTo("pitch")}>
    Pitch
  </button>

  <button onClick={() => goTo("why")}>
    Why Eureka
  </button>
</div>
        )}
      </header>

      {/* =====================================================
          HERO
      ====================================================== */}

      <main>

        <section id="home" className="hero-section">

          <div className="hero-orb hero-orb-left" />
          <div className="hero-orb hero-orb-right" />

          <div className="hero-container">

            <div className="hero-copy reveal">

              <div className="eyebrow">
                <span className="eyebrow-dot" />
                NATIONAL ENTREPRENEURSHIP CHALLENGE
                <Sparkles size={13} />
              </div>

              <h1>
                Your idea can
                <span> change everything.</span>
              </h1>

              <p className="hero-description">
                Eureka is where ambitious ideas meet opportunity.
                Discover a problem, build a solution, pitch your
                vision and take your first step toward creating
                meaningful impact.
              </p>

              <div className="hero-actions">

                <button
                  className="primary-button"
                  onClick={openEureka}
                >
                  <span>Register</span>
                  <ExternalLink size={18} />
                </button>

                <button
                  className="secondary-button"
                  onClick={() => goTo("journey")}
                >
                  Explore Journey
                  <ArrowDown size={17} />
                </button>

              </div>

              {/* NEC ID */}

              <div className="nec-hero-box">

                <div className="nec-hero-label">
                  <Zap size={12} />
                  YOUR NEC REFERRAL ID
                </div>

                <div className="nec-hero-main">

                  <strong>{NEC_ID}</strong>

                  <button onClick={copyNecId}>
                    {copied ? (
                      <>
                        <Check size={14} />
                        Copied
                      </>
                    ) : (
                      <>
                        <Copy size={14} />
                        Copy ID
                      </>
                    )}
                  </button>

                </div>

                <p>
                  Use this NEC ID while registering on the official
                  Eureka portal.
                </p>

              </div>

            </div>

            {/* =================================================
                3D HERO VISUAL
            ================================================= */}

            <div className="hero-visual reveal">

              <div className="floating-label label-one">
                <Lightbulb size={15} />
                <span>IDEATE</span>
              </div>

              <div className="floating-label label-two">
                <Rocket size={15} />
                <span>BUILD</span>
              </div>

              <div className="floating-label label-three">
                <Trophy size={15} />
                <span>IMPACT</span>
              </div>

              <div className="hero-ring ring-one" />
              <div className="hero-ring ring-two" />
              <div className="hero-ring ring-three" />

              <div className="hero-core">

                <div className="core-glow" />

                <div className="core-icon">
                  <Lightbulb size={52} />
                </div>

                <span>THE IDEA</span>

                <strong>
                  START
                  <br />
                  SOMETHING
                  <br />
                  <b>BRILLIANT.</b>
                </strong>

                <div className="core-line">
                  <span />
                </div>

                <small>
                  THINK • CREATE • IMPACT
                </small>

              </div>

              <div className="orbit-dot dot-one" />
              <div className="orbit-dot dot-two" />
              <div className="orbit-dot dot-three" />

            </div>

          </div>

          <div className="scroll-indicator">
            <span>SCROLL TO EXPLORE</span>
            <ArrowDown size={15} />
          </div>

        </section>

        {/* =====================================================
            ABOUT
        ====================================================== */}

        <section id="about" className="section about-section">

          <div className="section-container">

            <div className="section-heading reveal">

              <div className="section-eyebrow">
                <span />
                WHAT IS EUREKA?
              </div>

              <h2>
                Don't just have
                <span> an idea.</span>
                <br />
                Give it a direction.
              </h2>

              <p>
                Every meaningful venture begins with a simple
                observation — something could be better.
                Eureka gives you the opportunity to explore
                that thought and turn it into a compelling
                entrepreneurial journey.
              </p>

            </div>

            <div className="about-grid">

              <div className="about-main-card reveal">

                <div className="card-number">01</div>

                <div className="about-icon">
                  <Globe2 size={25} />
                </div>

                <h3>
                  Think beyond
                  <br />
                  the obvious.
                </h3>

                <p>
                  The strongest ideas don't always come from
                  complicated technology. They come from
                  understanding people, problems and possibilities.
                </p>

                <div className="idea-tags">
                  <span>PROBLEM</span>
                  <ArrowRight size={13} />
                  <span>IDEA</span>
                  <ArrowRight size={13} />
                  <span>SOLUTION</span>
                </div>

              </div>

              <div className="about-side">

                <div className="small-glass-card reveal">
                  <Lightbulb />
                  <div>
                    <strong>Innovate</strong>
                    <span>Question the ordinary.</span>
                  </div>
                </div>

                <div className="small-glass-card reveal">
                  <Target />
                  <div>
                    <strong>Validate</strong>
                    <span>Build for a real need.</span>
                  </div>
                </div>

                <div className="small-glass-card reveal">
                  <Rocket />
                  <div>
                    <strong>Execute</strong>
                    <span>Turn vision into action.</span>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </section>
          {/* =====================================================
    GET EUREKA ID
====================================================== */}

<section id="eureka-id" className="section eureka-id-section">

  <div className="section-container">

    {/* SECTION HEADING */}

    <div className="eureka-id-heading reveal">

      <div className="section-eyebrow">
        <span />
        [00] NEED A EUREKA ID? STEP-BY-STEP GUIDE
      </div>

      <h2>
        How to Get Your <span>Eureka ID</span>
      </h2>

      <p>
        A Eureka ID is required before you can submit through
        the Google Form. It only takes a few minutes —
        complete this first.
      </p>

    </div>


    {/* REFERRAL ID CARD */}

    <div className="referral-card reveal">

      <div className="referral-content">

        <span className="referral-label">
          REQUIRED REFERRAL ID
        </span>

        <div className="referral-code-row">

          <strong>{NEC_ID}</strong>

          <button
            className="copy-code-button"
            onClick={copyNecId}
          >
            {copied ? (
              <>
                <Check size={15} />
                COPIED
              </>
            ) : (
              <>
                <Copy size={15} />
                COPY CODE
              </>
            )}
          </button>

        </div>

      </div>


      <button
        className="referral-register-button"
        onClick={openEureka}
      >
        Register on ecell.in/eureka
        <ExternalLink size={17} />
      </button>

    </div>


    {/* FOUR STEPS */}

    <div className="id-steps-grid">

      {/* STEP 01 */}

      <div className="id-step-card reveal">

        <div className="id-step-header">

          <div className="id-step-title">

            <UserRound size={22} />

            <span>STEP 01</span>

          </div>

          <span className="id-step-badge">
            REGISTRATION
          </span>

        </div>

        <h3>
          Log In & Verify Account
        </h3>

        <p>
          Go to <strong>ecell.in/eureka</strong>. Create an
          account, verify your email address and mobile
          number, and create your password.
        </p>

      </div>


      {/* STEP 02 */}

      <div className="id-step-card important reveal">

        <div className="id-step-header">

          <div className="id-step-title">

            <KeyRound size={22} />

            <span>STEP 02</span>

          </div>

          <span className="important-badge">
            IMPORTANT
          </span>

        </div>

        <h3>
          Select Referral & Enter Code
        </h3>

        <p>
          Under "From where did you hear about Eureka!
          2026?", select{" "}
          <strong>Friend/Colleague Referral</strong> and
          enter the referral ID below — it's required.
        </p>

        <div className="referral-field">

          <span>
            Referral ID Field:
          </span>

          <strong>
            {NEC_ID}
          </strong>

        </div>

      </div>


      {/* STEP 03 */}

      <div className="id-step-card reveal">

        <div className="id-step-header">

          <div className="id-step-title">

            <ListChecks size={22} />

            <span>STEP 03</span>

          </div>

          <span className="id-step-badge">
            STARTUP PROFILE
          </span>

        </div>

        <h3>
          Fill Startup Details
        </h3>

        <p>
          Enter your startup details: stage of startup,
          legal status, year founded, operation type,
          funding stage, primary model, and primary
          reason to apply.
        </p>

      </div>


      {/* STEP 04 */}

      <div className="id-step-card reveal">

        <div className="id-step-header">

          <div className="id-step-title">

            <Building2 size={22} />

            <span>STEP 04</span>

          </div>

          <span className="id-step-badge">
            FINAL ID
          </span>

        </div>

        <h3>
          Get Eureka ID & Add Team
        </h3>

        <p>
          Your Eureka ID will be generated. Share this
          process with your teammates so they get their
          IDs and join your team on the portal.
        </p>

      </div>

    </div>

  </div>

</section>
        {/* =====================================================
            JOURNEY
        ====================================================== */}

        {/* =====================================================
    TIMELINE / JOURNEY
====================================================== */}

<section id="journey" className="section timeline-section">

  <div className="section-container">

    <div className="timeline-heading reveal">

      <div className="section-eyebrow">
        <span />
        PROCESS
      </div>

      <h2>
        Your Journey Starts
        <br />
        <span>Here</span>
      </h2>

    </div>


    <div className="timeline">

      {/* STEP 01 */}

      <div className="timeline-step reveal">

        <div className="timeline-number">
          01
        </div>

        <div className="timeline-content">

          <h3>
            Register
          </h3>

          <p>
            Complete the Eureka registration through
            the official Google Form.
          </p>

        </div>

      </div>


      {/* STEP 02 */}

      <div className="timeline-step reveal">

        <div className="timeline-number">
          02
        </div>

        <div className="timeline-content">

          <h3>
            Build Your Team
          </h3>

          <p>
            Bring together teammates who complement
            your skills.
          </p>

        </div>

      </div>


      {/* STEP 03 */}

      <div className="timeline-step reveal">

        <div className="timeline-number">
          03
        </div>

        <div className="timeline-content">

          <h3>
            Submit Your Idea
          </h3>

          <p>
            Submit your project or startup information
            and pitch.
          </p>

        </div>

      </div>


      {/* STEP 04 */}

      <div className="timeline-step reveal">

        <div className="timeline-number">
          04
        </div>

        <div className="timeline-content">

          <h3>
            Get Evaluated
          </h3>

          <p>
            Projects are reviewed on innovation,
            feasibility, impact and potential.
          </p>

        </div>

      </div>


      {/* STEP 05 */}

      <div className="timeline-step reveal">

        <div className="timeline-number">
          05
        </div>

        <div className="timeline-content">

          <h3>
            Pitch & Build
          </h3>

          <p>
            Selected teams move to the next stage
            of the challenge.
          </p>

        </div>

      </div>

    </div>

  </div>

</section>

          {/* =====================================================
    CHECKLIST
===================================================== */}

<section id="checklist" className="checklist-section">

  <div className="checklist-container">

    <div className="checklist-heading">

      <div className="checklist-eyebrow">
        CHECKLIST
      </div>

      <h2>
        Before You Apply
      </h2>

    </div>


    <div className="checklist-grid">

      {/* EUREKA ID */}

      <div className="checklist-card">

        <div className="checklist-icon">
          <IdCard size={25} />
        </div>

        <h3>
          EUREKA ID
        </h3>

        <p>
          Have your Eureka registration ID ready.
        </p>

      </div>


      {/* TEAM DETAILS */}

      <div className="checklist-card">

        <div className="checklist-icon">
          <Users size={25} />
        </div>

        <h3>
          TEAM DETAILS
        </h3>

        <p>
          Keep your team member information ready.
        </p>

      </div>


      {/* PROJECT IDEA */}

      <div className="checklist-card">

        <div className="checklist-icon">
          <Lightbulb size={25} />
        </div>

        <h3>
          PROJECT IDEA
        </h3>

        <p>
          Prepare a clear explanation of your startup/project.
        </p>

      </div>


      {/* PITCH */}

      <div className="checklist-card">

        <div className="checklist-icon">
          <Presentation size={25} />
        </div>

        <h3>
          PITCH
        </h3>

        <p>
          Keep your pitch presentation ready if required.
        </p>

      </div>

    </div>


    <p className="checklist-note">
      Please review the official submission guidelines before submitting.
    </p>

  </div>

</section>

        {/* =====================================================
            PITCH
        ====================================================== */}

        <section id="pitch" className="section pitch-section">

          <div className="section-container">

            <div className="pitch-layout">

              <div className="pitch-copy reveal">

                <div className="section-eyebrow">
                  <span />
                  THE PITCH
                </div>

                <h2>
                  Your idea.
                  <br />
                  <span>Your story.</span>
                  <br />
                  Your moment.
                </h2>

                <p>
                  A strong pitch isn't about using complicated
                  words. It's about making people understand
                  why your idea matters.
                </p>

                <button
                  className="primary-button"
                  onClick={openEureka}
                >
                  Start Your Pitch
                  <ExternalLink size={17} />
                </button>

              </div>

              <div className="pitch-card reveal">

                <div className="pitch-card-top">
                  <div>
                    <span>PITCH BLUEPRINT</span>
                    <strong>11 CORE ELEMENTS</strong>
                  </div>

                  <Sparkles size={21} />
                </div>

                <div className="pitch-list">

                  {pitchSteps.map((step, index) => (
                    <div
                      className="pitch-step"
                      key={step}
                    >

                      <span>
                        {index + 1}
                      </span>

                      <strong>
                        {step}
                      </strong>

                      <CheckCircle2 size={16} />

                    </div>
                  ))}

                </div>

              </div>

            </div>

          </div>

        </section>

        {/* =====================================================
            WHY
        ====================================================== */}

        <section id="why" className="section why-section">

          <div className="section-container">

            <div className="section-heading reveal">

              <div className="section-eyebrow">
                <span />
                WHY EUREKA?
              </div>

              <h2>
                More than
                <span> a competition.</span>
              </h2>

              <p>
                It's a chance to discover how far your idea
                can actually go.
              </p>

            </div>

            <div className="benefits-grid">

              {benefits.map((benefit, index) => {

                const Icon = benefit.icon;

                return (
                  <div
                    className="benefit-card reveal"
                    key={benefit.title}
                  >

                    <div className="benefit-top">
                      <span>
                        0{index + 1}
                      </span>

                      <Icon size={23} />
                    </div>

                    <h3>{benefit.title}</h3>

                    <p>{benefit.text}</p>

                    <div className="benefit-bottom">
                      <span>EXPLORE</span>
                      <ArrowRight size={15} />
                    </div>

                  </div>
                );
              })}

            </div>

          </div>

        </section>

        {/* =====================================================
            NEC REGISTRATION CTA
        ====================================================== */}

        <section className="registration-section">

          <div className="registration-grid" />

          <div className="registration-glow registration-glow-one" />
          <div className="registration-glow registration-glow-two" />

          <div className="registration-container">

            <div className="registration-copy reveal">

              <div className="section-eyebrow">
                <span />
                YOUR NEXT STEP
              </div>

              <h2>
                Ready to put
                <span> your idea</span>
                <br />
                on the stage?
              </h2>

              <p>
                Registration takes place through the official
                Eureka portal. Continue there and begin your
                journey.
              </p>

              <div className="registration-checks">

                <div>
                  <CheckCircle2 size={17} />
                  Official Eureka registration
                </div>

                <div>
                  <CheckCircle2 size={17} />
                  Use the NEC referral ID
                </div>

                <div>
                  <CheckCircle2 size={17} />
                  Start your entrepreneurial journey
                </div>

              </div>

            </div>

            {/* =================================================
                NEC CARD
            ================================================= */}

            <div className="nec-card reveal">

              <div className="nec-card-shine" />

              <div className="nec-card-header">

                <div className="nec-card-icon">
                  <Sparkles size={22} />
                </div>

                <div>
                  <span>YOUR REFERRAL</span>
                  <strong>NEC ID</strong>
                </div>

              </div>

              <div className="nec-id-display">

                <small>USE THIS CODE</small>

                <strong>
                  {NEC_ID}
                </strong>

                <div className="nec-id-glow" />

              </div>

              <p className="nec-important">
                Use this NEC ID when the official Eureka
                registration portal asks for your referral code.
              </p>

              <button
                className="copy-large-button"
                onClick={copyNecId}
              >
                {copied ? (
                  <>
                    <Check size={17} />
                    NEC ID COPIED
                  </>
                ) : (
                  <>
                    <Copy size={17} />
                    COPY NEC ID
                  </>
                )}
              </button>

              <button
                className="official-button"
                onClick={openEureka}
              >
                <span>REGISTER ON OFFICIAL EUREKA</span>
                <ExternalLink size={18} />
              </button>

              <div className="official-disclaimer">
                <CheckCircle2 size={13} />
                Opens the official Eureka portal
              </div>

            </div>

          </div>

        </section>

        {/* =====================================================
            FINAL CTA
        ====================================================== */}

        <section className="final-cta">

          <div className="final-stars">
            {Array.from({ length: 18 }).map((_, index) => (
              <span key={index} />
            ))}
          </div>

          <div className="final-content reveal">

            <div className="final-icon">
              <Sparkles size={24} />
            </div>

            <div className="section-eyebrow centered">
              <span />
              THIS IS YOUR MOMENT
              <span />
            </div>

            <h2>
              Think it.
              <br />
              Build it.
              <br />
              <span>Make it real.</span>
            </h2>

            <p>
              Your next big idea could begin with one click.
            </p>

            <div className="final-code">
              <span>NEC ID</span>
              <strong>{NEC_ID}</strong>
            </div>

            <button
              className="primary-button final-button"
              onClick={openEureka}
            >
              Enter Eureka
              <ExternalLink size={18} />
            </button>

          </div>

        </section>

      </main>

      {/* =====================================================
          FOOTER
      ====================================================== */}

      <footer className="footer">

        <div className="footer-inner">

          <div className="footer-brand">

            <div className="brand-symbol">
              <Sparkles size={18} />
            </div>

            <div>
              <strong>EUREKA</strong>
              <span>
                Entrepreneurship • Innovation
              </span>
            </div>

          </div>

          <div className="footer-center">
            <span>NEC REFERRAL ID</span>
            <strong>{NEC_ID}</strong>
          </div>

          <button
            className="footer-link"
            onClick={openEureka}
          >
            Official Portal
            <ExternalLink size={13} />
          </button>

          <span className="footer-copy">
            © 2026 Eureka
          </span>

        </div>

      </footer>

    </div>
  );
}

export default App;