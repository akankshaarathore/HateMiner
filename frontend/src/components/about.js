import './about.css'; 

export const Header = ({ check, name }) => (
    <div className="header">
      <div className="wrapper-header">
        <div className="project-header">InclusiLearn</div>
        <div className="options-header">
          <div className="option3-header">Home</div>
          <div className="option1-header">About</div>
          <div className="option2-header">Chats</div>
          <div className="option4-header">Search</div>
        </div>
      </div>
  
      <div className="profile-header">
        {check ? (
          <>
            <div className="dummy-header"><i className="fas fa-user-circle"></i></div>
            <div className="name-header">{name}</div>
          </>
        ) : (
          <>
            <div className="name-header" style={{ display: 'none' }}></div>
            <div className="login"><a href="/signin" style={{ color: 'black', textDecoration: 'none', fontWeight: 'bold' }}>LOGIN</a></div>
          </>
        )}
      </div>
    </div>
  );

export const WelcomeSection = () => (
    <div className="welcome-area" id="welcome">
      <div className="header-text">
        <div className="container">
          <div className="row">
            <div className="offset-xl-2 col-xl-8 offset-lg-2 col-lg-8 col-md-12 col-sm-12">
              <h1>
                We present a <strong>safe and inclusive</strong> platform
                for students with disabilities to share their <strong>lifehacks</strong> and experiences with each other
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
);

export const FeatureSection = () => (
  <div class="container">
  <div class="row">
    <div class="col-lg-12">
      <div class="row">
        <div class="col-lg-4 col-md-6 col-sm-6 col-12"
          data-scroll-reveal="enter bottom move 50px over 0.6s after 0.2s">
          <div class="features-small-item">
            <div class="icon">
              <i><img src="/images/disable.png" alt="" /></i>
            </div>
            <h5 class="features-title">Practicality</h5>
            <p>
              Real life hacks and content to answer practical challenges
            </p>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-6 col-12"
          data-scroll-reveal="enter bottom move 50px over 0.6s after 0.4s">
          <div class="features-small-item">
            <div class="icon">
              <i><img src="/images/eye.png" alt="" /></i>
            </div>
            <h5 class="features-title">Visibility</h5>
            <p>Better content visibility classified by categories</p>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-6 col-12"
          data-scroll-reveal="enter bottom move 50px over 0.6s after 0.6s">
          <div class="features-small-item">
            <div class="icon">
              <i><img src="/images/featured-item-01.png" alt="" /></i>
            </div>
            <h5 class="features-title">Community</h5>
            <p>
              Safe and genuine connections between members
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
);

export const ManSection = () => (
  <div class="container">
  <div class="row">
    <div class="col-lg-5 col-md-12 col-sm-12 align-self-center"
      data-scroll-reveal="enter left move 30px over 0.6s after 0.4s">

    </div>
    <div class="col-lg-1"></div>
    <div class="col-lg-6 col-md-12 col-sm-12 align-self-center mobile-top-fix">
      <div class="left-heading">
        <h2 class="section-title">Meet Rohan</h2>
      </div>
      <div class="left-text">
        <p>He is a Young man living with Hemiplegia on left side of upper body. He does not want to depend on his
          teachers for writing his exams for him.</p>
      </div>
    </div>
  </div>
</div>
);

export const RohanSection = () => (
  <div class="container">
  <div class="row2">
    <div class="col-lg-6 col-md-12 col-sm-12 align-self-center mobile-bottom-fix">
      <div class="left-heading">
        <h2 class="section-title">What Rohan needs?</h2>
      </div>
      <div class="left-text">
        <p>He wants to be able to take care of himself.
          He wants to share his ideas & creative hacks with others.
          He wants to connect with like-minded people. </p>
      </div>
    </div>
    <div class="col-lg-1"></div>
    <div class="col-lg-5 col-md-12 col-sm-12 align-self-center mobile-bottom-fix-big"
      data-scroll-reveal="enter right move 30px over 0.6s after 0.4s">
    </div>
  </div>
</div>
);


export const FindsOutSection = () => (
<div class="container">
      <div class="row">
        <div class="col-lg-5 col-md-12 col-sm-12 align-self-center"
          data-scroll-reveal="enter left move 30px over 0.6s after 0.4s">
        </div>
        <div class="col-lg-1"></div>
        <div class="col-lg-6 col-md-12 col-sm-12 align-self-center mobile-top-fix">
          <div class="left-heading">
            <h2 class="section-title">Rohan finds out about InclusiLearn</h2>
          </div>
          <div class="left-text">
            <p>He finds out about this platform to support students with disabilities and their carers. This webapp aims
              to help the people in their daily needs. App matches Rohan's needs.</p>
          </div>
        </div>
      </div>
    </div>
);

export const FindsOutContinuedSection = () => (
  <div class="container">
  <div class="row2">
    <div class="col-lg-6 col-md-12 col-sm-12 align-self-center mobile-bottom-fix">
      <div class="left-heading">
        <h2 class="section-title">Rohan can easily share his life hacks with others</h2>
      </div>
      <div class="left-text">
        <p>Rohan discovered a way to write with one hand and using InclusiLearn, he can share his life hack. He can
          upload a video, or an audio or even write a paragraph about his hack. He also selects the tags to help
          others in the search. </p>
      </div>
    </div>
    <div class="col-lg-1"></div>
    <div class="col-lg-5 col-md-12 col-sm-12 align-self-center mobile-bottom-fix-big"
      data-scroll-reveal="enter right move 30px over 0.6s after 0.4s">
    </div>
  </div>
  <div class="row">
        <div class="col-lg-5 col-md-12 col-sm-12 align-self-center"
          data-scroll-reveal="enter left move 30px over 0.6s after 0.4s">
        </div>
        <div class="col-lg-1"></div>
        <div class="col-lg-6 col-md-12 col-sm-12 align-self-center mobile-top-fix">
          <div class="left-heading">
            <h2 class="section-title">Rohan can connect with like minded people</h2>
          </div>
          <div class="left-text">
            <p>Community members can connect and support each other. Roahn can now make friends along with motivating and
              helping others in his community. He no long feels alone.</p>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <div class="hr"></div>
          </div>
        </div>
      </div>
</div>
);






